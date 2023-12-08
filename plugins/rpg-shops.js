
const potion = 15000
const Spotion = 5000
const Bdiamond = 15000
const Sdiamond = 5000
const Bcommon = 20000
const Scommon = 2000
const Suncommon = 10000
const Buncommon = 60000
const Bmythic = 200000
const Smythic = 50000
const Blegendary = 750000
const Slegendary = 300000
const Bsampah = 1000
const Ssampah = 150
const Bkayu = 6000
const Skayu = 1000
const Bbotol = 300
const Sbotol = 50
const Bkaleng = 400
const Skaleng = 100
const Bkardus = 400
const Skardus = 50
const Bpisang = 3000
const Spisang = 350
const Bmangga = 3000
const Smangga = 300
const Bjeruk = 3000
const Sjeruk = 300
const Banggur = 3000
const Sanggur = 300
const Bapel = 2000
const Sapel = 250
const Bbibitpisang = 550
const Sbibitpisang = 50
const Bbibitmangga = 550
const Sbibitmangga = 50
const Bbibitjeruk = 550
const Sbibitjeruk = 50
const Bbibitanggur = 550
const Sbibitanggur = 50
const Bbibitapel = 550
const Sbibitapel = 50
const Bgardenboxs = 65000
const Sgardenboc = 350000
const Bberlian = 150000
const Sberlian = 4000
const Bemasbatang = 250000
const Semasbatang = 10000
const Bemasbiasa = 10000
const Semasbiasa = 3000
const Bphonix = 1000000000
const Sphonix = 1000000
const Bgriffin = 100000000
const Sgriffin = 100000
const Bkyubi = 100000000
const Skyubi = 100000
const Bnaga = 100000000
const Snaga = 100000
const Bcentaur = 100000000
const Scentaur = 100000
const Bkuda = 50000000
const Skuda = 100000
const Brubah = 100000000
const Srubah = 100000
const Bkucing = 5000000
const Skucing = 50000
const Bserigala = 50000000
const Sserigala = 500000
const Bmakananpet = 40000
const Smakananpet = 15000
const Bmakananphonix = 22000
const Smakananphonix = 9000
const Bmakanangriffin = 20000
const Smakanangriffin = 7000
const Bmakanannaga = 25000
const Smakanannaga = 10000
const Bmakanankyubi = 23000
const Smakanankyubi = 9000
const Bmakanancentaur = 20000
const Smakanancentaur = 7000
const Bhealtmonster = 20000
const Bpet = 150000
const Spet = 1000
const Blimit = 25000
const Slimit = 20000
const Bexp = 550
const Baqua = 5000
const Saqua = 1000
const Biron = 10000
const Siron = 1500
const Bstring = 50000
const Sstring = 1000
const Bsword = 150000
const Ssword = 10000
const Bumpan = 1500
const Sumpan = 100
const Bpancingan = 5000000
const Spancingan = 500000
const Bbatu = 4000
const Sbatu = 350
const Bketake = 15
const Btiketcoin = 500
const Bkoinexpg = 500000
const Beleksirb = 500
let handler  = async (m, { conn, command, args, usedPrefix, owner }) => {
    const _armor = global.db.data.users[m.sender].armor
    const armor = (_armor == 0 ? 20000 : '' || _armor == 1 ? 49999 : '' || _armor == 2 ? 99999 : '' || _armor == 3 ? 149999 : '' || _armor == 4 ? 299999 : '')
    let type = (args[0] || '').toLowerCase()
    let _type = (args[1] || '').toLowerCase()
    let jualbeli = (args[0] || '').toLowerCase()
    let nomors = m.sender
    const Kchat = `
Penggunaan ${usedPrefix}shop <Buy|sell> <item> <jumlah>
Contoh penggunaan: *${usedPrefix}shop buy potion 1*

============================
*Kebutuhan   |  Harga Beli*
Limit:     ${Blimit} MIKO
TiketM:     ${Bhealtmonster} MIKO
Cupon:     ${Btiketcoin} MIKO
KoinExpg:     ${Bkoinexpg} MIKO

*Kebutuhan   |  Harga Jual*
Limit:     ${Slimit} MIKO
============================
*Bibit Buah   |  Harga Beli*
BibitPisang:       ${Bbibitpisang} MIKO
BibitAnggur:       ${Bbibitanggur} MIKO
BibitMangga:       ${Bbibitmangga} MIKO
BibitJeruk:       ${Bbibitjeruk} MIKO
BibitApel:       ${Bbibitapel} MIKO
Gardenboxs:     ${Bgardenboxs} MIKO
============================
*Barang   |  Harga Beli*
Potion:       ${potion} MIKO
Diamond:     ${Bdiamond} MIKO
Common:     ${Bcommon} MIKO
Uncommon:  ${Buncommon} MIKO
Mythic:     ${Bmythic} MIKO
Legendary: ${Blegendary} MIKO
Sampah:     ${Bsampah} MIKO
Armor:       ${armor} MIKO
String:       ${Bstring} MIKO
Iron:       ${Biron} MIKO
Sword:       ${Bsword} MIKO
Batu:       ${Bbatu} MIKO
Botol:       ${Bbotol} MIKO
Kaleng:       ${Bkaleng} MIKO
Kardus:       ${Bkardus} MIKO
Kayu:       ${Bkayu} MIKO
Berlian:       ${Bberlian} MIKO
Emas:       ${Bemasbiasa} MIKO

*Barang   | Harga Jual*
Potion:       ${Spotion} MIKO
Diamond:     ${Sdiamond} MIKO
Common:     ${Scommon} MIKO
Uncommon:  ${Suncommon} MIKO
Mythic:     ${Smythic} MIKO
Legendary: ${Slegendary} MIKO
Sampah:     ${Ssampah} MIKO
String:       ${Sstring} MIKO
Iron:       ${Siron} MIKO
Sword:       ${Ssword} MIKO
Batu:       ${Sbatu} MIKO
Botol:       ${Sbotol} MIKO
Kaleng:       ${Skaleng} MIKO
Kardus:       ${Skardus} MIKO
Kayu:       ${Skayu} MIKO
Berlian:       ${Sberlian} MIKO
Emas:       ${Semasbiasa} MIKO
============================
*List Makanan:*

*Makanan | Harga Beli*
Pisang:       ${Bpisang} MIKO
Anggur:       ${Banggur} MIKO
Mangga:       ${Bmangga} MIKO
Jeruk:       ${Bjeruk} MIKO
Apel:       ${Bapel} MIKO
MakananPet:       ${Bmakananpet} MIKO
MakananNaga:       ${Bmakanannaga} MIKO
MakananKyubi:       ${Bmakanankyubi} MIKO
MakananGriffin:       ${Bmakanangriffin} MIKO
MakananPhonix:       ${Bmakananphonix} MIKO
MakananCentaur:       ${Bmakanancentaur} MIKO

*Makanan | Harga Jual*
Pisang:       ${Spisang} MIKO
Anggur:       ${Sanggur} MIKO
Mangga:       ${Smangga} MIKO
Jeruk:       ${Sjeruk} MIKO
Apel:       ${Sapel} MIKO
MakananPet:       ${Smakananpet} MIKO
MakananNaga       ${Smakanannaga} MIKO
MakananKyubi:       ${Smakanankyubi} MIKO
MakananGriffin:       ${Smakanangriffin} MIKO
MakananPhonix:       ${Smakananphonix} MIKO
MakananCentaur:       ${Smakanancentaur} MIKO
============================
*Minuman | Harga Beli*
Aqua:       ${Baqua} MIKO

*Minuman | Harga Jual*
Aqua:       ${Saqua} MIKO
============================
*Fishing | Harga Beli*
Pancingan:       ${Bpancingan} MIKO
Umpan:       ${Bumpan} MIKO
`.trim()
    try {
        if (/shop|toko/i.test(command)) {
            const count = args[2] && args[2].length > 0 ? Math.min(999999999999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
            const sampah = global.db.data.users[m.sender].sampah
            switch (jualbeli) {
            case 'buy':
                switch (_type) {
                    case 'potion':
                            if (global.db.data.users[m.sender].miko >= potion * count) {
                                global.db.data.users[m.sender].miko -= potion * count
                                global.db.data.users[m.sender].potion += count * 1
                                conn.reply(m.chat, `Succes membeli ${count} Potion dengan harga ${potion * count} miko\n\nGunakan potion dengan ketik: *${usedPrefix}use potion <jumlah>*`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} Potion dengan harga ${potion * count} MIKO`,)
                        break
                    case 'diamond':
                            if (global.db.data.users[m.sender].miko >= Bdiamond * count) {
                                global.db.data.users[m.sender].diamond += count * 1
                                global.db.data.users[m.sender].miko -= Bdiamond * count
                                conn.reply(m.chat, `Succes membeli ${count} Diamond dengan harga ${Bdiamond * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup`, m)
                        
                        break
                    case 'common':
                            if (global.db.data.users[m.sender].miko >= Bcommon * count) {
                                global.db.data.users[m.sender].common += count * 1
                                global.db.data.users[m.sender].miko -= Bcommon * count
                                conn.reply(m.chat, `Succes membeli ${count} Common crate dengan harga ${Bcommon * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} Common crate dengan harga ${Bcommon * count} miko\n\nBuka crate dengan ketik: *${usedPrefix}open common*`, m)
                          
                        break
                    case 'uncommon':
                            if (global.db.data.users[m.sender].miko >= Buncommon * count) {
                                global.db.data.users[m.sender].uncommon += count * 1
                                global.db.data.users[m.sender].miko -= Buncommon * count
                                conn.reply(m.chat, `Succes membeli ${count} Uncommon crate dengan harga ${Buncommon * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} Uncommon crate dengan harga ${Buncommon * count} miko\n\nBuka crate dengan ketik: *${usedPrefix}open uncommon*`, m)
                        
                        break
                    case 'mythic':
                            if (global.db.data.users[m.sender].miko >= Bmythic * count) {
                                    global.db.data.users[m.sender].mythic += count * 1
                                global.db.data.users[m.sender].miko -= Bmythic * count
                                conn.reply(m.chat, `Succes membeli ${count} Mythic crate dengan harga ${Bmythic * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} Mythic crate dengan harga ${Bmythic* count} miko\n\nBuka crate dengan ketik: *${usedPrefix}open mythic*`, m)
                        
                        break
                    case 'legendary':
                            if (global.db.data.users[m.sender].miko >= Blegendary * count) {
                                global.db.data.users[m.sender].legendary += count * 1
                                global.db.data.users[m.sender].miko -= Blegendary * count
                                conn.reply(m.chat, `Succes membeli ${count} Legendary crate dengan harga ${Blegendary * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} Legendary crate dengan harga ${Blegendary * count} miko\n\nBuka crate dengan ketik: *${usedPrefix}open legendary*`, m)
                        
                        break
                    case 'sampah':
                            if (global.db.data.users[m.sender].miko >= Bsampah * count) {
                                global.db.data.users[m.sender].sampah += count * 1
                                global.db.data.users[m.sender].miko -= Bsampah * count
                                conn.reply(m.chat, `Succes membeli ${count} Sampah dengan harga ${Bsampah * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} Sampah dengan harga ${Bsampah * count} MIKO`.trim(), m)
                        
                        break
                    case 'kaleng':
                            if (global.db.data.users[m.sender].miko >= Bkaleng * count) {
                                global.db.data.users[m.sender].kaleng += count * 1
                                global.db.data.users[m.sender].miko -= Bkaleng * count
                                conn.reply(m.chat, `Succes membeli ${count} Kaleng dengan harga ${Bkaleng * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} Kaleng dengan harga ${Bkaleng * count} MIKO`.trim(), m)
                        
                        break
                    case 'kardus':
                            if (global.db.data.users[m.sender].miko >= Bkardus * count) {
                                global.db.data.users[m.sender].kardus += count * 1
                                global.db.data.users[m.sender].miko -= Bkardus * count
                                conn.reply(m.chat, `Succes membeli ${count} Kardus dengan harga ${Bkardus * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} Kardus dengan harga ${Bkardus * count} MIKO`.trim(), m)
                        
                        break
                    case 'botol':
                            if (global.db.data.users[m.sender].miko >= Bbotol * count) {
                                global.db.data.users[m.sender].botol += count * 1
                                global.db.data.users[m.sender].miko -= Bbotol * count
                                conn.reply(m.chat, `Succes membeli ${count} Botol dengan harga ${Bbotol * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} botol dengan harga ${Bbotol * count} MIKO`.trim(), m)
                        
                        break
                    case 'kayu':
                            if (global.db.data.users[m.sender].miko >= Bkayu * count) {
                                global.db.data.users[m.sender].wood += count * 1
                                global.db.data.users[m.sender].miko -= Bkayu * count
                                conn.reply(m.chat, `Succes membeli ${count} Kayu dengan harga ${Bkayu * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} kayu dengan harga ${Bkayu * count} MIKO`.trim(), m)
                        
                        break
                    case 'pisang':
                            if (global.db.data.users[m.sender].miko >= Bpisang * count) {
                                global.db.data.users[m.sender].pisang += count * 1
                                global.db.data.users[m.sender].miko -= Bpisang * count
                                conn.reply(m.chat, `Succes membeli ${count} Pisang dengan harga ${Bpisang * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} pisang dengan harga ${Bpisang * count} MIKO`.trim(), m)
                        
                        break
                    case 'anggur':
                            if (global.db.data.users[m.sender].miko >= Banggur * count) {
                                global.db.data.users[m.sender].anggur += count * 1
                                global.db.data.users[m.sender].miko -= Banggur * count
                                conn.reply(m.chat, `Succes membeli ${count} Anggur dengan harga ${Banggur * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} anggur dengan harga ${Banggur * count} MIKO`.trim(), m)
                        
                        break
                    case 'mangga':
                            if (global.db.data.users[m.sender].miko >= Bmangga * count) {
                                global.db.data.users[m.sender].mangga += count * 1
                                global.db.data.users[m.sender].miko -= Bmangga * count
                                conn.reply(m.chat, `Succes membeli ${count} Mangga dengan harga ${Bmangga * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} mangga dengan harga ${Bmangga * count} MIKO`.trim(), m)
                        
                        break
                    case 'jeruk':
                            if (global.db.data.users[m.sender].miko >= Bjeruk * count) {
                                global.db.data.users[m.sender].jeruk += count * 1
                                global.db.data.users[m.sender].miko -= Bjeruk * count
                                conn.reply(m.chat, `Succes membeli ${count} Jeruk dengan harga ${Bjeruk * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} jeruk dengan harga ${Bjeruk * count} MIKO`.trim(), m)
                        
                        break
                    case 'apel':
                            if (global.db.data.users[m.sender].miko >= Bapel * count) {
                                global.db.data.users[m.sender].apel += count * 1
                                global.db.data.users[m.sender].miko -= Bapel * count
                                conn.reply(m.chat, `Succes membeli ${count} Apel dengan harga ${Bapel * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} apel dengan harga ${Bapel * count} MIKO`.trim(), m)
                        
                        break
                    case 'bibitpisang':
                            if (global.db.data.users[m.sender].miko >= Bbibitpisang * count) {
                                global.db.data.users[m.sender].bibitpisang += count * 1
                                global.db.data.users[m.sender].miko -= Bbibitpisang * count
                                conn.reply(m.chat, `Succes membeli ${count} Bibit Pisang dengan harga ${Bbibitpisang * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} bibit pisang dengan harga ${Bbibitpisang * count} MIKO`.trim(), m)
                        
                        break
                    case 'bibitanggur':
                            if (global.db.data.users[m.sender].miko >= Bbibitanggur * count) {
                                global.db.data.users[m.sender].bibitanggur += count * 1
                                global.db.data.users[m.sender].miko -= Bbibitanggur * count
                                conn.reply(m.chat, `Succes membeli ${count} Bibit Anggur dengan harga ${Bbibitanggur * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} bibit anggur dengan harga ${Bbibitanggur * count} MIKO`.trim(), m)
                        
                        break
                    case 'bibitmangga':
                            if (global.db.data.users[m.sender].miko >= Bbibitmangga * count) {
                                global.db.data.users[m.sender].bibitmangga += count * 1
                                global.db.data.users[m.sender].miko -= Bbibitmangga * count
                                conn.reply(m.chat, `Succes membeli ${count} Bibit Mangga dengan harga ${Bbibitmangga * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} bibit mangga dengan harga ${Bbibitmangga * count} MIKO`.trim(), m)
                        
                        break
                    case 'bibitjeruk':
                            if (global.db.data.users[m.sender].miko >= Bbibitjeruk * count) {
                                global.db.data.users[m.sender].bibitjeruk += count * 1
                                global.db.data.users[m.sender].miko -= Bbibitjeruk * count
                                conn.reply(m.chat, `Succes membeli ${count} Bibit Jeruk dengan harga ${Bbibitjeruk * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} bibit jeruk dengan harga ${Bbibitjeruk * count} MIKO`.trim(), m)
                        
                        break
                    case 'bibitapel':
                            if (global.db.data.users[m.sender].miko >= Bbibitapel * count) {
                                global.db.data.users[m.sender].bibitapel += count * 1
                                global.db.data.users[m.sender].miko -= Bbibitapel * count
                                conn.reply(m.chat, `Succes membeli ${count} Bibit Apel dengan harga ${Bbibitapel * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} bibit apel dengan harga ${Bbibitapel * count} MIKO`.trim(), m)
                        
                        break 
                    case 'gardenboxs':
                            if (global.db.data.users[m.sender].miko >= Bgardenboxs * count) {
                                global.db.data.users[m.sender].gardenboxs += count * 1
                                global.db.data.users[m.sender].miko -= Bgardenboxs * count
                                conn.reply(m.chat, `Succes membeli ${count} Gardenboxs dengan harga ${Bgardenboxs * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} gardenboxs dengan harga ${Bgardenboxs * count} MIKO`.trim(), m)
                        
                        break
                    case 'berlian':
                            if (global.db.data.users[m.sender].miko >= Bberlian * count) {
                                global.db.data.users[m.sender].berlian += count * 1
                                global.db.data.users[m.sender].miko -= Bberlian * count
                                conn.reply(m.chat, `Succes membeli ${count} Berlian dengan harga ${Bberlian * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} berlian dengan harga ${Bberlian * count} MIKO`.trim(), m)
                        
                        break
                    case 'emas':
                            if (global.db.data.users[m.sender].miko >= Bemasbiasa * count) {
                                global.db.data.users[m.sender].emas += count * 1
                                global.db.data.users[m.sender].miko -= Bemasbiasa * count
                                conn.reply(m.chat, `Succes membeli ${count} Emas dengan harga ${Bemasbiasa * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} emas dengan harga ${Bemasbiasa * count} MIKO`.trim(), m)
                        
                        break 
                    //  case 'pet':
                    //         if (global.db.data.users[m.sender].miko >= Bpet * count) {
                    //             global.db.data.users[m.sender].pet += count * 1
                    //             global.db.data.users[m.sender].miko -= Bpet * count
                    //             conn.reply(m.chat, `Succes membeli ${count} Pet Random dengan harga ${Bpet * count} MIKO`, m)
                    //         } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} pet random dengan harga ${Bpet * count} MIKO`.trim(), m)
                        
                    //     break
                   case 'limit':
                            if (global.db.data.users[m.sender].miko >= Blimit * count) {
                                global.db.data.users[m.sender].limit += count * 1
                                global.db.data.users[m.sender].miko -= Blimit * count
                                conn.reply(m.chat, `Succes membeli ${count} Limit dengan harga ${Blimit * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} limit dengan harga ${Blimit * count} MIKO`.trim(), m)
                        
                        break 
                   /*case 'exp':
                            if (global.db.data.users[m.sender].miko >= Bexp * count) {
                                global.db.data.users[m.sender].exp += count * 1
                                global.db.data.users[m.sender].miko -= Bexp * count
                                conn.reply(m.chat, `Succes membeli ${count} Exp dengan harga ${Bexp * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} exp dengan harga ${Bexp * count} MIKO`.trim(), m)
                        
                        break
                     case 'eleksirb':
                            if (global.db.data.users[m.sender].miko >= Beleksirb * count) {
                                global.db.data.users[m.sender].eleksirb += count * 1
                                global.db.data.users[m.sender].miko -= Beleksirb * count
                                conn.reply(m.chat, `Succes membeli ${count} Eleksir Biru dengan harga ${Beleksirb * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} Eleksir Biru dengan harga ${Beleksirb * count} MIKO`.trim(), m)
                        
                        break
                        case 'koinexpg':
                            if (global.db.data.users[m.sender].miko >= Bkoinexpg * count) {
                                global.db.data.users[m.sender].koinexpg += count * 1
                                global.db.data.users[m.sender].miko -= Bkoinexpg * count
                                conn.reply(m.chat, `Succes membeli ${count} Koinexpg dengan harga ${Bkoinexpg * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} koinexpg dengan harga ${Bkoinexpg * count} MIKO`.trim(), m)
                        
                        break*/
                  case 'cupon':
                            if (global.db.data.users[m.sender].tiketcoin >= Btiketcoin * count) {
                                global.db.data.users[m.sender].cupon += count * 1
                                global.db.data.users[m.sender].tiketcoin -= Btiketcoin * count
                                conn.reply(m.chat, `Succes membeli ${count} cupon dengan harga ${Btiketcoin * count} Tiketcoin`, m)
                            } else conn.reply(m.chat, `Tiketcoin anda tidak cukup untuk membeli ${count} cupon dengan harga ${Btiketcoin * count} Tiketcoin\n\nCara mendapatkan tiketcoin, anda harus memainkan semua fitur game..`.trim(), m)
                        
                        break 
                  case 'makananpet':
                            if (global.db.data.users[m.sender].miko >= Bmakananpet * count) {
                                global.db.data.users[m.sender].makananpet += count * 1
                                global.db.data.users[m.sender].miko -= Bmakananpet * count
                                conn.reply(m.chat, `Succes membeli ${count} Makanan Pet dengan harga ${Bmakananpet * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} makanan pet dengan harga ${Bmakananpet * count} MIKO`.trim(), m)
                        
                        break 
                case 'makanannaga':
                            if (global.db.data.users[m.sender].miko >= Bmakanannaga * count) {
                                global.db.data.users[m.sender].makanannaga += count * 1
                                global.db.data.users[m.sender].miko -= Bmakanannaga * count
                                conn.reply(m.chat, `Succes membeli ${count} Makanan Naga dengan harga ${Bmakanannaga * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} makanan naga dengan harga ${Bmakanannaga * count} MIKO`.trim(), m)
                        
                        break 
                 case 'makananphonix':
                            if (global.db.data.users[m.sender].miko >= Bmakananphonix * count) {
                                global.db.data.users[m.sender].makananphonix += count * 1
                                global.db.data.users[m.sender].miko -= Bmakananphonix * count
                                conn.reply(m.chat, `Succes membeli ${count} Makanan Phonix dengan harga ${Bmakananphonix * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} makanan phonix dengan harga ${Bmakananphonix * count} MIKO`.trim(), m)
                        
                        break 
                case 'makanankyubi':
                            if (global.db.data.users[m.sender].miko >= Bmakanankyubi * count) {
                                global.db.data.users[m.sender].makanankyubi += count * 1
                                global.db.data.users[m.sender].miko -= Bmakanankyubi* count
                                conn.reply(m.chat, `Succes membeli ${count} Makanan Kyubi dengan harga ${Bmakanankyubi * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} makanan kyubi dengan harga ${Bmakanankyubi * count} MIKO`.trim(), m)
                        
                        break 
                 case 'makanangriffin':
                            if (global.db.data.users[m.sender].miko >= Bmakanangriffin * count) {
                                global.db.data.users[m.sender].makanangriffin += count * 1
                                global.db.data.users[m.sender].miko -= Bmakanangriffin * count
                                conn.reply(m.chat, `Succes membeli ${count} Makanan Griffin dengan harga ${Bmakanangriffin * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} makanan griffin dengan harga ${Bmakanangriffin * count} MIKO`.trim(), m)
                        
                        break 
                  case 'makanancentaur':
                            if (global.db.data.users[m.sender].miko >= Bmakanancentaur * count) {
                                global.db.data.users[m.sender].makanancentaur += count * 1
                                global.db.data.users[m.sender].miko -= Bmakanancentaur * count
                                conn.reply(m.chat, `Succes membeli ${count} Makanan Centaur dengan harga ${Bmakanancentaur * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} makanan centaur dengan harga ${Bmakanancentaur * count} MIKO`.trim(), m)
                        
                        break 
                  case 'tiketm':
                            if (global.db.data.users[m.sender].miko >= Bhealtmonster * count) {
                                global.db.data.users[m.sender].healtmonster += count * 1
                                global.db.data.users[m.sender].miko -= Bhealtmonster * count
                                conn.reply(m.chat, `Succes membeli ${count} TiketM dengan harga ${Bhealtmonster * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} tiketm dengan harga ${Bhealtmonster * count} MIKO`.trim(), m)
                        
                        break
                  case 'aqua':
                            if (global.db.data.users[m.sender].miko >= Baqua * count) {
                                global.db.data.users[m.sender].aqua += count * 1
                                global.db.data.users[m.sender].miko -= Baqua * count
                                conn.reply(m.chat, `Succes membeli ${count} Aqua dengan harga ${Baqua * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} aqua dengan harga ${Baqua * count} MIKO`.trim(), m)
                        
                        break
                  case 'iron':
                            if (global.db.data.users[m.sender].miko >= Biron * count) {
                                global.db.data.users[m.sender].iron += count * 1
                                global.db.data.users[m.sender].miko -= Biron * count
                                conn.reply(m.chat, `Succes membeli ${count} Iron dengan harga ${Biron * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} iron dengan harga ${Biron * count} MIKO`.trim(), m)
                        
                        break
                  case 'string':
                            if (global.db.data.users[m.sender].miko >= Bstring * count) {
                                global.db.data.users[m.sender].string += count * 1
                                global.db.data.users[m.sender].miko -= Bstring * count
                                conn.reply(m.chat, `Succes membeli ${count} String dengan harga ${Bstring * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} string dengan harga ${Bstring * count} MIKO`.trim(), m)
                        
                        break
                  case 'sword':
                            if (global.db.data.users[m.sender].miko >= Bsword * count) {
                                global.db.data.users[m.sender].sword += count * 1
                                global.db.data.users[m.sender].miko -= Bsword * count
                                conn.reply(m.chat, `Succes membeli ${count} Sword dengan harga ${Bsword * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} sword dengan harga ${Bsword * count} MIKO`.trim(), m)
                        
                        break 
                  case 'batu':
                            if (global.db.data.users[m.sender].miko >= Bbatu * count) {
                                global.db.data.users[m.sender].batu += count * 1
                                global.db.data.users[m.sender].miko -= Bbatu * count
                                conn.reply(m.chat, `Succes membeli ${count} Batu dengan harga ${Bbatu * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} batu dengan harga ${Bbatu * count} MIKO`.trim(), m)
                        
                        break 
                    case 'umpan':
                            if (global.db.data.users[m.sender].miko >= Bumpan * count) {
                                global.db.data.users[m.sender].umpan += count * 1
                                global.db.data.users[m.sender].miko -= Bumpan * count
                                conn.reply(m.chat, `Succes membeli ${count} Umpan dengan harga ${Bumpan * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} umpan dengan harga ${Bumpan * count} MIKO`.trim(), m)
                        
                        break 
                    case 'pancingan':
                            if (global.db.data.users[m.sender].miko >= Bpancingan * count) {
                                global.db.data.users[m.sender].pancingan += count * 1
                                global.db.data.users[m.sender].miko -= Bpancingan * count
                                conn.reply(m.chat, `Succes membeli ${count} Pancingan dengan harga ${Bpancingan * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} pancingan dengan harga ${Bpancingan * count} MIKO`.trim(), m)
                        
                        break
                    case 'armor':
                            if (global.db.data.users[m.sender].armor == 5) return conn.reply(m.chat, 'Armormu sudah *Level Max*', m)
                            if (global.db.data.users[m.sender].miko > armor) {
                                global.db.data.users[m.sender].armor += 1
                                global.db.data.users[m.sender].miko -= armor * 1
                                conn.reply(m.chat, `Succes membeli armor seharga ${armor} MIKO` ,m)
                            } else conn.reply(m.chat, `MIKO mu tidak cukup untuk membeli armor seharga ${armor} MIKO`, m)
                        
                        break
                    default:
                        return conn.reply(m.chat, Kchat, m)
                }
                break
            case 'sell': 
                switch (_type) {
                    case 'potion':
                        if (global.db.data.users[m.sender].potion >= count * 1) {
                            global.db.data.users[m.sender].miko += Spotion * count
                            global.db.data.users[m.sender].potion -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Potion dengan harga ${Spotion * count} MIKO`.trim(), m)
                        } else conn.reply(m.chat, `Potion kamu tidak cukup`.trim(), m)
                        break
                    case 'common':
                        if (global.db.data.users[m.sender].common >= count * 1) {
                            global.db.data.users[m.sender].miko += Scommon * count
                            global.db.data.users[m.sender].common -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Common Crate dengan harga ${Scommon * count} MIKO`.trim(), m)
                        } else conn.reply(m.chat, `Common Crate kamu tidak cukup`.trim(), m)
                        break
                    case 'uncommon':
                        if (global.db.data.users[m.sender].uncommon >= count * 1) {
                            global.db.data.users[m.sender].miko += Suncommon * count
                            global.db.data.users[m.sender].uncommon -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Uncommon Crate dengan harga ${Suncommon * count} MIKO`.trim(), m)
                        } else conn.reply(m.chat, `Uncommon Crate kamu tidak cukup`.trim(), m)
                        break
                    case 'mythic':
                        if (global.db.data.users[m.sender].mythic >= count * 1) {
                            global.db.data.users[m.sender].miko += Smythic * count
                            global.db.data.users[m.sender].mythic -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Mythic Crate dengan harga ${Smythic * count} MIKO`.trim(), m)
                        } else conn.reply(m.chat, `Mythic Crate kamu tidak cukup`.trim(), m)
                        break
                    case 'legendary':
                        if (global.db.data.users[m.sender].legendary >= count * 1) {
                            global.db.data.users[m.sender].miko += Slegendary * count
                            global.db.data.users[m.sender].legendary -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Legendary Crate dengan harga ${Slegendary * count} MIKO`.trim(), m)
                        } else conn.reply(m.chat, `Legendary Crate kamu tidak cukup`.trim(), m)
                        break
                    case 'sampah':
                        if (global.db.data.users[m.sender].sampah >= count * 1) {
                            global.db.data.users[m.sender].sampah -= count * 1
                            global.db.data.users[m.sender].miko += Ssampah * count
                            conn.reply(m.chat, `Succes menjual ${count} sampah, dan anda mendapatkan ${Ssampah * count} MIKO`, m)
                        } else conn.reply(m.chat, `Sampah anda tidak cukup`, m)
                        break
                    case 'kaleng':
                        if (global.db.data.users[m.sender].kaleng >= count * 1) {
                            global.db.data.users[m.sender].kaleng -= count * 1
                            global.db.data.users[m.sender].miko += Skaleng * count
                            conn.reply(m.chat, `Succes menjual ${count} kaleng, dan anda mendapatkan ${Skaleng * count} MIKO`, m)
                        } else conn.reply(m.chat, `Kaleng anda tidak cukup`, m)
                        break
                    case 'kardus':
                        if (global.db.data.users[m.sender].kardus >= count * 1) {
                            global.db.data.users[m.sender].kardus -= count * 1
                            global.db.data.users[m.sender].miko += Skardus * count
                            conn.reply(m.chat, `Succes menjual ${count} kardus, dan anda mendapatkan ${Skardus * count} MIKO`, m)
                        } else conn.reply(m.chat, `Kardus anda tidak cukup`, m)
                        break
                    case 'botol':
                        if (global.db.data.users[m.sender].botol >= count * 1) {
                            global.db.data.users[m.sender].botol -= count * 1
                            global.db.data.users[m.sender].miko += Sbotol * count
                            conn.reply(m.chat, `Succes menjual ${count} botol, dan anda mendapatkan ${Sbotol * count} MIKO`, m)
                        } else conn.reply(m.chat, `Botol anda tidak cukup`, m)
                        break
                    case 'kayu':
                        if (global.db.data.users[m.sender].wood >= count * 1) {
                            global.db.data.users[m.sender].wood -= count * 1
                            global.db.data.users[m.sender].miko += Skayu * count
                            conn.reply(m.chat, `Succes menjual ${count} kayu, dan anda mendapatkan ${Skayu * count} MIKO`, m)
                        } else conn.reply(m.chat, `Kayu anda tidak cukup`, m)
                        break
                    case 'pisang':
                        if (global.db.data.users[m.sender].pisang >= count * 1) {
                            global.db.data.users[m.sender].pisang -= count * 1
                            global.db.data.users[m.sender].miko += Spisang * count
                            conn.reply(m.chat, `Succes menjual ${count} pisang, dan anda mendapatkan ${Spisang * count} MIKO`, m)
                        } else conn.reply(m.chat, `Pisang anda tidak cukup`, m)
                        break
                    case 'anggur':
                        if (global.db.data.users[m.sender].anggur >= count * 1) {
                            global.db.data.users[m.sender].anggur -= count * 1
                            global.db.data.users[m.sender].miko += Sanggur * count
                            conn.reply(m.chat, `Succes menjual ${count} anggur, dan anda mendapatkan ${Sanggur * count} MIKO`, m)
                        } else conn.reply(m.chat, `Anggur anda tidak cukup`, m)
                        break
                    case 'mangga':
                        if (global.db.data.users[m.sender].mangga >= count * 1) {
                            global.db.data.users[m.sender].mangga -= count * 1
                            global.db.data.users[m.sender].miko += Smangga * count
                            conn.reply(m.chat, `Succes menjual ${count} mangga, dan anda mendapatkan ${Smangga * count} MIKO`, m)
                        } else conn.reply(m.chat, `Mangga anda tidak cukup`, m)
                        break
                    case 'jeruk':
                        if (global.db.data.users[m.sender].jeruk >= count * 1) {
                            global.db.data.users[m.sender].jeruk -= count * 1
                            global.db.data.users[m.sender].miko += Sjeruk * count
                            conn.reply(m.chat, `Succes menjual ${count} jeruk, dan anda mendapatkan ${Sjeruk * count} MIKO`, m)
                        } else conn.reply(m.chat, `Jeruk anda tidak cukup`, m)
                        break
                    case 'apel':
                        if (global.db.data.users[m.sender].apel >= count * 1) {
                            global.db.data.users[m.sender].apel -= count * 1
                            global.db.data.users[m.sender].miko += Sapel * count
                            conn.reply(m.chat, `Succes menjual ${count} apel, dan anda mendapatkan ${Sapel * count} MIKO`, m)
                        } else conn.reply(m.chat, `Apel anda tidak cukup`, m)
                        break
                   case 'berlian':
                        if (global.db.data.users[m.sender].berlian >= count * 1) {
                            global.db.data.users[m.sender].berlian -= count * 1
                            global.db.data.users[m.sender].miko += Sberlian * count
                            conn.reply(m.chat, `Succes menjual ${count} berlian, dan anda mendapatkan ${Sberlian * count} MIKO`, m)
                        } else conn.reply(m.chat, `Berlian anda tidak cukup`, m)
                        break
                   case 'emas':
                        if (global.db.data.users[m.sender].emas >= count * 1) {
                            global.db.data.users[m.sender].emas -= count * 1
                            global.db.data.users[m.sender].miko += Semasbiasa * count
                            conn.reply(m.chat, `Succes menjual ${count} emas , dan anda mendapatkan ${Semasbiasa * count} MIKO`, m)
                        } else conn.reply(m.chat, `Emas anda tidak cukup`, m)
                        break  
                    case 'pet':
                        if (global.db.data.users[m.sender].pet >= count * 1) {
                            global.db.data.users[m.sender].pet -= count * 1
                            global.db.data.users[m.sender].miko += Spet * count
                            conn.reply(m.chat, `Succes menjual ${count} pet random, dan anda mendapatkan ${Spet * count} MIKO`, m)
                        } else conn.reply(m.chat, `Pet Random anda tidak cukup`, m)
                        break 
                    case 'makananpet':
                        if (global.db.data.users[m.sender].makananpet >= count * 1) {
                            global.db.data.users[m.sender].makananpet -= count * 1
                            global.db.data.users[m.sender].miko += Smakananpet * count
                            conn.reply(m.chat, `Succes menjual ${count} makanan pet, dan anda mendapatkan ${Smakananpet * count} MIKO`, m)
                        } else conn.reply(m.chat, `Makanan pet anda tidak cukup`, m)
                        break 
                    case 'makananphonix':
                        if (global.db.data.users[m.sender].makananphonix >= count * 1) {
                            global.db.data.users[m.sender].makananphonix -= count * 1
                            global.db.data.users[m.sender].miko += Smakananphonix * count
                            conn.reply(m.chat, `Succes menjual ${count} makanan phonix, dan anda mendapatkan ${Smakananphonix * count} MIKO`, m)
                        } else conn.reply(m.chat, `Makanan phonix anda tidak cukup`, m)
                        break
                    case 'makanannaga':
                        if (global.db.data.users[m.sender].makanannaga >= count * 1) {
                            global.db.data.users[m.sender].makanannaga -= count * 1
                            global.db.data.users[m.sender].miko += Smakanannaga * count
                            conn.reply(m.chat, `Succes menjual ${count} makanan naga, dan anda mendapatkan ${Smakanannaga * count} MIKO`, m)
                        } else conn.reply(m.chat, `Makanan naga anda tidak cukup`, m)
                        break
                    case 'makanankyubi':
                        if (global.db.data.users[m.sender].makanankyuni >= count * 1) {
                            global.db.data.users[m.sender].makanankyubi -= count * 1
                            global.db.data.users[m.sender].miko += Smakanankyubi * count
                            conn.reply(m.chat, `Succes menjual ${count} makanan kyubi, dan anda mendapatkan ${Smakanankyubi* count} MIKO`, m)
                        } else conn.reply(m.chat, `Makanan kyubi anda tidak cukup`, m)
                        break
                    case 'makanangriffin':
                        if (global.db.data.users[m.sender].makanangriffin >= count * 1) {
                            global.db.data.users[m.sender].makanangriffin -= count * 1
                            global.db.data.users[m.sender].miko += Smakanangriffin * count
                            conn.reply(m.chat, `Succes menjual ${count} makanan griffin, dan anda mendapatkan ${Smakanangriffin * count} MIKO`, m)
                        } else conn.reply(m.chat, `Makanan griffin anda tidak cukup`, m)
                        break 
                    case 'makanancentaur':
                        if (global.db.data.users[m.sender].makanancentaur >= count * 1) {
                            global.db.data.users[m.sender].makanancentaur -= count * 1
                            global.db.data.users[m.sender].miko += Smakanancentaur * count
                            conn.reply(m.chat, `Succes menjual ${count} makanan centaur, dan anda mendapatkan ${Smakanancentaur * count} MIKO`, m)
                        } else conn.reply(m.chat, `Makanan centaur anda tidak cukup`, m)
                        break
                    case 'aqua':
                        if (global.db.data.users[m.sender].aqua >= count * 1) {
                            global.db.data.users[m.sender].aqua -= count * 1
                            global.db.data.users[m.sender].miko += Saqua * count
                            conn.reply(m.chat, `Succes menjual ${count} aqua, dan anda mendapatkan ${Saqua * count} MIKO`, m)
                        } else conn.reply(m.chat, `Aqua anda tidak cukup`, m)
                        break
                    case 'pancingan':
                        if (global.db.data.users[m.sender].pancingan >= count * 1) {
                            global.db.data.users[m.sender].pancingan -= count * 1
                            global.db.data.users[m.sender].miko += Spancingan * count
                            conn.reply(m.chat, `Succes menjual ${count} pancingan, dan anda mendapatkan ${Spancingan * count} MIKO`, m)
                        } else conn.reply(m.chat, `Pancingan anda tidak cukup`, m)
                        break
                    case 'iron':
                        if (global.db.data.users[m.sender].iron >= count * 1) {
                            global.db.data.users[m.sender].iron -= count * 1
                            global.db.data.users[m.sender].miko += Siron * count
                            conn.reply(m.chat, `Succes menjual ${count} pancingan, dan anda mendapatkan ${Siron * count} MIKO`, m)
                        } else conn.reply(m.chat, `Iron anda tidak cukup`, m)
                        break
                    case 'string':
                        if (global.db.data.users[m.sender].string >= count * 1) {
                            global.db.data.users[m.sender].string -= count * 1
                            global.db.data.users[m.sender].miko += Sstring * count
                            conn.reply(m.chat, `Succes menjual ${count} string, dan anda mendapatkan ${Sstring * count} MIKO`, m)
                        } else conn.reply(m.chat, `String anda tidak cukup`, m)
                        break
                    case 'sword':
                        if (global.db.data.users[m.sender].sword >= count * 1) {
                            global.db.data.users[m.sender].sword -= count * 1
                            global.db.data.users[m.sender].miko += Ssword * count
                            conn.reply(m.chat, `Succes menjual ${count} sword, dan anda mendapatkan ${Ssword * count} MIKO`, m)
                        } else conn.reply(m.chat, `Sword anda tidak cukup`, m)
                        break
                    case 'batu':
                        if (global.db.data.users[m.sender].batu >= count * 1) {
                            global.db.data.users[m.sender].batu -= count * 1
                            global.db.data.users[m.sender].miko += Sbatu * count
                            conn.reply(m.chat, `Succes menjual ${count} batu, dan anda mendapatkan ${Sbatu * count} MIKO`, m)
                        } else conn.reply(m.chat, `Batu anda tidak cukup`, m)
                        break
                    case 'limit':
                        if (global.db.data.users[m.sender].limit >= count * 1) {
                            global.db.data.users[m.sender].limit -= count * 1
                            global.db.data.users[m.sender].miko += Slimit * count
                            conn.reply(m.chat, `Succes menjual ${count} limit, dan anda mendapatkan ${Slimit * count} MIKO`, m)
                        } else conn.reply(m.chat, `Limit anda tidak cukup`, m)
                        break
                    case 'diamond':
                        if (global.db.data.users[m.sender].diamond >= count * 1) {
                            global.db.data.users[m.sender].diamond -= count * 1
                            global.db.data.users[m.sender].miko += Sdiamond * count
                            conn.reply(m.chat, `Succes menjual ${count} Diamond, dan anda mendapatkan ${Sdiamond * count} MIKO`, m)
                        } else conn.reply(m.chat, `Diamond anda tidak cukup`, m)
                        break
                    default:
                        return conn.reply(m.chat, Kchat, m)
                }
                break
            default:
                return conn.reply(m.chat, Kchat, m)
            }
        } else if (/beli|buy/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(999999999999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case 'potion':
                        if (global.db.data.users[m.sender].miko >= potion * count) {
                            global.db.data.users[m.sender].miko -= potion * count
                            global.db.data.users[m.sender].potion += count * 1
                            conn.reply(m.chat, `Succes membeli ${count} Potion dengan harga ${potion * count} miko\n\nGunakan potion dengan ketik: *${usedPrefix}use potion <jumlah>*`, m)
                        } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} Potion dengan harga ${potion * count} MIKO`,m)
                    
                    break
                case 'diamond':
                        if (global.db.data.users[m.sender].miko >= Bdiamond * count) {
                            global.db.data.users[m.sender].diamond += count * 1
                            global.db.data.users[m.sender].miko -= Bdiamond * count
                            conn.reply(m.chat, `Succes membeli ${count} Diamond dengan harga ${Bdiamond * count} MIKO`, m)
                        } else conn.reply(m.chat, `MIKO anda tidak cukup`, m)
                    
                    break
                case 'common':
                        if (global.db.data.users[m.sender].miko >= Bcommon * count) {
                            global.db.data.users[m.sender].common += count * 1
                            global.db.data.users[m.sender].miko -= Bcommon * count
                            conn.reply(m.chat, `Succes membeli ${count} Common crate dengan harga ${Bcommon * count} MIKO`, m)
                        } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} Common crate dengan harga ${Bcommon * count} miko\n\nBuka crate dengan ketik: *${usedPrefix}open common*`, m)
                    
                    break
                case 'uncommon':
                        if (global.db.data.users[m.sender].miko >= Buncommon * count) {
                            global.db.data.users[m.sender].uncommon += count * 1
                            global.db.data.users[m.sender].miko -= Buncommon * count
                            conn.reply(m.chat, `Succes membeli ${count} Uncommon crate dengan harga ${Buncommon * count} MIKO`, m)
                        } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} Uncommon crate dengan harga ${Buncommon * count} miko\n\nBuka crate dengan ketik: *${usedPrefix}open uncommon*`, m)
                   
                    break
                case 'mythic':
                        if (global.db.data.users[m.sender].miko >= Bmythic * count) {
                            global.db.data.users[m.sender].mythic += count * 1
                            global.db.data.users[m.sender].miko -= Bmythic * count
                            conn.reply(m.chat, `Succes membeli ${count} Mythic crate dengan harga ${Bmythic * count} MIKO`, m)
                        } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} Mythic crate dengan harga ${Bmythic* count} miko\n\nBuka crate dengan ketik: *${usedPrefix}open mythic*`, m)
                    
                    break
                case 'legendary':
                        if (global.db.data.users[m.sender].miko >= Blegendary * count) {
                            global.db.data.users[m.sender].legendary += count * 1
                            global.db.data.users[m.sender].miko -= Blegendary * count
                            conn.reply(m.chat, `Succes membeli ${count} Legendary crate dengan harga ${Blegendary * count} MIKO`, m)
                        } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} Legendary crate dengan harga ${Blegendary * count} miko\n\nBuka crate dengan ketik: *${usedPrefix}open legendary*`, m)
                    
                    break
                case 'sampah':
                        if (global.db.data.users[m.sender].miko >= Bsampah * count) {
                            global.db.data.users[m.sender].sampah += count * 1
                            global.db.data.users[m.sender].miko -= Bsampah * count
                            conn.reply(m.chat, `Succes membeli ${count} Sampah dengan harga ${Bsampah * count} MIKO`, m)
                        } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} Sampah dengan harga ${Bsampah * count} MIKO`.trim(), m)
                    
                    break
                    case 'kaleng':
                            if (global.db.data.users[m.sender].miko >= Bkaleng * count) {
                                global.db.data.users[m.sender].kaleng += count * 1
                                global.db.data.users[m.sender].miko -= Bkaleng * count
                                conn.reply(m.chat, `Succes membeli ${count} Kaleng dengan harga ${Bkaleng * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} Kaleng dengan harga ${Bkaleng * count} MIKO`.trim(), m)
                        
                        break
                    case 'kardus':
                            if (global.db.data.users[m.sender].miko >= Bkardus * count) {
                                global.db.data.users[m.sender].kardus += count * 1
                                global.db.data.users[m.sender].miko -= Bkardus * count
                                conn.reply(m.chat, `Succes membeli ${count} Kardus dengan harga ${Bkardus * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} Kardus dengan harga ${Bkardus * count} MIKO`.trim(), m)
                        
                        break
                    case 'botol':
                            if (global.db.data.users[m.sender].miko >= Bbotol * count) {
                                global.db.data.users[m.sender].botol += count * 1
                                global.db.data.users[m.sender].miko -= Bbotol * count
                                conn.reply(m.chat, `Succes membeli ${count} Botol dengan harga ${Bbotol * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} botol dengan harga ${Bbotol * count} MIKO`.trim(), m)
                        
                        break
                    case 'kayu':
                            if (global.db.data.users[m.sender].miko >= Bkayu * count) {
                                global.db.data.users[m.sender].wood += count * 1
                                global.db.data.users[m.sender].miko -= Bkayu * count
                                conn.reply(m.chat, `Succes membeli ${count} Kayu dengan harga ${Bkayu * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} kayu dengan harga ${Bkayu * count} MIKO`.trim(), m)
                        
                        break
                    case 'pisang':
                            if (global.db.data.users[m.sender].miko >= Bpisang * count) {
                                global.db.data.users[m.sender].pisang += count * 1
                                global.db.data.users[m.sender].miko -= Bpisang * count
                                conn.reply(m.chat, `Succes membeli ${count} Pisang dengan harga ${Bpisang * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} pisang dengan harga ${Bpisang * count} MIKO`.trim(), m)
                        
                        break
                    case 'anggur':
                            if (global.db.data.users[m.sender].miko >= Banggur * count) {
                                global.db.data.users[m.sender].anggur += count * 1
                                global.db.data.users[m.sender].miko -= Banggur * count
                                conn.reply(m.chat, `Succes membeli ${count} Anggur dengan harga ${Banggur * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} anggur dengan harga ${Banggur * count} MIKO`.trim(), m)
                        
                        break
                    case 'mangga':
                            if (global.db.data.users[m.sender].miko >= Bmangga * count) {
                                global.db.data.users[m.sender].mangga += count * 1
                                global.db.data.users[m.sender].miko -= Bmangga * count
                                conn.reply(m.chat, `Succes membeli ${count} Mangga dengan harga ${Bmangga * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} mangga dengan harga ${Bmangga * count} MIKO`.trim(), m)
                        
                        break
                    case 'jeruk':
                            if (global.db.data.users[m.sender].miko >= Bjeruk * count) {
                                global.db.data.users[m.sender].jeruk += count * 1
                                global.db.data.users[m.sender].miko -= Bjeruk * count
                                conn.reply(m.chat, `Succes membeli ${count} Jeruk dengan harga ${Bjeruk * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} jeruk dengan harga ${Bjeruk * count} MIKO`.trim(), m)
                        
                        break
                    case 'apel':
                            if (global.db.data.users[m.sender].miko >= Bapel * count) {
                                global.db.data.users[m.sender].apel += count * 1
                                global.db.data.users[m.sender].miko -= Bapel * count
                                conn.reply(m.chat, `Succes membeli ${count} Apel dengan harga ${Bapel * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} apel dengan harga ${Bapel * count} MIKO`.trim(), m)
                        
                        break
                        
                    case 'bibitpisang':
                            if (global.db.data.users[m.sender].miko >= Bbibitpisang * count) {
                                global.db.data.users[m.sender].bibitpisang += count * 1
                                global.db.data.users[m.sender].miko -= Bbibitpisang * count
                                conn.reply(m.chat, `Succes membeli ${count} Bibit Pisang dengan harga ${Bbibitpisang * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} bibit pisang dengan harga ${Bbibitpisang * count} MIKO`.trim(), m)
                        
                        break
                    case 'bibitanggur':
                            if (global.db.data.users[m.sender].miko >= Bbibitanggur * count) {
                                global.db.data.users[m.sender].bibitanggur += count * 1
                                global.db.data.users[m.sender].miko -= Bbibitanggur * count
                                conn.reply(m.chat, `Succes membeli ${count} Bibit Anggur dengan harga ${Bbibitanggur * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} bibit anggur dengan harga ${Bbibitanggur * count} MIKO`.trim(), m)
                        
                        break
                    case 'bibitmangga':
                            if (global.db.data.users[m.sender].miko >= Bbibitmangga * count) {
                                global.db.data.users[m.sender].bibitmangga += count * 1
                                global.db.data.users[m.sender].miko -= Bbibitmangga * count
                                conn.reply(m.chat, `Succes membeli ${count} Bibit Mangga dengan harga ${Bbibitmangga * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} bibit mangga dengan harga ${Bbibitmangga * count} MIKO`.trim(), m)
                        
                        break
                    case 'bibitjeruk':
                            if (global.db.data.users[m.sender].miko >= Bbibitjeruk * count) {
                                global.db.data.users[m.sender].bibitjeruk += count * 1
                                global.db.data.users[m.sender].miko -= Bbibitjeruk * count
                                conn.reply(m.chat, `Succes membeli ${count} Bibit Jeruk dengan harga ${Bbibitjeruk * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} bibit jeruk dengan harga ${Bbibitjeruk * count} MIKO`.trim(), m)
                        
                        break
                    case 'bibitapel':
                            if (global.db.data.users[m.sender].miko >= Bbibitapel * count) {
                                global.db.data.users[m.sender].bibitapel += count * 1
                                global.db.data.users[m.sender].miko -= Bbibitapel * count
                                conn.reply(m.chat, `Succes membeli ${count} Bibit Apel dengan harga ${Bbibitapel * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} bibit apel dengan harga ${Bbibitapel * count} MIKO`.trim(), m)
                        
                        break 
                    case 'gardenboxs':
                            if (global.db.data.users[m.sender].miko >= Bgardenboxs * count) {
                                global.db.data.users[m.sender].gardenboxs += count * 1
                                global.db.data.users[m.sender].miko -= Bgardenboxs * count
                                conn.reply(m.chat, `Succes membeli ${count} Gardenboxs dengan harga ${Bgardenboxs * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} gardenboxs dengan harga ${Bgardenboxs * count} MIKO`.trim(), m)
                        
                        break
                    case 'berlian':
                            if (global.db.data.users[m.sender].miko >= Bberlian * count) {
                                global.db.data.users[m.sender].berlian += count * 1
                                global.db.data.users[m.sender].miko -= Bberlian * count
                                conn.reply(m.chat, `Succes membeli ${count} Apel dengan harga ${Bberlian * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} berlian dengan harga ${Bberlian * count} MIKO`.trim(), m)
                        
                        break
                    case 'emas':
                            if (global.db.data.users[m.sender].miko >= Bemasbiasa * count) {
                                global.db.data.users[m.sender].emas += count * 1
                                global.db.data.users[m.sender].miko -= Bemasbiasa * count
                                conn.reply(m.chat, `Succes membeli ${count} Emas dengan harga ${Bemasbiasa * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} emas dengan harga ${Bemasbiasa * count} MIKO`.trim(), m)
                        
                        break  
                     case 'pet':
                            if (global.db.data.users[m.sender].miko >= Bpet * count) {
                                global.db.data.users[m.sender].pet += count * 1
                                global.db.data.users[m.sender].miko -= Bpet * count
                                conn.reply(m.chat, `Succes membeli ${count} Pet Random dengan harga ${Bpet * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} pet random dengan harga ${Bpet * count} MIKO`.trim(), m)
                        
                        break
                  case 'limit':
                            if (global.db.data.users[m.sender].miko >= Blimit * count) {
                                global.db.data.users[m.sender].limit += count * 1
                                global.db.data.users[m.sender].miko -= Blimit * count
                                conn.reply(m.chat, `Succes membeli ${count} Limit dengan harga ${Blimit * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} limit dengan harga ${Blimit * count} MIKO`.trim(), m)
                        
                        break 
                   /*case 'exp':
                            if (global.db.data.users[m.sender].miko >= Bexp * count) {
                                global.db.data.users[m.sender].exp += count * 1
                                global.db.data.users[m.sender].miko -= Bexp * count
                                conn.reply(m.chat, `Succes membeli ${count} Exp dengan harga ${Bexp * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} exp dengan harga ${Bexp * count} MIKO`.trim(), m)
                        
                        break
                     case 'eleksirb':
                            if (global.db.data.users[m.sender].miko >= Beleksirb * count) {
                                global.db.data.users[m.sender].eleksirb += count * 1
                                global.db.data.users[m.sender].miko -= Beleksirb * count
                                conn.reply(m.chat, `Succes membeli ${count} Eleksir Biru dengan harga ${Beleksirb * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} Eleksir Biru dengan harga ${Beleksirb * count} MIKO`.trim(), m)
                        
                        break
                        case 'koinexpg':
                            if (global.db.data.users[m.sender].miko >= Bkoinexpg * count) {
                                global.db.data.users[m.sender].koinexpg += count * 1
                                global.db.data.users[m.sender].miko -= Bkoinexpg * count
                                conn.reply(m.chat, `Succes membeli ${count} Koinexpg dengan harga ${Bkoinexpg * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} koinexpg dengan harga ${Bkoinexpg * count} MIKO`.trim(), m)
                        
                        break*/
                  case 'cupon':
                            if (global.db.data.users[m.sender].tiketcoin >= Btiketcoin * count) {
                                global.db.data.users[m.sender].cupon += count * 1
                                global.db.data.users[m.sender].tiketcoin -= Btiketcoin * count
                                conn.reply(m.chat, `Succes membeli ${count} cupon dengan harga ${Btiketcoin * count} Tiketcoin`, m)
                            } else conn.reply(m.chat, `Tiketcoin anda tidak cukup untuk membeli ${count} cupon dengan harga ${Btiketcoin * count} Tiketcoin\n\nCara mendapatkan tiketcoin, anda harus memainkan semua fitur game..`.trim(), m)
                        
                        break 
                 case 'makananpet':
                            if (global.db.data.users[m.sender].miko >= Bmakananpet * count) {
                                global.db.data.users[m.sender].makananpet += count * 1
                                global.db.data.users[m.sender].miko -= Bmakananpet * count
                                conn.reply(m.chat, `Succes membeli ${count} Makanan Pet dengan harga ${Bmakananpet * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} makanan pet dengan harga ${Bmakananpet * count} MIKO`.trim(), m)
                        
                        break
                case 'makanannaga':
                            if (global.db.data.users[m.sender].miko >= Bmakanannaga * count) {
                                global.db.data.users[m.sender].makanannaga += count * 1
                                global.db.data.users[m.sender].miko -= Bmakanannaga * count
                                conn.reply(m.chat, `Succes membeli ${count} Makanan Naga dengan harga ${Bmakanannaga * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} makanan pet dengan harga ${Bmakanannaga * count} MIKO`.trim(), m)
                        
                        break 
                 case 'makananphonix':
                            if (global.db.data.users[m.sender].miko >= Bmakananphonix * count) {
                                global.db.data.users[m.sender].makananphonix += count * 1
                                global.db.data.users[m.sender].miko -= Bmakananphonix * count
                                conn.reply(m.chat, `Succes membeli ${count} Makanan Phonix dengan harga ${Bmakananphonix * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} makanan pet dengan harga ${Bmakananphonix * count} MIKO`.trim(), m)
                        
                        break 
                case 'makanankyubi':
                            if (global.db.data.users[m.sender].miko >= Bmakanankyubi * count) {
                                global.db.data.users[m.sender].makanankyubi += count * 1
                                global.db.data.users[m.sender].miko -= Bmakanankyubi* count
                                conn.reply(m.chat, `Succes membeli ${count} Makanan Kyubi dengan harga ${Bmakanankyubi * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} makanan kyubi dengan harga ${Bmakanankyubi * count} MIKO`.trim(), m)
                        
                        break 
                 case 'makanangriffin':
                            if (global.db.data.users[m.sender].miko >= Bmakanangriffin * count) {
                                global.db.data.users[m.sender].makanangriffin += count * 1
                                global.db.data.users[m.sender].miko -= Bmakanangriffin * count
                                conn.reply(m.chat, `Succes membeli ${count} Makanan Griffin dengan harga ${Bmakanangriffin * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} makanan griffin dengan harga ${Bmakanangriffin * count} MIKO`.trim(), m)
                        
                        break 
                  case 'makanancentaur':
                            if (global.db.data.users[m.sender].miko >= Bmakanancentaur * count) {
                                global.db.data.users[m.sender].makanancentaur += count * 1
                                global.db.data.users[m.sender].miko -= Bmakanancentaur * count
                                conn.reply(m.chat, `Succes membeli ${count} Makanan Centaur dengan harga ${Bmakanancentaur * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} makanan centaur dengan harga ${Bmakanancentaur * count} MIKO`.trim(), m)
                        
                        break 
                case 'tiketm':
                            if (global.db.data.users[m.sender].miko >= Bhealtmonster * count) {
                                global.db.data.users[m.sender].healtmonster += count * 1
                                global.db.data.users[m.sender].miko -= Bhealtmonster * count
                                conn.reply(m.chat, `Succes membeli ${count} TiketM dengan harga ${Bhealtmonster * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} tiketm dengan harga ${Bhealtmonster * count} MIKO`.trim(), m)
                        
                        break
                  case 'aqua':
                            if (global.db.data.users[m.sender].miko >= Baqua * count) {
                                global.db.data.users[m.sender].aqua += count * 1
                                global.db.data.users[m.sender].miko -= Baqua * count
                                conn.reply(m.chat, `Succes membeli ${count} Aqua dengan harga ${Baqua * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} aqua dengan harga ${Baqua * count} MIKO`.trim(), m)
                        
                        break
                  case 'iron':
                            if (global.db.data.users[m.sender].miko >= Biron * count) {
                                global.db.data.users[m.sender].iron += count * 1
                                global.db.data.users[m.sender].miko -= Biron * count
                                conn.reply(m.chat, `Succes membeli ${count} Iron dengan harga ${Biron * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} iron dengan harga ${Biron * count} MIKO`.trim(), m)
                        
                        break
                  case 'string':
                            if (global.db.data.users[m.sender].miko >= Bstring * count) {
                                global.db.data.users[m.sender].string += count * 1
                                global.db.data.users[m.sender].miko -= Bstring * count
                                conn.reply(m.chat, `Succes membeli ${count} String dengan harga ${Bstring * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} string dengan harga ${Bstring * count} MIKO`.trim(), m)
                        
                        break
                  case 'sword':
                            if (global.db.data.users[m.sender].miko >= Bsword * count) {
                                global.db.data.users[m.sender].sword += count * 1
                                global.db.data.users[m.sender].miko -= Bsword * count
                                conn.reply(m.chat, `Succes membeli ${count} Sword dengan harga ${Bsword * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} sword dengan harga ${Bsword * count} MIKO`.trim(), m)
                        
                        break
                  case 'batu':
                            if (global.db.data.users[m.sender].miko >= Bbatu * count) {
                                global.db.data.users[m.sender].batu += count * 1
                                global.db.data.users[m.sender].miko -= Bbatu * count
                                conn.reply(m.chat, `Succes membeli ${count} Batu dengan harga ${Bbatu * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} batu dengan harga ${Bbatu * count} MIKO`.trim(), m)
                        
                        break 
                 case 'umpan':
                            if (global.db.data.users[m.sender].miko >= Bumpan * count) {
                                global.db.data.users[m.sender].umpan += count * 1
                                global.db.data.users[m.sender].miko -= Bumpan * count
                                conn.reply(m.chat, `Succes membeli ${count} Umpan dengan harga ${Bumpan * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} umpan dengan harga ${Bumpan * count} MIKO`.trim(), m)
                        
                        break
                    case 'pancingan':
                            if (global.db.data.users[m.sender].miko >= Bpancingan * count) {
                                global.db.data.users[m.sender].pancingan += count * 1
                                global.db.data.users[m.sender].miko -= Bpancingan * count
                                conn.reply(m.chat, `Succes membeli ${count} Pancingan dengan harga ${Bpancingan * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO anda tidak cukup untuk membeli ${count} pancingan dengan harga ${Bpancingan * count} MIKO`.trim(), m)
                        
                        break
                case 'armor':
                        if (global.db.data.users[m.sender].armor == 5) return conn.reply(m.chat, 'Armormu sudah *Level Max*', m)
                        if (global.db.data.users[m.sender].miko > armor * 1) {
                            global.db.data.users[m.sender].armor += 1
                            global.db.data.users[m.sender].miko -= armor * 1
                            conn.reply(m.chat, `Succes membeli armor seharga ${armor} MIKO` ,m)
                          
                        } else conn.reply(m.chat, `MIKO mu tidak cukup untuk membeli armor seharga ${armor} MIKO`, m)
                    
                    break
                default:
                    return conn.reply(m.chat, Kchat, m)
            }
        } else if (/sell|jual|/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(999999999999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case 'potion':
                    if (global.db.data.users[m.sender].potion >= count * 1) {
                        global.db.data.users[m.sender].miko += Spotion * count
                        global.db.data.users[m.sender].potion -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} Potion dengan harga ${Spotion * count} MIKO`.trim(), m)
                    } else conn.reply(m.chat, `Potion kamu tidak cukup`.trim(), m)
                    break
                case 'common':
                    if (global.db.data.users[m.sender].common >= count * 1) {
                        global.db.data.users[m.sender].miko += Scommon * count
                        global.db.data.users[m.sender].common -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} Common Crate dengan harga ${Scommon * count} MIKO`.trim(), m)
                    } else conn.reply(m.chat, `Common Crate kamu tidak cukup`.trim(), m)
                    break
                case 'uncommon':
                    if (global.db.data.users[m.sender].uncommon >= count * 1) {
                        global.db.data.users[m.sender].miko += Suncommon * count
                        global.db.data.users[m.sender].uncommon -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} Uncommon Crate dengan harga ${Suncommon * count} MIKO`.trim(), m)
                    } else conn.reply(m.chat, `Uncommon Crate kamu tidak cukup`.trim(), m)
                    break
                case 'mythic':
                    if (global.db.data.users[m.sender].mythic >= count * 1) {
                        global.db.data.users[m.sender].miko += Smythic * count
                        global.db.data.users[m.sender].mythic -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} Mythic Crate dengan harga ${Smythic * count} MIKO`.trim(), m)
                    } else conn.reply(m.chat, `Mythic Crate kamu tidak cukup`.trim(), m)
                    break
                case 'legendary':
                    if (global.db.data.users[m.sender].legendary >= count * 1) {
                        global.db.data.users[m.sender].miko += Slegendary * count
                        global.db.data.users[m.sender].legendary -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} Legendary Crate dengan harga ${Slegendary * count} MIKO`.trim(), m)
                    } else conn.reply(m.chat, `Legendary Crate kamu tidak cukup`.trim(), m)
                    break
                case 'sampah':
                    if (global.db.data.users[m.sender].sampah >= count * 1) {
                        global.db.data.users[m.sender].sampah -= count * 1
                        global.db.data.users[m.sender].miko += Ssampah * count
                        conn.reply(m.chat, `Succes menjual ${count} sampah, dan anda mendapatkan ${Ssampah * count} MIKO`.trim(), m)
                    } else conn.reply(m.chat, `Sampah anda tidak cukup`.trim(), m)
                    break
                    case 'kaleng':
                        if (global.db.data.users[m.sender].kaleng >= count * 1) {
                            global.db.data.users[m.sender].kaleng -= count * 1
                            global.db.data.users[m.sender].miko += Skaleng * count
                            conn.reply(m.chat, `Succes menjual ${count} kaleng, dan anda mendapatkan ${Skaleng * count} MIKO`, m)
                        } else conn.reply(m.chat, `Kaleng anda tidak cukup`, m)
                        break
                    case 'kardus':
                        if (global.db.data.users[m.sender].kardus >= count * 1) {
                            global.db.data.users[m.sender].kardus -= count * 1
                            global.db.data.users[m.sender].miko += Skardus * count
                            conn.reply(m.chat, `Succes menjual ${count} kardus, dan anda mendapatkan ${Skardus * count} MIKO`, m)
                        } else conn.reply(m.chat, `Kardus anda tidak cukup`, m)
                        break
                    case 'botol':
                        if (global.db.data.users[m.sender].botol >= count * 1) {
                            global.db.data.users[m.sender].botol -= count * 1
                            global.db.data.users[m.sender].miko += Sbotol * count
                            conn.reply(m.chat, `Succes menjual ${count} botol, dan anda mendapatkan ${Sbotol * count} MIKO`, m)
                        } else conn.reply(m.chat, `Botol anda tidak cukup`, m)
                        break
                    case 'kayu':
                        if (global.db.data.users[m.sender].wood >= count * 1) {
                            global.db.data.users[m.sender].wood -= count * 1
                            global.db.data.users[m.sender].miko += Skayu * count
                            conn.reply(m.chat, `Succes menjual ${count} kayu, dan anda mendapatkan ${Skayu * count} MIKO`, m)
                        } else conn.reply(m.chat, `Kayu anda tidak cukup`, m)
                        break
                    case 'pisang':
                        if (global.db.data.users[m.sender].pisang >= count * 1) {
                            global.db.data.users[m.sender].pisang -= count * 1
                            global.db.data.users[m.sender].miko += Spisang * count
                            conn.reply(m.chat, `Succes menjual ${count} pisang, dan anda mendapatkan ${Spisang * count} MIKO`, m)
                        } else conn.reply(m.chat, `Pisang anda tidak cukup`, m) 
                        break
                    case 'anggur':
                        if (global.db.data.users[m.sender].anggur >= count * 1) {
                            global.db.data.users[m.sender].anggur -= count * 1
                            global.db.data.users[m.sender].miko += Sanggur * count
                            conn.reply(m.chat, `Succes menjual ${count} anggur, dan anda mendapatkan ${Sanggur * count} MIKO`, m)
                        } else conn.reply(m.chat, `Anggur anda tidak cukup`, m)
                        break
                    case 'mangga':
                        if (global.db.data.users[m.sender].mangga >= count * 1) {
                            global.db.data.users[m.sender].mangga -= count * 1
                            global.db.data.users[m.sender].miko += Smangga * count
                            conn.reply(m.chat, `Succes menjual ${count} mangga, dan anda mendapatkan ${Smangga * count} MIKO`, m)
                        } else conn.reply(m.chat, `Mangga anda tidak cukup`, m)
                        break
                    case 'jeruk':
                        if (global.db.data.users[m.sender].jeruk >= count * 1) {
                            global.db.data.users[m.sender].jeruk -= count * 1
                            global.db.data.users[m.sender].miko += Sjeruk * count
                            conn.reply(m.chat, `Succes menjual ${count} jeruk, dan anda mendapatkan ${Sjeruk * count} MIKO`, m)
                        } else conn.reply(m.chat, `Jeruk anda tidak cukup`, m)
                        break
                    case 'apel':
                        if (global.db.data.users[m.sender].apel >= count * 1) {
                            global.db.data.users[m.sender].apel -= count * 1
                            global.db.data.users[m.sender].miko += Sapel * count
                            conn.reply(m.chat, `Succes menjual ${count} apel, dan anda mendapatkan ${Sapel * count} MIKO`, m)
                        } else conn.reply(m.chat, `Apel anda tidak cukup`, m)
                        break
                    case 'berlian':
                        if (global.db.data.users[m.sender].berlian >= count * 1) {
                            global.db.data.users[m.sender].berlian -= count * 1
                            global.db.data.users[m.sender].miko += Sberlian * count
                            conn.reply(m.chat, `Succes menjual ${count} berlian, dan anda mendapatkan ${Sberlian * count} MIKO`, m)
                        } else conn.reply(m.chat, `Berlian anda tidak cukup`, m)
                        break
                   case 'emas':
                        if (global.db.data.users[m.sender].emas >= count * 1) {
                            global.db.data.users[m.sender].emas -= count * 1
                            global.db.data.users[m.sender].miko += Semasbiasa * count
                            conn.reply(m.chat, `Succes menjual ${count} emas, dan anda mendapatkan ${Semasbiasa * count} MIKO`, m)
                        } else conn.reply(m.chat, `Emas anda tidak cukup`, m)
                        break
                    case 'pet':
                        if (global.db.data.users[m.sender].pet >= count * 1) {
                            global.db.data.users[m.sender].pet -= count * 1
                            global.db.data.users[m.sender].miko += Spet * count
                            conn.reply(m.chat, `Succes menjual ${count} pet random, dan anda mendapatkan ${Spet * count} MIKO`, m)
                        } else conn.reply(m.chat, `Pet Random anda tidak cukup`, m)
                        break 
                 case 'makananpet':
                        if (global.db.data.users[m.sender].makananpet >= count * 1) {
                            global.db.data.users[m.sender].makananpet -= count * 1
                            global.db.data.users[m.sender].miko += Smakananpet * count
                            conn.reply(m.chat, `Succes menjual ${count} makanan pet, dan anda mendapatkan ${Smakananpet * count} MIKO`, m)
                        } else conn.reply(m.chat, `Makanan pet anda tidak cukup`, m)
                        break 
                case 'makanannaga':
                        if (global.db.data.users[m.sender].makanannaga >= count * 1) {
                            global.db.data.users[m.sender].makanannaga -= count * 1
                            global.db.data.users[m.sender].miko += Smakanannaga * count
                            conn.reply(m.chat, `Succes menjual ${count} makanan naga, dan anda mendapatkan ${Smakanannaga * count} MIKO`, m)
                        } else conn.reply(m.chat, `Makanan naga anda tidak cukup`, m)
                        break
                 case 'makananphonix':
                        if (global.db.data.users[m.sender].makananphonix >= count * 1) {
                            global.db.data.users[m.sender].makananphonix -= count * 1
                            global.db.data.users[m.sender].miko += Smakananphonix * count
                            conn.reply(m.chat, `Succes menjual ${count} makanan phonix, dan anda mendapatkan ${Smakananphonix * count} MIKO`, m)
                        } else conn.reply(m.chat, `Makanan phonix anda tidak cukup`, m)
                        break
                    case 'makanankyubi':
                        if (global.db.data.users[m.sender].makanankyuni >= count * 1) {
                            global.db.data.users[m.sender].makanankyubi -= count * 1
                            global.db.data.users[m.sender].miko += Smakanankyubi * count
                            conn.reply(m.chat, `Succes menjual ${count} makanan kyubi, dan anda mendapatkan ${Smakanankyubi* count} MIKO`, m)
                        } else conn.reply(m.chat, `Makanan kyubi anda tidak cukup`, m)
                        break
                    case 'makanangriffin':
                        if (global.db.data.users[m.sender].makanangriffin >= count * 1) {
                            global.db.data.users[m.sender].makanangriffin -= count * 1
                            global.db.data.users[m.sender].miko += Smakanangriffin * count
                            conn.reply(m.chat, `Succes menjual ${count} makanan griffin, dan anda mendapatkan ${Smakanangriffin * count} MIKO`, m)
                        } else conn.reply(m.chat, `Makanan griffin anda tidak cukup`, m)
                        break
                    case 'makanancentaur':
                        if (global.db.data.users[m.sender].makanancentaur >= count * 1) {
                            global.db.data.users[m.sender].makanancentaur -= count * 1
                            global.db.data.users[m.sender].miko += Smakanancentaur * count
                            conn.reply(m.chat, `Succes menjual ${count} makanan centaur, dan anda mendapatkan ${Smakanancentaur * count} MIKO`, m)
                        } else conn.reply(m.chat, `Makanan centaur anda tidak cukup`, m)
                        break
                    case 'aqua':
                        if (global.db.data.users[m.sender].aqua >= count * 1) {
                            global.db.data.users[m.sender].aqua -= count * 1
                            global.db.data.users[m.sender].miko += Saqua * count
                            conn.reply(m.chat, `Succes menjual ${count} aqua, dan anda mendapatkan ${Saqua * count} MIKO`, m)
                        } else conn.reply(m.chat, `Aqua anda tidak cukup`, m)
                        break
                    case 'pancingan':
                        if (global.db.data.users[m.sender].pancingan >= count * 1) {
                            global.db.data.users[m.sender].pancingan -= count * 1
                            global.db.data.users[m.sender].miko += Spancingan * count
                            conn.reply(m.chat, `Succes menjual ${count} pancingan, dan anda mendapatkan ${Spancingan * count} MIKO`, m)
                        } else conn.reply(m.chat, `Pancingan anda tidak cukup`, m)
                        break
                    case 'iron':
                        if (global.db.data.users[m.sender].iron >= count * 1) {
                            global.db.data.users[m.sender].iron -= count * 1
                            global.db.data.users[m.sender].miko += Siron * count
                            conn.reply(m.chat, `Succes menjual ${count} pancingan, dan anda mendapatkan ${Siron * count} MIKO`, m)
                        } else conn.reply(m.chat, `Iron anda tidak cukup`, m)
                        break
                    case 'string':
                        if (global.db.data.users[m.sender].string >= count * 1) {
                            global.db.data.users[m.sender].string -= count * 1
                            global.db.data.users[m.sender].miko += Sstring * count
                            conn.reply(m.chat, `Succes menjual ${count} string, dan anda mendapatkan ${Sstring * count} MIKO`, m)
                        } else conn.reply(m.chat, `String anda tidak cukup`, m)
                        break
                    case 'sword':
                        if (global.db.data.users[m.sender].sword >= count * 1) {
                            global.db.data.users[m.sender].sword -= count * 1
                            global.db.data.users[m.sender].miko += Ssword * count
                            conn.reply(m.chat, `Succes menjual ${count} sword, dan anda mendapatkan ${Ssword * count} MIKO`, m)
                        } else conn.reply(m.chat, `Sword anda tidak cukup`, m)
                        break
                    case 'batu':
                        if (global.db.data.users[m.sender].batu >= count * 1) {
                            global.db.data.users[m.sender].batu -= count * 1
                            global.db.data.users[m.sender].miko += Sbatu * count
                            conn.reply(m.chat, `Succes menjual ${count} batu, dan anda mendapatkan ${Sbatu * count} MIKO`, m)
                        } else conn.reply(m.chat, `Batu anda tidak cukup`, m)
                        break
                    case 'limit':
                        if (global.db.data.users[m.sender].limit >= count * 1) {
                            global.db.data.users[m.sender].limit -= count * 1
                            global.db.data.users[m.sender].miko += Slimit * count
                            conn.reply(m.chat, `Succes menjual ${count} limit, dan anda mendapatkan ${Slimit * count} MIKO`, m)
                        } else conn.reply(m.chat, `Limit anda tidak cukup`, m)
                        break
                    case 'diamond':
                       if (global.db.data.users[m.sender].diamond >= count * 1) {
                           global.db.data.users[m.sender].diamond -= count * 1
                           global.db.data.users[m.sender].miko += Sdiamond * count
                           conn.reply(m.chat, `Succes menjual ${count} Diamond, dan anda mendapatkan ${Sdiamond * count} MIKO`, m)
                        } else conn.reply(m.chat, `Diamond anda tidak cukup`, m)
                       break
                default:
                    return conn.reply(m.chat, Kchat, m)
            }
        }
    } catch (e) {
        conn.reply(m.chat, Kchat, m)
        console.log(e)
    }
}

handler.help = ['shop <sell|buy> <args>']
handler.tags = ['rpg']
    
handler.command = /^(shop)$/i
handler.limit = true
handler.group = true
export default handler
