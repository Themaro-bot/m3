import axios from 'axios';
import cheerio from 'cheerio';
import FormData from 'form-data';
import { fetchJson } from '../lib/scrape.js'
import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'
import { webp2png } from '../lib/webp2mp4.js'

let handler = async (m, {conn, text, usedPrefix, command})=>{
    switch (command){
        case 'brighten':
        case 'circle' :
        case 'comrade' :
        case 'contrast' :
        case 'gay' :
        case 'glass' :
        case 'greyscale' :
        case 'gun' :
        case 'hornycard' :
        case 'invert' :
        case 'jail' :
        case 'passed' :
        case 'wanted' :
        case 'wasted' : {
            let q = m.quoted ? m.quoted : m
            let mime = (q.msg || q).mimetype || ''
            if (!mime) throw `balas gambar dengan perintah\n\n${usedPrefix + command}`
            if (!/image\/(jpe?g|png|webp)/.test(mime)) throw `_*Mime ${mime} tidak didukung!*_`
            // if (!/image/.test(mime)) throw `_*Mime ${mime} tidak didukung!*_`
            m.reply('Proses...')
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
            if(command === 'hornycard') command = 'horny'
            await conn.sendFile(m.chat, `https://api.zahwazein.xyz/photoeditor/${command}?url=${upl}?v=4&apikey=keymikuzenz21`, 'photoeditor.png', '*DONE (≧ω≦)ゞ*', m)
        }break;
        // case 'petgif' :
        // case 'triggered' :{

        // }   
        
    }
}
handler.help = handler.command = ['brighten','circle','comrade','contrast','gay','glass','greyscale','gun','hornycard','invert','jail','passed','wanted','wasted']
handler.tags = ['maker']

export default handler