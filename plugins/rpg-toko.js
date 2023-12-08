import fetch from 'node-fetch'
let wibu = flaaa.getRandom()
let thumb = await(await fetch(wibu + 'Shop')).buffer()
const potion = 15000
const Sgold = 3000
const Bgold = 10000
const Bstring = 50000
const Sstring = 1000
const Bbatu = 4000
const Sbatu = 350
const Bkayu = 6000
const Skayu = 1000
const Sarloji = 9000000
const Biron = 10000
const Siron = 1500
const Spotion = 5000 
const Bdiamond = 150000
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
const Bjagung = 550
const Bjeruk = 550
const Bapel = 550
const Bmangga = 550
const Bpisang = 350
const Spisang = 350
const Sjagung = 100
const Sjeruk = 300
const Sapel = 250
const Smangga = 300
const Banggur = 550
const Sanggur = 300
const Baqua = 50
const Bumpan = 150
const Bkucing = 500
const Banjing = 500
const Bkuda = 700
const Bfox = 100
const Bserigala = 100
const Bphonix = 200
const Bcentaur = 350
const Bgriffin = 350
const Bnaga = 100
const Bfood = 500
const Bpet = 40000
const Spet = 15000
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
    const _armor = global.db.data.users[m.sender].armor
    const armor = (_armor == 0 ? 20000 : '' || _armor == 1 ? 49999 : '' || _armor == 2 ? 99999 : '' || _armor == 3 ? 149999 : '' || _armor == 4 ? 299999 : '')
    const uparmor = (_armor == 0 ? 'Kamu belum mempunyai Armor' : '' || _armor == 1 ? 135 : '' || _armor == 2 ? 175 : '' || _armor== 3 ? 250 : '' || _armor == 4 ? 320 : '')
    const _pancing = global.db.data.users[m.sender].pancing
    const pancing = (_pancing == 0 ? 1700 : '' || _pancing == 1 ? 3000 : '' || _pancing == 2 ? 5500 : '' || _pancing == 3 ? 10500 : '')
    const uppancing = (_pancing == 0 ? 0 : '' || _pancing == 1 ? 25 : '' || _pancing == 2 ? 55 : '' || _pancing == 3 ? 75 : '')
    const durfishingrod = (_pancing == 0 ? 0 : '' || _pancing == 1 ? 50 : '' || _pancing == 2 ? 70 : '' || _pancing == 3 ? 100 : '')
    const refishingrod = (_pancing == 0 ? 0 : '' || _pancing == 1 ? 10 : '' || _pancing == 2 ? 35 : '' || _pancing == 3 ? 65 : '')
    const drefishingrod = (_pancing == 0 ? 0 : '' || _pancing == 1 ? 10 : '' || _pancing == 2 ? 25 : '' || _pancing == 3 ? 40 : '')
    
    const _pickaxe = global.db.data.users[m.sender].pickaxe
    const pickaxe = (_pickaxe == 0 ? 1700 : '' || _pickaxe == 1 ? 3000 : '' || _pickaxe == 2 ? 5500 : '' || _pickaxe == 3 ? 10500 : '' || _pickaxe == 4 ? 27000 : '')
    const uppickaxe = (_pickaxe == 0 ? 0 : '' || _pickaxe == 1 ? 25 : '' || _pickaxe == 2 ? 55 : '' || _pickaxe == 3 ? 75 : '' || _pickaxe == 4 ? 120 : '')
    const durpickaxe = (_pickaxe == 0 ? 0 : '' || _pickaxe == 1 ? 40 : '' || _pickaxe == 2 ? 60 : '' || _pickaxe == 3 ? 80 : '' || _pickaxe == 4 ? 100 : '')
    const repickaxe = (_pickaxe == 0 ? 0 : '' || _pickaxe == 1 ? 10 : '' || _pickaxe == 2 ? 35 : '' || _pickaxe == 3 ? 65 : '' || _pickaxe == 4 ? 100 : '')
    const drepickaxe = (_pickaxe == 0 ? 0 : '' || _pickaxe == 1 ? 10 : '' || _pickaxe == 2 ? 25 : '' || _pickaxe == 3 ? 40 : '' || _pickaxe == 4 ? 60 : '')
    
    const _sword = global.db.data.users[m.sender].sword
    const sword = (_sword == 0 ? 1700 : '' || _sword == 1 ? 3000 : '' || _sword == 2 ? 5500 : '' || _sword == 3 ? 10500 : '' || _sword == 4 ? 27000 : '')
    const upsword = (_sword == 0 ? 0 : '' || _sword == 1 ? 15 : '' || _sword == 2 ? 40 : '' || _sword== 3 ? 65 : '' || _sword == 4 ? 100 : '')
    const dursword = (_sword == 0 ? 0 : '' || _sword == 1 ? 40 : '' || _sword == 2 ? 60 : '' || _sword == 3 ? 80 : '' || _sword == 4 ? 100 : '')
    const resword = (_sword == 0 ? 0 : '' || _sword == 1 ? 10 : '' || _sword == 2 ? 35 : '' || _sword == 3 ? 65 : '' || _sword == 4 ? 100 : '')
    const dresword = (_sword == 0 ? 0 : '' || _sword == 1 ? 10 : '' || _sword == 2 ? 25 : '' || _sword == 3 ? 40 : '' || _sword == 4 ? 60 : '')
    
    let upgrd = (args[0] || '').toLowerCase()
    let type = (args[0] || '').toLowerCase()
    let _type = (args[1] || '').toLowerCase()
    let jualbeli = (args[0] || '').toLowerCase()
    const Kchat = `
*🎒 S H O P*
*🧪 Penggunaan :*
_${usedPrefix}toko <Buy|sell> <item> <jumlah>_
Contoh penggunaan: _*${usedPrefix}toko buy potion 1*_
*📮 Note :* 
bila sudah tidak ada harganya, berarti sudah tidak bisa dibeli / sudah level max
🛍️ List Barang:
⛊━━━┄┄┄┄┄┄┄┄┄━━━⛊
*♻ Barang   | 💲 Harga beli*
⛊━━━┄┄┄┄┄┄┄┄┄━━━⛊
*🥤 Potion:* ${potion} MIKO
*🍶 Aqua:* ${Baqua} MIKO
*🪙  Gold :* ${Bgold} MIKO
*💎 Diamond:* ${Bdiamond} MIKO
*🪨 Batu:* ${Bbatu} MIKO
*🪵 Kayu:* ${Bkayu} MIKO
*🕸️ String:* ${Bstring} MIKO
*⛓️ Iron:* ${Biron} MIKO
*🗑️ Sampah:* ${Bsampah} MIKO
*📦 Common:* ${Bcommon}  MIKO
*🛍️ Uncommon:* ${Buncommon} MIKO
*🎁 Mythic:* ${Bmythic} MIKO
*🧰 Legendary:* ${Blegendary} MIKO
*🥼 Armor:* ${armor} MIKO
*🎣 Fishingrod:* ${pancing} MIKO
*🪱 Umpan:* ${Bumpan} MIKO
*🌾 Bibit mangga:* ${Bjagung} MIKO
*🌾 Bibit apel:* ${Bapel} MIKO
*🌾 Bibit jeruk:* ${Bjeruk} MIKO
*🌾 Bibit pisang:* ${Bpisang} MIKO
*🌾 Bibit anggur:* ${Banggur} MIKO
⛊━━━┄┄┄┄┄┄┄┄┄━━━⛊
*♻ Barang   | 💲 Harga Jual*
⛊━━━┄┄┄┄┄┄┄┄┄━━━⛊
*🥤 Potion:* ${Spotion} MIKO
*🪙 Gold:* ${Sgold} MIKO
*🧭 Arloji:* ${Sarloji} MIKO
*🪨 Batu:* ${Sbatu} MIKO
*🪵 Kayu:* ${Skayu} MIKO
*🕸️ String:* ${Sstring} MIKO
*⛓️ Iron:* ${Siron} MIKO
*💎 Diamond:* ${Sdiamond} MIKO
*🗑️ Sampah:* ${Ssampah} MIKO
*📦 Common:* ${Scommon} MIKO
*🛍️ Uncommon:* ${Suncommon} MIKO
*🎁 Mythic:* ${Smythic} MIKO
*🧰 Legendary:* ${Slegendary} MIKO
*🥭 Mangga:* ${Sjagung} MIKO
*🍎 Apel:* ${Sapel} MIKO
*🍊 Jeruk:* ${Sjeruk} MIKO
*🍌 Pisang:* ${Spisang} MIKO
*🍇 Anggur:* ${Sanggur} MIKO
⛊━━━┄┄┄┄┄┄┄┄┄━━━⛊
*🦊 Pet.      | 💲 Harga Beli*
⛊━━━┄┄┄┄┄┄┄┄┄━━━⛊
*🐱 Kucing:* ${Bkucing} 🪙
*🐶 Anjing:* ${Banjing} 🪙
*🦊 Fox:* ${Bfox} 🪙 
*🐴 Kuda:* ${Bkuda} 🪙 
*🐺 Serigala:* ${Bserigala} 🪙
*🦜 Phonix:* ${Bphonix} 🪙
*🐎 Centaur:* ${Bcentaur} 🪙
*🦅 Griffin:* ${Bgriffin} 🪙
*🐉 Naga:* ${Bnaga} 🪙
*🥩 Foodpet:* ${Bfood} 💲
⛊━━━┄┄┄┄┄┄┄┄┄━━━⛊
*🔨 Upgrade & Repair | 💲 Harga*
⛊━━━┄┄┄┄┄┄┄┄┄━━━⛊
*◪ Upgrade ⏫*
*🥼 Armor:* ${uparmor} 💎 ${_armor == 0 ? '(Belum memiliki)' : _armor == 5 ? '( *Level max* )' : ''}
*🎣 Fishingrod:* ${uppancing} 💎
╰▸ *Durability:* ${durfishingrod} ${_pancing == 0 ? '(Belum memiliki)' : _pancing == 5 ? '( *Level max* )' : ''}
*⛏️ Pickaxe:* ${uppickaxe} 💎
╰▸ *Durability:* ${durpickaxe} ${_pickaxe == 0 ? '(Belum memiliki)' : _pickaxe == 5 ? '( *Level max* )' : ''}
*🗡️ Sword:* ${upsword} 💎
╰▸ *Durability:* ${dursword} ${_sword == 0 ? '(Belum memiliki)' : _sword == 5 ? '( *Level max* )' : ''}
⛊━━━┄┄┄┄┄┄┄┄┄━━━⛊
*◪ Repair 🔨*
*🎣 Fishingrod:* ${refishingrod} 💎 ${_pancing == 0 ? '(Belum memiliki)' : _pancing == 5 ? '( *Level max* )' : ''}
 + ${drefishingrod} Durability 
*⛏️ Pickaxe:* ${repickaxe} 💎 ${_pickaxe == 0 ? '(Belum memiliki)' : _pickaxe == 5 ? '( *Level max* )' : ''}
 + ${drepickaxe} Durability
*🗡️ Sword:* ${resword} 💎 ${_sword == 0 ? '(Belum memiliki)' : _sword == 5 ? '( *Level max* )' : ''}
 + ${dresword} Durability
⛊━━━┄┄┄┄┄┄┄┄┄━━━⛊
`.trim()
    try {
        if (/toko|buy/i.test(command)) {
            const count = args[2] && args[2].length > 0 ? Math.min(99999999999999999999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
            const sampah = global.db.data.users[m.sender].sampah
            switch (jualbeli) {
            case 'buy':
                switch (_type) {
                	case 'kucing':
                if (global.db.data.users[m.sender].kucing == 1) return conn.reply(m.chat, 'Kamu sudah memiliki pet ini', m)
                            if (global.db.data.users[m.sender].emas >= Bkucing * count) {
                                global.db.data.users[m.sender].kucing += count * 1
                                global.db.data.users[m.sender].emas -= Bkucing * count
                                conn.reply(m.chat, `✔️ Sukses Membeli Pet Kucing 🐱 Dengan Harga ${Bkucing * count} Gold 🪙`, m)
                            } else conn.reply(m.chat, `Gold Anda Tidak Cukup`, m)
                        
                        break
                    case 'anjing':
                    if (global.db.data.users[m.sender].anjing == 1) return conn.reply(m.chat, 'Kamu sudah memiliki pet ini', m)
                            if (global.db.data.users[m.sender].emas >= Bkucing * count) {
                                global.db.data.users[m.sender].anjing += count * 1
                                global.db.data.users[m.sender].emas -= Bkucing * count
                                conn.reply(m.chat, `✔️ Sukses Membeli Pet Anjing 🐶 Dengan Harga ${Bkucing * count} Gold 🪙`, m)
                            } else conn.reply(m.chat, `Gold Anda Tidak Cukup`, m)
                        
                        break
                    case 'kuda':
                    if (global.db.data.users[m.sender].kuda == 1) return conn.reply(m.chat, 'Kamu sudah memiliki pet ini', m)
                            if (global.db.data.users[m.sender].emas >= Bkuda * count) {
                                global.db.data.users[m.sender].kuda += count * 1
                                global.db.data.users[m.sender].emas -= Bkuda * count
                                conn.reply(m.chat, `✔️ Sukses Membeli Pet Kuda 🐴 Dengan Harga ${Bkuda * count} Gold 🪙`, m)
                            } else conn.reply(m.chat, `Gold Anda Tidak Cukup`, m)
                        
                        break
                    case 'fox':
                    if (global.db.data.users[m.sender].rubah == 1) return conn.reply(m.chat, 'Kamu sudah memiliki pet ini', m)
                            if (global.db.data.users[m.sender].emas >= Bfox * count) {
                                global.db.data.users[m.sender].rubah += count * 1
                                global.db.data.users[m.sender].emas -= Bfox * count
                                conn.reply(m.chat, `✔️ Sukses Membeli Pet Rubah 🦊 Dengan Harga ${Bfox * count} Gold 🪙`, m)
                            } else conn.reply(m.chat, `Gold Anda Tidak Cukup`, m)
                        
                        break
                 case 'serigala':
                 if (global.db.data.users[m.sender].serigala == 1) return conn.reply(m.chat, 'Kamu sudah memiliki pet ini', m)
                            if (global.db.data.users[m.sender].emas >= Bserigala * count) {
                                global.db.data.users[m.sender].serigala += count * 1
                                global.db.data.users[m.sender].emas -= Bserigala * count
                                conn.reply(m.chat, `✔️ Sukses Membeli Pet Serigala 🐺 Dengan Harga ${Bserigala * count} Gold 🪙`, m)
                            } else conn.reply(m.chat, `Gold Anda Tidak Cukup`, m)
                        
                        break
                    case 'phonix':
                    if (global.db.data.users[m.sender].phonix == 1) return conn.reply(m.chat, 'Kamu sudah memiliki pet ini', m)
                            if (global.db.data.users[m.sender].emas >= Bphonix * count) {
                                global.db.data.users[m.sender].phonix += count * 1
                                global.db.data.users[m.sender].emas -= Bphonix * count
                                conn.reply(m.chat, `✔️ Sukses Membeli Pet Phonix 🦜 Dengan Harga ${Bphonix * count} Gold 🪙`, m)
                            } else conn.reply(m.chat, `Gold Anda Tidak Cukup`, m)
                        
                        break
                case 'centaur':
                if (global.db.data.users[m.sender].centaur == 1) return conn.reply(m.chat, 'Kamu sudah memiliki pet ini', m)
                            if (global.db.data.users[m.sender].emas >= Bcentaur * count) {
                                global.db.data.users[m.sender].centaur += count * 1
                                global.db.data.users[m.sender].emas -= Bcentaur* count
                                conn.reply(m.chat, `✔️ Sukses Membeli Pet Centaur 🐎 Dengan Harga ${Bcentaur * count} Gold 🪙`, m)
                            } else conn.reply(m.chat, `Gold Anda Tidak Cukup`, m)
                        
                        break
                 case 'griffin':
                 if (global.db.data.users[m.sender].griffin == 1) return conn.reply(m.chat, 'Kamu sudah memiliki pet ini', m)
                            if (global.db.data.users[m.sender].emas >= Bgriffin * count) {
                                global.db.data.users[m.sender].griffin += count * 1
                                global.db.data.users[m.sender].emas -= Bgriffin * count
                                conn.reply(m.chat, `✔️ Sukses Membeli Pet Griffin 🦅 Dengan Harga ${Bgriffin * count} Gold 🪙`, m)
                            } else conn.reply(m.chat, `Gold Anda Tidak Cukup`, m)
                        
                        break
               case 'naga':
               if (global.db.data.users[m.sender].naga == 1) return conn.reply(m.chat, 'Kamu sudah memiliki pet ini', m)
                            if (global.db.data.users[m.sender].emas >= Bnaga * count) {
                                global.db.data.users[m.sender].naga += count * 1
                                global.db.data.users[m.sender].emas -= Bnaga * count
                                conn.reply(m.chat, `✔️ Sukses Membeli Pet Naga 🐉 Dengan Harga ${Bnaga * count} Gold 🪙`, m)
                            } else conn.reply(m.chat, `Gold Anda Tidak Cukup`, m)
                        
                        break
                case 'foodpet':
                            if (global.db.data.users[m.sender].miko >= Bfood * count) {
                                global.db.data.users[m.sender].makananpet += count * 1
                                global.db.data.users[m.sender].miko -= Bfood * count
                                conn.reply(m.chat, `✔️ Sukses Membeli FoodPet 🥩 Dengan Harga ${Bfood * count} MIKO 💹`, m)
                            } else conn.reply(m.chat, `MIKO Anda Tidak Cukup`, m)
                        
                        break
                    case 'potion':
                            if (global.db.data.users[m.sender].miko >= potion * count) {
                                global.db.data.users[m.sender].miko -= potion * count
                                global.db.data.users[m.sender].potion += count * 1
                                conn.reply(m.chat, `✔️ Sukses Membeli ${count} Potion 🥤 Dengan Harga ${potion * count} MIKO 💹\n\n📍 Gunakan Potion Dengan Ketik: *${usedPrefix}use potion <jumlah>*`, m)
                            } else conn.reply(m.chat, `MIKO Anda Tidak Cukup Untuk Membeli ${count} Potion Dengan Harga ${potion * count} MIKO `,)
                        break
                    case `gold`:
                            if (global.db.data.users[m.sender].miko >= Bgold * count) {
                            global.db.data.users[m.sender].miko -= Bgold * count
                            global.db.data.users[m.sender].emas += count * 1
                            conn.reply(m.chat, `Sukses Membeli ${count} Gold 🪙 Dengan Harga ${Bgold * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO Anda Tidak Cukup Untuk Membeli ${count} Gold Dengan Harga ${Bgold * count} MIKO `,)
                        break
                    case 'bibitmangga':
                            if (global.db.data.users[m.sender].miko >= Bjagung * count) {
                            global.db.data.users[m.sender].miko -= Bjagung * count
                            global.db.data.users[m.sender].bibitmangga += count * 1
                            conn.reply(m.chat, `✔️ Sukses Membeli ${count} Bibit Mangga 🌾\nDengan Harga ${Bapel * count} MIKO 💹`, m)
                            } else conn.reply(m.chat, `MIKO Anda Tidak Cukup Untuk Membeli ${count} Bibit Mangga 🌾\nDengan Harga ${Bapel * count} MIKO 💹`,)
                        break
                    case 'bibitapel':
                            if (global.db.data.users[m.sender].miko >= Bapel * count) {
                            global.db.data.users[m.sender].miko -= Bapel* count
                            global.db.data.users[m.sender].bibitapel += count * 1
                            conn.reply(m.chat, `✔️ Sukses Membeli ${count} Bibit Apel🌾\nDengan Harga ${Bapel * count} MIKO 💹`, m)
                            } else conn.reply(m.chat, `MIKO Anda Tidak Cukup Untuk Membeli ${count} Bibit Apel 🌾\nDengan Harga ${Bapel * count} MIKO 💹`,)
                        break
                    case 'bibitjeruk':
                            if (global.db.data.users[m.sender].miko >= Bapel * count) {
                            global.db.data.users[m.sender].miko -= Bapel* count
                            global.db.data.users[m.sender].bibitjeruk += count * 1
                            conn.reply(m.chat, `✔️ Sukses Membeli ${count} Bibit Jeruk🌾\nDengan Harga ${Bapel * count} MIKO 💹`, m)
                            } else conn.reply(m.chat, `MIKO Anda Tidak Cukup Untuk Membeli ${count} Bibit Jeruk 🌾\nDengan Harga ${Bapel * count} MIKO 💹`,)
                        break
                     case 'bibitpisang':
                            if (global.db.data.users[m.sender].miko >= Bapel * count) {
                            global.db.data.users[m.sender].miko -= Bapel* count
                            global.db.data.users[m.sender].bibitpisang += count * 1
                            conn.reply(m.chat, `✔️ Sukses Membeli ${count} Bibit Pisang🌾\nDengan Harga ${Bapel * count} MIKO 💹`, m)
                            } else conn.reply(m.chat, `MIKO Anda Tidak Cukup Untuk Membeli ${count} Bibit Pisang 🌾\nDengan Harga ${Bapel * count} MIKO 💹`,)
                        break
                    case 'bibitanggur':
                            if (global.db.data.users[m.sender].miko >= Bapel * count) {
                            global.db.data.users[m.sender].miko -= Bapel* count
                            global.db.data.users[m.sender].bibitanggur += count * 1
                            conn.reply(m.chat, `✔️ Sukses Membeli ${count} Bibit Anggur🌾\nDengan Harga ${Bapel * count} MIKO 💹`, m)
                            } else conn.reply(m.chat, `MIKO Anda Tidak Cukup Untuk Membeli ${count} Bibit Anggur 🌾\nDengan Harga ${Bapel * count} MIKO 💹`,)
                        break
                    case 'diamond':
                            if (global.db.data.users[m.sender].miko >= Bdiamond * count) {
                                global.db.data.users[m.sender].diamond += count * 1
                                global.db.data.users[m.sender].miko -= Bdiamond * count
                                conn.reply(m.chat, `✔️ Sukses Membeli ${count} Diamond 💎 Dengan Harga ${Bdiamond * count} MIKO 💹`, m)
                            } else conn.reply(m.chat, `MIKO Anda Tidak Cukup`, m)
                        break
                    case 'batu':
                           if (global.db.data.users[m.sender].miko >= Bbatu * count) {
                               global.db.data.users[m.sender].batu += count * 1
                               global.db.data.users[m.sender].miko -= Bbatu * count
                               conn.reply(m.chat, `✔️ Sukses Membeli ${count} Batu 🪨 Dengan Harga ${Bbatu * count} MIKO 💹`, m)
                            } else conn.reply(m.chat, `MIKO Anda Tidak Cukup`, m)
                        break
                    case 'umpan':
                           if (global.db.data.users[m.sender].miko >= Bumpan * count) {
                               global.db.data.users[m.sender].umpan += count * 1
                               global.db.data.users[m.sender].miko -= Bumpan * count
                               conn.reply(m.chat, `✔️ Sukses Membeli ${count} Umpan 🪱 Dengan Harga ${Bumpan * count} MIKO 💹`, m)
                            } else conn.reply(m.chat, `MIKO Anda Tidak Cukup`, m)
                        break
                    case 'kayu':
                            if (global.db.data.users[m.sender].miko >= Bkayu * count) {
                                global.db.data.users[m.sender].wood += count * 1
                                global.db.data.users[m.sender].miko -= Bkayu * count
                                conn.reply(m.chat, `✔️ Sukses Membeli ${count} Kayu 🪵 Dengan Harga ${Bkayu * count} MIKO 💹`, m)
                            } else conn.reply(m.chat, `MIKO Anda Tidak Cukup`, m)
                        break
                     case 'aqua':
                            if (global.db.data.users[m.sender].miko >= Baqua * count) {
                                global.db.data.users[m.sender].aqua += count * 1
                                global.db.data.users[m.sender].miko -= Bkayu * count
                                conn.reply(m.chat, `✔️ Sukses Membeli ${count} Aqua 🍶 Dengan Harga ${Baqua * count} MIKO 💹`, m)
                            } else conn.reply(m.chat, `MIKO Anda Tidak Cukup`, m)
                        break
                    case 'string':
                            if (global.db.data.users[m.sender].miko >= Bstring * count) {
                                global.db.data.users[m.sender].string += count * 1
                                global.db.data.users[m.sender].miko -= Bstring * count
                                conn.reply(m.chat, `✔️ Sukses Membeli ${count} String 🕸️ Dengan Harga ${Bstring * count} MIKO 💹`, m)
                            } else conn.reply(m.chat, `MIKO Anda Tidak Cukup`, m)
                        break
                    case 'iron':
                           if (global.db.data.users[m.sender].miko >= Biron * count) {
                               global.db.data.users[m.sender].iron += count * 1
                               global.db.data.users[m.sender].miko -= Biron * count
                               conn.reply(m.chat, `✔️ Sukses Membeli ${count} Iron ⛓️ Dengan Harga ${Biron * count} MIKO 💹`, m)
                            } else conn.reply(m.chat, `MIKO Anda Tidak Cukup`, m)
                        break
                    case 'common':
                            if (global.db.data.users[m.sender].miko >= Bcommon * count) {
                                global.db.data.users[m.sender].common += count * 1
                                global.db.data.users[m.sender].miko -= Bcommon * count
                                conn.reply(m.chat, `✔️ Sukses Membeli ${count} Common Crate 📦 Dengan Harga ${Bcommon * count} MIKO 💹`, m)
                            } else conn.reply(m.chat, `MIKO Anda Tidak Cukup Untuk Membeli ${count} Common Crate 📦 Dengan Harga ${Bcommon * count} MIKO 💹 \n\n📍 Buka Crate Dengan Ketik: *${usedPrefix}open common*`, m)
                        
                        break
                    case 'uncommon':
                            if (global.db.data.users[m.sender].miko >= Buncommon * count) {
                                global.db.data.users[m.sender].uncommon += count * 1
                                global.db.data.users[m.sender].miko -= Buncommon * count
                                conn.reply(m.chat, `✔️ Sukses Membeli ${count} Uncommon Crate Dengan Harga ${Buncommon * count} MIKO 💹`, m)
                            } else conn.reply(m.chat, `MIKO Anda Tidak Cukup Untuk Membeli ${count} Uncommon Crate 🛍️ Dengan Harga ${Buncommon * count} MIKO 💹\n\n📍 Buka Crate Dengan Ketik: *${usedPrefix}open uncommon*`, m)
                        
                        break
                    case 'mythic':
                            if (global.db.data.users[m.sender].miko >= Bmythic * count) {
                                    global.db.data.users[m.sender].mythic += count * 1
                                global.db.data.users[m.sender].miko -= Bmythic * count
                                conn.reply(m.chat, `✔️ Sukses Membeli ${count} Mythic Crate 🎁 Dengan Harga ${Bmythic * count} MIKO 💹`, m)
                            } else conn.reply(m.chat, `MIKO Anda Tidak Cukup Untuk Membeli ${count} Mythic Crate 🎁 Dengan Harga ${Bmythic* count} MIKO\n\n📍 Buka Crate Dengan Ketik:*${usedPrefix}open mythic*`, m)
                        
                        break
                    case 'legendary':
                            if (global.db.data.users[m.sender].miko >= Blegendary * count) {
                                global.db.data.users[m.sender].legendary += count * 1
                                global.db.data.users[m.sender].miko -= Blegendary * count
                                conn.reply(m.chat, `✔️ Sukses Membeli ${count} Legendary Crate 🧰 Dengan Harga ${Blegendary * count} MIKO 💹`, m)
                            } else conn.reply(m.chat, `MIKO Anda Tidak Cukup Untuk Membeli ${count} Legendary Crate 🧰 Dengan Harga ${Blegendary * count} MIKO  💹\n\n📍 Buka Crate Dengan Ketik: *${usedPrefix}open legendary*`, m)
                        
                        break
                    // case 'pet':
                    //         if (global.db.data.users[m.sender].miko >= Bpet * count) {
                    //             global.db.data.users[m.sender].pet += count * 1
                    //             global.db.data.users[m.sender].miko -= Bpet * count
                    //             conn.reply(m.chat, `✔️ Sukses Membeli ${count} Pet Crate 📫 Dengan Harga ${Bpet * count} MIKO 💹`, m)
                    //         } else conn.reply(m.chat, `MIKO Anda Tidak Cukup Untuk Membeli ${count} Pet Crate 📫 Dengan Harga ${Bpet * count} MIKO  💹\n\n📍 Buka Crate Dengan Ketik: *${usedPrefix}open legendary*`, m)
                        
                    //     break
                    case 'sampah':
                            if (global.db.data.users[m.sender].miko >= Bsampah * count) {
                                global.db.data.users[m.sender].sampah += count * 1
                                global.db.data.users[m.sender].miko -= Bsampah * count
                                conn.reply(m.chat, `✔️ Sukses Membeli ${count} Sampah 🗑️ Dengan Harga ${Bsampah * count} MIKO 💹 `, m)
                            } else conn.reply(m.chat, `MIKO Anda Tidak Cukup Untuk Membeli ${count} Sampah 🗑️ Dengan Harga ${Bsampah * count} MIKO 💹`.trim(), m)
                        
                        break
                    case 'armor':
                            if (global.db.data.users[m.sender].armor == 1) return conn.reply(m.chat, 'Kamu sudah memiliki Armor', m)
                            if (global.db.data.users[m.sender].miko > armor) {
                                global.db.data.users[m.sender].armor += 1
                                global.db.data.users[m.sender].miko -= armor * 1
                                conn.reply(m.chat, `✔️ Sukses Membeli Armor 🥼 Seharga ${armor} MIKO` ,m)
                            } else conn.reply(m.chat, `MIKO Mu Tidak Cukup Untuk Membeli Armor 🥼 Seharga ${armor} MIKO 💹`, m)
                        
                        break
                     case 'fishingrod':
                            if (global.db.data.users[m.sender].pancing == 1) return conn.reply(m.chat, 'Kamu sudah memiliki pancingan', m)
                            if (global.db.data.users[m.sender].miko > armor) {
                                global.db.data.users[m.sender].pancing += 1
                                global.db.data.users[m.sender].miko -= armor * 1
                                global.db.data.users[m.sender].fishingroddurability = durfishingrod
                                conn.reply(m.chat, `✔️ Sukses Membeli Pancingan 🎣 Seharga ${pancing} MIKO` ,m)
                            } else conn.reply(m.chat, `MIKO Mu Tidak Cukup Untuk Membeli Pancingan 🎣 Seharga ${pancing} MIKO 💹`, m)
                        
                        break
                    default:
                        return conn.reply(m.chat, Kchat, m, { contextInfo: { externalAdReply: { showAdAttribution: true,
                    mediaUrl: sig,
                    mediaType: "VIDEO",
                    description: ucapan, 
                    title: wm,
                    body: bottime,
                    thumbnail: thumb,
                    sourceUrl: sgc
                }
                } })
                }
                break
            case 'sell': 
                switch (_type) {
                    case 'potion':
                        if (global.db.data.users[m.sender].potion >= count * 1) {
                            global.db.data.users[m.sender].miko += Spotion * count
                            global.db.data.users[m.sender].potion -= count * 1
                            conn.reply(m.chat, `✔️ Sukses Menjual ${count} Potion 🥤 Dengan Harga ${Spotion * count} MIKO 💹 `.trim(), m)
                        } else conn.reply(m.chat, `🥤 Potion Kamu Tidak Cukup`.trim(), m)
                        break
                    case 'gold':
                        if (global.db.data.users[m.sender].gold >= count * 1) {
                            global.db.data.users[m.sender].miko += Sgold * count
                            global.db.data.users[m.sender].gold -= count * 1
                            conn.reply(m.chat, `✔️ Sukses Menjual ${count} Gold 🪙 Dengan Harga ${Sgold * count} MIKO 💹`.trim(), m)
                        } else conn.reply(m.chat, `Gold Kamu Tidak Cukup`.trim(), m)
                        break
                    case 'arloji':
                        if (global.db.data.users[m.sender].arlok >= count * 1) {
                            global.db.data.users[m.sender].miko += Sarloji * count
                            global.db.data.users[m.sender].arlok -= count * 1
                            conn.reply(m.chat, `✔️ Sukses Menjual ${count} Arloji 🧭 Dengan Harga ${Sarloji * count} MIKO 💹`.trim(), m)
                        } else conn.reply(m.chat, `🧭 Arloji Kamu Tidak Cukup`.trim(), m)
                        breakF
                    case 'batu':
                        if (global.db.data.users[m.sender].batu >= count * 1) {
                            global.db.data.users[m.sender].miko += Sbatu * count
                            global.db.data.users[m.sender].batu -= count * 1
                            conn.reply(m.chat, `✔️ Sukses Menjual ${count} Batu 🪨 Dengan Harga ${Sbatu * count} MIKO 💹`.trim(), m)
                        } else conn.reply(m.chat, `🪨 Batu Kamu Tidak Cukup`.trim(), m)
                        break
                    case 'kayu':
                        if (global.db.data.users[m.sender].wood >= count * 1) {
                            global.db.data.users[m.sender].miko += Skayu * count
                            global.db.data.users[m.sender].wood -= count * 1
                            conn.reply(m.chat, `✔️ Sukses Menjual ${count} Kayu 🪵 Dengan Harga ${Skayu * count} MIKO 💹`.trim(), m)
                        } else conn.reply(m.chat, `🪵 Kayu Kamu Tidak Cukup`.trim(), m)
                        break
                    case 'string':
                        if (global.db.data.users[m.sender].string >= count * 1) {
                            global.db.data.users[m.sender].miko += Sstring * count
                            global.db.data.users[m.sender].string -= count * 1
                            conn.reply(m.chat, `✔️ Sukses Menjual ${count} String 🕸️ Dengan Harga ${Sstring * count} MIKO 💹`.trim(), m)
                        } else conn.reply(m.chat, `🕸️ String Kamu Tidak Cukup`.trim(), m)
                        break
                    case 'iron':
                        if (global.db.data.users[m.sender].iron >= count * 1) {
                            global.db.data.users[m.sender].miko += Siron * count
                            global.db.data.users[m.sender].iron -= count * 1
                            conn.reply(m.chat, `✔️ Sukses Menjual ${count} Iron ⛓️ Dengan Harga ${Siron * count} MIKO 💹`.trim(), m)
                        } else conn.reply(m.chat, `⛓️ Iron Kamu Tidak Cukup`.trim(), m)
                        break
                    case 'common':
                        if (global.db.data.users[m.sender].common >= count * 1) {
                            global.db.data.users[m.sender].miko += Scommon * count
                            global.db.data.users[m.sender].common -= count * 1
                            conn.reply(m.chat, `✔️ Sukses Menjual ${count} Common Crate 📦 Dengan Harga ${Scommon * count} MIKO 💹`.trim(), m)
                        } else conn.reply(m.chat, `📦 Common Crate Kamu Tidak Cukup`.trim(), m)
                        break
                    case 'uncommon':
                        if (global.db.data.users[m.sender].uncommon >= count * 1) {
                            global.db.data.users[m.sender].miko += Suncommon * count
                            global.db.data.users[m.sender].uncommon -= count * 1
                            conn.reply(m.chat, `✔️ Sukses Menjual ${count} Uncommon Crate 🛍️ Dengan Harga ${Suncommon * count} MIKO 💹`.trim(), m)
                        } else conn.reply(m.chat, `🛍️ Uncommon Crate Kamu Tidak Cukup`.trim(), m)
                        break
                    case 'mythic':
                        if (global.db.data.users[m.sender].mythic >= count * 1) {
                            global.db.data.users[m.sender].miko += Smythic * count
                            global.db.data.users[m.sender].mythic -= count * 1
                            conn.reply(m.chat, `✔️ Sukses Menjual ${count} Mythic Crate 🎁 Dengan Harga ${Smythic * count} MIKO 💹`.trim(), m)
                        } else conn.reply(m.chat, `🎁 Mythic Crate Kamu Tidak Cukup `.trim(), m)
                        break
                    case 'legendary':
                        if (global.db.data.users[m.sender].legendary >= count * 1) {
                            global.db.data.users[m.sender].miko += Slegendary * count
                            global.db.data.users[m.sender].legendary -= count * 1
                            conn.reply(m.chat, `✔️ Sukses Menjual ${count} Legendary Crate 🧰 Dengan Harga ${Slegendary * count} MIKO 💹`.trim(), m)
                        } else conn.reply(m.chat, `🧰 Legendary Crate Kamu Tidak Cukup `.trim(), m)
                        break
                     case 'pet':
                        if (global.db.data.users[m.sender].pet >= count * 1) {
                            global.db.data.users[m.sender].miko += Spet * count
                            global.db.data.users[m.sender].pet -= count * 1
                            conn.reply(m.chat, `✔️ Sukses Menjual ${count} Pet Crate 📫 Dengan Harga ${Spet * count} MIKO 💹`.trim(), m)
                        } else conn.reply(m.chat, `📫 Pet Crate Kamu Tidak Cukup `.trim(), m)
                        break
                    case 'sampah':
                        if (global.db.data.users[m.sender].sampah >= count * 1) {
                            global.db.data.users[m.sender].sampah -= count * 1
                            global.db.data.users[m.sender].miko += Ssampah * count
                            conn.reply(m.chat, `✔️ Sukses Menjual ${count} Sampah 🗑️ Dengan Harga ${Ssampah * count} MIKO 💹`, m)
                        } else conn.reply(m.chat, `🗑️ Sampah Anda Tidak Cukup `, m)
                        break
                    case 'diamond':
                        if (global.db.data.users[m.sender].diamond >= count * 1) {
                            global.db.data.users[m.sender].diamond -= count * 1
                            global.db.data.users[m.sender].miko += Sdiamond * count
                            conn.reply(m.chat, `✔️ Sukses Menjual ${count} Diamond 💎 Dengan Harga ${Sdiamond * count} MIKO 💹`, m)
                        } else conn.reply(m.chat, `💎 Diamond Anda Tidak Cukup `, m)
                        break
                     case 'mangga':
                        if (global.db.data.users[m.sender].mangga >= count * 1) {
                            global.db.data.users[m.sender].mangga -= count * 1
                            global.db.data.users[m.sender].miko += Smangga * count
                            conn.reply(m.chat, `✔️ Sukses Menjual ${count} Mangga 🥭 Dengan Harga ${Smangga * count} MIKO 💹`, m)
                        } else conn.reply(m.chat, `🥭 Mangga Anda Tidak Cukup `, m)
                        break
                     case 'apel':
                        if (global.db.data.users[m.sender].apel >= count * 1) {
                            global.db.data.users[m.sender].apel -= count * 1
                            global.db.data.users[m.sender].miko += Sapel * count
                            conn.reply(m.chat, `✔️ Sukses Menjual ${count} Apel 🍎 Dengan Harga ${Sapel * count} MIKO 💹`, m)
                        } else conn.reply(m.chat, `🍎 Apel Anda Tidak Cukup `, m)
                        break
                     case 'jeruk':
                        if (global.db.data.users[m.sender].jeruk >= count * 1) {
                            global.db.data.users[m.sender].jeruk -= count * 1
                            global.db.data.users[m.sender].miko += Sjeruk * count
                            conn.reply(m.chat, `✔️ Sukses Menjual ${count} Jeruk 🍊 Dengan Harga ${Sjeruk * count} MIKO 💹`, m)
                        } else conn.reply(m.chat, `🍊 Jeruk Anda Tidak Cukup `, m)
                        break
                     case 'anggur':
                        if (global.db.data.users[m.sender].anggur >= count * 1) {
                            global.db.data.users[m.sender].anggur -= count * 1
                            global.db.data.users[m.sender].miko += Sanggur * count
                            conn.reply(m.chat, `✔️ Sukses Menjual ${count} Anggur 🍇 Dengan Harga ${Sanggur * count} MIKO 💹`, m)
                        } else conn.reply(m.chat, `🍇 Anggur Anda Tidak Cukup `, m)
                        break
                     case 'pisang':
                        if (global.db.data.users[m.sender].pisang >= count * 1) {
                            global.db.data.users[m.sender].pisang -= count * 1
                            global.db.data.users[m.sender].miko += Spisang * count
                            conn.reply(m.chat, `✔️ Sukses Menjual ${count} Pisang 🍌 Dengan Harga ${Spisang * count} MIKO 💹`, m)
                        } else conn.reply(m.chat, `🍌 Pisang Anda Tidak Cukup `, m)
                        break
                    default:
                        return conn.reply(m.chat, Kchat, m, { contextInfo: { externalAdReply: { showAdAttribution: true,
                    mediaUrl: sig,
                    mediaType: "VIDEO",
                    description: ucapan, 
                    title: wm,
                    body: bottime,
                    thumbnail: thumb,
                    sourceUrl: sgc
                }
                } })
                }
                break
            case 'upgrade': 
                switch (_type) {
                	case 'armor':
                            if (global.db.data.users[m.sender].armor == 5) return conn.reply(m.chat, 'Armormu sudah *Level Max*', m)
                            if (global.db.data.users[m.sender].armor == 0) return conn.reply(m.chat, 'Kamu belum mempunyai Armor', m)
                            if (global.db.data.users[m.sender].diamond > uparmor) {
                                global.db.data.users[m.sender].armor += 1
                                global.db.data.users[m.sender].diamond -= uparmor * 1
                                conn.reply(m.chat, `✔️ Sukses Mengupgrade Armor 🥼 Seharga ${uparmor} Diamond 💎` ,m)
                            } else conn.reply(m.chat, `Diamond Mu Tidak Cukup Untuk Mengupgrade Armor 🥼 Seharga ${uparmor} Diamond 💎`, m)
                        
                        break
                        case 'fishingrod':
                            if (global.db.data.users[m.sender].fishingrod == 4) return conn.reply(m.chat, 'Pancingan mu udah *Level Max*', m)
                            if (global.db.data.users[m.sender].fishingrod == 0) return conn.reply(m.chat, 'Kamu belum mempunyai Pancingan', m)
                            if (global.db.data.users[m.sender].diamond > uppancing) {
                                global.db.data.users[m.sender].pancing += 1
                                global.db.data.users[m.sender].diamond -= uppancing * 1
                                global.db.data.users[m.sender].fishingroddurability = durpancing
                                conn.reply(m.chat, `✔️ Sukses Mengupgrade Fishingrod 🎣  Seharga ${uppancing} Diamond 💎` ,m)
                            } else conn.reply(m.chat, `Diamond Mu Tidak Cukup Untuk Mengupgrade Fishingrod 🎣  Seharga ${uppancing} Diamond 💎`, m)
                        
                        break
                        
                            case 'sword':
                            if (global.db.data.users[m.sender].sword == 5) return conn.reply(m.chat, 'Sword mu udah *Level Max*', m)
                            if (global.db.data.users[m.sender].sword == 0) return conn.reply(m.chat, 'Kamu belum mempunyai Sword', m)
                            if (global.db.data.users[m.sender].diamond > upsword) {
                                global.db.data.users[m.sender].sword += 1
                                global.db.data.users[m.sender].diamond -= upsword * 1
                                global.db.data.users[m.sender].sworddurability = dursword
                                conn.reply(m.chat, `✔️ Sukses Mengupgrade Sword 🗡️ Seharga ${upsword} Diamond 💎` ,m)
                            } else conn.reply(m.chat, `Diamond Mu Tidak Cukup Untuk Mengupgrade Sword 🗡️ Seharga ${upsword} Diamond 💎`, m)
                            break
                            case 'pickaxe':
                            if (global.db.data.users[m.sender].pickaxe == 5) return conn.reply(m.chat, 'Pickaxe mu udah *Level Max*', m)
                            if (global.db.data.users[m.sender].pickaxe == 0) return conn.reply(m.chat, 'Kamu belum mempunyai Pickaxe', m)
                            if (global.db.data.users[m.sender].diamond > uppickaxe) {
                                global.db.data.users[m.sender].pickaxe += 1
                                global.db.data.users[m.sender].diamond -= uppickaxe * 1
                                global.db.data.users[m.sender].pickaxedurability = durpickaxe
                                conn.reply(m.chat, `✔️ Sukses Mengupgrade Pickaxe ⛏️ Seharga ${uppickaxe} Diamond 💎` ,m)
                            } else conn.reply(m.chat, `Diamond Mu Tidak Cukup Untuk Mengupgrade Pickaxe ⛏️  Seharga ${uppickaxe} Diamond 💎`, m)
                            break
                            default:
                            return conn.reply(m.chat, Kchat, m, { contextInfo: { externalAdReply: { showAdAttribution: true,
                    mediaUrl: sig,
                    mediaType: "VIDEO",
                    description: ucapan, 
                    title: wm,
                    body: bottime,
                    thumbnail: thumb,
                    sourceUrl: sgc
                }
                } })
                            }
                            break
                            case 'repair': 
                switch (_type) {
                	case 'fishingrod':
                            if (global.db.data.users[m.sender].fishingroddurability == 80) return conn.reply(m.chat, 'Pancingan mu belum ada kerusakan', m)
                            if (global.db.data.users[m.sender].fishingrod == 0) return conn.reply(m.chat, 'Kamu belum mempunyai Pancingan', m)
                            if (global.db.data.users[m.sender].diamond > refishingrod) {
                                global.db.data.users[m.sender].pancing += 1
                                global.db.data.users[m.sender].diamond -= refishingrod * 1
                                global.db.data.users[m.sender].fishingroddurability += drefishingrod
                                conn.reply(m.chat, `✔️ Sukses Mengrepair Fishingrod 🎣  Seharga ${refishingrod} Diamond 💎\n➕ ${drefishingrod} Durability` ,m)
                            } else conn.reply(m.chat, `Diamond Mu Tidak Cukup Untuk Merepair Fishingrod 🎣  Seharga ${refishingrod} Diamond 💎`, m)
                        
                        break
                        case 'pickaxe':
                            if (global.db.data.users[m.sender].pickaxedurability == 80) return conn.reply(m.chat, 'Pickaxe mu belum ada kerusakan', m)
                            if (global.db.data.users[m.sender].pickaxe == 0) return conn.reply(m.chat, 'Kamu belum mempunyai Pickaxe', m)
                            if (global.db.data.users[m.sender].diamond > repickaxe) {
                                global.db.data.users[m.sender].pickaxe += 1
                                global.db.data.users[m.sender].diamond -= repickaxe * 1
                                global.db.data.users[m.sender].pickaxedurability += drepickaxe
                                conn.reply(m.chat, `✔️ Sukses Mengrepair Pickaxe ⛏️ Seharga ${repickaxe} Diamond 💎\n➕ ${drepickaxe} Durability` ,m)
                            } else conn.reply(m.chat, `Diamond Mu Tidak Cukup Untuk Merepair Pickaxe ⛏️  Seharga ${repickaxe} Diamond 💎`, m)
                        
                        break
                            case 'sword':
                            if (global.db.data.users[m.sender].sworddurability == 80) return conn.reply(m.chat, 'Sword mu belum ada kerusakan', m)
                            if (global.db.data.users[m.sender].sword == 0) return conn.reply(m.chat, 'Kamu belum mempunyai Sword', m)
                            if (global.db.data.users[m.sender].diamond > resword) {
                                global.db.data.users[m.sender].sword += 1
                                global.db.data.users[m.sender].diamond -= resword * 1
                                global.db.data.users[m.sender].sworddurability += dresword
                                conn.reply(m.chat, `✔️ Sukses Mengrepair Sword 🗡️ Seharga ${resword} Diamond 💎\n➕ ${dresword} Durability` ,m)
                            } else conn.reply(m.chat, `Diamond Mu Tidak Cukup Untuk Merepair Sword 🗡️  Seharga ${resword} Diamond 💎`, m)
                        
                        break
                            
                            default:
                            return conn.reply(m.chat, Kchat, m, { contextInfo: { externalAdReply: { showAdAttribution: true,
                    mediaUrl: sig,
                    mediaType: "VIDEO",
                    description: ucapan, 
                    title: wm,
                    body: bottime,
                    thumbnail: thumb,
                    sourceUrl: sgc
                }
                } })
                            }
                            break
            default:
                return conn.reply(m.chat, Kchat, m, { contextInfo: { externalAdReply: { showAdAttribution: true,
                    mediaUrl: sig,
                    mediaType: "VIDEO",
                    description: ucapan, 
                    title: wm,
                    body: bottime,
                    thumbnail: thumb,
                    sourceUrl: sgc
                }
                } })
                
                        }
        } else if (/beli|buy/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case 'potion':
                        if (global.db.data.users[m.sender].miko >= potion * count) {
                            global.db.data.users[m.sender].miko -= potion * count
                            global.db.data.users[m.sender].potion += count * 1
                            conn.reply(m.chat, `Sukses membeli ${count} Potion Dengan Harga ${potion * count} MIKO \n\nGunakan Potion Dengan Ketik: *${usedPrefix}use potion <jumlah>*`, m)
                        } else conn.reply(m.chat, `MIKO Anda Tidak Cukup Untuk Membeli ${count} Potion Dengan Harga ${potion * count} MIKO`,m)
                    
                    break
                case 'tprem':
                            if (global.db.data.users[m.sender].miko >= Btprem * count) {
                                global.db.data.users[m.sender].tprem += count * 1
                                global.db.data.users[m.sender].miko -= Btprem * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Tiket Premium Dengan Harga ${Btprem * count} MIKO`, m)
                            } else conn.reply(m.chat, `MIKO Anda Tidak Cukup`, m)
                        break
                case 'diamond':
                        if (global.db.data.users[m.sender].miko >= Bdiamond * count) {
                            global.db.data.users[m.sender].diamond += count * 1
                            global.db.data.users[m.sender].miko -= Bdiamond * count
                            conn.reply(m.chat, `Sukses Membeli ${count} Diamond Dengan Harga ${Bdiamond * count} MIKO `, m)
                        } else conn.reply(m.chat, `MIKO Anda Tidak Cukup `, m)
                    
                    break
                case 'common':
                        if (global.db.data.users[m.sender].miko >= Bcommon * count) {
                            global.db.data.users[m.sender].common += count * 1
                            global.db.data.users[m.sender].miko -= Bcommon * count
                            conn.reply(m.chat, `Sukses Membeli ${count} Common Crate Dengan Harga ${Bcommon * count} MIKO `, m)
                        } else conn.reply(m.chat, `MIKO Anda Tidak Cukup Untuk Membeli ${count} Common Crate Dengan Harga ${Bcommon * count} MIKO \n\nBuka Crate Dengan Ketik : *${usedPrefix}open common*`, m)
                    
                    break
                case 'uncommon':
                        if (global.db.data.users[m.sender].miko >= Buncommon * count) {
                            global.db.data.users[m.sender].uncommon += count * 1
                            global.db.data.users[m.sender].miko -= Buncommon * count
                            conn.reply(m.chat, `Sukses Membeli ${count} Uncommon Crate Dengan Harga ${Buncommon * count} MIKO `, m)
                        } else conn.reply(m.chat, `MIKO Anda Tidak Cukup Untuk Membeli ${count} Uncommon Crate Dengan Harga ${Buncommon * count} MIKO \n\nBuka Crate Dengan Ketik: *${usedPrefix}open uncommon*`, m)
                   
                    break
                case 'mythic':
                        if (global.db.data.users[m.sender].miko >= Bmythic * count) {
                            global.db.data.users[m.sender].mythic += count * 1
                            global.db.data.users[m.sender].miko -= Bmythic * count
                            conn.reply(m.chat, `Sukses Membeli ${count} Mythic Crate Dengan Harga ${Bmythic * count} MIKO `, m)
                        } else conn.reply(m.chat, `MIKO Anda Tidak Cukup Untuk Membeli ${count} Mythic Crate Dengan Harga ${Bmythic* count} miko\n\nBuka Crate Dengan Ketik: *${usedPrefix}open mythic*`, m)
                    
                    break
                case 'legendary':
                        if (global.db.data.users[m.sender].miko >= Blegendary * count) {
                            global.db.data.users[m.sender].legendary += count * 1
                            global.db.data.users[m.sender].miko -= Blegendary * count
                            conn.reply(m.chat, `Sukses Membeli ${count} Legendary Crate Dengan Harga ${Blegendary * count} MIKO`, m)
                        } else conn.reply(m.chat, `MIKO Anda Tidak Cukup Untuk Membeli ${count} Legendary Crate Dengan Harga ${Blegendary * count} MIKO \n\nBuka Crate Dengan Ketik: *${usedPrefix}open legendary*`, m)
                    
                    break
                case 'sampah':
                        if (global.db.data.users[m.sender].miko >= Bsampah * count) {
                            global.db.data.users[m.sender].sampah += count * 1
                            global.db.data.users[m.sender].miko -= Bsampah * count
                            conn.reply(m.chat, `Sukses Membeli ${count} Sampah Dengan Harga ${Bsampah * count} miko`, m)
                        } else conn.reply(m.chat, `MIKO Anda Tidak Cukup Untuk Membeli ${count} Sampah Dengan Harga ${Bsampah * count} MIKO `.trim(), m)
                    
                    break
                case 'armor':
                        if (global.db.data.users[m.sender].armor == 5) return conn.reply(m.chat, 'Armormu Telah *Level Max*', m)
                        if (global.db.data.users[m.sender].miko > armor * 1) {
                            global.db.data.users[m.sender].armor += 1
                            global.db.data.users[m.sender].miko -= armor * 1
                            conn.reply(m.chat, `Sukses Membeli Armor Seharga ${armor} MIKO` ,m)
                          
                        } else conn.reply(m.chat, `MIKO Mu Tidak Cukup Untuk Membeli Armor Seharga ${armor} MIKO`, m)
                    
                    break
                default:
                    return conn.reply(m.chat, Kchat, m, { contextInfo: { externalAdReply: { showAdAttribution: true,
                    mediaUrl: sig,
                    mediaType: "VIDEO",
                    description: ucapan, 
                    title: wm,
                    body: bottime,
                    thumbnail: thumb,
                    sourceUrl: sgc
                }
                } })
            }
        } else if (/sell|jual|/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case 'potion':
                    if (global.db.data.users[m.sender].potion >= count * 1) {
                        global.db.data.users[m.sender].miko += Spotion * count
                        global.db.data.users[m.sender].potion -= count * 1
                        conn.reply(m.chat, `Sukses Menjual ${count} Potion Dengan Harga ${Spotion * count} MIKO`.trim(), m)
                    } else conn.reply(m.chat, `Potion Kamu Tidak Cukup `.trim(), m)
                    break
                case 'common':
                    if (global.db.data.users[m.sender].common >= count * 1) {
                        global.db.data.users[m.sender].miko += Scommon * count
                        global.db.data.users[m.sender].common -= count * 1
                        conn.reply(m.chat, `Sukses Menjual ${count} Common Crate Dengan Harga ${Scommon * count} MIKO`.trim(), m)
                    } else conn.reply(m.chat, `Common Crate Kamu Tidak Cukup `.trim(), m)
                    break
                case 'uncommon':
                    if (global.db.data.users[m.sender].uncommon >= count * 1) {
                        global.db.data.users[m.sender].miko += Suncommon * count
                        global.db.data.users[m.sender].uncommon -= count * 1
                        conn.reply(m.chat, `Sukses Menjual ${count} Uncommon Crate Dengan Harga ${Suncommon * count} MIKO`.trim(), m)
                    } else conn.reply(m.chat, `Uncommon Crate Kamu Tidak Cukup`.trim(), m)
                    break
                case 'mythic':
                    if (global.db.data.users[m.sender].mythic >= count * 1) {
                        global.db.data.users[m.sender].miko += Smythic * count
                        global.db.data.users[m.sender].mythic -= count * 1
                        conn.reply(m.chat, `Sukses Menjual ${count} Mythic Crate Dengan Harga ${Smythic * count} MIKO`.trim(), m)
                    } else conn.reply(m.chat, `Mythic Crate Kamu Tidak Cukup `.trim(), m)
                    break
                case 'legendary':
                    if (global.db.data.users[m.sender].legendary >= count * 1) {
                        global.db.data.users[m.sender].miko += Slegendary * count
                        global.db.data.users[m.sender].legendary -= count * 1
                        conn.reply(m.chat, `Sukses Menjual ${count} Legendary Crate Dengan Harga ${Slegendary * count} MIKO`.trim(), m)
                    } else conn.reply(m.chat, `Legendary Crate Kamu Tidak Cukup`.trim(), m)
                    break
                case 'sampah':
                    if (global.db.data.users[m.sender].sampah >= count * 1) {
                        global.db.data.users[m.sender].sampah -= count * 1
                        global.db.data.users[m.sender].miko += Ssampah * count
                        conn.reply(m.chat, `Sukses Menjual ${count} Sampah, Dan Anda Mendapatkan ${Ssampah * count} MIKO`.trim(), m)
                    } else conn.reply(m.chat, `Sampah Anda Tidak Cukup`.trim(), m)
                    break
                case 'diamond':
                    if (global.db.data.users[m.sender].diamond >= count * 1) {
                        global.db.data.users[m.sender].diamond -= count * 1
                        global.db.data.users[m.sender].miko += Sdiamond * count
                        conn.reply(m.chat, `Sukses Menjual ${count} Diamond, Dan Anda Mendapatkan ${Sdiamond * count} MIKO`, m)
                    } else conn.reply(m.chat, `Diamond Anda Tidak Cukup `, m)
                    break
                default:
                    return conn.reply(m.chat, Kchat, m, { contextInfo: { externalAdReply: { showAdAttribution: true,
                    mediaUrl: sig,
                    mediaType: "VIDEO",
                    description: ucapan, 
                    title: wm,
                    body: bottime,
                    thumbnail: thumb,
                    sourceUrl: sgc
                }
                } })
            }
        } else if (/up|upgrade/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case 'armor':
                            if (global.db.data.users[m.sender].armor == 5) return conn.reply(m.chat, 'Armormu sudah *Level Max*', m)
                            if (global.db.data.users[m.sender].armor == 0) return conn.reply(m.chat, 'Kamu belum mempunyai Armor', m)
                            if (global.db.data.users[m.sender].diamond > uparmor) {
                                global.db.data.users[m.sender].armor += 1
                                global.db.data.users[m.sender].diamond -= uparmor * 1
                                conn.reply(m.chat, `✔️ Sukses Mengupgrade Armor 🥼 Seharga ${uparmor} MIKO` ,m)
                            } else conn.reply(m.chat, `MIKO Mu Tidak Cukup Untuk Mengupgrade Armor 🥼 Seharga ${uparmor} MIKO 💹`, m)
                        
                        break
                        default:
                    return conn.reply(m.chat, Kchat, m, { contextInfo: { externalAdReply: { showAdAttribution: true,
                    mediaUrl: sig,
                    mediaType: "VIDEO",
                    description: ucapan, 
                    title: wm,
                    body: bottime,
                    thumbnail: thumb,
                    sourceUrl: sgc
                }
                } })
                         }
                    }else if (/repair/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case 'armor':
                            if (global.db.data.users[m.sender].armor == 5) return conn.reply(m.chat, 'Armormu sudah *Level Max*', m)
                            if (global.db.data.users[m.sender].armor == 0) return conn.reply(m.chat, 'Kamu belum mempunyai Armor', m)
                            if (global.db.data.users[m.sender].diamond > uparmor) {
                                global.db.data.users[m.sender].armor += 1
                                global.db.data.users[m.sender].diamond -= uparmor * 1
                                conn.reply(m.chat, `✔️ Sukses Mengupgrade Armor 🥼 Seharga ${uparmor} MIKO` ,m)
                            } else conn.reply(m.chat, `MIKO Mu Tidak Cukup Untuk Mengupgrade Armor 🥼 Seharga ${uparmor} MIKO 💹`, m)
                        
                        break
                        default:
                    return conn.reply(m.chat, Kchat, m, { contextInfo: { externalAdReply: { showAdAttribution: true,
                    mediaUrl: sig,
                    mediaType: "VIDEO",
                    description: ucapan, 
                    title: wm,
                    body: bottime,
                    thumbnail: thumb,
                    sourceUrl: sgc
                }
                } })
                    
                    }
            }
    } catch (e) {
        conn.reply(m.chat, Kchat, wm, m, { contextInfo: { externalAdReply: { showAdAttribution: true,
                    mediaUrl: sig,
                    mediaType: "VIDEO",
                    description: ucapan, 
                    title: wm,
                    body: bottime,
                    thumbnail: thumb,
                    sourceUrl: sgc
                }
                } })
        console.log(e)
        if (DevMode) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.reply(jid, 'toko.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', m)
            }
        }
    }
}

handler.help = ['toko <sell | buy | upgrade | repair> <args>', 'toko <sell | buy | upgrade | repair> <args>']
handler.tags = ['rpg']
    
handler.command = /^(toko)$/i
export default handler