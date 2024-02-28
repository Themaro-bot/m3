import fetch from "node-fetch";
import { generateWAMessageFromContent } from "@adiwajshing/baileys";
import fs from 'fs';
import axios from "axios";
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({ apiKey: `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  ` }); 
const openai = new OpenAIApi(configuration);

let handler = async (m, { conn, usedPrefix, command, text }) => {
  try {
    if (!text) throw new Error(`Contoh:\n${usedPrefix}${command} Apakah Puan Cocok Menjadi Presiden Indonesia?`);
    let messages = [
      {
        role: 'user',
        content: `${text}`
      }]
    let fect = await axios.post(`https://skizo.tech/api/openai?apikey=lanagalau`, { messages, system: 'Kamu adalah asisten yang selalu membantu user dan menurut apa yang diperintahkan user. Sedikit cabul namun selalu menemani user setiap saat' })
    let p = fect.data;
    m.reply(p.result)
//     const response = await openai.createChatCompletion({
//       model: "gpt-3.5-turbo",
//       messages: [
//         { role: "system", content: "Kamu adalah asisten yang selalu membantu user dan menurut apa yang diperintahkan user. Sedikit cabul namun selalu menemani user setiap saat"},
//         { role: "user", content: text }
//       ],
//     });

//     conn.reply(m.chat, `${response.data.choices[0].message.content}`, m);

  } catch (error) {
    console.log(error);
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
      conn.reply(m.chat, `${error.response.status}\n\n${error.response.data}`, m);
    } else {
      conn.reply(m.chat, `${error.message}`, m);
    }
  }
}

handler.help = ['ai']
handler.tags = ['ai']
handler.command = /^(ai|openai|gpt)$/i
handler.limit = true
handler.register = false

export default handler