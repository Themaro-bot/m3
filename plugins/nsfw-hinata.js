let handler = async (m, { conn, usedPrefix, command }) => {
  await m.reply(`*_ᴛᴜɴɢɢᴜ sᴇʙᴇɴᴛᴀʀ_*`)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = global.db.data.users[who].registered ? global.db.data.users[who].name : conn.getName(who)
 // conn.sendButton(m.chat, `Nih *${name}*`, botdate, pickRandom(hinata), [['Next', `/hinata`]],m)
 conn.sendFile(m.chat, pickRandom(hinata), null, `Nih *${name}*`, m)
}
handler.help = ['hinata']
handler.tags = ['nsfw']
handler.command = /^(nsfw)?hinata$/i

handler.premium = true
handler.nsfw = true

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const hinata = [

        "https://i.pinimg.com/originals/80/49/a9/8049a9a90dfb9e912e54dbf66084b6c6.jpg",
        "https://i.pinimg.com/originals/57/ae/9a/57ae9a373318e844c4e5732f09e5acb8.jpg",
        "https://i.pinimg.com/736x/af/e9/07/afe907c95cc10c630088090c026c98de.jpg",
        "https://i.pinimg.com/originals/6a/85/24/6a8524919886018864976815bed45ec3.jpg",
        "https://i.pinimg.com/originals/2c/68/a2/2c68a2099526c36259b51f707e5e66f7.jpg",
        "https://i.pinimg.com/originals/63/96/df/6396df51a7249f1afc9c3765dbb8c681.png",
        "https://i.pinimg.com/736x/a0/2f/58/a02f587cce9e7788fd7ba0d59dbed961.jpg",
        "https://i.pinimg.com/originals/e1/5d/90/e15d9053995751b75c404e722ffc0360.jpg",
        "https://i.pinimg.com/736x/1f/13/77/1f1377bff37445dc26c14d5a0d426865.jpg",
        "https://i.pinimg.com/736x/82/18/70/821870e5cf585cd8ee98b08311be288d.jpg",
        "https://i.pinimg.com/originals/7b/ce/25/7bce255e224f6cc9b5d52e60ee587abb.jpg",
        "https://i.pinimg.com/736x/18/e4/67/18e467accb6b1e2a5d31f21c8b752cb7.jpg",
        "https://i.pinimg.com/474x/91/10/ba/9110bae1d8a73d6238112e2dc23ab426.jpg",
        "https://i.pinimg.com/564x/37/a9/07/37a907d88781f3607b487063c4f0417a.jpg",
        "https://i.pinimg.com/736x/ee/c0/77/eec077f90bf664a607556f7adce335ef--hinata-hyuga-naruto-uzumaki.jpg",
        "https://i.pinimg.com/564x/62/73/af/6273af3d1c432d694764fed30f608a27.jpg",
        "https://i.pinimg.com/736x/3c/7c/be/3c7cbe771ad218977b4f97eebf840c65.jpg",
        "https://i.pinimg.com/originals/ad/89/41/ad8941090beeb4037b1fde5351180286.jpg",
        "https://i.pinimg.com/564x/77/b6/dc/77b6dc779d2e6c7804a7528e53d08248.jpg",
        "https://i.pinimg.com/564x/34/91/d2/3491d241c9d7ead22a06e5863b1a9c0a.jpg",
        "https://i.pinimg.com/originals/fd/59/f8/fd59f8d699544bee9e1e5c695a1e35fd.jpg",
        "https://i.pinimg.com/736x/88/74/ee/8874eef0c6d893465f69e5ca5fa735b3.jpg",
        "https://i.pinimg.com/736x/ea/84/dd/ea84ddeab2d513058830eafe1f41f1de.jpg",
        "https://i.pinimg.com/originals/89/3d/80/893d80b8d06fbbae8a729b6b9ace11ed.gif",
        "https://i.pinimg.com/236x/c6/8b/30/c68b302cd0fe064bd733c8f972cfbf6f.jpg",
        "https://i.pinimg.com/originals/34/1c/cf/341ccf0338f7aabb7391af233ccefd2f.jpg",
        "https://i.pinimg.com/originals/cd/26/c4/cd26c48a6d6592f1344c292eea5c64c5.jpg",
        "https://i.pinimg.com/236x/cb/c2/d2/cbc2d20a3279239054fd298d77270b7a--hinata-hyuga-naruto-shippuden.jpg",
        "https://i.pinimg.com/236x/5a/87/95/5a8795b7fd8b2715ed884adeb3c0beb6.jpg",
        "https://i.pinimg.com/474x/c2/dc/75/c2dc7502c44f9a902bb3fe8affa78652.jpg",
        "https://i.pinimg.com/736x/7a/f8/c8/7af8c8bfd475eb735d4ba69b2c2ce78a.jpg",
        "https://i.pinimg.com/originals/c5/19/4b/c5194b2f763004471078ed31658c14de.png",
        "https://i.pinimg.com/564x/9d/ca/1b/9dca1be7f85146e5fabd84a1dababd33.jpg",
        "https://i.pinimg.com/474x/57/8b/aa/578baa640b8792080fe5e8fedfbe09a9--couples-anime-hinata-hyuga.jpg",
        "https://i.pinimg.com/736x/9b/4d/d6/9b4dd652b6aac16cc306933ec587d3fb.jpg",
        "https://i.pinimg.com/originals/a2/c6/56/a2c6562920a932e40d6a0bd87a2cfa7b.jpg",
        "https://i.pinimg.com/originals/6e/89/67/6e89679d6fb299f93704760b04bd2639.jpg",
        "https://i.pinimg.com/736x/21/cb/cf/21cbcfee5192fda5b65210d1eaf1ad8d.jpg",
        "https://i.pinimg.com/736x/39/7c/6d/397c6d24df6c5735731b2eb0cc105a2d.jpg",
        "https://i.pinimg.com/236x/e5/3b/94/e53b94714aa9d7593be08a06ef9d27ea.jpg",
        "https://i.pinimg.com/564x/c3/b6/19/c3b6192f14d6a73f034ab89218d38436.jpg",
        "https://i.pinimg.com/474x/34/10/8c/34108c4e30d2c91944f8db2651798cc3.jpg",
        "https://i.pinimg.com/736x/88/a9/6e/88a96ea3d17235568cba1de12c01e3a4.jpg",
        "https://i.pinimg.com/736x/75/b5/c2/75b5c22233cd8dffa113e2261f59d505.jpg",
        "https://i.pinimg.com/736x/80/58/80/8058807d01dbee3ccbfdcd185f38c6ae.jpg",
        "https://i.pinimg.com/736x/ef/55/d4/ef55d4572d154beb83edcd9c08e7f88e--hinata-hyuga-naruto-shippuden.jpg",
        "https://i.pinimg.com/736x/27/13/d2/2713d23f08386aac564141c5ea6dea77.jpg",
        "https://i.pinimg.com/736x/e4/8b/ce/e48bce223fdfceae5ab13ad1841fdb1e--naruto-and-hinata-hinata-hyuga.jpg",
        "https://i.pinimg.com/736x/3a/38/81/3a388162b3e7a986c2200729b1023cb9.jpg",
        "https://i.pinimg.com/originals/8d/ec/df/8decdfb93664ca03d9b07b56af13ea46.jpg",
        "https://i.pinimg.com/564x/03/67/77/0367770a60dca30a07629e931514560a.jpg",
        "https://i.pinimg.com/474x/c0/7f/31/c07f31fc6e57edec81c5cec7f9e42de4.jpg",
        "https://i.pinimg.com/736x/ef/82/7d/ef827d7824773a1301e85ecf5ed684e8.jpg",
        "https://i.pinimg.com/474x/69/18/c4/6918c4143ff25c409ce56b2eb20e48e2.jpg",
        "https://i.pinimg.com/474x/d5/0a/e9/d50ae9db90b4314eca3a5fe9a2a4cb2c.jpg",
        "https://i.pinimg.com/280x280_RS/8d/25/08/8d250894e582080eb99647c4457fee68.jpg",
        "https://i.pinimg.com/236x/a7/5c/05/a75c0566c2e70da3b3fdf10cee1370c1.jpg",
        "https://i.pinimg.com/736x/f1/44/36/f1443689ea39f3a35ae28a4f497b5f9d.jpg",
        "https://i.pinimg.com/originals/8c/92/10/8c9210d88d2de2d1a3d86bdda633a8b9.jpg",
        "https://i.pinimg.com/736x/24/f4/19/24f4193f178e3a28c00cba69dbf48cbd.jpg",
        "https://i.pinimg.com/474x/29/f8/33/29f833016654e5981274806c1e41a044.jpg",
        "https://i.pinimg.com/564x/e7/14/b2/e714b26e79686045a7d60c44664c828d.jpg",
        "https://i.pinimg.com/474x/4b/ff/4c/4bff4c153159d7bb659c95924dae0d05--hinata-hyuga-naruto-shippuden.jpg",
        "https://i.pinimg.com/236x/25/ed/7b/25ed7bfca7995f55bc17d61fa4048f35.jpg",
        "https://i.pinimg.com/550x/55/50/7e/55507e503d4f02c7d6c7085b83e01e0f.jpg",
        "https://i.pinimg.com/564x/2c/ee/14/2cee14d9e59cbb2c13f8c73c3d48a7c0.jpg",
        "https://i.pinimg.com/474x/93/d6/ca/93d6ca4f624126d0d0d4177891ac89c0--hinata-cosplay-cosplay-anime.jpg",
        "https://i.pinimg.com/originals/1d/d5/8a/1dd58a22dd892c30ce257c92c1e73223.png",
        "https://i.pinimg.com/originals/34/ed/ff/34edff530565fc1f60cb7e6cd59cd770.jpg",
        "https://i.pinimg.com/736x/f7/a7/92/f7a792f1376b81633e7ad8fc576c96c3--how-draw-death-note.jpg",
        "https://i.pinimg.com/736x/18/7e/fc/187efc45edd40ad2193d417eea0a2065.jpg",
        "https://i.pinimg.com/originals/ea/b9/5d/eab95d8a990253eb4220481588078be6.gif",
        "https://i.pinimg.com/736x/c1/69/b1/c169b181054528bdbec918ddbbbce24b--naruto-pics-naruto-funny.jpg",
        "https://i.pinimg.com/736x/3c/54/75/3c5475bb7d56300a6696ee77f8a668dc--hinata-hyuga-naruto-uzumaki.jpg",
        "https://i.pinimg.com/originals/05/0d/b2/050db2a6ab94d8d6b1a9ee809c4108a1.png",
        "https://i.pinimg.com/736x/d2/b3/15/d2b3152335daced3b2932efb9eb02957.jpg",
        "https://i.pinimg.com/originals/76/fe/72/76fe72934625e4fd1f993b9deca2e49b.jpg",
        "https://i.pinimg.com/736x/11/82/ef/1182ef1463a3a4d0d6d93b5a7732c444--volleyball-anime-haikyuu-.jpg",
        "https://i.pinimg.com/474x/10/e5/81/10e581a13b6d42f6b59dfb57101a4f82.jpg",
        "https://i.pinimg.com/236x/76/71/94/767194a09eb4429453297f6af50b2dc4.jpg",
        "https://i.pinimg.com/originals/f1/2d/b5/f12db5979ca15bcad2ecb29915c856a3.jpg",
        "https://i.pinimg.com/736x/09/ca/85/09ca85135074d1edfbd899b6bf69e054.jpg",
        "https://i.pinimg.com/736x/8b/11/12/8b1112bdf15dab2a91e87101e81b3ad3--naruto.jpg",
        "https://i.pinimg.com/236x/70/81/12/7081122ebf18f27b1879a413d1cb2668.jpg",
        "https://i.pinimg.com/736x/71/35/00/713500c73ab2cd69a46628685d964478.jpg",
        "https://i.pinimg.com/236x/aa/9f/d1/aa9fd14ce4a7349c40a2c787c43eed6a.jpg",
        "https://i.pinimg.com/originals/ab/a1/39/aba1397c41040b1dbf89d4a4dba9c23b.png",
        "https://i.pinimg.com/originals/ea/f0/e0/eaf0e086f5c21a1f3922e2b4b8f2c114.jpg",
        "https://i.pinimg.com/474x/0d/8b/73/0d8b73373d7be92d06241dc833ca5399.jpg",
        "https://i.pinimg.com/736x/1e/c8/47/1ec847174174cde06e02884dc4ca31b8--how-draw-backpack.jpg",
        "https://i.pinimg.com/564x/d3/35/b0/d335b070e15367c49e07466441d8084e.jpg",
        "https://i.pinimg.com/736x/7a/cb/d3/7acbd3881ca9cc2783b7aaa1c835b6a6.jpg",
        "https://i.pinimg.com/736x/31/cc/5f/31cc5fe5f38a573c2d813b11c8db43d8--hinata-hyuga-naruto-shippuden.jpg",
        "https://i.pinimg.com/originals/2a/9b/4a/2a9b4aa842e8aedbd1532fcd0fa1dadd.jpg",
        "https://i.pinimg.com/736x/0b/51/c5/0b51c5213a3bc9bd23fab205119f14f9--naruto-uzumaki-anime-naruto.jpg",
        "https://i.pinimg.com/736x/69/ed/11/69ed11998675064efbafd3624ad3211d.jpg",
        "https://i.pinimg.com/originals/83/6d/93/836d934a2c7467664ad6013fc3b93ae9.jpg",
        "https://i.pinimg.com/originals/1d/4f/73/1d4f73f5b74740e7767f1624656cf4be.jpg",
        "https://i.pinimg.com/736x/e2/1a/45/e21a45c26afcc573138ccace83decea7.jpg",
        "https://i.pinimg.com/originals/a3/e3/4c/a3e34c8ae476308041c00ef1f6fcd90c.jpg"
]