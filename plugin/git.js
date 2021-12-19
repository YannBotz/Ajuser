const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://i.ibb.co/Y2mXdR5/ajuser.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `ＡＪＵＳＥＲ ＢＯＴ

*bot making video* : _RA DUE YT :V_

*owner id instagram* :https://www.instagram.com/invites/contact/?i=vodzc8yqccum&utm_content=ic0cvm0.

*github* : _https://github.com/YannBotz_.

■□■□■□■□■□■□■□■□■□■□
       _Yanz𝙨𝙚𝙧 𝘽𝙤𝙩_
  ▣▣ created by Yanz ▣▣

`}) 

}));
