import { googleIt } from '@bochilteam/scraper'
import { fetchJson } from '../lib/scrape.js'
let handler = async (m, { conn, command, args, text }) => {
    // const fetch = (await import('node-fetch')).default
    // let full = /f$/i.test(command)
    // let text = args.join` `
    if (!text) return conn.reply(m.chat, '🚩 No text to search for', m)
    let googleMessage = ''
    let anu = await fetchJson(`https://api.lolhuman.xyz/api/gsearch?apikey=keymikulolhuman21&query=${text}`)
    for(let i = 0; i < anu.result.length; i++){
        googleMessage += `'*${anu.result[i].title}*\n_${anu.result[i].link}_\n_${anu.result[i].desc}_'\n\n`
    }
    m.reply(googleMessage)
    // let url = 'https://google.com/search?q=' + encodeURIComponent(text)
    // let search = await googleIt(text)
    // let msg = search.articles.map(({
    //     // header,
    //     title,
    //     url,
    //     description
    // }) => {
    //     return `*${title}*\n_${url}_\n_${description}_`
    // }).join('\n\n')
    // try {
    //     let ss = await (await fetch(global.API('nrtm', '/api/ssweb', { delay: 1000, url, full }))).arrayBuffer()
    //     if (/<!DOCTYPE html>/i.test(ss.toBuffer().toString())) throw ''
    //     await conn.sendFile(m.chat, ss, 'screenshot.png', url + '\n\n' + msg, m)
    // } catch (e) {
    //     m.reply(msg)
    // }
}
handler.help = ['google', 'googlef'].map(v => v + ' <pencarian>')
handler.tags = ['internet']
handler.command = /^googlef?$/i


export default handler