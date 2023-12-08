let handler = async (m,{conn, text, command, usedPrefix}) =>{
    if(!text) throw `Example : ${usedPrefix + command} Depin ajg`
    let say = text
    conn.sendMessage(m.chat,{text: say});
}
handler.help = ['say <teks>']
handler.tags = ['fun']
handler.command = ['say']

export default handler 