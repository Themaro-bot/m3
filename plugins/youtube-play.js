import { youtubeSearch, youtubedl, youtubedlv2 } from '@bochilteam/scraper'
import fetch from 'node-fetch'
import { fetchJson } from '../lib/scrape.js'
let limit = 80
let handler = async (m, { conn, command, text, usedPrefix, args, isPrems, isOwner }) => {
  if (!text) throw `🚩 Use example ${usedPrefix}${command} naruto blue bird`
  let chat = global.db.data.chats[m.chat]
  // let vid = (await youtubeSearch(text)).video[0]
  let vid = await fetchJson(`https://api.lolhuman.xyz/api/ytplay?apikey=keymikulolhuman21&query=${text}`)
  await conn.sendMessage(m.chat, {
    react: { text: "⏳", key: m.key, }
  })
  if (!vid || vid.status !== 200) throw 'Tidak di temukan, coba untuk membalikkan judul dan author nya'
  let { id, title, thumbnail, duration } = vid.result
  const url = 'https://www.youtube.com/watch?v=' + id
  let vap = `*〔 Y O U T U B E P L A Y 〕*

𝐓𝐢𝐭𝐥𝐞: ${title}
𝐔𝐫𝐥: ${url}
𝐃𝐮𝐫𝐚𝐭𝐢𝗼𝐧: ${duration}

${footer}`
  conn.sendMessage(m.chat, {
    text: vap,
    contextInfo: {
      externalAdReply: {
        title: v,
        thumbnailUrl: thumbnail,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: m })
  const { audio: _audio } = await youtubedl(url).catch(async _ => await youtubedlv2(url))
  const limitedSize = (isPrems || isOwner ? 99 : limit) * 1024
  let audio, source, res, link, lastError, isLimit
  for (let i in _audio) {
    try {
      audio = _audio[i]
      isLimit = limitedSize < audio.fileSize
      if (isLimit) continue
      link = await audio.download()
      if (link) res = await fetch(link)
      isLimit = res?.headers.get('content-length') && parseInt(res.headers.get('content-length')) < limitedSize
      if (isLimit) continue
      if (res) source = await res.arrayBuffer()
      if (source instanceof ArrayBuffer) break
    } catch (e) {
      audio = link = source = null
      lastError = e
    }
  }
  if ((!(source instanceof ArrayBuffer) || !link || !res.ok) && !isLimit) throw 'Error: ' + (lastError || 'Can\'t download audio')
  if (!isLimit) await conn.sendMessage(m.chat, {
    text: `
*${htki} YOUTUBE ${htka}*

*${htjava} Title:* ${title}
*${htjava} Type:* mp3
*${htjava} Filesize:* ${audio.fileSizeH}

${footer}`,
    contextInfo: {
      externalAdReply: {
        title: v,
        thumbnailUrl: thumbnail,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: m })
  if (!isLimit) {
    await conn.sendFile(m.chat, source, title + '.mp3', `
*${htki} YOUTUBE ${htka}*

*${htjava} Title:* ${title}
*${htjava} Type:* mp3
*${htjava} Filesize:* ${audio.fileSizeH}

*L O A D I N G. . .*
`.trim(), m, null, {
      asDocument: chat.useDocument
    })
    console.log(link)
    await conn.sendMessage(m.chat, { document: { url: link }, mimetype: 'audio/mpeg', fileName: title + '.mp3' }, { quoted: m })
  }
  // let anu = await fetchJson(`https://api.lolhuman.xyz/api/ytaudio2?apikey=keymikulolhuman21&url=${url}`)
  // // console.log(anu)
  // if (anu.status == 500) throw "Error, hubungi Owner"
  // let media = anu.result
  // const yt = await await youtubedlv2(url).catch(async _ => await youtubedl(url)).catch(e)
  // const link = await yt.audio['128kbps'].download()
  // let doc = {
  //   audio:
  //   {
  //     url: audio.link
  //   },
  //   mimetype: 'audio/mpeg', fileName: `${title}.mp3`, 
  //   // contextInfo: {
  //   //   externalAdReply: {
  //   //     // showAdAttribution: true,
  //   //     mediaType: 2,
  //   //     mediaUrl: url,
  //   //     title: title,
  //   //     // body: "© Miku21Bot (Public Botz)",
  //   //     sourceUrl: url,
  //   //     // thumbnail: await (await conn.getFile(thumbnail)).data
  //   //   }
  //   // }
  // }
  // return conn.sendMessage(m.chat, doc, { quoted: m })
}
handler.help = ['play'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
// handler.command = /^play$/i
handler.command = ['play']

handler.exp = 0
handler.limit = true
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
