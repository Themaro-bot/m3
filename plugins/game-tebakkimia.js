import fetch  from "node-fetch"
import { fetchJson } from '../lib/scrape.js'
let timeout = 120000
let poin = 4999
let handler = async (m, { conn, command, usedPrefix, text }) =>{
    let imgr = flaaa.getRandom()
    // if (!text) throw `Contoh penggunaan: ${usedPrefix}math medium`
    conn.tebakkimia = conn.tebakkimia ? conn.tebakkimia : {}
    let id = m.chat
    if(id in conn.tebakkimia){
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakkimia[id][0])
        throw false
    }
    let anu = await fetchJson('https://api.lolhuman.xyz/api/tebak/unsurkimia?apikey=keymikulolhuman21')
    let res = anu.result
    const json = anu.result
    console.log(json)
    let caption = `*${command.toUpperCase()}*
${json.lambang}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Bonus: ${poin} XP
    `.trim()
    conn.tebakkimia[id] = [
        await conn.sendFile(m.chat, `${imgr + command}`, null, caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakkimia[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.nama}*`, conn.tebakkimia[id][0])
            delete conn.tebakkimia[id]
        }, timeout)
    ]
}
handler.help = ['tebakkimia']
handler.tags = ['game']
handler.command =  /^(tebakkimia)/i

export default handler