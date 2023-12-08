import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
let handler = async (m, { conn, command})=>{
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || q.mediaType || ''
    if(!mime) throw `Reply Image`
    if (!/image/g.test(mime)) throw 'Hanya Support Gambar (Sementara)'
    let img = await q.download?.()
    let upl = await uploadImage(img)
    db.data.users[m.sender].ppuser = upl
    m.reply('Done')
}
handler.tags = ['exp']
handler.command = ['changeppprofile']
handler.help = ['changeppprofile']

handler.premium = true

export default handler