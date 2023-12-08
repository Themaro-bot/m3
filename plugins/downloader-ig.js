import fetch from 'node-fetch'
import moment from 'moment-timezone'
import { fetchJson } from '../lib/scrape.js'

let handler = async (m, { conn, usedPrefix, args, command, text }) => {
  if (!args[0]) throw `🚩 *Example:* ${usedPrefix+command} https://www.instagram.com/reel/Co18PSBAmkh/?igshid=MmJiY2I4NDBkZg==`
conn.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}}) 
  // let res = await fetch(`https://api.neoxr.my.id/api/ig?url=${args[0]}&apikey=${api}`)
  // if (res.status != 200) throw `Terjadi kesalahan. Status: ${res.status}`
  // let json = await res.json()
  if (/(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/.test(text)) {
    let anu = await fetchJson(`https://api.lolhuman.xyz/api/instagram?apikey=keymikulolhuman21&url=${text}`)
    if (anu.status != 200) return 'Link tidak dapat didownload, coba lagi'
    // for (let media of anu.result.media) hisoka.sendFileUrl(m.chat, media, `Download Url Instagram From ${isUrl(text)[0]}`, m)
    for (let media of anu.result) conn.sendFile(m.chat, media, 'instagram.mp4', footer, m)
}

}
handler.help = ['igdl', 'instagram']
handler.tags = ['downloader']
handler.command = /^(igdl|instagram|ig)$/i
handler.limit = true
export default handler