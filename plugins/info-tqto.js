import fetch from 'node-fetch'
let handler = async (m, { conn, args, participants, text, usedPrefix, command }) => {
let tqto = `
*My Project:* 21 𝐷𝑒𝑠𝑒𝑚𝑏𝑒𝑟 2022
*Name:* ${global.nameown}
*Contact:* wa.me/${global.nomorown}

sc : https://github.com/Miku21750/Miku21Bot-v2

⫹❰⫺ BiG Thanks To ⫹❱⫺
⭝ Tuhan Yang Maha Esa
⭝ Orang Tua
⭝ Teman Gw
⭝ Pacar Gw Koishi Komeiji

⫹⫺ The Name That Helped me ⫹⫺ 
⸔⸔⸔⸔⸔⸔⸔⸔⸔⸔⸔⸔⸔⸔⸔⸔⸔⸔⸔⸔
⭝ ZYKO MD
⭝ Aldi Lesmana
⭝ Wh Mods Dev
⭝ XTRAM-TEAM`
conn.sendMessage(m.chat, {
text: tqto,
contextInfo: {
externalAdReply: {
title: v,
thumbnailUrl: zykomd,
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
} 
handler.help = ['tqto']
handler.tags = ['main','info']
handler.command = /^(credits|credit|tqto)$/i
export default handler
