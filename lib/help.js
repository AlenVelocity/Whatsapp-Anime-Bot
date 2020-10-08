const botname = 'Emilia'
const prefix = '#'
function help( pushname ) {
    return `👋️Hi *${pushname}*, I'm ${botname}. 

⭐️ *Command List* ⭐️

*_User Commands_* 👥️

*CMD: #profile* 📝️
*Description: Display's the profile of user in*
*Usage: #profile*

*CMD: #groupinfo* ❤️
*Description: Displays the information of the group*
*Usage: #groupinfo*

*CMD: #info* 📃️
*Description: Displays the information about the bot*
*Usage: #info*

*_Query commands_* 🏕️

*CMD: #anime <anime name>* ⛩️
*Description: Displays the infromation of the given anime name*
*Usage: #anime black butler*

*CMD: #wallpaper <query>* 🌌️
*Description: Return's a wallpaper with the specified query*
*Usage: #wallpaper Zelda*

*CMD: #sr <subreddit>* 📱️
*Description: Return's a wallpaper with the specified query*
*Usage: #sr animeirl* 

*CMD: #translate <iso code>* 📒️
*Description: Translates the quoted text*
*Usage: [quoted_msg] #translate en*
*Language codes: https://www.loc.gov/standards/iso639-2/php/code_list.php*

*CMD: #covid <country name>* 🌍️
*Description: Return's a wallpaper with the specified query*
*Usage: #covid japan*

*CMD: #lyrics <song name>* 🎶️
*Description: Displays the lyrics of the given song*
*Usage: #lyrics Il vento d'oro*

*CMD: #quotemaker | Quote | author* 🌆️
*Description: Turns your quote into a sharable image*
*Usage: #quotemaker | Courage need not to be remembered for it is never forgotten | Zelda* 

*_Random commands_* ✨️

*CMD: #pokemon* 🎯️
*Description: Send an image of a random pokemon*
*Usage: #pokemon*

*CMD: #rpaper* 🏙️
*Description: Sends a random wallpaper*
*Usage: #rpaper*

*CMD: #waifu* ❤️
*Description: Send the source and image of a random waifu*
*Usage: #waifu*

*CMD: #animeneko* 🐱️
*Description: sends an image of a cultured neko*
*Usage: #animeneo*

*CMD: #neko* 🐈️
*Description: Sends an image of a random neko*
*Usage: #neko*

*CMD: #doggo* 🐕️
*Description: sends an image of a random pup*
*Usage: #doggo*


*_Sticker Commands_* 🌌️

*CMD: #sticker* 🔖️
*Description: Turns images into stickers*
*Usage: Send an image or video with #sticker as caption*

*CMD: #tsticker* ♥️
*Description: Removes the background of images and turns into stickers*
*Usage: Send an image with #tsticker as caption* [works only with images]

*Admin Commands - 1* 👑️
Note:To use these commands, The person in question must be admin

*CMD: #act welcome* 🎉️
*Description: If this is active, the bot will welcome new members to te group*
*Usage: #act welcome* 

*CMD: #act nsfw* 🔐️
*Description: If this is active, the bot will be able to send 18+ content*
*Usage: #act nsfw* 

*CMD: #ping <text(optional)>* 🗣️
*Description: Tags all members in the group*
*Usage: #ping*

*CMD: #delete* 🔀️
*Description: Deletes the bot's texts*
*Usage: use #delete while taging the bot's texts*

*_Admin Commads - 2_* 🌠️
Note: To execute the following commands the bot and the author needs to be admin

*CMD: #seticon* ❇️
*Description: Sets the quoted image as the group icon* 
*Usage: #seticon*

*CMD: #kick @user* 🏌️
*Description: Kicks the mentioned person from the group* 
*Usage: #kick @+10832023922*

*CMD: #promote @user* ⚖️
*Description: Makes the metioned user admin* 
*Usage: #promote @+10832023922*

*CMD: #demote @user* ⬇️
*Description: Demotes the mentioned user from adminship* 
*Usage: #demote @+10832023922*



We hope you have a great time!`
}
exports.help = help()

function info() {
    return `*Bot infromation!* 🎉️

This bot is written in pure javascript with node.js runtime. 
If you'd like to know more join our support group using the link below!

Support Group: https://chat.whatsapp.com/DI6qXVdkqF2BBOeLD2sLqX

Github Repo: https://github.com/SomnathDas/Whatsapp-Botto-Re
 
*Author: Alen Yohannan*
*Base Code: Yoga Sakthi*
*Features: MhankBarBar*
*Poll: Shubham Badgujar*`

}
exports.info = info()



