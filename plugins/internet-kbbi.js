import { kbbi } from '@bochilteam/scraper'
import { fetchJson } from '../lib/scrape.js'

let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `Example use ${usedPrefix}${command} halo`
    // const res = await kbbi(text)
    let anu = await fetchJson(`https://api.zahwazein.xyz/information/kbbi?apikey=zenzkey_84e726d5c4d0&query=${text}`)
    if(anu.status == false) return m.reply('error, tolong hubungi owner')
//     m.reply(`
// ${res.map(v => `
// *📌${v.title}*

// ${v.means.map(v => '- ' + v).join('\n`')}
// `).join('\n').trim()}

// Note:
// p = Partikel: kelas kata yang meliputi kata depan, kata sambung, kata seru, kata sandang, ucapan salam
// n = Nomina: kata benda
// `.trim())
    conn.reply(m.chat,`Title : ${anu.result.title}\n\n${anu.result.arti}`,m)
}
handler.help = ['kbbi <teks>']
handler.tags = ['internet']
handler.command = /^kbbi$/i

export default handler