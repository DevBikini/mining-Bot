/*CMD
  command: 🆔 Menu
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var channel1 = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID",
  field_name: "channel1"
})
var channel2 = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID",
  field_name: "channel2"
})
var cur = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID",
  field_name: "AdminCUR"
})
var res = Libs.ResourcesLib.userRes("refco")
var ress = Libs.ResourcesLib.userRes("balance")
Bot.sendKeyboard(
  "🌟 Add Star,🏪 Shop,💻 Working,\n🔧 Exchange,📊 Extra,💚 Bonus,\n👬 invite friends,📞 Support",
  "🌎 ACCOUNT\n\n▪️ Your Stars: " +
    res.value() +
    " 🌟\n▪️ Your " +
    cur +
    " : " +
    ress.value().toFixed(4)
)
var key = [[{ title: "Total Payment Receipt", url: channel1 }]]
var key2 = [[{ title: "Total Payment Receipt", url: channel2 }]]
//for bonus
//var key3 = [[{ title: "💥💥 BIG BONUS 1100% 💥💥", command: "/bigbons" }]]
var users = Libs.ResourcesLib.anotherChatRes("userpayment", "global")
var trx = CurrencyQuote.convert({
  amount: "" + users.value() + "",
  from: "" + cur + "",
  to: "USD"
})
Bot.sendInlineKeyboard(
  key,
  "Total payed out: \n*" +
    users.value().toFixed(4) +
    "* *~* *" +
    trx.toFixed(3) +
    "* *$*"
)
Bot.sendInlineKeyboard(key2, "New Deposit Channel")
//for bonus
//Bot.sendInlineKeyboard(key3, "*🔴 Bonus Opened 🔴*")

