const namejeder = /(luis|dimas|dika|galih)/i
const kenalquery = /(kenal|siapa)/i


export async function before(m, {conn, args, text}){
    if (m.isBaileys && m.fromMe)
        return !0
    const ifkenal = kenalquery.exec(m.text)
    if(ifkenal){
        const autoreply = namejeder.exec(m.text)
        if(autoreply){
            switch(autoreply[0]){
                case 'luis':{
                    await conn.sendFile(m.chat, 'https://i.ibb.co/DKS9QVk/IMG-20221004-WA0181.jpg', 'jeder.png', '*LUISep* KNTL', m)
                }
                break;
                case 'dimas':{
                    await conn.sendFile(m.chat, 'https://i.ibb.co/DKS9QVk/IMG-20221004-WA0181.jpg', 'jeder.png', '*DIMASukin* MMK', m)
                }
                break;
                case 'dika' :{
                    await conn.sendFile(m.chat, 'https://i.ibb.co/DKS9QVk/IMG-20221004-WA0181.jpg', 'jeder.png', '*DIKAsih* KNTL', m)
                }
                break;
                case 'galih':{
                    await conn.sendFile(m.chat, 'https://i.ibb.co/DKS9QVk/IMG-20221004-WA0181.jpg', 'jeder.png', '*GALIHat* KNTL', m)
                }
                break;
            }
        }
    }
    return !0
}