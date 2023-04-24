/*CMD
  command: /successful
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Withdraw
  answer: 
  keyboard: 
  aliases: 
CMD*/

var json = JSON.parse(content)
if (json.error) {
  return Bot.sendMessage("ERROR: " + json.error.message)
}
var cur = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID",
  field_name: "AdminCUR"
})
var channel1 = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID",
  field_name: "channel1"
})
var txid = json.hash
var amount = json.amount
var wallet = json.to
Bot.sendMessage(
  "*💵 Withdrawal Paid*\n\n" +
    "*The owner Automatically Paid your withdrawal of* " +
    amount +
    " *" +
    cur +
    " on your wallet*\n" +
    wallet +
    "\n*⛓ TXID*" +
    "\n" +
    txid +
    "",
  { disable_web_page_preview: true }
)
var info =
  "[" + user.first_name + "]" + "(" + "tg://user?id=" + user.telegramid + ")"

Api.sendMessage({
  chat_id: channel1,
  text:
    "*❤️ New Withdrawal Received ❤️*" +
    "\n\n🔸 Status: Confirmed" +
    "\n *🔸Amount Withdraw: * " +
    amount +
    "* " +
    cur +
    " * \n *🔸Name:* " +
    info +
    "\n * \n🌐 Transaction ID:  *" +
    "\n " +
    txid +
    "\n",
  parse_mode: "Markdown",
  disable_web_page_preview: true
})
var userPayment = Libs.ResourcesLib.anotherChatRes("userpayment", "global")
userPayment.add(+amount)
var time = Libs.DateTimeFormat.format(new Date(), "dd/m/yyyy h:M:s T") + "M"
var history = User.getProperty("history")

if (history == undefined) {
  var newh =
    "*Withdraw Amount* : " + amount + " " + cur + " " + "\n⚕DATE " + time + "\n"
  User.setProperty("history", newh, "string")
} else {
  var nwh =
    "*Withdraw Amount* : " + amount + " " + cur + " " + "\n⚕DATE " + time + "\n"
  var toal = nwh + history
  User.setProperty("history", toal, "string")
}

var json = JSON.parse(content)
if (json.error) {
  return Bot.sendMessage("ERROR: " + json.error.message)
}
var cur = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID",
  field_name: "AdminCUR"
})
var channel1 = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID",
  field_name: "channel1"
})
var txid = json.hash
var amount = json.amount
var wallet = json.to
Bot.sendMessage(
  "*💵 Withdrawal Paid*\n\n" +
    "*The owner Automatically Paid your withdrawal of* " +
    amount +
    " *" +
    cur +
    " on your wallet*\n" +
    wallet +
    "\n*⛓ TXID*" +
    "\n" +
    txid +
    "",
  { disable_web_page_preview: true }
)
var info =
  "[" + user.first_name + "]" + "(" + "tg://user?id=" + user.telegramid + ")"

Api.sendMessage({
  chat_id: channel1,
  text:
    "*❤️ New Withdrawal Received ❤️*" +
    "\n\n🔸 Status: Confirmed" +
    "\n *🔸Amount Withdraw: * " +
    amount +
    "* " +
    cur +
    " * \n *🔸Name:* " +
    info +
    "\n * \n🌐 Transaction ID:  *" +
    "\n " +
    txid +
    "\n",
  parse_mode: "Markdown",
  disable_web_page_preview: true
})
var userPayment = Libs.ResourcesLib.anotherChatRes("userpayment", "global")
userPayment.add(+amount)
var time = Libs.DateTimeFormat.format(new Date(), "dd/m/yyyy h:M:s T") + "M"
var history = User.getProperty("history")

if (history == undefined) {
  var newh =
    "*Withdraw Amount* : " + amount + " " + cur + " " + "\n⚕DATE " + time + "\n"
  User.setProperty("history", newh, "string")
} else {
  var nwh =
    "*Withdraw Amount* : " + amount + " " + cur + " " + "\n⚕DATE " + time + "\n"
  var toal = nwh + history
  User.setProperty("history", toal, "string")
}

