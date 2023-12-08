let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return conn.reply(m.chat, `Contoh penggunaan:\n${usedPrefix + command} @6283834685279|aku siapa?|kamu ownerku ><`, m, { contextInfo: { mentionedJid: ['6283834685279@s.whatsapp.net'] } })
  let cm = copy(m)
  // let who
  let text1 = text.split('|')[1]
  let text2 = text.split('|')[2]
  let who = m.mentionedJid[0]
  if (!who) throw `Tag yang ingin difitnah. Example ${usedPrefix + command} @siapa | halo |halo`
  if (!text1) throw `Masukan pesan. Example ${usedPrefix + command} @siapa | halo |halo`
  if (!text2) throw `Masukan pesan. Example ${usedPrefix + command} @siapa | halo | halo`
  // if (text.includes('@0')) who = '0@s.whatsapp.net'
  // else if (m.isGroup) who = cm.participant = m.mentionedJid[0]
  // else who = m.chat
  // if (!who) return conn.reply(m.chat, `Contoh penggunaan:\n${usedPrefix + command} aku siapa? @6283834685279 kamu ownerku ><`, m, { contextInfo: { mentionedJid: ['6283834685279@s.whatsapp.net'] } })
  cm.key.fromMe = false
  cm.message[m.mtype] = copy(m.msg)
  // let sp = '@' + who.split`@`[0]
  // let [fake, ...real] = text.split(sp)
  conn.fakeReply(m.chat, text2, who, text1, m.isGroup ? m.chat : false, {
    contextInfo: {
      mentionedJid: conn.parseMention(text)
    }
  }) 
}
handler.help = ['fitnah <teks> @user <teks>']
handler.tags = ['fun']
handler.command = /^(fitnah|fakereply)$/

export default handler 

function copy(obj) {
  return JSON.parse(JSON.stringify(obj))
}