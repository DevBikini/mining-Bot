/*CMD
  command: 📊 Extra
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var cur = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID",
  field_name: "AdminCUR"
})
var channel1 = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID",
  field_name: "channel1"
})
var channel2 = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID",
  field_name: "channel2"
})
var tota = Libs.ResourcesLib.anotherChatRes("tota", "global")
Bot.sendKeyboard(
  "🏧 Payments,💼 Set "+cur+" Wallet,\n🆔 Menu",
  "*📊 Statistics*\n\nTotal Players: *" + tota.value() + "*\n"
)
var userPayment = Libs.ResourcesLib.anotherChatRes("userpayment", "global")
var key = [
  [
    {
      title: "📮 Recent payments And Deposits",
      url: channel2
    }
  ]
]
var x = [
  [
    {
      title: "🔻 New channel - Payment list 🔻",
      url: channel1
    }
  ]
]
var trx = CurrencyQuote.convert({
  amount: "" + userPayment.value() + "",
  from: "" + cur + "",
  to: "USD"
})
Bot.sendInlineKeyboard(
  key,
  "Total payed out: " +
    "\n*" +
    userPayment.value().toFixed(4) +
    "* *"+cur+"*" +
    " *~* *" +
    trx.toFixed(3) +
    "* *$*"
)
Bot.sendInlineKeyboard(x, "🔻 New channel - Payment list 🔻")

