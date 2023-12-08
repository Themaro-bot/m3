import daily from './rpg-daily.js' 
import hourly from './rpg-hourly.js' 
import weekly from './rpg-weekly.js'
import monthly from './rpg-monthly.js'
import adventure from './rpg-adventure.js'

const inventory = {
  others: {
    health: true,
    stamina: true,
    miko: true,
    exp: true,
    limit: true,
    level: true,
  },
  items: {
    anggur : true,
    apel : true,
    ayam : true,
    ayambakar : true,
    ayamgoreng : true,
    batu :  true,
    bibitanggur : true,
    bibitapel : true,
    bibitjeruk : true,
    bibitmangga : true,
    bibitpisang : true,
    botol : true,
    coal : true,
    crystal : true,
    diamond : true,
    emas : true,
    emerald : true,
    gardenbox : true,
    gems : true,
    gold : true,
    iron : true,
    jeruk : true,
    kaleng : true,
    kardus : true,
    // kayu : true,
    makanancentaur : true,
    makanangriffin : true,
    makanankyubi : true,
    makanannaga : true,
    makananpet : true,
    makananphonix : true,
    makananserigala : true,
    mangga : true,
    pet : true,
    pisang : true,
    potion : true,
    rock : true,
    // sampah : true,
    string : true,
    trash : true,
    upgrader : true,
    wood : true,

    // babi : true,
    // babihutan : true,
    // babipanggang  : true,
    // coin  : true,
    // ikan : true,
    // ikanbakar : true,
    // jagung : true,
    // jagungbakar : true,
    // kangkung : true,
    // kubis : true,
    // labu : true,
    // lele : true,
    // lelebakar : true,
    // sapi : true,
    // sop sapi : true,
    // steak : true,

    // potion: true,
    // trash: true,
    // wood: true,
    // rock: true,
    // string: true,
    // emerald: true,
    // diamond: true,
    // gold: true,
    // iron: true,
    // upgrader: true,
    // pet: true,
  },
  durabi: {
    sworddurability: true,
    pickaxedurability: true,
    fishingroddurability: true,
    armordurability: true,
  },
  tools: {
    armor: {
      '0': '❌',
      '1': 'Leather Armor',
      '2': 'Iron Armor',
      '3': 'Gold Armor',
      '4': 'Diamond Armor',
      '5': 'Emerald Armor',
      '6': 'Crystal Armor',
      '7': 'Obsidian Armor',
      '8': 'Netherite Armor',
      '9': 'Wither Armor',
      '10': 'Dragon Armor',
      '11': 'Hacker Armor'
    },
    sword: {
      '0': '❌',
      '1': 'Wooden Sword',
      '2': 'Stone Sword',
      '3': 'Iron Sword',
      '4': 'Gold Sword',
      '5': 'Copper Sword',
      '6': 'Diamond Sword',
      '7': 'Emerald Sword',
      '8': 'Obsidian Sword',
      '9': 'Netherite Sword',
      '10': 'Samurai Slayer Green Sword',
      '11': 'Hacker Sword'
    },
    pickaxe: {
      '0': '❌',
      '1': 'Wooden Pickaxe',
      '2': 'Stone Pickaxe',
      '3': 'Iron Pickaxe',
      '4': 'Gold Pickaxe',
      '5': 'Copper Pickaxe',
      '6': 'Diamond Pickaxe',
      '7': 'Emerlad Pickaxe',
      '8': 'Crystal Pickaxe',
      '9': 'Obsidian Pickaxe',
      '10': 'Netherite Pickaxe',
      '11': 'Hacker Pickaxe'
    },
    fishingrod: true,

  },
  crates: {
    common: true,
    uncommon: true,
    mythic: true,
    legendary: true,
    // pet : true,
    // gardenbox : true,
  },
  pets: {
    horse: 10,
    cat: 10,
    fox: 10,
    dog: 10,
    centaur: 10,
    dragon: 10,
    griffin: 10,
    kyubi: 10,
    phonix: 10,
  },
  cooldowns: {
    lastclaim: {
      name: 'claim',
      time: daily.cooldown
    },
    lasthourly: {
      name: 'hourly',
      time: daily.cooldown
    },
    lastweekly: {
    	name: 'weekly',
        time: weekly.cooldown
        },
    lastmonthly: {
      name: 'monthly',
      time: monthly.cooldown
    },
    lastadventure: {
      name: 'adventure',
      time: adventure.cooldown
    }
  }
}
let handler = async (m, { conn }) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let user = global.db.data.users[who]
 
    const tools = Object.keys(inventory.tools).map(v => user[v] && `${global.rpg.emoticon(v)} ${v}: ${typeof inventory.tools[v] === 'object' ? inventory.tools[v][user[v]?.toString()] : `Level(s) ${user[v]}`}`).filter(v => v).join('\n').trim()
    const items = Object.keys(inventory.items).map(v => user[v] && `${global.rpg.emoticon(v)} ${v}: ${user[v]}`).filter(v => v).join('\n').trim()
    const dura = Object.keys(inventory.durabi).map(v => user[v] && `${global.rpg.emoticon(v)} ${v}: ${user[v]}`).filter(v => v).join('\n').trim()
    const crates = Object.keys(inventory.crates).map(v => user[v] && `${global.rpg.emoticon(v)} ${v}: ${user[v]}`).filter(v => v).join('\n').trim()
    const pets = Object.keys(inventory.pets).map(v => user[v] && `${global.rpg.emoticon(v)} ${v}: ${user[v] >= inventory.pets[v] ? 'Max Levels' : `Level(s) ${user[v]}`}`).filter(v => v).join('\n').trim()
    const cooldowns = Object.entries(inventory.cooldowns).map(([cd, { name, time }]) => cd in user && `*• ${name}*: ${new Date() - user[cd] >= time ? '✅' : '❌'}`).filter(v => v).join('\n').trim()
    const caption = `*${htki} ɪɴᴠᴇɴᴛᴏʀʏ ${htka}*\n
🧑🏻‍🏫  ɴᴀᴍᴇ: ${global.db.data.users[who].registered ? global.db.data.users[who].name : conn.getName(who)}
${Object.keys(inventory.others).map(v => user[v] && `➔ ${global.rpg.emoticon(v)} ${v}: ${user[v]}`).filter(v => v).join('\n')}${tools ? `
➔ 🎖️ role: ${user.role}

