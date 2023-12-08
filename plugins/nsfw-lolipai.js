import fs from 'fs'
let handler = async (m, {conn})=> {
    await m.reply(`*_ᴛᴜɴɢɢᴜ sᴇʙᴇɴᴛᴀʀ_*`)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = global.db.data.users[who].registered ? global.db.data.users[who].name : conn.getName(who)
let files = fs.readdirSync('./lib/database/lolipai')
    let chosenFile = files[Math.floor(Math.random() * files.length)]
    await conn.sendFile(m.chat, './lib/database/lolipai/' + chosenFile, 'nsfwlolipai.jpg', `nih`, m)
}
handler.help = ['lolipai']
handler.tags = ['nsfw']
handler.command = /^(nsfw)?lolipai$/i

handler.premium = true
handler.nsfw = true

export default handler