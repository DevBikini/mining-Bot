/*CMD
  command: /wallet
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (request.data) {
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id

  Api.deleteMessage({
    chat_id: chat_id,
    message_id: message_id
  })
}
var cur = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID",
  field_name: "AdminCUR"
})
var btcDetails = CurrencyQuote.crypto.details[cur]
var wet = btcDetails.name
Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "Input " + wet + " Wallet",

  show_alert: false
})

Bot.sendMessage("🔻 Input "+wet+" wallet for paying out:")
Bot.runCommand("/set_wallet")