*───── ᴛᴏᴏʟs ─────*
${tools}` : ''}${dura ? `

${dura}` : ''}${items ? `


*───── ɪᴛᴇᴍs ─────*
${items}
➔ ᴛᴏᴛᴀʟ ɪᴛᴇᴍs: ${Object.keys(inventory.items).map(v => user[v]).reduce((a, b) => a + b, 0)} Items` : ''}${crates ? `


*───── ᴄʀᴀᴛᴇs ─────*
${crates}
➔ ᴛᴏᴛᴀʟ ᴄʀᴀᴛᴇs: ${Object.keys(inventory.crates).map(v => user[v]).reduce((a, b) => a + b, 0)} Crates` : ''}${pets || user.petFood ? `


*───── ᴘᴇᴛs ─────*
${pets ? pets + '\n' : ''}${user.petFood ? '🍖 ᴘᴇᴛғᴏᴏᴅ: ' + user.petFood : ''}` : ''}${cooldowns ? `

*───── ᴄᴏᴏʟᴅᴏᴡɴ ─────*
${cooldowns}` : ''}
*• dungeon:* ${user.lastdungeon == 0 ? '✅': '❌'}
*• mining:* ${user.lastmining == 0 ? '✅': '❌'}
`.trim()
  m.reply(caption)
}
handler.help = ['inventory', 'inv']
handler.tags = ['rpg']
handler.command = /^(inv(entory)?|bal(ance)?|miko|e?xp)$/i

handler.register = true
export default handler
