const isToxic = /(bilek|ban?h|🗿|cum?|knt?l|mmk|bacod|wibu|p(a)?nt(e)?k|pepe?k|owner)/i // tambahin sendiri

export async function before(m, { conn, args, usedPrefix}){
  if (m.isBaileys && m.fromMe)
    return !0
  const autoReact = isToxic.exec(m.text)
  if(autoReact){
    conn.sendMessage(m.chat, {
          react: {
            text: `${pickRandom(['😨','😅','😂','😳','😎', '🥵', '😱', '🐦', '🙄', '🐤','🗿','🐦','🤨','🥴','😐','👆','😔', '👀','👎'])}`,
            key: m.key,
          }})
  }
  return !0
}
// let handler = async (m, { conn, text }) => {

  
//   }
// handler.customPrefix = /(bilek|ban?h|🗿|cum?|knt?l|mmk|bacod|wibu|p(a)?nt(e)?k|pepe?k|owner)/i
// // handler.command = new RegExp
  
// handler.mods = false

// export default handler

  function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }
