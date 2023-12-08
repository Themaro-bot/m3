import PhoneNumber from 'awesome-phonenumber'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'

let handler = async (m, { conn, args, fromMe, usedPrefix, command }) => {
let user = db.data.users[m.sender]
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let { exp, limit, level, role, miko, lastclaim, lastweekly, registered, regTime, premium, age, banned, pasangan, ppuser } = global.db.data.users[who]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = global.db.data.users[who].registered ? global.db.data.users[who].name : conn.getName(who)
    if (typeof global.db.data.users[who] == "undefined") {
      global.db.data.users[who] = {
        exp: 0,
        limit: 10,
        lastclaim: 0,
        registered: false,
        name: conn.getName(who),
        age: -1,
        regTime: -1,
        afk: -1,
        afkReason: '',
        banned: false,
        level: 0,
        lastweekly: 0,
        role: 'Warrior V',
        autolevelup: false,
        miko: 0,
        pasangan: "",
      }
    }
    let pp = 'https://mycipongkor.com/wp-content/uploads/2022/05/Foto-profil-WA-kosong-senyum-min.jpg'
    try {
        pp = global.db.data.users[who].ppuser ? global.db.data.users[who].ppuser : conn.profilePictureUrl(who, 'image').catch(_ => 'https://mycipongkor.com/wp-content/uploads/2022/05/Foto-profil-WA-kosong-senyum-min.jpg')
      } catch (e) {
        pp = 'https://mycipongkor.com/wp-content/uploads/2022/05/Foto-profil-WA-kosong-senyum-min.jpg';
      }
      console.log(pp)
    // let pp = ppuser ? ppuser : await conn.profilePictureUrl(who).catch(_ => 'https://mycipongkor.com/wp-content/uploads/2022/05/Foto-profil-WA-kosong-senyum-min.jpg')
     let math = max - xp
     let txtpasangan = "Anime"
     let menst = []
     menst += who;
     if(pasangan !== undefined){
        if(pasangan !== null){
          if(pasangan !== ""){
            txtpasangan = `@${pasangan.split("@")[0]}`
            menst += pasangan
          }
        }
     }
     console.log(menst);
let caption = `*YOUR PROFILE*
*🏷️ Nama:* *(${conn.getName(who)})* ${registered ? '(' + name + ') ' : ''} ( @${who.split("@")[0]} )
*❤️ Pasangan:*  ${txtpasangan}
*💲 MIKO:*  ${miko}
*📧 Tag:* @${who.replace(/@.+/, '')}
*📞 Number:* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
*🔗 Link:* https://wa.me/${who.split`@`[0]}
*🎨 Age:* ${registered ? age : ''}
${readMore}
*🏆 Level* ${level}
*🎋 Role:* ${role}
*🧬 XP:* TOTAL ${exp} (${exp - min} / ${xp}) [${math <= 0 ? `Siap untuk *${usedPrefix}levelup*` : `${math} XP lagi untuk levelup`}]
*🌟 Premium:* ${premium ? "✅" :"❌"}
*⏰ PremiumTime:* 
${clockString(user.premiumTime - ((new Date() * 1) - user.premiumDate))}
*📨 Terdaftar:* ${registered ? 'Ya (' + new Date(regTime).toLocaleString() + ')' : 'Tidak'} ${lastclaim > 0 ? '\n*⏱️Terakhir Klaim:* ' + new Date(lastclaim).toLocaleString() : ''}\n\n Ketik ${usedPrefix}inv untuk melihat Inventory RPG`
// await conn.sendFile(m.chat, pp, 'image.jpg', caption, { mentions: conn.parseMention(caption) })
await conn.sendMessage(m.chat, { image: { url: pp }, caption: caption, mentions: conn.parseMention(caption) }, { quoted: m })
}

handler.help = ['profile'].map(v => v + ' <url>')
handler.tags = ['rpg', 'exp']

handler.command = /^(pro(fil)?(file)?|pp)$/i

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' *Days ☀️*\n ', h, ' *Hours 🕐*\n ', m, ' *Minute ⏰*\n ', s, ' *Second ⏱️* '].map(v => v.toString().padStart(2, 0)).join('')
}
