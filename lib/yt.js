const nrc = require('node-run-cmd')
const fs = require('fs')
const ytdl = require('ytdl-core')
const queuejs = require('./queue')

exports.mp3 = async function (message) {
  if (amdownloaden.indexOf(message.from) > -1) {
    sclient.sendText(message.from, 'Audio added to Queue')
    queuemp3.push(message)
    return
  } else {
  }
  amdownloaden.push(message.from)

  var link = String(message.body.match(/\bhttps?:\/\/\S+/gi))
  if (link == 'null') {
    sclient.sendText(message.from, 'No Video Link')
    for (let index = 0; index < amdownloaden.length; index++) {
      if (amdownloaden[index] == message.from) {
        amdownloaden.splice([index], 1)
      }
    }
    return
  }
  sclient.sendText(message.from, 'Mp3 Downloading...')
  await nrc.run('youtube-dl --extract-audio --audio-quality 0 --audio-format mp3  --output ' + './media/audio/' + message.from + '.%(ext)s" ' + link)
  if (Math.round(fs.statSync('./media/audio/' + message.from + '.mp3').size / 1000000) > 99) {
    sclient.sendText(message.from, "File bigger then 100 Mb can't send file")
    if (queuemp3.length != 0) {
      queuejs.mp3(message)
    }
    return
  }
  sclient.sendFile(message.from, './media/audio/' + message.from + '.mp3', '', '')
  if (Math.round(fs.statSync('./media/audio/' + message.from + '.mp3').size / 1000000) == 0) {
    var größe = Math.round(fs.statSync('./media/audio/' + message.from + '.mp3').size / 1000) + ' kB'
  } else {
    var größe = Math.round(fs.statSync('./media/audio/' + message.from + '.mp3').size / 1000000) + ' MB'
  }

  sclient.sendText(message.from, 'Sending Audio... \nSize: ' + größe)
  for (let index = 0; index < amdownloaden.length; index++) {
    if (amdownloaden[index] == message.from) {
      amdownloaden.splice([index], 1)
    }
  }
  if (queuemp3.length != 0) {
    queuejs.mp3(message)
  }
  delete require.cache[require.resolve('./queue')]
}

exports.mp4 = async function (message) {
  if (amdownloaden.indexOf(message.from) > -1) {
    sclient.sendText(message.from, 'Video added to Queue')
    queuemp4.push(message)
    return
  } else {
  }
  // amdownloaden.push(message.from)

  var link = String(message.body.match(/\bhttps?:\/\/\S+/gi))
  if (link == 'null') {
    sclient.sendText(message.from, 'There\'s no Link')
    for (let index = 0; index < amdownloaden.length; index++) {
      if (amdownloaden[index] == message.from) {
        amdownloaden.splice([index], 1)
      }
    }
    return
  }
  sclient.sendText(message.from, 'Video downloading...')
  await nrc.run('youtube-dl --format mp4 --no-continue  --output "./media/video/' + message.from + '.%(ext)s" ' + link)
  if (Math.round(fs.statSync('./media/video/' + message.from + '.mp4').size / 1000000) > 63) {
    sclient.sendText(message.from, "File bigger then 64 Mb can't send file")
    if (queuemp4.length != 0) {
      queuejs.mp4(message)
    }
    return
  }
  await sclient.sendFile(message.from, './media/video/' + message.from + '.mp4', '', '')

  if (Math.round(fs.statSync('./media/video/' + message.from + '.mp4').size / 1000000) == 0) {
    var größe = Math.round(fs.statSync('./media/video/' + message.from + '.mp4').size / 1000) + ' kB'
  } else {
    var größe = Math.round(fs.statSync('./media/video/' + message.from + '.mp4').size / 1000000) + ' MB'
  }

  sclient.sendText(message.from, 'Video sending\nSize: ' + größe)
  Sleep(10000)
  for (let index = 0; index < amdownloaden.length; index++) {
    if (amdownloaden[index] == message.from) {
      amdownloaden.splice([index], 1)
    }
  }
  if (queuemp4.length != 0) {
    queuejs.mp4(message)
  }
  delete require.cache[require.resolve('./queue')]
}

function Sleep(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds))
}

var dataCallback = function (data) {
  daten = data
}

