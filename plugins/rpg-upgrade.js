let handler = async (m, { conn, command, args, usedPrefix }) => { 
        let user = global.db.data.users[m.sender]
        let wood = user.wood * 1
        let rock = user.rock * 1
        let string = user.string * 1
        let miko = user.miko * 1
        let iron = user.iron * 1
        let fishingrod = user.fishingrod * 1
        let pickaxe = user.pickaxe * 1
        let sword = user.sword * 1
        let diamond = user.diamond * 1
        let emerald = user.emerald * 1
        let armor = user.armor * 1
        let atm = user.atm
        let type = (args[0] || '').toLowerCase()
        let prefix = usedPrefix
        
        let teks = `█▀▀▀▀█▀▀▀▀█▀▀▀▀█
█────█────█────█
█▄▄▄▄█▄▄▄▄█▄▄▄▄█
█▀▀▀▀█▀▀▀▀█▀▀▀▀█
█────█────█────█
█▄▄▄▄█▄▄▄▄█▄▄▄▄█
█▀▀▀▀█▀▀▀▀█▀▀▀▀█
█────█────█────█
█▄▄▄▄█▄▄▄▄█▄▄▄▄█

Gunakan Format *${usedPrefix}${command} [type]*
contoh *${usedPrefix}${command} fishingRod*

*📌List yang Bisa Di Upgrade*
${rpg.emoticon('fishingrod')}FishingRod
${rpg.emoticon('pickaxe')}Pickaxe
${rpg.emoticon('sword')}Sword
${rpg.emoticon('armor')}Armor
${rpg.emoticon('atm')}Atm
`.trim()
        
        switch (type) {
            case 'fishingrod':
                if (fishingrod == 0) {
                    let lmao = `anda belum memiliki *🎣FishingRod*
untuk mendapatkannya ketik *${usedPrefix}craft fishingrod*`
                    return m.reply(lmao)
                }
                if (fishingrod > 9) return m.reply(`*${rpg.emoticon('fishingrod')}FishingRod* kamu sudah level max`)
                let _wood = fishingrod * 100
                let _string = fishingrod * 100
                let _miko = fishingrod * 1000000
                if (wood < _wood || string < _string || miko < _miko) return m.reply(`Material kamu kurang!!${wood < _wood ? `\n${rpg.emoticon('wood')}wood Kamu Kurang *${_wood - wood}*` : ''}${string < _string ? `\n${rpg.emoticon('string')}String Kamu Kurang *${_string - string}*` : ''}${user.miko < _miko ? `\n${rpg.emoticon('miko')}Uang Kamu Kurang *${_miko - miko}*` : ''}`)
                user.fishingrod += 1
                user.wood -= _wood * 1
                user.string -= _string * 1
                user.miko -= _miko * 1
                user.fishingroddurability = 0 
                user.fishingroddurability += fishingrod * 50
                m.reply(`Succes mengupgrade *${rpg.emoticon('fishingrod')}FishingRod*`)
                break
            case 'pickaxe':
                if (pickaxe == 0) {
                    let lmao = `anda belum memiliki *${rpg.emoticon('pickaxe')}Pickaxe*
untuk memilikinya ketik *${usedPrefix}craft Pickaxe*`
                    return m.reply(lmao)
                }
                if (pickaxe > 9) return m.reply(`*${rpg.emoticon('pickaxe')}Pickaxe* kamu sudah level max!!`)
                let __rock = pickaxe * 250
                let __wood = pickaxe * 150
                let __miko = pickaxe * 1500000
                if (rock < __rock || wood < __wood || miko < __miko) return m.reply(`
Material Anda Kurang!!
${rock < __rock ? `\n${rpg.emoticon('rock')}rock kamu kurang *${__rock - rock}*` : ''}${wood < __wood ? `\n${rpg.emoticon('wood')}wood kamu kurang *${__wood - wood}*` : ''}${miko < __miko ? `\n${rpg.emoticon('miko')}Uang kamu kurang *${__miko - miko}*` : ''}`)
                user.pickaxe += 1
                user.wood -= __wood * 1
                user.rock -= __rock * 1
                user.miko -= __miko * 1
                user.pickaxedurability = 0
                user.pickaxedurability += pickaxe * 50
                m.reply(`Succes mengupgrade *${rpg.emoticon('pickaxe')}Pickaxe*`)
                break
            case 'sword':
                if (sword == 0) {
                    let lmao = `anda belum memiliki *${rpg.emoticon('sword')}Sword*
untuk memilikinya ketik *${usedPrefix}craft sword*`
                    return m.reply(lmao)
                }
                if (sword > 9) return m.reply(`*${rpg.emoticon('sword')}Sword* kamu sudah level max!!`)
                let _iron = sword * 250
                let ___wood = sword * 150
                let ___miko = sword * 1000000
                if (iron < _iron || wood < ___wood || miko < ___miko) return m.reply(`
Material Anda Kurang!!
${iron < _iron ? `\n${rpg.emoticon('iron')}Iron kamu kurang *${_iron - iron}*` : ''}${wood < ___wood ? `\n${rpg.emoticon('wood')}wood kamu kurang *${___wood - wood}*` : ''}${miko < ___miko ? `\n${rpg.emoticon('miko')}Uang kamu kurang *${___miko - miko}*` : ''}`)
                user.sword += 1
                user.iron -= _iron * 1
                user.wood -= ___wood * 1
                user.miko -= ___miko * 1
                user.sworddurability = 0 
                user.sworddurability += sword * 50 
                m.reply(`Succes mengupgrade *${rpg.emoticon('sword')}Sword*`)
                break
                case 'armor':
                if (armor == 0) {
                    let lmao = `anda belum memiliki *${rpg.emoticon('armor')}Armor*
untuk memilikinya ketik *${usedPrefix}craft armor*`
                    return m.reply(lmao)
                }
                if (armor > 9) return m.reply(`*${rpg.emoticon('armor')}Armor* kamu sudah level max!!`)
                let _diamond = armor * 5
                let ____wood = armor * 150
                let ____miko = armor * 1000000
                if (diamond < _diamond || wood < ____wood || miko < ____miko) return m.reply(`
Material Anda Kurang!!
${diamond < _diamond ? `\n${rpg.emoticon('diamond')}Diamond kamu kurang *${_diamond - diamond}*` : ''}${wood < ____wood ? `\n${rpg.emoticon('wood')}wood kamu kurang *${____wood - wood}*` : ''}${miko < ____miko ? `\n${rpg.emoticon('miko')}Uang kamu kurang *${____miko - miko}*` : ''}`)
                user.armor += 1
                user.diamond -= _diamond * 1
                user.wood -= ____wood * 1
                user.miko -= ____miko * 1
                user.armordurability = 0 
                user.armordurability += sword * 50 
                m.reply(`Succes mengupgrade *${rpg.emoticon('armor')}Armor*`)
                break
                case 'atm':
                if (atm == 0) {
                    let lmao = `anda belum memiliki *${rpg.emoticon('atm')}Atm*
untuk memilikinya ketik *${usedPrefix}craft atm*`
                    return m.reply(lmao)
                }
                if (atm > 999) return m.reply(`*${rpg.emoticon('atm')}Atm* kamu sudah level max!!`)
                let __diamond = atm * 3
                let _emerald = atm * 5
                let _____miko = atm * 10000
                if (diamond < __diamond || emerald < _emerald || miko < _____miko) return m.reply(`
Material Anda Kurang!!
${diamond < __diamond ? `\n${rpg.emoticon('diamond')}Diamond kamu kurang *${__diamond - diamond}*` : ''}${emerald < _emerald ? `\n${rpg.emoticon('emerald')}Emerald kamu kurang *${_emerald - emerald}*` : ''}${miko < _____miko ? `\n${rpg.emoticon('miko')}Uang kamu kurang *${_____miko - miko}*` : ''}`)
                user.atm += 1
                user.diamond -= __diamond * 1
                user.emerald -= _emerald * 1
                user.miko -= _____miko * 1
                user.fullatm = 0 
                user.fullatm += atm * 500000000
                m.reply(`Succes mengupgrade *${rpg.emoticon('atm')}Atm*`)
                break
            default :
                return m.reply(teks)
        }
}
handler.help = ['upgrade']
handler.tags = ['rpg']
handler.command = /^(up(grade)?)$/i
handler.register = true
handler.group = true
handler.fail = null
handler.rpg = true
export default handler
