let handler = async (m, {command, text, usedPrefix}) => {
    if(!text && !m.quoted) return
    console.log(usedPrefix[1]);
    let ter = usedPrefix[1].toLowerCase()
    let tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
    // m.reply(usedPrefix[1])
    m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
}
handler.customPrefix = /^(halah|hilih|huluh|heleh|holoh)$/i
handler.command = new RegExp

export default handler