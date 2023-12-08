import fetch from "node-fetch"
import { generateWAMessageFromContent } from "@adiwajshing/baileys"
import { fetchJson } from "../lib/scrape.js"

import fs from 'fs'
let handler = async (m, { conn, text }) => {
   let anu = await fetchJson(`https://api.lolhuman.xyz/api/infogempa?apikey=keymikulolhuman21`)
   if (anu.status != 200) throw ('error, mohon untuk report ke owner')
   let res = anu.result
// let res = await fetch(`https://saipulanuar.ga/api/info/gempa`)
// let data = await res.json()
// let json = data.result
let emot = `${pickRandom(['⎔', '◈▻', '✦', 'ᯬ', '⭔', '◉', '⬟', '᭻', '〆', '々', '⛥', '✗',])}`
let deteksi = `*Earthquake Details*

*${htjava}* *Waktu :* ${res.waktu}
*${htjava}* *Koordinat :* ${res.koordinat}
*${htjava}* *Magnitude :* ${res.magnitude}
*${htjava}* *Kedalaman :* ${res.kedalaman}
*${htjava}* *Potensi :* ${res.potensi}
*${htjava}* *Lokasi :* ${res.lokasi}
`
conn.sendFile(m.chat, res.map, null, deteksi, fkontak) 
}  
handler.help = ['infogempa']
handler.tags = ['info']
 handler.command = /^(infogempa|gempa)$/i
export default handler
function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }