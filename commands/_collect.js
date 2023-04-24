/*CMD
  command: /collect
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
}
var cur = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID",
  field_name: "AdminCUR"
})
var M1 = Libs.ResourcesLib.userRes("M1")
var M2 = Libs.ResourcesLib.userRes("M2")
var M3 = Libs.ResourcesLib.userRes("M3")
var M4 = Libs.ResourcesLib.userRes("M4")
var M5 = Libs.ResourcesLib.userRes("M5")
var M6 = Libs.ResourcesLib.userRes("M6")
var M7 = Libs.ResourcesLib.userRes("M7")
var res = (
  M1.value() +
  M2.value() +
  M3.value() +
  M4.value() +
  M5.value()
).toFixed(3)
Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "✅ You received (" + res + ") " + cur + " ",

  show_alert: false
})
Bot.runCommand("/collecting "+message_id)

