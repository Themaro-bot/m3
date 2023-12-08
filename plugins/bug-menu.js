import fetch from 'node-fetch'
import moment from 'moment-timezone'
let handler = async(m, { conn, text, usedPrefix, command }) => {
//let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(m.sender)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let bug = `
Hello ${name}, ${ucapan()}, I am a WhatsApp botz that comes with cool features like download tiktok, create stickers, search for songs, and much more I'm here to help you, in various ways, including sending, and etc. The available features are below

 *Databases* : ${totalreg}
 *Baileys:* Multi Device
 
If you find an error, report it immediately by typing .reports good afternoon owner of the download-ig error feature! fix it!


〆  *EMOJI SPAM* 

⚝ .🦖 <jumlah>
⚝ .🦕 <jumlah>
⚝ .👿 <jumlah>
⚝ .⚡ <jumlah>
⚝ .😈 <jumlah> 
⚝ .💥 <jumlah>
⚝ .🍂 <jumlah>
⚝ .🌪️ <jumlah>
⚝ .🔥 <jumlah>

〆 *VIRTEXT DELAY* 

⚝ .Virtext <jumlah>
⚝ .Virtext2 <jumlah>
⚝ .Virtext3 <jumlah>
⚝ .Virtext4 <jumlah>
⚝ .Virtext5 <jumlah>
⚝ .Virtext6 <jumlah>
⚝ .Virtext7 <jumlah>
⚝ .Virtext8 <jumlah>
⚝ .Virtext9 <jumlah>
⚝ .Virtext10 <jumlah>

〆 *SEND BUG EMOJI* 

⚝ .🌷 628xxx
⚝ .🐲 628xxx
⚝ .🐉 628xxx
⚝ .🌵 628xxx
⚝ .🎄 628xxx
⚝ .🌲 628xxx 
⚝ .🌳 628xxx
⚝ .🌴 628xxx
⚝ .🌱 628xxx
⚝ .🌿 628xxx
⚝ .☘️ 628xxx
⚝ .🍀 628xxx

〆 *SEND BUG TROLI* 

⚝ .Sendtrol 628xxx
⚝ .Sendtrol2 628xxx
⚝ .Sendtrol3 628xxx
⚝ .Sendtrol4 628xxx
⚝ .Sendtrol5 628xxx

〆 *SEND BUG SANTET* 

⚝ .Santet 628xxx
⚝ .Santet2 628xxx
⚝ .Santet3 628xxx
⚝ .Santet4 628xxx
⚝ .Santet5 628xxx

〆 *SEND BUG DOKUMEN* 

⚝ .Senddocu 628xxx
⚝ .Senddocu2 628xxx
⚝ .Senddocu3 628xxx
⚝ .Senddocu4 628xxx
⚝ .Senddocu5 628xxx

〆 *SEND BUG LOKASI*

⚝ .Sendlokas 628xxx
⚝ .Sendlokas2 628xxx
⚝ .Sendlokas3 628xxx
⚝ .Sendlokas4 628xxx
⚝ .Sendlokas5 628xxx

〆 *SEND BUG INVITE*

⚝ .Sendinvite 628xxx
⚝ .Sendinvite2 628xxx
⚝ .Sendinvite3 628xxx
⚝ .Sendinvite4 628xxx
⚝ .Sendinvite5 628xxx

〆 *SEND VIRUS IP / ANDRO* 

⚝ .Sendvirus  628xxx
⚝ .Sendvirus2 628xxx
⚝ .Sendvirus3 628xxx
⚝ .Sendvirus4 628xxx
⚝ .Sendvirus5 628xxx
⚝ .Sendvirus6 628xxx
⚝ .Sendvirus7 628xxx
⚝ .Sendvirus8 628xxx
⚝ .Sendvirus9 628xxx
⚝ .Sendvirus10 628xx

〆 *SEND BUG GROUP*

⚝ .🌹 12637xxx 
*Note : pakai id Group*

〆 *JADI BUG*

⚝ .Jadikatalog [❌ EROR]
⚝ .Jadijago <text>
⚝ .Jadipolling <text>
⚝ .Jaditroli <text>
⚝ .Jadilokas <text>
⚝ .Jadidarknes <text>
⚝ .Jadidocu <text>
⚝ .Jadibuginvite <text>
⚝ .Jadibugpayment <text>
⚝ .Jadibugsw <text>
⚝ .Jadibugbutton <text>
⚝ .Jadivirtext1 <text>
⚝ .Jadivirtext2 <text>
⚝ .Jadivirtext3 <text>
⚝ .Jadivirtext4 <text>
⚝ .Jadivirtext5 <text>
⚝ .Jadivirtext6 <text>
⚝ .Jadivirtext7 <text>
⚝ .Jadivirtext8 <text>
⚝ .Jadivirtext9 <text>
⚝ .Jadivirtext10 <text>

〆 *BONUS* 

⚝ .Jagoan [ reply chat target ]
⚝ .Jagoan2 [ ❌ EROR ]


  ⿻ ZYKO MD  ⿻ 
             
By : Zyko MD
YT cannel : ZykoBotz MD

*Note:* Jangan Salah Gunakan Bug Botz InI 

*Note:* Gunakan lah Bug Botz ini Dengan orang yang bersalah`
conn.sendMessage(m.chat, {
text: bug,
contextInfo: {
externalAdReply: {
title: v,
thumbnailUrl: "https://i.ibb.co/zbhmXsn/bg.jpg",
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m}) 
}
handler.help = ['bugmenu']
handler.tags = ['owner']
handler.command = /^(bugmenu)$/i

export default handler


function ucapan() {
const time = moment.tz('Asia/Jakarta').format('HH')
let res = "Sudah Dini Hari Kok Belum Tidur Kak? 🥱"
if (time >= 4) {
res = "Pagi Lord 🌄"
}
if (time >= 10) {
res = "Selamat Siang Kak ☀️"
}
if (time >= 15) {
res = "Selamat Sore Kak 🌇"
}
if (time >= 18) {
res = "Malam Kak 🌙"
}
return res
}