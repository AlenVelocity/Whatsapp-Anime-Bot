const { decryptMedia } = require('@open-wa/wa-decrypt')
const fs = require('fs-extra')
const mime = require('mime-types')
const nrc = require('node-run-cmd')
const sizeOf = require('image-size')
const gifFrames = require('gif-frames')
const Jimp = require('jimp')
const { GifFrame, GifUtil, GifCodec } = require('gifwrap')
const queuejs = require('./queue')

exports.sendAnimatedSticker = async function (message, client) {
  if (sendingAnimatedSticker.indexOf(message.from) > -1) {
    queueAnimatedSticker.push(message)
    return
  } else {
  }
  sendingAnimatedSticker.push(message.from)
  const buffer = await decryptMedia(message)
  const fileName = `./media/sticker/temp${message.from}.${mime.extension(message.mimetype)}`
  fs.writeFile(fileName, buffer, function (err) {})
  await nrc.run('ffmpeg -y -i ./media/sticker/temp' + message.from + '.mp4 ./media/sticker/' + message.from + '.gif')
  await gifFrames({ url: './media/sticker/' + message.from + '.gif', frames: 0 }).then(function (frameData) {
    frameData[0].getImage().pipe(fs.createWriteStream('./media/sticker/firstframe' + message.from + '.png'))
  })
  await Jimp.read('./media/sticker/firstframe' + message.from + '.png')
    .then((image) => {
      image.brightness(0.04)
      image.write('./media/sticker/firstframe' + message.from + '.png')
    })
    .catch((err) => {
      // Handle an exception.
    })
  //await nrc.run('convert ' + 'media/sticker/' + message.from + '.gif -delete 0 media/sticker/' + message.from + '.gif')
  var dimensions = await sizeOf('media/sticker/' + message.from + '.gif')
  if (dimensions.width < dimensions.height) {
    await nrc.run('mogrify -bordercolor transparent -border ' + (dimensions.height - dimensions.width) / 2 + 'x0 ./media/sticker/' + message.from + '.gif')
    await nrc.run('mogrify -bordercolor transparent -border ' + (dimensions.height - dimensions.width) / 2 + 'x0 ./media/sticker/firstframe' + message.from + '.png')
  } else if (dimensions.width > dimensions.height) {
    await nrc.run('mogrify -bordercolor transparent -border 0x' + (dimensions.width - dimensions.height) / 2 + ' ./media/sticker/' + message.from + '.gif')
    await nrc.run('mogrify -bordercolor transparent -border 0x' + (dimensions.width - dimensions.height) / 2 + ' ./media/sticker/firstframe' + message.from + '.png')
  } else {
  }
  await nrc.run('convert ' + './media/sticker/firstframe' + message.from + '.png' + ' ./media/sticker/' + message.from + '.gif' + ' media/sticker/' + message.from + '.gif')
  try {
    const contents = await fs.readFile(`./media/sticker/${message.from}.gif`, {encoding: 'base64'}) 
    await sclient.sendImageAsSticker(message.from, `data:image/gif;base64,${contents.toString('base64')}`)
    await fs.unlinkSync(`./media/sticker/${message.from}.gif`)
    await fs.unlinkSync(`./media/sticker/firstframe${message.from}.png`)
    await fs.unlinkSync(`./media/sticker/temp${message.from}.mp4`)
  } catch (error) {
    console.log(error)
    if (String(error) == 'Error: Processed image is too large for the WebP format') {
      client.reply(message.from, String(error), message.id.toString()) //Error: Processed image is too large for the WebP format
    }
  }

  for (let index = 0; index < sendingAnimatedSticker.length; index++) {
    if (sendingAnimatedSticker[index] == message.from) {
      sendingAnimatedSticker.splice([index], 1)
    }
  }
  if (queueAnimatedSticker.length != 0) {
    queuejs.sendAnimatedSticker(message)
  }
  delete require.cache[require.resolve('./queue')]
}
