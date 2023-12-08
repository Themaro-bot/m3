
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

  if(global.db.data.users[ayg.pasangan].putuspasangan != m.sender){
    conn.reply(m.chat,`Maaf @${ayg.pasangan.split('@')[0]} masih setia sama anda`,m,{contextInfo: {
      mentionedJid: [ayg.pasangan]
    }})
  }else{
    global.db.data.users[m.sender].putuspasangan = ""
    conn.reply(m.chat,`Anda baru saja menolak @${ayg.pasangan.split('@')[0]} untuk berputus hubungan dengan anda!. semoga tetep langgeng yah :)`,m,{contextInfo: {
      mentionedJid: [m.sender]
    }})
  }
}
handler.help = ['tetap']
handler.tags = ['jadian']
handler.command = /^(tetap)$/i
handler.group = true
handler.fail = null
export default handler
