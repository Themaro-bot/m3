import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = global.db.data.users[who].registered ? global.db.data.users[who].name : conn.getName(who)

let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp;Miku21\nNICKNAME:👑 Owner Miku21\nORG:Miku21\nTITLE:soft\nitem1.TEL;waid=6283834685279:+62 838-3468-5279\nitem1.X-ABLabel:📞 Nomor Owner\nitem2.URL:https://miku21750.github.io\nitem2.X-ABLabel:💬 More\nitem3.EMAIL;type=INTERNET:mikucomunity21@gmail.com\nitem3.X-ABLabel:💌 Mail Owner Miku21\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel:📍 Lokasi Saya\nBDAY;value=date:🐦 21-12-2004\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: global.fkontak })
let caption = `👋 Hai *@${who.split("@")[0]}*, Nih Owner *Miku* kak`
    await conn.reply(m.chat, caption, tag_own, { mentions: conn.parseMention(caption) })

}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|pengembang|creator)$/i

export default handler