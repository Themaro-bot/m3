
import { truth } from '@bochilteam/scraper'
import fetch from 'node-fetch'
import fs from 'fs'
import moment from 'moment-timezone'

let handler = async (m, { conn, usedPrefix, __dirname, text, command }) => {
  let name = global.db.data.users[m.sender].registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)
  let ucapan = getUcapan()
  let cin = await truth()
  m.reply(`${ucapan} ${name}\n❲ *Truth* ❳\n❏ ${cin}`)
}
handler.help = ['truth']
handler.tags = ['quotes']
handler.command = /^(truth)$/i
export default handler

function getUcapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Selamat Malam"
  if (time >= 4) res = "Selamat Pagi"
  if (time >= 10) res = "Selamat Siang"
  if (time >= 15) res = "Selamat Sore"
  if (time >= 18) res = "Selamat Malam"
  return res
}
