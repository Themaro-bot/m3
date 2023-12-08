const rewards = {
  exp: 50000,
  miko: 39999,
  potion: 9,
  iron: 2,
  legendary: 1,
  emas: 2,
  string: 3,
  limit: 50,
}
const cooldown = 604800000
let handler = async (m) => {
  let user = global.db.data.users[m.sender]
  if (user.lastweekly !== 0){
    if (new Date - user.lastweekly < cooldown) throw `You have already claimed this daily claim!, wait for *${((user.lastweekly + cooldown) - new Date()).toTimeString()}*`
  }
  let text = ''
  for (let reward of Object.keys(rewards)) {
    if (!(reward in user)) continue
    user[reward] += rewards[reward]
    text += `*+${rewards[reward]}* ${global.rpg.emoticon(reward)}${reward}\n`
  }    
  conn.reply(m.chat,'*––––––『 WEEKLY 』––––––*\n\n' + text.trim(), m)
  user.lastweekly = new Date * 1
}
handler.help = ['weekly']
handler.tags = ['rpg']
handler.command = /^(weekly)$/i

handler.cooldown = cooldown

export default handler