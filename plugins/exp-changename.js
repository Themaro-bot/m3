let handler = async function  (m, { text, usedPrefix, command }) {
    if(!text) throw 'Masukan nama'
    let user = global.db.data.users[m.sender]
    let namebefore = user.name
    user.name = text
    m.reply(`sukses ganti nama dari ${namebefore} menjadi ${user.name}`)
}
handler.help = ['changename'].map(v => v + ' <nama>')
handler.tags = ['xp']
handler.command = ['changename','cn']

export default handler