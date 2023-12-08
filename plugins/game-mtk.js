import { genMath, modes } from '../lib/math.js'
let timeout = 120000
let poin = 4999
let handler = async (m, { conn, command, usedPrefix, text }) =>{
    let imgr = flaaa.getRandom()
    if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${usedPrefix}math medium`
    conn.tebakmath = conn.tebakmath ? conn.tebakmath : {}
    let id = m.chat
    if(id in conn.tebakmath){
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakmath[id][0])
        throw false
    }
    if(!Object.keys(modes).includes(text.toLowerCase())) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${usedPrefix}math medium`
    const json = await genMath(text.toLowerCase())
    let caption = `*${command.toUpperCase()}*
${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Bonus: ${poin} XP
    `.trim()
    conn.tebakmath[id] = [
        await conn.sendFile(m.chat, `${imgr + command}`, null, caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakmath[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.tebakmath[id][0])
            delete conn.tebakmath[id]
        }, timeout)
    ]
}
handler.help = ['math']
handler.tags = ['game']
handler.command =  /^((tebak)?(math|mtk))/i

export default handler