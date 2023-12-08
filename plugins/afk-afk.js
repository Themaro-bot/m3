let handler = async (m, { text }) => {
    let user = global.db.data.users[m.sender]
    user.afk = + new Date
    user.afkReason = text
    m.reply(`
  ${global.db.data.users[m.sender].registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)} is now AFK${text ? ': ' + text : ''}
  `)
}
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^afk$/i

export default handler