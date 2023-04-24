/*CMD
  command: /add_star_amount
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Deposit
  answer: 
  keyboard: 
  aliases: 
CMD*/

var key = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID",
  field_name: "AdminMinDepo"
})
var cur = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID",
  field_name: "AdminCUR"
})
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
var value = message
if (!isNumeric(value)) {
  Bot.sendMessage("*📛 Amount Invalid Try again*")
  Bot.runCommand("/add_star_amount")
  return
}
if (message < key) {
  Bot.sendMessage("Minimum Deposit " + key + " " + cur)
  Bot.runCommand("/add_star_amount")
} else {
  Bot.run({
    command: "/add_star",
    options: { amount: message }
  })
}

