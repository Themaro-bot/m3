import fetch from 'node-fetch'
import fs from 'fs'

export async function all(m) {
  let pp = global.db.data.users[m.sender].ppuser ? global.db.data.users[m.sender].ppuser : await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://mycipongkor.com/wp-content/uploads/2022/05/Foto-profil-WA-kosong-senyum-min.jpg')
  
  let vr = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  let num = vr.getRandom()
  let stc = await fs.readFileSync('./sticker/ress' + num + '.webp')


if (m.isBaileys) return
    if (m.chat.endsWith('broadcast')) return
    try {
        if (m.mentionedJid.includes(this.user.jid) && m.isGroup) {
            await this.sendMessage(m.chat, { sticker : stc, thumbnail: await( await fetch(pp)).buffer() , contextInfo:{  externalAdReply: { showAdAttribution: true,
mediaType:  1,
mediaUrl: 'https://wa.me/6283834685279',
title: '「 ❔ 」',
body: wm,
sourceUrl: 'http://github.com/Miku21750', thumbnail: await( await fetch(pp)).buffer()
  }
 }}, { quoted: m })
          
        }
    } catch (e) {
        return
    }

                                
}
