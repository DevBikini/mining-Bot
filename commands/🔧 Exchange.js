/*CMD
  command: 🔧 Exchange
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
var g_rate = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID",
  field_name: "GameRate"
})
var btcDetails = CurrencyQuote.crypto.details[cur]
var wet = btcDetails.name
var balance = Libs.ResourcesLib.userRes("balance")
Bot.sendKeyboard(
  "🆔 Menu",
  "In this section, you can exchange "+wet+" for Star. \nAll Stars you will receive will be added to your account. \n\n🔻 Game currency rate: \n▪️ 1 " +
    cur +
    " = " +
    g_rate +
    " 🌟" +
    "\n\n🔻 Your " +
    cur +
    ": " +
    "\n" +
    balance.value().toFixed(8) +
    "\n\n👇 *Enter " +
    cur +
    " you want to exchange* : "
)
Bot.runCommand("/exchange")

