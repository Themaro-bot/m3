import { fetchJson } from '../lib/scrape.js'
let handler = async (m, { conn }) => {
conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/sticker/dadu?apikey=keymikulolhuman21', 'dadu.webp', '', m)
}
handler.help = ['dadu']
handler.tags = ['game']
handler.command = ['dadu'] 
export default handler
