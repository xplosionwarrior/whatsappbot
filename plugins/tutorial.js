let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
Tutorial Bot WA:
Credit: *~xᴘʟᴏsɪᴏɴᴡᴀʀʀɪᴏʀ*

Usage:- *[TERMUX]*
1) $pkg install git
2) $pkg install ffmpeg
3) $pkg install imagemagick
4) $pkg install nodejs


5) $git clone https://github.com/xplosionwarrior/whatsappbot.git
6) $ls
7) $cd whatsappbot

the * last * ..
installation :)
8) npm install
9) node index.js

*Our Youtube channel *sᴜʙsᴄʀɪʙᴇ💟:*
https://youtube.com/channel/UCJE4CBun_b2ksD6UQX_PYiw
`.trim(), m)
}
handler.command = /^(tutorial)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

