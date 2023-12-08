import similarity from 'similarity'
const threshold = 0.72 
export async function before(m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text )
        return !0
    this.tebakmath = this.tebakmath ? this.tebakmath : {}
    if (!(id in this.tebakmath))
        return !0
    if (m.quoted.id == this.tebakmath[id][0].id) {
        let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
        if (isSurrender) {
            clearTimeout(this.tebakmath[id][3])
            delete this.tebakmath[id]
            return conn.reply(m.chat, '*Yah Menyerah :( !*', m)
        }
        let json = JSON.parse(JSON.stringify(this.tebakmath[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toString() == json.jawaban.toString()) {
            global.db.data.users[m.sender].exp += this.tebakmath[id][2]
            conn.reply(m.chat, `*Benar!*\n+${this.tebakmath[id][2]} XP`, m)
            clearTimeout(this.tebakmath[id][3])
            delete this.tebakmath[id]
        } else if (similarity(m.text.toString(), json.jawaban.toString().trim()) >= threshold)
            m.reply(`*Dikit Lagi!*`)
        else
            conn.reply(m.chat, `*Salah!*`, m)
    }
    return !0
}
export const exp = 0