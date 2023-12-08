import daily from './rpg-daily.js' 
import hourly from './rpg-hourly.js' 
import weekly from './rpg-weekly.js'
import monthly from './rpg-monthly.js'
import adventure from './rpg-adventure.js'

import { xpRange } from '../lib/levelling.js'
import fetch from 'node-fetch'
import fs from 'fs'

let handler = async (m, { conn, usedPrefix }) => {
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let user = global.db.data.users[who]
	const arr_cooldown = {
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
	let { lasthourly, lastberburu, lastbansos, lastadventure, lastfishing, lastwar, lastduel, lastmining, lastdungeon, lastclaim, lastweekly, lastmonthly } = global.db.data.users[who]
	
    let healt = global.db.data.users[who].healt
    let stamina = global.db.data.users[who].stamina
    let armor = global.db.data.users[who].armor 
    let sword = global.db.data.users[who].sword
    let sdurability = global.db.data.users[who].sworddurability
    let warn = global.db.data.users[who].warn
    let tprem = global.db.data.users[who].tprem
    let pancing = global.db.data.users[who].pancing
    let fdurability = global.db.data.users[who].fishingroddurability
    let role = global.db.data.users[who].role
    let pickaxe = global.db.data.users[who].pickaxe
    let pdurability = global.db.data.users[who].pickaxedurability

    let psepick = global.db.data.users[who].psepick
    let psenjata = global.db.data.users[who].psenjata

    let ikan= global.db.data.users[who].ikan
    let nila= global.db.data.users[who].nila
    let bawal= global.db.data.users[who].bawal
    let lele= global.db.data.users[who].lele
    let udangb= global.db.data.users[who].udang

    let apel = global.db.data.users[who].apel
    let ayamg = global.db.data.users[who].ayamg
    let ayamb = global.db.data.users[who].ayamb
    let sapir = global.db.data.users[who].sapir
    let ssapi = global.db.data.users[who].ssapi
    let kayu = global.db.data.users[who].kayu
    let string = global.db.data.users[who].string
    let emas = global.db.data.users[who].emas
    let besi = global.db.data.users[who].iron
    let batu = global.db.data.users[who].batu
    let sapi = global.db.data.users[who].sapi
    let ayam = global.db.data.users[who].ayam
    let babi = global.db.data.users[who].babi
    let banteng = global.db.data.users[who].banteng
    let pet = global.db.data.users[who].pet
    let kucing = global.db.data.users[who].kucing
    let _kucing = global.db.data.users[who].anakkucing
    let rubah = global.db.data.users[who].rubah
    let _rubah = global.db.data.users[who].anakrubah
    let kuda = global.db.data.users[who].kuda
    let _kuda = global.db.data.users[who].anakkuda
    let diamond = global.db.data.users[who].diamond
    let potion = global.db.data.users[who].potion
    let common = global.db.data.users[who].common
    let makananpet = global.db.data.users[who].makananpet
    let uncommon = global.db.data.users[who].uncommon
    let mythic = global.db.data.users[who].mythic
    let legendary = global.db.data.users[who].legendary
    let level = global.db.data.users[who].level
    let miko = global.db.data.users[who].miko
    let exp = global.db.data.users[who].exp
    let atm = global.db.data.users[who].atm
    let arlok = global.db.data.users[who].arlok
    let limit = global.db.data.users[who].limit
    let glimit = global.db.data.users[who].glimit
    let sampah = global.db.data.users[who].sampah
    let { max } = xpRange(level, exp, global.multiplier)
    let name = global.db.data.users[who].registered ? global.db.data.users[who].name : conn.getName(who)
    let sortedmiko = Object.entries(global.db.data.users).sort((a, b) => b[1].miko - a[1].miko)
    let sortedgold = Object.entries(global.db.data.users).sort((a, b) => b[1].gold - a[1].gold)
    let sortedarlok = Object.entries(global.db.data.users).sort((a, b) => b[1].arlok - a[1].arlok)
    let sortedlevel = Object.entries(global.db.data.users).sort((a, b) => b[1].level - a[1].level)
    let sorteddiamond = Object.entries(global.db.data.users).sort((a, b) => b[1].diamond - a[1].diamond)
    let sortedpotion = Object.entries(global.db.data.users).sort((a, b) => b[1].potion - a[1].potion)
    let sortedsampah = Object.entries(global.db.data.users).sort((a, b) => b[1].sampah - a[1].sampah)
    let sortedcommon = Object.entries(global.db.data.users).sort((a, b) => b[1].common - a[1].common)
    let sorteduncommon = Object.entries(global.db.data.users).sort((a, b) => b[1].uncommon - a[1].uncommon)
    let sortedmythic = Object.entries(global.db.data.users).sort((a, b) => b[1].mythic - a[1].mythic)
    let sortedlegendary = Object.entries(global.db.data.users).sort((a, b) => b[1].legendary - a[1].legendary)
    let usersmiko = sortedmiko.map(v => v[0])
    let usersgold = sortedgold.map(v => v[0])
    let usersarlok = sortedarlok.map(v => v[0])
    let usersdiamond = sorteddiamond.map(v => v[0])
    let userspotion = sortedpotion.map(v => v[0])
    let userssampah = sortedsampah.map(v => v[0])
    let userslevel = sortedlevel.map(v => v[0])
    let userscommon = sortedcommon.map(v => v[0])
    let usersuncommon = sorteduncommon.map(v => v[0])
    let usersmythic = sortedmythic.map(v => v[0])
    let userslegendary = sortedlegendary.map(v => v[0])

    const cooldown = Object.entries(arr_cooldown.cooldowns).map(([cd, { name, time }]) => cd in user && `*• ${name}*: ${new Date() - user[cd] >= time ? '✅' : '❌'}`).filter(v => v).join('\n').trim()
    let pp = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Inventory'
    let str = `${cooldown ? `

    *───── ᴄᴏᴏʟᴅᴏᴡɴ ─────*
    ${cooldown}` : ''}`.trim()
//     let str = `
// *—「 🕖 Cooldown 」—*
// *Last Berburu :* ${lastberburu > 0 ? '❌' : '✅'}
// *Last Memancing :* ${lastfishing > 0 ? '❌' : '✅'}
// *Last Adventure :* ${lastadventure > 0 ? '❌' : '✅'}
// *Last Duel :* ${lastduel > 0 ? '❌' : '✅'}
// *Last War :* ${lastwar > 0 ? '❌'  : '✅'}
// *Last Dungeon :* ${lastdungeon > 0 ? '❌' : '✅'}
// *Last Mining :* ${lastmining > 0 ? '❌' : '✅'}
// *Last Bansos :* ${lastbansos > 0 ? '❌' : '✅'}
// *Last Hourly :* ${lasthourly > 0 ? '❌' : '✅'}
// *Last Claim :* ${lastclaim > 0 ? '❌' : '✅'}
// *Last Weekly :* ${lastweekly > 0 ? '❌' : '✅'}
// *Last Monthly :* ${lastmonthly > 0 ? '❌' : '✅'}
// \n${readMore}
// ⚠️ *Warn:* ${warn}
// ⛔ *Banned:* No
// `.trim()
    await conn.sendFile(m.chat, pp, null, str, m)
}
handler.help = ['cd','cooldown']
handler.tags = ['rpg']
handler.command = /^(cd|cooldown)$/i
handler.register = false
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4201)

