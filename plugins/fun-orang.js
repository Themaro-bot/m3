let handler = async (m, { conn, args, participants, text, usedPrefix, command }) =>{
    switch(command){
        case 'watak':{
            if (!text) throw `Example : ${usedPrefix + command} Nandog`
            let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
            var watak = text
            var wa = ["penyayang", "pemurah", "Pemarah", "Pemaaf", "Penurut","berotak senku","dongo", "Baik", "baperan", "Baik Hati", "penyabar", "Uwu", "top deh, pokoknya", "Suka Membantu", "alay", "jamet", "furry", "satir", "hornian", "stres", "horny"]
            const tak = wa[Math.floor(Math.random() * wa.length)]
            conn.sendMessage(m.chat, { text: 'Pertanyaan : *' + command + ' '+ text + '*\nNama : ' + `@${who.split('@')[0]}` + '\nJawaban : ' + tak, mentions: [who] }, { quoted: m })
        }
        break;
        case 'hobby': case 'hobi': case 'hobbi': case 'hoby':{
            if (!text) throw `Example : ${prefix + command} Nandog`
            let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
            var hobby = text
            var hob = ["ngeue sapi", "ngeue kambing", "Memasak", "Membantu Atok","main ep ep","ngabisin uang", "jilatin gambar anime", "cium layar hp", "nonton hentai", "Mabar", "Nobar", "Sosmed an", "Membantu Orang lain", "Nonton Anime", "Nonton Drakor", "Naik Motor", "Nyanyi", "Menari", "Bertumbuk", "Menggambar", "Foto fotoan Ga jelas", "Maen Game", "Berbicara Sendiri"]
            const by = hob[Math.floor(Math.random() * hob.length)]
            conn.sendMessage(m.chat, { text: 'Pertanyaan : *' + command + ' '+ text +'*\nNama : ' + `@${who.split('@')[0]}` + '\nJawaban : ' + by, mentions: [who] }, { quoted: m })
        }
        break;
    }
}
handler.tags = ['fun']
handler.help = handler.command = ['watak','hobby','hobi','hobbi','hoby']
export default handler