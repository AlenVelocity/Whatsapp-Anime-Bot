const botname = 'Walljumper'
const prefix = '#'
function help( pushname ) {
    return `👋️Olá *${pushname}*, Eu sou ${botname}. 

⭐️ *Command List* ⭐️

*_User Commands_* 👥️

*CMD: #profile* 📝️
*Descrição: exibe o perfil do usuário em*
*Usage: #profile*

*CMD: #groupinfo* ❤️
*Descrição: Exibe as informações do grupo*
*Usage: #groupinfo*

*CMD: #info* 📃️
*Descrição: Exibe as informações do bot*
*Usage: #info*

*_Query commands_* 🏕️

*CMD: #anime <anime name>* ⛩️
*Descrição: Exibe as informações do nome do anime fornecido*
*Usage: #anime black butler*

*CMD: #wallpaper <query>* 🌌️
*Descrição: Retorna um papel de parede com a consulta especificada*
*Usage: #wallpaper Zelda*

*CMD: #sr <subreddit>* 📱️
*Descrição: Retorna um papel de parede com a consulta especificada*
*Usage: #sr animeirl* 

*CMD: #translate <iso code>* 📒️
*Descrição:Traduz o texto citado*
*Usage: [quoted_msg] #translate en*
*Language codes: https://www.loc.gov/standards/iso639-2/php/code_list.php*

*CMD: #covid <country name>* 🌍️
*Descrição: Retorna um papel de parede com a consulta especificada*
*Usage: #covid japan*

*CMD: #lyrics <song name>* 🎶️
*Descrição: Mostra a letra da música dada*
*Usage: #lyrics Il vento d'oro*

*CMD: #quotemaker | Quote | author* 🌆️
*Descrição: Transforma sua citação em uma imagem compartilhável*
*Usage: #quotemaker | A coragem não precisa ser lembrada, pois nunca é esquecida | Zelda* 

*_Outros comandos_* ✨️

*CMD: #pokemon* 🎯️
*Descrição: Envie uma imagem de um Pokémon aleatório*
*Usage: #pokemon*

*CMD: #rpaper* 🏙️
*Descrição: Envia um wallpaper aleatorio*
*Usage: #rpaper*

*CMD: #waifu* ❤️
*Descrição: Envie a fonte e a imagem de um waifu aleatório*
*Usage: #waifu*

*CMD: #animeneko* 🐱️
*Descrição: envia uma imagem de um neko*
*Usage: #animeneo*

*CMD: #neko* 🐈️
*Descrição: Envia uma imagem de um neko aleatório*
*Usage: #neko*

*CMD: #doggo* 🐕️
*Descrição: envia uma imagem de um filhote aleatório*
*Usage: #doggo*


*_Comandos Sticker_* 🌌️

*CMD: #sticker* 🔖️
*Descrição: Transforma imagens em adesivos*
*Usage: Envie uma imagem ou vídeo com #sticker como legenda*

*CMD: #tsticker* ♥️
*Descrição: Remove o fundo das imagens e se transforma em adesivos*
*Usage: Envie uma imagem com #tsticker como legenda * [funciona apenas com imagens]

*Admin Commands - 1* 👑️
Note:Para usar esses comandos, a pessoa em questão deve ser admin

*CMD: #act welcome* 🎉️
*Descrição: Se estiver ativo, o bot dará as boas-vindas aos novos membros do grupo *
*Usage: #act welcome* 

*CMD: #act nsfw* 🔐️
*Descrição: Se estiver ativo, o bot será capaz de enviar conteúdo para maiores de 18 anos*
*Usage: #act nsfw* 

*CMD: #ping <text(optional)>* 🗣️
*Descrição: Marca todos os membros do grupo*
*Usage: #ping*

*CMD: #delete* 🔀️
*Descrição: Exclui os textos do bot*
*Usage: use #delete ao testar os textos do bot*

*_Admin Commads - 2_* 🌠️
Note: Para executar os seguintes comandos, o bot e o autor precisam ser admin

*CMD: #seticon* ❇️
*Descrição: Define a imagem citada como o ícone do grupo* 
*Usage: #seticon*

*CMD: #kick @user* 🏌️
*Descrição: Expulsa a pessoa mencionada do grupo* 
*Usage: #kick @+10832023922*

*CMD: #promote @user* ⚖️
*Descrição: Torna o usuário mencionado como administrador* 
*Usage: #promote @+10832023922*

*CMD: #demote @user* ⬇️
*Descrição: Rebaixa o usuário mencionado da administração* 
*Usage: #demote @+10832023922*



Esperamos que você tenha um ótimo tempo!`
}
exports.help = help()

function info() {
    return `*Informações do Bot!* 🎉️

Este bot é escrito em javascript puro com runtime node.js.

Support Group: https://chat.whatsapp.com/DI6qXVdkqF2BBOeLD2sLqX

Github Repo: https://github.com/SomnathDas/Whatsapp-Botto-Re
 
*Autor: Levy*
*Base Code: Levy*
*Features: Levy*
*Poll: Levy*`

}
exports.info = info()



