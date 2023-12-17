// • By Zyko-MD

import fetch from 'node-fetch'
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({ apiKey: `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` }); 
const openai = new OpenAIApi(configuration);
let handler = async (m, { conn, text, command, args }) => {
  
if (!text) throw `Membuat gambar dari AI.\n\nContoh:\n${command} Wooden house on snow mountain`

  // let response = await fetch(`https://botcahx.cyclic.app/dalle?text=${encodeURIComponent(text)}`)
  // let image = await response.arrayBuffer() 
  let response = await openai.createImage({
      prompt: text,
      n: 1,
      size: "1024x1024",
    });
conn.sendFile(m.chat, response.data.data[0].url, 'image.jpg', `*Result :* ${command}`, m) 
}  
handler.help = ['ai-image', 'aidraw']
handler.tags = ['openai']
handler.command = /^(ai-image|aidraw)$/i
handler.limit = false
export default handler