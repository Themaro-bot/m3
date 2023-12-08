import fetch from 'node-fetch';
import { FormData, Blob } from 'formdata-node';
import { fileTypeFromBuffer } from 'file-type';
import BodyForm from 'form-data';
// let BodyForm = require('form-data')

/**
 * Upload image to telegra.ph
 * Supported mimetype:
 * - `image/jpeg`
 * - `image/jpg`
 * - `image/png`s
 * @param {Buffer} buffer Image Buffer
 * @return {Promise<string>}
 */
export default async buffer => {
  const { ext, mime } = await fileTypeFromBuffer(buffer)
  let form = new FormData()
  const blob = new Blob([buffer.toArrayBuffer()], { type: mime })
  form.append('file', blob, 'tmp.' + ext)
  let res = await fetch('https://telegra.ph/upload', {
      method: 'POST',
      body: form
    })
    let img = await res.json()
    if (img.error) throw img.error
    return 'https://telegra.ph' + img[0].src
  // form.append('image', buffer, 'tmp.' + ext)
  // var jsonnya = await fetch('https://api.imgbb.com/1/upload?expiration=600&key=7c358c65b061f4c222562bac6aa72c17', {
  //   method: 'POST',
  //   body: form
  // })
  //   .then((response) => response.json())
  //   .then((result) => {
  //     return result
  //   })
  //   .catch(e => {
  //     return e
  //   })
  // return jsonnya
}

