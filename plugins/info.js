let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 *𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐁𝐨𝐓* 〙 ═
╠➥  Made in javascript via NodeJs
╠➥ Rec: Xᴘʟᴏsɪᴏɴᴡᴀʀʀɪᴏʀ
╠➥ Script: Xᴘʟᴏsɪᴏɴᴡᴀʀʀɪᴏʀ
║
╠➥ YouTube: https://youtube.com/channel/UCJE4CBun_b2ksD6UQX_PYiw
╠➥ instagram: https://instagram.com/xplosionwarrior
╠➥ GitHuB : https://github.com/xplosionwarrior
║
╠═〘 *𝐖𝐀 𝐁𝐨𝐓* 〙 ═
╠➥ MAKE GROUP ADMIN 
╠➥ TURN ON YOUR DATA
╠➥ CONTACT : wa.me//+919567658937
║
║>Request? wa.me//+919567658937
║
╠═〘 *𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐁𝐨𝐓* 〙 ═
`.trim(), m)
}
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

