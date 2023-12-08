import { areJidsSameUser } from '@adiwajshing/baileys'
let handler = async (m, { conn,text, participants }) => {
    // let users = m.mentionedJid.filter(u => !areJidsSameUser(u, conn.user.id))
    // let promoteUser = []
    // for (let user of users)
    //     if (user.endsWith('@s.whatsapp.net') && !(participants.find(v => areJidsSameUser(v.id, user)) || { admin: true }).admin) {
    //         const res = await conn.groupParticipantsUpdate(m.chat, [user], 'promote')
    //         await delay(1 * 1000)
    //     }
    // m.reply('Succes')
    let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
    await conn.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply('Success')).catch((err) => m.reply(err))

}
handler.help = ['promote @tag']
handler.tags = ['group']
handler.command = /^(promote)$/i

handler.admin = true
handler.group = true
handler.botAdmin = true

export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))