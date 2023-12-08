import cheerio from 'cheerio';
import fetch from 'node-fetch';

let handler = async (m, { conn, args, text, usedPrefix, command }) => {
  if (!text) throw 'Enter search text';
  let result = await xnxxsearch(text);
  m.reply(`
Title: ${result.title}
Info: ${result.info}
Link: ${result.link}
  `);
};
handler.help = ['xnxxsearch'].map(v => v + ' <query>')
handler.tags = ['downloader']
handler.command = /^xnxxsearch$/i;
handler.premium = true
export default handler;

async function xnxxsearch(query) {
  return new Promise((resolve, reject) => {
    const baseurl = 'https://www.xnxx.com';
    fetch(`${baseurl}/search/${query}/${Math.floor(Math.random() * 3) + 1}`, { method: 'get' })
      .then((res) => res.text())
      .then((res) => {
        let $ = cheerio.load(res, {
          xmlMode: false,
        });
        let titles = [];
        let urls = [];
        let descs = [];
        let results = [];
        $('div.mozaique').each(function (a, b) {
          $(b)
            .find('div.thumb')
            .each(function (c, d) {
              urls.push(baseurl + $(d).find('a').attr('href').replace('/THUMBNUM/', '/'));
            });
        });
        $('div.mozaique').each(function (a, b) {
          $(b)
            .find('div.thumb-under')
            .each(function (c, d) {
              descs.push($(d).find('p.metadata').text());
              $(d)
                .find('a')
                .each(function (e, f) {
                  titles.push($(f).attr('title'));
                });
            });
        });
        for (let i = 0; i < titles.length; i++) {
          results.push({
            title: titles[i],
            info: descs[i],
            link: urls[i],
          });
        }
        resolve({
          title: titles[0],
          info: descs[0],
          link: urls[0],
        });
      })
      .catch((err) => reject({ code: 503, status: false, result: err }));
  });
}