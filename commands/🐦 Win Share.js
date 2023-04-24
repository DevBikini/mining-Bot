/*CMD
  command: 🐦 Win Share
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var reward = AdminPanel.getFieldValue({
  panel_name: "winshare",
  field_name: "winshare"
})
var msg = AdminPanel.getFieldValue({
  panel_name: "winshare",
  field_name: "winshare-message"
})
if (!reward) {
  Bot.sendMessage("*No Task Available*")
  return
}
Bot.sendMessage(
  "Share the following tag and win.\nIf you share this on twitter you will win " +
    reward +
    " 🌟. If you share, please send us a link."
)
var key = [
  [{ title: "✏️ Send Us Share Link(Only Twitter)", command: "/twitter" }]
]
let lib = Libs.ReferralLib
let reflist = lib.currentUser.refList
reflist = lib.currentUser.refList.get()

let bots = Libs.ReferralLib.currentUser.getRefLink("" + bot.name + "", "r")
var Lang = { ref: bots }
var php = msg.replace(/{([a-z_]+)}/gi, function(fullmatch, key) {
  return Lang[key] ? Lang[key] : fullmatch
})

Bot.sendInlineKeyboard(key, php)

