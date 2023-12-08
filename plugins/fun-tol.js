let handler = async (m, { conn, command, text }) => {
	
    if (!text) return conn.reply(m.chat, 'Ketik Namanya Tolol!', m)
	
  conn.reply(m.chat, `
╭━━━━°「 *Kontol ${text}* 」°
┃
┊• Nama : ${text}
┃• Kntl : ${pickRandom(['ih item','Belang wkwk','Muluss','Putih Mulus','Black Doff','Pink wow','Item Glossy'])}
┊• Kondisi : ${pickRandom(['perjaka','ga perjaka','udah pernah jebolin anak orang','bau','wangi','jadi korban tante tante'])}
┃• Jembut : ${pickRandom(['lebat','ada sedikit','gada jembut','tipis','muluss'])}
┃• Panjang : ${(10).getRandom()} ${['mm','cm','inci','meter','km'].getRandom()}
╰═┅═━––––––๑
`.trim(), m)
}
handler.help = ['cekkontol <nama>']
handler.tags = ['fun']
handler.command = /^cekkontol/i

export default handler 

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
