
const Skepiting = 7000
const Slobster = 7000
const Sudang = 7000
const Scumi = 7000
const Sgurita = 7000
const Sbuntal = 7000
const Sdory = 7000
const Sorca = 7000
const Slumba = 7000
const Spaus = 7000
const Sikan = 7000
const Shiu = 7000
const Bkepiting = 20000
const Blobster = 20000
const Budang = 20000
const Bcumi = 20000
const Bgurita = 20000
const Bbuntal = 20000
const Bdory = 20000
const Borca = 20000
const Blumba = 20000
const Bpaus = 20000
const Bikan = 20000
const Bhiu = 20000
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
    let type = (args[0] || '').toLowerCase()
    let _type = (args[1] || '').toLowerCase()
    let jualbeli = (args[0] || '').toLowerCase()
    const Kaine = `
${usedPrefix}shopfish <buy|sell> <item> <jumlah>

Contoh penggunaan: *${usedPrefix}shopfish buy hiu 1*

============================

*Fishing | Harga Beli*
Hiu: ${Bhiu} MIKO
Ikan: ${Bikan} MIKO
Dory: ${Bdory} MIKO
Orca: ${Borca} MIKO
Paus: ${Bpaus} MIKO
Cumi: ${Bcumi} MIKO
Gurita: ${Bgurita} MIKO
Buntal: ${Bbuntal} MIKO
Udang: ${Budang} MIKO
Lumba²: ${Blumba} MIKO
Lobster: ${Blobster} MIKO
Kepiting: ${Bkepiting} MIKO


*Fishing | Harga Jual*
Hiu: ${Shiu} MIKO
Ikan: ${Sikan} MIKO
Dory: ${Sdory} MIKO
Orca: ${Sorca} MIKO
Paus: ${Spaus} MIKO
Cumi: ${Scumi} MIKO
Gurita: ${Sgurita} MIKO
Buntal: ${Sbuntal} MIKO
Udang: ${Sudang} MIKO
Lumba²: ${Slumba} MIKO
Lobster: ${Slobster} MIKO
Kepiting: ${Skepiting} MIKO
`.trim()

    try {
        if (/shopfish/i.test(command)) {
            const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
            switch (jualbeli) {
            case 'buy':
                switch (_type) {
                    case 'hiu':
                            if (global.db.data.users[m.sender].miko >= Bhiu * count) {
                                global.db.data.users[m.sender].hiu += count * 1
                                global.db.data.users[m.sender].miko -= Bhiu * count
                                conn.reply(m.chat, `Succes membeli ${count} Hiu dengan harga ${Bhiu * count} MIKO`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Hiu dengan harga ${Bhiu * count} MIKO`.trim(), m)
                        
                    break
                    case 'ikan':
                            if (global.db.data.users[m.sender].miko >= Bikan * count) {
                                global.db.data.users[m.sender].ikan += count * 1
                                global.db.data.users[m.sender].miko -= Bikan * count
                                conn.reply(m.chat, `Succes membeli ${count} Ikan dengan harga ${Bikan * count} MIKO`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} ikan dengan harga ${Bikan * count} MIKO`.trim(), m)
                        
                    break
                    case 'dory':
                            if (global.db.data.users[m.sender].miko >= Bdory * count) {
                                global.db.data.users[m.sender].dory += count * 1
                                global.db.data.users[m.sender].miko -= Bdory * count
                                conn.reply(m.chat, `Succes membeli ${count} Dory dengan harga ${Bdory * count} MIKO`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Dory dengan harga ${Bdory * count} MIKO`.trim(), m)
                        
                    break
                    case 'orca':
                            if (global.db.data.users[m.sender].miko >= Borca * count) {
                                global.db.data.users[m.sender].orca += count * 1
                                global.db.data.users[m.sender].miko -= Borca * count
                                conn.reply(m.chat, `Succes membeli ${count} Orca dengan harga ${Borca * count} MIKO`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} orca dengan harga ${Borca * count} MIKO`.trim(), m)
                        
                    break
                    case 'paus':
                            if (global.db.data.users[m.sender].miko >= Bpaus * count) {
                                global.db.data.users[m.sender].paus += count * 1
                                global.db.data.users[m.sender].miko -= Bpaus * count
                                conn.reply(m.chat, `Succes membeli ${count} Paus dengan harga ${Bpaus * count} MIKO`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Paus dengan harga ${Bpaus * count} MIKO`.trim(), m)
                        
                    break
                    case 'cumi':
                            if (global.db.data.users[m.sender].miko >= Bcumi * count) {
                                global.db.data.users[m.sender].cumi += count * 1
                                global.db.data.users[m.sender].miko -= Bcumi * count
                                conn.reply(m.chat, `Succes membeli ${count} Cumi dengan harga ${Bcumi * count} MIKO`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Cumi dengan harga ${Bcumi * count} MIKO`.trim(), m)
                        
                    break
                    case 'gurita':
                            if (global.db.data.users[m.sender].miko >= Bgurita * count) {
                                global.db.data.users[m.sender].gurita += count * 1
                                global.db.data.users[m.sender].miko -= Bgurita * count
                                conn.reply(m.chat, `Succes membeli ${count} Gurita dengan harga ${Bgurita * count} MIKO`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Gurita dengan harga ${Bgurita * count} MIKO`.trim(), m)
                        
                    break
                    case 'buntal':
                            if (global.db.data.users[m.sender].miko >= Bbuntal * count) {
                                global.db.data.users[m.sender].buntal += count * 1
                                global.db.data.users[m.sender].miko -= Bbuntal * count
                                conn.reply(m.chat, `Succes membeli ${count} Buntal dengan harga ${Bbuntal * count} MIKO`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Buntal dengan harga ${Bbuntal * count} MIKO`.trim(), m)
                        
                    break
                    case 'udang':
                            if (global.db.data.users[m.sender].miko >= Budang * count) {
                                global.db.data.users[m.sender].udang += count * 1
                                global.db.data.users[m.sender].miko -= Budang * count
                                conn.reply(m.chat, `Succes membeli ${count} Udang dengan harga ${Budang * count} MIKO`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Udang dengan harga ${Budang * count} MIKO`.trim(), m)
                        
                    break
                    case 'lumba':
                            if (global.db.data.users[m.sender].miko >= Blumba * count) {
                                global.db.data.users[m.sender].lumba += count * 1
                                global.db.data.users[m.sender].miko -= Blumba * count
                                conn.reply(m.chat, `Succes membeli ${count} Lumba² dengan harga ${Blumba * count} MIKO`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Lumba² dengan harga ${Blumba * count} MIKO`.trim(), m)
                        
                    break
                    case 'lobster':
                            if (global.db.data.users[m.sender].miko >= Blobster * count) {
                                global.db.data.users[m.sender].lobster += count * 1
                                global.db.data.users[m.sender].miko -= Blobster * count
                                conn.reply(m.chat, `Succes membeli ${count} Lobster dengan harga ${Blobster * count} MIKO`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Lobster dengan harga ${Blobster * count} MIKO`.trim(), m)
                        
                    break
                    case 'kepiting':
                            if (global.db.data.users[m.sender].miko >= Bkepiting * count) {
                                global.db.data.users[m.sender].kepiting += count * 1
                                global.db.data.users[m.sender].miko -= Bkepiting * count
                                conn.reply(m.chat, `Succes membeli ${count} Kepiting dengan harga ${Bkepiting * count} MIKO`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Kepiting dengan harga ${Bkepiting * count} MIKO`.trim(), m)
                        
                    break
               default:
                        return conn.reply(m.chat, Kaine, m)
                }
             break
            case 'sell': 
                switch (_type) {
                    case 'hiu':
                        if (global.db.data.users[m.sender].hiu >= count * 1) {
                            global.db.data.users[m.sender].hiu -= count * 1
                            global.db.data.users[m.sender].miko += Shiu * count
                            conn.reply(m.chat, `Succes menjual ${count} hiu, dan anda mendapatkan ${Shiu * count} MIKO`, m)
                        } else conn.reply(m.chat, `Hiu anda tidak cukup`, m)
                        break
                    case 'ikan':
                        if (global.db.data.users[m.sender].ikan >= count * 1) {
                            global.db.data.users[m.sender].ikan -= count * 1
                            global.db.data.users[m.sender].miko += Sikan * count
                            conn.reply(m.chat, `Succes menjual ${count} ikan, dan anda mendapatkan ${Sikan * count} MIKO`, m)
                        } else conn.reply(m.chat, `Ikan anda tidak cukup`, m)
                        break
                    case 'dory':
                        if (global.db.data.users[m.sender].dory >= count * 1) {
                            global.db.data.users[m.sender].dory -= count * 1
                            global.db.data.users[m.sender].miko += Sdory * count
                            conn.reply(m.chat, `Succes menjual ${count} dory, dan anda mendapatkan ${Sdory * count} MIKO`, m)
                        } else conn.reply(m.chat, `Dory anda tidak cukup`, m)
                        break
                    case 'orca':
                        if (global.db.data.users[m.sender].orca >= count * 1) {
                            global.db.data.users[m.sender].orca -= count * 1
                            global.db.data.users[m.sender].miko += Sorca * count
                            conn.reply(m.chat, `Succes menjual ${count} orca, dan anda mendapatkan ${Sorca * count} MIKO`, m)
                        } else conn.reply(m.chat, `Orca anda tidak cukup`, m)
                        break
                    case 'paus':
                        if (global.db.data.users[m.sender].paus >= count * 1) {
                            global.db.data.users[m.sender].paus -= count * 1
                            global.db.data.users[m.sender].miko += Spaus * count
                            conn.reply(m.chat, `Succes menjual ${count} paus, dan anda mendapatkan ${Spaus * count} MIKO`, m)
                        } else conn.reply(m.chat, `Paus anda tidak cukup`, m)
                        break
                    case 'cumi':
                        if (global.db.data.users[m.sender].cumi >= count * 1) {
                            global.db.data.users[m.sender].cumi -= count * 1
                            global.db.data.users[m.sender].miko += Scumi * count
                            conn.reply(m.chat, `Succes menjual ${count} Cumi, dan anda mendapatkan ${Scumi * count} MIKO`, m)
                        } else conn.reply(m.chat, `Cumi anda tidak cukup`, m)
                        break
                    case 'gurita':
                        if (global.db.data.users[m.sender].gurita >= count * 1) {
                            global.db.data.users[m.sender].gurita -= count * 1
                            global.db.data.users[m.sender].miko += Sgurita * count
                            conn.reply(m.chat, `Succes menjual ${count} Gurita, dan anda mendapatkan ${Sgurita * count} MIKO`, m)
                        } else conn.reply(m.chat, `Hiu anda tidak cukup`, m)
                        break
                    case 'buntal':
                        if (global.db.data.users[m.sender].buntal >= count * 1) {
                            global.db.data.users[m.sender].buntal -= count * 1
                            global.db.data.users[m.sender].miko += Sbuntal * count
                            conn.reply(m.chat, `Succes menjual ${count} Buntal, dan anda mendapatkan ${Sbuntal * count} MIKO`, m)
                        } else conn.reply(m.chat, `Buntal anda tidak cukup`, m)
                        break
                    case 'udang':
                        if (global.db.data.users[m.sender].udang >= count * 1) {
                            global.db.data.users[m.sender].udang -= count * 1
                            global.db.data.users[m.sender].miko += Sudang * count
                            conn.reply(m.chat, `Succes menjual ${count} Udang, dan anda mendapatkan ${Sudang * count} MIKO`, m)
                        } else conn.reply(m.chat, `Udang anda tidak cukup`, m)
                        break
                    case 'lumba':
                        if (global.db.data.users[m.sender].lumba >= count * 1) {
                            global.db.data.users[m.sender].lumba -= count * 1
                            global.db.data.users[m.sender].miko += Slumba * count
                            conn.reply(m.chat, `Succes menjual ${count} Lumba², dan anda mendapatkan ${Slumba * count} MIKO`, m)
                        } else conn.reply(m.chat, `Lumba² anda tidak cukup`, m)
                        break
                    case 'lobster':
                        if (global.db.data.users[m.sender].lobster >= count * 1) {
                            global.db.data.users[m.sender].lobster -= count * 1
                            global.db.data.users[m.sender].miko += Slobster * count
                            conn.reply(m.chat, `Succes menjual ${count} Lobster, dan anda mendapatkan ${Slobster * count} MIKO`, m)
                        } else conn.reply(m.chat, `Lobster anda tidak cukup`, m)
                        break
                    case 'kepiting':
                        if (global.db.data.users[m.sender].kepiting >= count * 1) {
                            global.db.data.users[m.sender].kepiting -= count * 1
                            global.db.data.users[m.sender].miko += Skepiting * count
                            conn.reply(m.chat, `Succes menjual ${count} Kepiting, dan anda mendapatkan ${Skepiting * count} MIKO`, m)
                        } else conn.reply(m.chat, `Kepiting anda tidak cukup`, m)
                        break
               default:
                        return conn.reply(m.chat, Kaine, m)
                }
            break
        default:
                return conn.reply(m.chat, Kaine, m)
            }
        }
    } catch (e) {
        conn.reply(m.chat, Kaine, m)
        console.log(e)
    }
}

handler.help = ['shopfish <sell|buy> <args>']
handler.tags = ['rpg']
    
handler.command = /^(shopfish)$/i
handler.limit = true
handler.group = true
export default handler
