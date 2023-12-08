import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'
import { webp2png } from '../lib/webp2mp4.js'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    let [atas, bawah] = text.split`|`
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) throw `balas gambar dengan perintah\n\n${usedPrefix + command} <${atas ? atas : 'teks atas'}>|<${bawah ? bawah : 'teks bawah'}>`
    if (!/image\/(jpe?g|png|webp)/.test(mime)) throw `_*Mime ${mime} tidak didukung!*_`
    // if (!/image/.test(mime)) throw `_*Mime ${mime} tidak didukung!*_`
    let img = await q.download()
    let upl;
    if(/image\/(webp)/.test(mime)){
        var media = img
        upl = await webp2png(media).catch(_ => null) || Buffer.alloc(0)
        // var str = linkpng.toString('base64')
        // img = Buffer.from(str, 'base64')
    }else{
        upl = await uploadImage(img)
    }
    // console.log(img)
    // console.log(url); 
    let meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas ? atas : '')}/${encodeURIComponent(bawah ? bawah : '')}.png?background=${upl}`
    let stiker = await sticker(false, meme, global.packname, global.author)
    if (stiker) await conn.sendFile(m.chat, stiker, '', author, m, '', { asSticker: 1 })
}
handler.help = ['smeme <teks atas>|<teks bawah>']
handler.tags = ['sticker']
handler.command = /^(smeme)$/i

handler.limit = true

export default handler