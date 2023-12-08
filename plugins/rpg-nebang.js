let handler = async (m, { 
conn, usedPrefix
}) => {

    let user = global.db.data.users[m.sender]
    let __timers = (new Date - user.lastlumber)
    let _timers = (900000 - __timers)
    let timers = clockString(_timers) 
    let penebang = global.db.data.users[m.sender].registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)
    
    if (user.stamina < 20) return m.reply(`Stamina anda tidak cukup\nharap isi stamina anda dengan *${usedPrefix}eat`)
    if (user.lastlumber !== 0){
      if (new Date - user.lastlumber < 900000) throw m.reply(`Kamu masih kelelahan\nHarap tunggu ${timers} lagi`)
    }
    
    let rndm1 = `${Math.floor(Math.random() * 3)}`
		let rndm2 = `${Math.floor(Math.random() * 3000)}`
		let rndm3 = `${Math.floor(Math.random() * 300)}`
.trim()

let ran1 = (rndm1 * 10)
let ran2 = (rndm2 * 10)
let ran3 = (rndm3 * 10)

let hmsil1 = `${ran1}`
let hmsil2 = `${ran2}`
let hmsil3 = `${ran3}`

let jln = `
🚶⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🌳🏘️🌳🌳  🌳 🏘️ 🌳🌳🌳

✔️ ${penebang} Mencari area....
`

let jln2 = `
⬛⬛⬛⬛⬛⬛🚶⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🌳🏘️🌳🌳  🌳 🏘️ 🌳🌳🌳

➕ ${penebang} Hampir sampai....
`

let jln3 = `
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛🚶
🌳🏘️🌳🌳  🌳 🏘️ 🌳🌳🌳

➕ ${penebang} Mulai menebang....
`

let jln4 = `
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏘️ 🏘️ 🚶

➕ ${penebang}
💹 Menerima hasil....
`

let hsl = `
*《 Hasil Nebang ${penebang} 》*

 *🌳 = [ ${hmsil1} ] Kayu*
 *💹 = [ ${hmsil2} ] miko*
 *✉️ = [ ${hmsil3} ] exp*
 
 Stamina anda berkurang -20
`

user.axedurability -= 5
user.stamina -= 20
user.miko += ran2
user.wood += ran1
user.exp += ran3
	
setTimeout(() => {
                     conn.reply(m.chat, hsl, m)
                     }, 27000) 
               
                     setTimeout(() => {
                     conn.reply(m.chat, jln4, m)
                      }, 25000)
                
                     setTimeout(() => {
                     conn.reply(m.chat, jln3, m)
                     }, 20000) 
                        
                     setTimeout(() => {
                     conn.reply(m.chat, jln2, m)
                     }, 15000) 
                    
                     setTimeout(() => {
                     conn.reply(m.chat, jln, m)
                     }, 10000) 
                     
                     setTimeout(() => {
                     conn.reply(m.chat, `🔍 ${penebang} Mencari Area nebang.....`, m)
                     }, 0) 
  user.lastlumber = new Date * 1
}
handler.help = ['nebang']
handler.tags = ['rpg']
handler.command = /^(nebang|menebang)$/i
handler.group = true
export default handler

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return ['\n' + d, ' *Days ☀️*\n ', h, ' *Hours 🕐*\n ', m, ' *Minute ⏰*\n ', s, ' *Second ⏱️* '].map(v => v.toString().padStart(2, 0)).join('')
}
