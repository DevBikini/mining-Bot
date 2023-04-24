/*CMD
  command: 🌟 Add Star
  help: 
  need_reply: 
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
var g_rate = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID",
  field_name: "GameRate"
})
Bot.sendKeyboard(
  "🆔 Menu",
  "*Deposit*\n\nTo deposit " +
    cur +
    " into the game you need to send us a confirmation ticket before you send. This will make your transaction completely fast.\n\n▪️ Minimum deposit amount: \n" +
    key +
    " " +
    cur +
    "\n▪️ Game currency rate: " +
    "\n 1 " +
    cur +
    " = " +
    g_rate +
    " 🌟\n\n🔻 Enter desired " +
    cur +
    " amount:"
)
Bot.runCommand("/add_star_amount")

