/*CMD
  command: /exchange
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
var key = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID",
  field_name: "AdminMinDepo"
})
var refco = Libs.ResourcesLib.userRes("refco")
var g_rate = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID",
  field_name: "GameRate"
})
var balance = Libs.ResourcesLib.userRes("balance")
var time = Libs.DateTimeFormat.format(new Date(), "dd/m/yyyy h:M:s T") + "M"
var amount = g_rate * message
var info =
  "[" + user.first_name + "]" + "(" + "tg://user?id=" + user.telegramid + ")"
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
var value = message
if (!isNumeric(value)) {
  Bot.sendMessage("*📛 Invaild Amount. Try again*", { is_reply: true })
  return
}

if (message < key) {
  Bot.sendMessage("👋 Your " + cur + " amount is too small. please re-enter:")
  Bot.runCommand("/exchange")
} else {
  if (message > balance.value()) {
    Bot.sendMessage("👋 Your " + cur + " amount is too big. please re-enter:")
    Bot.runCommand("/exchange")
  } else {
    Bot.sendMessage(
      "*🔄 Exchange Successful*" +
        "\n\n*🌟 You received* *" +
        amount +
        "* *Stars*"
    )
    balance.add(-message)
    refco.add(amount)
  }
}

