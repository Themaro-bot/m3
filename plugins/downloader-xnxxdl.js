import cheerio from 'cheerio';
import fetch from 'node-fetch';

let handler = async (m, { conn, args, text, usedPrefix, command }) => {
  if (!text) throw n`Enter link Example: ${usedPrefix+command} https://www.xnxx.com/video-yj49pc2/_av_ver_2_osakaporn`
  m.reply(`hello, the video is being sent to a private chat so it doesn't harm other people, I mean let you down so you can do it alone, without inviting others'🗿 hehe`);
  let result = await xnxxdl(text);
  let caption = `
Title: ${result.title}
Info: ${result.info}
Duration: ${result.duration}
Url: ${result.URL}`
  conn.sendMessage(m.sender, { video: { url: result.files.high }, caption: caption }, { quoted: m });
await delay(5000); 
conn.reply(m.chat, `the video has been successfully sent to a private chat, enjoy it, watch it, be careful, don't col uncle, it's not good 🤭`)
}
handler.help = ['xnxxdl'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^xnxxdl$/i;
handler.premium = true
export default handler;
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function xnxxdl(URL) {
  return new Promise((resolve, reject) => {
    fetch(URL, { method: 'get' })
      .then((res) => res.text())
      .then((res) => {
        let $ = cheerio.load(res, {
          xmlMode: false,
        });
        const title = $('meta[property="og:title"]').attr('content');
        const duration = $('meta[property="og:duration"]').attr('content');
        const image = $('meta[property="og:image"]').attr('content');
        const videoType = $('meta[property="og:video:type"]').attr('content');
        const videoWidth = $('meta[property="og:video:width"]').attr('content');
        const videoHeight = $('meta[property="og:video:height"]').attr('content');
        const info = $('span.metadata').text();
        const videoScript = $('#video-player-bg > script:nth-child(6)').html();
        const files = {
          low: (videoScript.match('html5player.setVideoUrlLow\\(\'(.*?)\'\\);') || [])[1],
          high: videoScript.match('html5player.setVideoUrlHigh\\(\'(.*?)\'\\);' || [])[1],
          HLS: videoScript.match('html5player.setVideoHLS\\(\'(.*?)\'\\);' || [])[1],
          thumb: videoScript.match('html5player.setThumbUrl\\(\'(.*?)\'\\);' || [])[1],
          thumb69: videoScript.match('html5player.setThumbUrl169\\(\'(.*?)\'\\);' || [])[1],
          thumbSlide: videoScript.match('html5player.setThumbSlide\\(\'(.*?)\'\\);' || [])[1],
          thumbSlideBig: videoScript.match('html5player.setThumbSlideBig\\(\'(.*?)\'\\);' || [])[1],
        };
        resolve({
          title,
          URL,
          duration,
          image,
          videoType,
          videoWidth,
          videoHeight,
          info,
          files,
        });
      })
      .catch((err) => reject({ code: 503, status: false, result: err }));
  });
}
