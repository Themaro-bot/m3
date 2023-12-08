import { getGroupAdmins } from '../lib/scrape.js'
let handler = async (m, { conn, participants }) => {
    if (!m.quoted) throw false
    let { chat, fromMe, isBaileys } = m.quoted
    if (m.isGroup) {
        const groupMetadata = await conn.groupMetadata(m.chat).catch(e => { })
        const participants = await groupMetadata.participants
        const groupAdmins = await getGroupAdmins(participants)
        // const botNumber = await conn.decodeJid(conn.user.id)
        // const isBotAdmins = groupAdmins.includes(botNumber)
        const isAdmins = groupAdmins.includes(m.sender)

        if (!fromMe) {
            // if (!isBotAdmins) throw `🚩 Sorry, this command is only for group *Admins*!`
            if (!isAdmins) throw `🚩 Make bot *Admin* to use this command!`
        }
        let key = {}
        try {
            key.remoteJid = m.quoted ? m.quoted.fakeObj.key.remoteJid : m.key.remoteJid
            key.fromMe = m.quoted ? m.quoted.fakeObj.key.fromMe : m.key.fromMe
            key.id = m.quoted ? m.quoted.fakeObj.key.id : m.key.id
            key.participant = m.quoted ? m.quoted.fakeObj.participant : m.key.participant
        } catch {
            m.reply('cannot delete')
        }
        conn.sendMessage(m.chat, { delete: key })

    } else {
        if (!fromMe) throw false
        if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
        
        conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
    }
    // conn.sendMessage(chat, { delete: m.quoted.vM.key })
}
handler.help = ['del', 'delete']
handler.tags = ['tools']
handler.admin = false

handler.command = /^del(ete)?$/i

export default handler