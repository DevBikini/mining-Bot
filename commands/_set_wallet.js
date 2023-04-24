/*CMD
  command: /set_wallet
  help: 
  need_reply: true
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
var btcDetails = CurrencyQuote.crypto.details[cur]
var wet = btcDetails.name
if (message.length > 30) {
  Bot.sendKeyboard(
    "🆔 Menu",
    "✅ Update wallet successfully.\nYour " +
      cur +
      " wallet:\n*" +
      message +
      "*\n"
  )
  User.setProperty("wallet", message, "string")
} else {
  Bot.runCommand("/set_wallet")
  Bot.sendMessage(
    "❎ Error your " +
      wet +
      " wallet invalid please set your " +
      wet +
      " corect address.."
  )
}
