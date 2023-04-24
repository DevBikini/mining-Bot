/*CMD
  command: /collecting
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
var M1 = Libs.ResourcesLib.userRes("M1")
var M2 = Libs.ResourcesLib.userRes("M2")
var M3 = Libs.ResourcesLib.userRes("M3")
var M4 = Libs.ResourcesLib.userRes("M4")
var M5 = Libs.ResourcesLib.userRes("M5")
var M6 = Libs.ResourcesLib.userRes("M6")
var M7 = Libs.ResourcesLib.userRes("M7")
var balance = Libs.ResourcesLib.userRes("balance")
balance.add(
  M1.value() +
    M2.value() +
    M3.value() +
    M4.value() +
    M5.value() +
    M6.value() +
    M7.value()
)
M1.add(-M1.value())
M2.add(-M2.value())
M3.add(-M3.value())
M4.add(-M4.value())
M5.add(-M5.value())
M6.add(-M6.value())
M7.add(-M7.value())
var res = (
  M1.value() +
  M2.value() +
  M3.value() +
  M4.value() +
  M5.value()
).toFixed(3)
var t =
  "*🔧 My Machines*" +
  "\n\n*💻 Cloud M1:* " +
  M1.value().toFixed(3) +
  " " +
  cur +
  " " +
  "\n*💻 Cloud M2:* " +
  M2.value().toFixed(3) +
  " " +
  cur +
  " " +
  "\n*💻 Cloud M3:* " +
  M3.value().toFixed(3) +
  " " +
  cur +
  " " +
  "\n*💻 Cloud M4:* " +
  M4.value().toFixed(3) +
  " " +
  cur +
  " " +
  "\n*💻 Cloud M5:* " +
  M5.value().toFixed(3) +
  " " +
  cur +
  " " +
  "\n*💻 Cloud M6:* " +
  M6.value().toFixed(3) +
  " " +
  cur +
  " " +
  "\n*💻 Cloud M7:* " +
  M7.value().toFixed(3) +
  " " +
  cur +
  " " +
  "\n\n" +
  "Totally produced: *" +
  res +
  "* *" +
  cur +
  "* "
var b = [[{ text: "Collect " + cur, callback_data: "/collect" }]]

Api.editMessageText({
  message_id: params,
  text: t,
  parse_mode: "Markdown",
  disable_web_page_preview: true,
  reply_markup: {
    inline_keyboard: b
  }
})

