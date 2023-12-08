import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `Miku21Bot Disini (>ω<)`

let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
conn.reply(m.chat, info, m, { contextInfo: { externalAdReply: {title: global.wm, body: 'Yaw? ada apa kak?', sourceUrl: snh, thumbnail: fs.readFileSync('./thumbnail.jpg')  }}})
}
handler.customPrefix = /^(tes|miku21)$/i
handler.command = new RegExp

export default handler
