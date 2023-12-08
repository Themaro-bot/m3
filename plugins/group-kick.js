import { areJidsSameUser } from '@adiwajshing/baileys'
let handler = async (m, { conn,text, participants }) => {
    // let users = m.mentionedJid.filter(u => !areJidsSameUser(u, conn.user.id))
    // let kickedUser = []
    // for (let user of users)
    //     if (user.endsWith('@s.whatsapp.net') && !(participants.find(v => areJidsSameUser(v.id, user)) || { admin: true }).admin) {
    //         const res = await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
    //         kickedUser.concat(res)
    //         await delay(1 * 1000)
    //     }
    // m.reply(`Succes kick `, null,)
    let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
    await conn.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => conn.reply(m,`Succes kick `, null,)).catch((err) => m.reply(err))

}
handler.help = ['kick'].map(v => v + ' @user')
handler.tags = ['group']
handler.command = /^(kick)$/i
// handler.owner = true
handler.admin = true
handler.group = true
handler.botAdmin = true

export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
