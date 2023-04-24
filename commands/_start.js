/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var welco = User.getProperty("welco")
var channel1 = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID", // panel name
  field_name: "channel1" // field name
})
var channel2 = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID", // panel name
  field_name: "channel2" // field name
})
Bot.sendKeyboard(
  "🆔 Menu",
  "Welcome to *"+bot.name+"* \nIn this game you can play and earn real money at the same time!"
)
var x = [
  [
    {
      title: "🔴 Total Payment Receipt 🔴",
      url: channel1
    }
  ]
]
var y = [
  [
    {
      title: "🔴 Total Deposit Receipt 🔴",
      url: channel2
    }
  ]
]
Bot.sendInlineKeyboard(x, "🔻 New channel - Payment list 🔻")
Bot.sendInlineKeyboard(y, "🔻 New channel - Payment list 🔻")
if (welco == undefined) {
  var tota = Libs.ResourcesLib.anotherChatRes("tota", "global")
  tota.add(1)
}
User.setProperty("welco", user.telegramid, "text")

function onAttracted(refUser) {
  // access to Bonus Res of refUser
  var ress = Libs.ResourcesLib.anotherUserRes("refco", refUser.telegramid)
  ress.add(90)
  Bot.sendMessageToChatWithId(refUser.telegramid, "*➕ 90 ⭐️ For New Referral*")
}
Libs.ReferralLib.currentUser.track({
  onAtractedByUser: onAttracted
})

