import { fetchJson } from '../lib/scrape.js'
let handler = async (m, {conn, usedPrefix}) => {
    await m.reply(`*_ᴛᴜɴɢɢᴜ sᴇʙᴇɴᴛᴀʀ_*\n\nJika tidak muncul selama 5 menit, gunakan ${usedPrefix}cersex2, atau lapor owner`)
    let anu = await fetchJson('https://api.zahwazein.xyz/randomtext/cersex?apikey=keymikuzenz21')
    let res = anu.result.Cerita
    conn.reply(m.chat, res, m)
    
}
handler.help = ['cersex']
handler.tags = ['nsfw']
handler.command = /^(cersex)$/i
export default handler