import fetch from 'node-fetch'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
let handler = async (m, { conn, text, command }) => {
if (!m.quoted) throw `Reply Image`
if(/image/.test(m.quoted.mimetype)){
    await conn.sendMessage(m.chat, {
        react: {
            text: "⏳",
            key: m.key,
        }
    })
        let dwnld = await m.quoted.download()
        let upl = await uploadImage(dwnld)
        await conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/imagetoanime?apikey=keymikulolhuman21&img=${upl}` }, caption: `${command}` }, { quoted: m })
    
}else{
    throw `Reply Image`
}
//   let response = await fetch(`https://botcahx.cyclic.app/dalle?text=${encodeURIComponent(text)}`)
//   let image = await response.arrayBuffer() 
// conn.sendFile(m.chat, image, 'image.jpg', `*Result :* ${command}`, m) 
}  
handler.help = ['ai-toanime', 'toanime','jadianime']
handler.tags = ['openai']
handler.command = /^(ai-toanime|toanime|jadianime)$/i
handler.limit = true
handler.premium = true
export default handler