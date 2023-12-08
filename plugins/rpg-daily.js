const rewards = {
  exp: 19999,
  miko: 29999,
  potion: 5,
  emas: 2,
  string: 3,
  limit: 10,
}
const cooldown = 86400000
let handler = async (m,{ conn} ) => {
  let user = global.db.data.users[m.sender]
  if( user.lastclaim !== 0){
      if (new Date - user.lastclaim < cooldown) throw `You have already claimed this daily claim!, wait for *${((user.lastclaim + cooldown) - new Date()).toTimeString()}*`
  }
  let text = ''
  for (let reward of Object.keys(rewards)) {
    if (!(reward in user)) continue
    user[reward] += rewards[reward]
    text += `*+${rewards[reward]}* ${global.rpg.emoticon(reward)}${reward}\n`
  }
    conn.reply(m.chat, '*––––––『 DAILY 』––––––*\n' + text.trim(), m)
  user.lastclaim = new Date * 1
}
handler.help = ['daily', 'claim']
handler.tags = ['xp']
handler.command = /^(daily|claim)$/i

handler.cooldown = cooldown

export default handler