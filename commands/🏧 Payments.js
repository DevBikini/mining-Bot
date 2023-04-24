/*CMD
  command: 🏧 Payments
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
var b = User.getProperty("wallet")
var btcDetails = CurrencyQuote.crypto.details[cur]
var wet = btcDetails.name
var b = User.getProperty("wallet")
if (!b) {
  Bot.sendKeyboard(
    "🏪 Payment Order,📋 Payment History,\n🆔 Menu",
    "Your " + wet + " Wallet: "
  )
  Bot.sendMessage("*Not Found!*")
} else {
  Bot.sendKeyboard(
    "🏪 Payment Order,📋 Payment History,\n🆔 Menu",
    "Your " + wet + " Wallet:\n`" + b+"`"
  )
}

