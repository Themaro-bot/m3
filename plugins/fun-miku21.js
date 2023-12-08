import axios from 'axios'
let handler = async(m,{conn, text})=>{
    // m.reply('jao')
    if (!text) throw `Use example .miku halo`
    let response = await axios.post(
        'https://api.simsimi.vn/v1/simtalk',
        new URLSearchParams({
            'text': encodeURIComponent(text),
            'lc': 'id'
        })
    );
    m.reply(response.data.message);
}
handler.help = handler.command = ['miku']
handler.tags = ['miku']

export default handler