let handler  = async (m, { conn }) => {
	
	await m.reply('[❗] WAIT, Tunggu Sebentar:v.')
}
handler.help = ['aselole']
handler.tags = ['fun']
handler.command = /^(aselole)$/i
// handler.premium = true
// handler.register = true

export default handler
