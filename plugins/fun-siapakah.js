let handler = async (m, { conn, text, participants, command }) => {
    let member = participants.map(u => u.id)
    let target = member[Math.floor(Math.random() * member.length)]
    let jawab = `Question : ${text}\n\nAnswer : @${target.split('@')[0]}`
    conn.sendMessage(m.chat, { text: `${jawab}`, mentions: [target] }, { quoted: m })
}
handler.tags = ['fun']           
handler.help = handler.command = ['siapakah']
handler.group = true

export default handler