
let handler = async (m, { conn, usedPrefix }) => {
  var ayg = global.db.data.users[m.sender]
  var beb = global.db.data.users[global.db.data.users[m.sender].pasangan]

  if(ayg.pasangan == ""){
    return conn.reply(m.chat,`Anda tidak memiliki pasangan.`,m)
  }
  if (typeof beb == "undefined"){
    conn.reply(m.chat,`Berhasil putus hubungan dengan @${global.db.data.users[m.sender].pasangan.split('@')[0]}`,m,{contextInfo: {
      mentionedJid: [global.db.data.users[m.sender].pasangan]
    }})
    ayg.pasangan = ""
  }
  if(db.data.users[m.sender].putuspasangan == ayg.pasangan){
    conn.reply(m.chat,`Berhasil putus hubungan dengan @${global.db.data.users[m.sender].pasangan.split('@')[0]}`,m,{contextInfo: {
      mentionedJid: [global.db.data.users[m.sender].pasangan]
    }})
    ayg.pasangan = ""
    beb.pasangan = ""
  }else{
    if (m.sender == beb.pasangan){
      global.db.data.users[m.sender].putuspasangan = ayg.pasangan
      conn.reply(m.chat, `Anda baru saja mengajak @${ayg.pasangan.split('@')[0]} untuk berputus\n\nSilahkan menunggu jawaban darinya!\n\nKetik *${usedPrefix}putus @user* untuk menerima\n*${usedPrefix}tetap @user untuk menolak*`, m , { contextInfo: { mentionedJid: [ayg.pasangan]}})
    }else {
      conn.reply(m.chat,`Anda tidak memiliki pasangan.`,m)
    }
  }
}
handler.help = ['putus']
handler.tags = ['jadian']
handler.command = /^(putus)$/i
handler.group = true
handler.fail = null
export default handler
