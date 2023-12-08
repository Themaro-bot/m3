import { fetchJson } from '../lib/scrape.js'
let handler = async (m, {conn, usedPrefix}) => {
    await m.reply(`*_ᴛᴜɴɢɢᴜ sᴇʙᴇɴᴛᴀʀ_*\n\nJika tidak muncul selama 5 menit, gunakan ${usedPrefix}cersex2, atau lapor owner`)
    let anu = await fetchJson('https://api.zahwazein.xyz/randomtext/cersex2?apikey=keymikuzenz21')
    let res = anu.result.Cerita
    conn.reply(m.chat, res, m)
}
handler.help = ['cersex2']
handler.tags = ['nsfw']
handler.command = ['cersex2']
handler.premium = true
handler.nsfw = true

export default handler