//buatan zyko-md, jgn hapus atuh 😊
let handler = async (m, { conn, usedPrefix, command }) => {
  await m.reply(`*_ᴛᴜɴɢɢᴜ sᴇʙᴇɴᴛᴀʀ_*`)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = global.db.data.users[who].registered ? global.db.data.users[who].name : conn.getName(who)
conn.sendFile(m.chat, pickRandom(animeass), null, `Nih *${name}*`, m)
//  conn.sendButton(m.chat, `Nih *${name}*`, botdate, pickRandom(animeass), [['Next', `/animeass`]],m)
}
handler.help = ['animeass']
handler.tags = ['nsfw']
handler.command = /^(nsfw)?(anime)?ass$/i
handler.premium = true
handler.nsfw = true

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const animeass = [

   "https://media.discordapp.net/attachments/530635618003451904/683209653261303808/yande.re_613351_sample_ass_azur_lane_cameltoe_damao_yu_feet_pantsu_stockings_taihou_azur_lane_thighh.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/683209648664215585/yande.re_612976_sample_4min_ass_azur_lane_cameltoe_dido_azur_lane_erect_nipples_maid_no_bra_pantsu_s.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/683209646592360448/yande.re_612245_sample_animal_ears_ass_chita_ketchup_dress_nekomimi_pantsu_skirt_lift_tail_thighhigh.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/683209641865510953/yande.re_609551_sample_ass_breasts_censored_cosplay_cum_dress_kagami_masara_kkkk12103_nipples_no_bra.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/683076919494836254/021bcgzcnqj41.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/683049635052257371/uhuw5wk9koj41.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/682664131551166516/sample_2a3583974d06d7cdb2879b3704483e49afca1e04.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/682376635600863297/I6KHKiN_d.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/682376627853852729/czUyMXO_d.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/682376348500623390/xivk9in35hh41.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/682011009254424656/o86kietucri41.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/681926896254058761/1rf2m.png",
    "https://media.discordapp.net/attachments/530635618003451904/681790372628004874/ec32416771771cea8a46f077c62fe174.png",
    "https://media.discordapp.net/attachments/530635618003451904/681718857714368585/NV0K3vI_d.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/681501982216814617/w14gz2qk8vi41.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/680513877083160606/se17yezz5ci41.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/680164098704670787/a50311b.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/680058123117002762/z1zzuncdhyh41.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/679872747211587584/9cb04e3.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/679408491005214750/K0aqful_d.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/679408490799955973/SVF1RCC_d.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/678945529714966528/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/678944005433720835/4cwyar9q9ch41.png",
    "https://media.discordapp.net/attachments/530635618003451904/678731683771711519/7a720f4.png",
    "https://media.discordapp.net/attachments/530635618003451904/678731683494756352/427c8bd.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/678731683104555039/a21043d.png",
    "https://media.discordapp.net/attachments/530635618003451904/678731682257436682/7e5de87.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/674661587642220554/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/674531741607788544/3bad222.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/670305766011306014/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/669517376601194506/147263102711.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/668921119612600320/8c59c403a79d7a93c43dde5420ee2f32-1.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/668534985493315593/71265348_p0_master1200.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/668492258626109450/tfb6JtD.png",
    "https://media.discordapp.net/attachments/530635618003451904/668074277848875025/75054880_p0_master1200.png",
    "https://media.discordapp.net/attachments/530635618003451904/667324677143789571/51828042_p0_master1200.png",
    "https://media.discordapp.net/attachments/530635618003451904/666773669393203204/image3.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/666773668940087324/image1.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/666677930122018816/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/666442962393235476/8b3edf6.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/666063929889390592/image1.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/665995519398772747/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/665989868773441558/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/665966830917255229/image1.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/665656877966819363/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/665555056480878592/77179757_p0_master1200.png",
    "https://media.discordapp.net/attachments/530635618003451904/664651543630446602/Ass_Hentai_2.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/664651508843020337/Ass_Hentai_4.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/664611487800885297/image3.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/664611487335186453/image2.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/664611487335186452/image1.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/664504965666045964/63621044_p0_master1200.png",
    "https://media.discordapp.net/attachments/530635618003451904/664495931634352128/78472811_p0_master1200.png",
    "https://media.discordapp.net/attachments/530635618003451904/664470296979570688/78414823_p0_master1200.png",
    "https://media.discordapp.net/attachments/530635618003451904/662609030912540682/IMG_20200103_115007.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/660970365584932869/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/659410834728026122/bb84ff3.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/658968417923235842/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/657016709387124747/509a7f2.png",
    "https://media.discordapp.net/attachments/530635618003451904/656535440756834337/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/656245127186087949/image2.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/656245126162808865/image1.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/656242667180785704/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/656014775070883850/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/655967462113673226/9673dff.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/655960073234808852/image1.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/655614002189303839/image4.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/655614001006247943/image2.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/655459338437001236/image3.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/655459337699065856/image1.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/655459337271115776/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/655334662763446272/image8.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/655334662037700608/image6.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/655334661458755584/image4.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/655334660947312650/image2.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/655334660410310667/image1.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/654371061193768996/7701640.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/651117615397339181/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/651107236386701315/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/651103042778955780/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/650210253048381481/Anime-Musashi-28Kantai-Collection29-Kantai-Collection-Damao-YU-5583661.png",
    "https://media.discordapp.net/attachments/530635618003451904/645976442668187659/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/645976353878966278/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/644296052991721502/3ed2192.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/643475925073264640/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/643475746387394570/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/643415157304983574/oGNHa20g.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/641680793017778177/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/641680709198807042/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/641679582327734272/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/641163798648061972/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/641153902733164574/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/641149253854429194/image0.png",
    "https://media.discordapp.net/attachments/530635618003451904/641146964981055500/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/641146910295588905/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/641146900942422017/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/640706885242191872/54f4c1f.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/639759248938631188/thicc-test-1524027_01DRJN1D71Z2V661MCAZHG9815.640x0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/639267405431832576/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/639260355465445387/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/639246684098134037/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/639101408892813332/ab481d843e8c8970d89e6aef990a48796202596d.png",
    "https://media.discordapp.net/attachments/530635618003451904/638470198764109837/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/638430850064842762/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/638429542205358081/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/638429508327702528/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/638182368858996776/3c2583.png",
    "https://media.discordapp.net/attachments/530635618003451904/638103647015927809/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/638103575129620530/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/637878174000087045/image0.jpg",
    "https://media.discordapp.net/attachments/530635618003451904/637295053307641886/image0.jpg",
    "https://konachan.com/sample/1155676c3d40044e9e68cc8c5a8a70e1/Konachan.com%20-%20316708%20sample.jpg",
    "https://konachan.com/sample/d7b1e0f18c3dd52e5698f09ff088255c/Konachan.com%20-%20316687%20sample.jpg",
    "https://konachan.com/sample/5cd6c58baa80681607bd5ae43071f6d2/Konachan.com%20-%20316669%20sample.jpg",
    "https://konachan.com/sample/09fbd31d111262526f98cdd691bc14e1/Konachan.com%20-%20316638%20sample.jpg",
    "https://konachan.com/sample/52730995ccd5136bb6c8524ab7363396/Konachan.com%20-%20316634%20sample.jpg",
    "https://konachan.com/sample/747b76bfb23f7903019da58fb09bea9b/Konachan.com%20-%20316633%20sample.jpg",
    "https://konachan.com/sample/f42af31763ede31e6ed3a5e2b40436e9/Konachan.com%20-%20316632%20sample.jpg",
    "https://konachan.com/sample/b069dbe72d0b4c459ff4ba4aa754f213/Konachan.com%20-%20316618%20sample.jpg",
    "https://konachan.com/sample/0f76bc626106913a8082450826a63a94/Konachan.com%20-%20316609%20sample.jpg",
    "https://konachan.com/sample/3a01a6e8a99193e777cfe76663707f67/Konachan.com%20-%20316606%20sample.jpg",
    "https://konachan.com/sample/143c3a759456379a818b87c4deb22b44/Konachan.com%20-%20316604%20sample.jpg",
    "https://konachan.com/image/acd0838908ceb16928c02c52819f3c1a/Konachan.com%20-%20316588%20anthropomorphism%20anus%20ass%20ayanami_%28azur_lane%29%20azur_lane%20brown_eyes%20cropped%20dark%20gray_hair%20ponytail%20pussy%20rodriguez_%28kamwing%29%20skirt%20uncensored.jpg",
    "https://konachan.com/sample/2c98a66d2999c0b3e3febc2fadb73263/Konachan.com%20-%20316587%20sample.jpg",
    "https://konachan.com/jpeg/07f957a15776d3a2b62f66fd26035e35/Konachan.com%20-%20316583%20anthropomorphism%20ass%20brown_hair%20etsunami_kumita%20gun%20headband%20kantai_collection%20long_hair%20mechagirl%20panties%20transparent%20underwear%20weapon%20wink.jpg",
    "https://konachan.com/sample/a5dd5a7a56b957a0491d4c518d4a3b1a/Konachan.com%20-%20316544%20sample.jpg",
    "https://konachan.com/sample/efc2db82a388ecaed8e3214ec2fcf065/Konachan.com%20-%20316542%20sample.jpg",
    "https://konachan.com/sample/96a183940796ce317b45ed57d786a13a/Konachan.com%20-%20316533%20sample.jpg",
    "https://konachan.com/sample/497b4caea912c0868a6de407a65c641c/Konachan.com%20-%20316520%20sample.jpg",
    "https://konachan.com/sample/b2067db7f9abf73c0e16e13dce67d0d4/Konachan.com%20-%20316504%20sample.jpg",
    "https://konachan.com/sample/9e6e9ca1debb5e67f9d6274b53d66532/Konachan.com%20-%20316458%20sample.jpg",
    "https://konachan.com/sample/79580dfece36d208c76d55fe22ca21ec/Konachan.com%20-%20316451%20sample.jpg",
    "https://konachan.com/sample/a8c586e7b3f863f618e0d2e40a6737ca/Konachan.com%20-%20316426%20sample.jpg",
    "https://konachan.com/sample/daa405a61c6a932bdc277eef0408ebc9/Konachan.com%20-%20316419%20sample.jpg",
    "https://konachan.com/sample/d040e4bd54a8c20081f4688608e7f39e/Konachan.com%20-%20316393%20sample.jpg",
    "https://konachan.com/jpeg/a5d86d85f88ff5bdf94c92977cf1c7db/Konachan.com%20-%20316371%202girls%20aliasing%20ass%20azur_lane%20blue_eyes%20blush%20brown_hair%20clouds%20dress%20gloves%20gray_hair%20long_hair%20no_bra%20nopan%20rei_kun%20signed%20skirt_lift%20sky%20watermark.jpg",
    "https://konachan.com/sample/9ba81775f516614ad9def6417be655cb/Konachan.com%20-%20316369%20sample.jpg",
    "https://konachan.com/sample/08b6ee4c4c1e20199440c12548455b8f/Konachan.com%20-%20316332%20sample.jpg",
    "https://konachan.com/sample/f3f6ea463f111501fc8cc2b9b51e5c46/Konachan.com%20-%20316327%20sample.jpg",
    "https://konachan.com/sample/2897b42d557af1972c6dba4e48c3d3a0/Konachan.com%20-%20316311%20sample.jpg",
    "https://konachan.com/sample/d3c7f65c3ba1deda7c12d02982661994/Konachan.com%20-%20316300%20sample.jpg",
    "https://konachan.com/sample/8024a9645ca1f617e47a5517a9877be4/Konachan.com%20-%20316199%20sample.jpg",
    "https://konachan.com/sample/737a707688c52fdfdd74797e76d67ee2/Konachan.com%20-%20316192%20sample.jpg",
    "https://konachan.com/sample/ceb60e71af03f2a43958ef254619c537/Konachan.com%20-%20316191%20sample.jpg",
    "https://konachan.com/sample/99c4d8b8972dc3c2bf9c7ea2788a8fdc/Konachan.com%20-%20316189%20sample.jpg",
    "https://konachan.com/jpeg/60c4f47203e1b09a085058c7fb12c9b6/Konachan.com%20-%20316185%20ass%20blush%20braids%20kanojo_okarishimasu%20miazi%20panties%20purple_eyes%20red_hair%20sakurasawa_sumi%20school_uniform%20skirt%20thighhighs%20underwear%20waifu2x.jpg",
    "https://konachan.com/jpeg/a0863dacd6d8ad422e50aeb423d80111/Konachan.com%20-%20316184%20anus%20ass%20blush%20braids%20censored%20kanojo_okarishimasu%20miazi%20nopan%20purple_eyes%20pussy%20red_hair%20sakurasawa_sumi%20school_uniform%20skirt%20thighhighs%20waifu2x%20wet.jpg",
    "https://konachan.com/sample/47d6969795731490979501abb28176b2/Konachan.com%20-%20316173%20sample.jpg",
    "https://konachan.com/sample/09db6cfe17cb284dd18a06b2ede6632e/Konachan.com%20-%20316126%20sample.jpg",
    "https://konachan.com/sample/9300481457d1856a38433de5716d9c89/Konachan.com%20-%20316108%20sample.jpg",
    "https://konachan.com/sample/0bba0d6536375fe5565b7ac51ed7db88/Konachan.com%20-%20316089%20sample.jpg",
    "https://konachan.com/sample/dcaf0a2ad0b79ff1717a18359ec44996/Konachan.com%20-%20316088%20sample.jpg",
    "https://konachan.com/sample/24dd2b888c41ee50381c826de335705b/Konachan.com%20-%20316011%20sample.jpg",
    "https://konachan.com/sample/139b396b35f3dfcd24ee77952170b1b5/Konachan.com%20-%20316002%20sample.jpg",
    "https://konachan.com/sample/d274dae687e5755fa73dfe709de90b47/Konachan.com%20-%20316017%20sample.jpg",
    "https://konachan.com/sample/6b56f616636dee37b9cd7a3f4286bb9c/Konachan.com%20-%20316447%20sample.jpg",
    "https://konachan.com/sample/96f609d7d44c728efc56981706925b31/Konachan.com%20-%20315247%20sample.jpg",
    "https://konachan.com/sample/f9fa53d9c84cb91e888ffebbaadb60dd/Konachan.com%20-%20314894%20sample.jpg",
    "https://konachan.com/sample/6e240863e0243abfe6bb8d959464fa7c/Konachan.com%20-%20314481%20sample.jpg",
    "https://konachan.com/sample/72faaad5c52e32d951f30c92954bee2e/Konachan.com%20-%20314326%20sample.jpg",
    "https://konachan.com/sample/d85db565ce195e5fbc3fcc4045f80fe0/Konachan.com%20-%20313418%20sample.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/770952689529126943/59355205_p2_-_Collection_Vol_1.png",
    "https://cdn.discordapp.com/attachments/770948564947304448/770989028895621151/Hentai_nation_1.jpeg",
    "https://cdn.discordapp.com/attachments/770948564947304448/770989034469195777/Hentai_nation_1.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/770989081248268345/Hentai_nation_3.png",
    "https://cdn.discordapp.com/attachments/770948564947304448/770989204455948298/Hentai_nation_11.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/770989363567788063/Hentai_nation_12.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/770989367719624764/Hentai_nation_4.jpeg",
    "https://cdn.discordapp.com/attachments/770948564947304448/770989378264629268/Hentai_nation_5.jpeg",
    "https://cdn.discordapp.com/attachments/770948564947304448/770989382194167888/Hentai_nation_8.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/770989384530657300/Hentai_nation_9.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/770989386887725086/Hentai_nation_10.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/770989398380118056/Hentai_nation_8.jpeg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771000750528397312/496-iKzmSR7QPV4.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771016314759413850/1648-AYOTgvqxtLw.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/771016668159803422/1694-22uvMW0T09I.jpg",
    "https://cdn.discordapp.com/attachments/707201738255368194/771373670655852575/RJ290927_img_smp1.png",
    "https://cdn.discordapp.com/attachments/707201738255368194/771377721699074048/947c1173cccc094affd65ba4d1c817b5.png",
    "https://i.imgur.com/1JJpaxX.jpg",
]