let handler = async (m, { conn, usedPrefix: _p }) => {
  let name = global.db.data.users[m.sender].registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)
  let message = `iyah?`
  conn.reply(m.chat, message, m)
}

handler.customPrefix = /^(pp|p)$/i
handler.command = new RegExp

export default handler
