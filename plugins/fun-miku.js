 import axios from 'axios'
 import { fetchJson } from '../lib/scrape.js'
 let handler = async(m, { conn, text, command, usedPrefix, noPrefix, args }) => {
     // m.reply('jao')
     let _text = (/^miku/.test(usedPrefix) ? '' : '') + noPrefix
         // console.log(_text)
     if (!_text) throw `Example : miku text`
     let _return
     let _syntax = ''
         // console.log(_text)
     let response = await axios.post(
         'https://api.simsimi.vn/v1/simtalk',
         new URLSearchParams({
             'text': encodeURIComponent(_text),
             'lc': 'id'
         })
     );
     // console.log(response.data.message)
     m.reply(response.data.message);
 }
 handler.help = ['miku']
 handler.customPrefix = /^(miku|Miku)/
 handler.command = new RegExp
 handler.tags = ['fun']

 export default handler