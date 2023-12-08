import { mlbb } from '../lib/scrapes.js'

let handler = async (m, { text }) => {

    // let list = ['amber','ayaka','baizhu','barbara','beidou','bennett','childe','chongyun','cyno','dainsleif','diluc','diona','fischl','ganyu','hutao','jean','kaeya','keqing','klee','lisa','mona','ningguang','noelle','qiqi','razor','sucrose','venti','xiangling','xiao','xingqiu','xinyan','zhongli']

    // if (!list.includes(text.toLowerCase())) return m.reply('🚩 *List of Chara GIs:*\n\n' + list.map(v => v).join('\n'))

    // let chara = await genshin.characters(text.toLowerCase())
    // let { name, quote, cv, description, image, city, element, weapon, rating } = chara

    // let capt = `
    // *Name:* ${name}
    // *CV:* ${cv}
    // *City:* ${city}
    // *Element:* ${element}
    // *Weapon:* ${weapon}
    // *Rating:* ${rating}
    // *Quote:* ${quote}
    // *Description:*
    // ${description}
    // `.trim()

    let anu = await mlbb(text)
    if (anu == undefined) return m.reply('tidak dapat ditemukan, coba lagi')
    await conn.sendMessage(m.chat, {
        react: {
            text: "⏳",
            key: m.key,
        }
    })

    // await conn.sendFile(m.chat, image, 'gi.jpg', capt, m)
    let role = ''
    for (var i = 0; i < anu[1].role.length; i++) {
        let txt = ' - ' + anu[1].role[i] + ' - '
        if (anu[1].role[i] == undefined) txt = ''
        role = role + txt
    }
    let desc = '\n'
    for (var i = 0; i < anu[2].length; i++) {
        let title = Object.keys(anu[2][i]);
        let val = Object.values(anu[2][i]);
        desc = desc + title + ' ' + val + '\n'
    }
    let txt = `HERO ${text} \n\n ROLE : ${role} \n\n ${desc} \n\n \n ${anu[8].desc}`
    await conn.sendMessage(m.chat, { image: { url: 'https://liquipedia.net' + anu[0].profileImage }, caption: txt }, { quoted: m })
    for (let i = 0; i < anu[5].length; i++) {
        let txtSkill = `Skill Name : ${anu[5][i]}\nAbility : ${anu[6][i]}\n\n${anu[7][i][0]}`
        await conn.sendMessage(m.chat, { image: { url: 'https://liquipedia.net' + anu[4][i].skillImage }, caption: txtSkill }, { quoted: m })
    }

}
handler.help = ['heromlbb']
handler.command = /^heromlbb|mlbb$/i
handler.tags = ['internet']
export default handler 