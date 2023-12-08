const xpperlimit = 1
let handler = async (m, { conn, text, args,command }) => {
	let user = global.db.data.users[m.sender]
  let count = text.replace(/^nabung/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].miko / 1) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (user.atm == 0) return m.reply('kamu belum mempuyai atm !')
  if (user.bank > user.fullatm) return m.reply('Uang dibankmu sudah penuh!')
  if (count > user.fullatm - user.bank) return m.reply('Uangnya ga muat dibank')
  if (global.db.data.users[m.sender].miko >= xpperlimit * count) {
    global.db.data.users[m.sender].miko -= xpperlimit * count
    global.db.data.users[m.sender].bank += count
    conn.reply(m.chat, `Sukses menabung sebesar ${count} miko 💹`, m)
  } else conn.reply(m.chat, `[❗] Uang anda tidak mencukupi untuk menabung ${count} miko 💹`, m)
}
handler.help = ['nabung'].map(v => v + ' <jumlah>')
handler.tags = ['rpg']
handler.command = /^nabung([0-9]+)|nabung|nabungall$/i

export default handler