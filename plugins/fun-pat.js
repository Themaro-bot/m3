import { sticker } from '../lib/sticker.js'
import fetch from 'node-fetch'
import MessageType from '@adiwajshing/baileys'
let handler = async (m, { conn}) => {
try {
if(m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
if(!m.mentionedJid.length) m.mentionedJid.push(m.sender)
// let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
// let user = global.db.data.users[who]
let res = await fetch('https://api.waifu.pics/sfw/pat')
let json = await res.json()
let { url } = json
console.log(url)
m.reply(`@${m.sender.split('@')[0]} patted on ${m.mentionedJid.map((user)=>(user === m.sender)? 'miku21 ': `@${user.split('@')[0]}`).join(', ')}`)
let stiker = await sticker(null, url, `${conn.getName(m.sender)} patted on ${m.mentionedJid.map((user)=>(user === m.sender)? 'miku21 ': `${conn.getName(user)}`).join(', ')}`)
conn.sendFile(m.chat, stiker, null, { asSticker: true })
} catch (e) { 
    m.reply(e)
}}
handler.command = /^(pat)$/i
export default handler