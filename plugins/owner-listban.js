let handler = async (m, { conn, args, command }) => {
  var capt = '*List Banned*'
  let org = []
  for (let i in global.db.data.users) {
      if (global.db.data.users[i].banned) {
          capt += `\n@${i.split('@')[0]}\nAlasan : ${global.db.data.users[i].BannedReason}`
          org.push(i)
      }
  }
  m.reply(capt, null, { mentions: org })
  //   let user = Object.entries(global.db.data.users).filter(user => user[1].banned).map(([key, value]) => {
  //     return { ...value, jid: key }
  //   })
  //   let name = 'Banned'
  // let pp = flaaa.getRandom()
  //   let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
  //   // let banned = global.db.data.users[m.sender].banned
  //   // let BannedReason = global.db.data.users[m.sender].BannedReason
  //   // let prem = global.db.data.users[m.sender].premium
  //   // let waktu = clockString(`${premTime - new Date() * 1}`)
  //   let sortedP = user
  //   let len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 10)) : Math.min(10, sortedP.length)
    
  //   let fileBuffer = Buffer.from(`${htki} *Banned* ${htka}
  // •·–––––––––––––––––––––·•
  // ${sortedP.slice(0, len).map(({ jid, name, banned, BannedReason, registered }, i) => `\n\n┌✦ ${registered ? name : conn.getName(jid)}\n┊• wa.me/${jid.split`@`[0]}\n${BannedReason}`).join`\n┗━═┅═━––––––๑`}
  // ┗━═┅═━––––––๑`.trim())
  
  //   await conn.sendFile(m.chat, pp + command, 'pp.jpg', fileBuffer, m)
    
    setTimeout(() => {
      if (db.data.chats[m.chat].deletemedia) conn.deleteMessage(m.chat, key)
    }, db.data.chats[m.chat].deletemediaTime)
  }
  
  handler.help = ['banlist [angka]']
  handler.tags = ['info']
  handler.command = /^(listban|banlist)$/i
  
  export default handler
  
  function clockString(ms) {
    let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
    let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
    let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return ['┊ ', ye, ' *Years 🗓️*\n', '┊ ', mo, ' *Month 🌙*\n', '┊ ', d, ' *Days ☀️*\n', '┊ ', h, ' *Hours 🕐*\n', '┊ ', m, ' *Minute ⏰*\n', '┊ ', s, ' *Second ⏱️*'].map(v => v.toString().padStart(2, 0)).join('')
  }
  
  function sort(property, ascending = true) {
    if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
    else return (...args) => args[ascending & 1] - args[!ascending & 1]
  }
  
  function toNumber(property, _default = 0) {
    if (property) return (a, i, b) => {
      return { ...b[i], [property]: a[property] === undefined ? _default : a[property] }
    }
    else return a => a === undefined ? _default : a
  }
  