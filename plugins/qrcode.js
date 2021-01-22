let qrcode = require("qrcode")

let handler  = async (m, { conn, args }) => {
  conn.sendFile(m.chat, await qrcode.toDataURL(args.join(' '), { scale: 8 }), 'qrcode.png', 'Your QR code is complete.. \n *Youtube:* https://youtube.com/channel/UCJE4CBun_b2ksD6UQX_PYiw ', m)
}
handler.command = /^qr(code)?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

