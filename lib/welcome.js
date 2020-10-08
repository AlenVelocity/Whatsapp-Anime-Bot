var emojiStrip = require('emoji-strip')
const fs = require('fs-extra')

module.exports = welcome = async (client, event) => {
  if (event.who == '9074161917@c.us') return 
  const wel = JSON.parse(fs.readFileSync('./lib/welcome.json'))
  const iswel = wel.includes(event.chat)
  try {
  if ((event.action == 'add') && (iswel == true)) {
  const det = await client.getChatById(event.chat)
  const person = await client.getContact(event.who)
  const personname = person.pushname 
  const groupname = det.contact.formattedName 
  const unique = `https://dynamage.herokuapp.com/api?id=eAsHzSIZ9krEJNefBI7AldCkp&width=1366&height=768&var1=${groupname}&var2=${personname}`
  const url = emojiStrip(unique)
  console.log(url)
  const filename = 'welcome.png'
  await client.sendTextWithMentions(event.chat, `Welcome to *${groupname}!* \n\n@${event.who.replace('@c.us', '')} \n\nHave fun with us✨ \n\n *Group Description* ❇️ \n\n ${det.groupMetadata.desc}`)
  await client.sendFileFromUrl(event.chat, url, filename, '')
  } 

  } catch(err) {

  console.log(err)

  }

}
