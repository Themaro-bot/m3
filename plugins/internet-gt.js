import { guardiantales } from "../lib/scrapes.js";

let handler = async (m, { conn, text, command})=>{
    if(!text) throw `Ketik karakter yang ingin diubah`
    let gt = await guardiantales(text)
    conn.reply(m.chat, gt.name, m)
}
handler.help = ['guardiantales']
handler.tags = ['internet']
handler.command = ['gt','guardiantales']

export default handler