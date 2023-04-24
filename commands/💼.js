/*CMD
  command: 💼
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

var cur = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID",
  field_name: "AdminCUR"
})
var btcDetails = CurrencyQuote.crypto.details[cur]
var wet = btcDetails.name
var wallet = User.getProperty("wallet")
if (!wallet) {
  var button = [[{ title: "💼 Set / Change Wallet", command: "/wallet" }]]
  Bot.sendInlineKeyboard(
    button,
    "*Settings*" +
      "\n\n_The system will automatically save your Tron address forever in subsequent transactions until you want to change it again_" +
      "\n\n*Your " +
      wet +
      " wallet:*" +
      "\n" +
      " `not set`" +
      "\n\nWhich wallet do you want to set?"
  )
} else {
  var button = [[{ title: "✏️ Change " + wet + " Wallet", command: "/wallet" }]]
  Bot.sendInlineKeyboard(
    button,
    "*Settings*" +
      "\n\n_The system will automatically save your " +
      wet +
      " address forever in subsequent transactions until you want to change it again_" +
      "\n\n*Your " +
      wet +
      " wallet:*" +
      "\n" +
      wallet +
      "\n\nWhich wallet do you want to set?"
  )
}
