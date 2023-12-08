import { areJidsSameUser } from '@adiwajshing/baileys'
let handler = async (m, { conn,text, participants }) => {
    // let users = m.mentionedJid.filter(u => !areJidsSameUser(u, conn.user.id))
    //  let user = m.mentionedJid && m.mentionedJid[0]
    //         await conn.groupParticipantsUpdate(m.chat, [user], 'demote')
        
    // m.reply('Succes')
    let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
    await conn.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply('Success')).catch((err) => console.log(err))

}
handler.help = ['demote @tag']
handler.tags = ['group']
handler.command = /^(demote)$/i

handler.admin = true
handler.group = true
handler.botAdmin = true

export default handler