/*CMD
  command: 🏪 Payment Order
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Withdraw
  answer: 
  keyboard: 
  aliases: 
CMD*/

var cur = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID",
  field_name: "AdminCUR"
})
var keyb = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID",
  field_name: "AdminMinWithdraw"
})
var fee = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID",
  field_name: "AdminFee"
})
var res = Libs.ResourcesLib.userRes("balance")
var btcDetails = CurrencyQuote.crypto.details[cur]
var wet = btcDetails.name
var b = User.getProperty("wallet")
if (!b) {
  Bot.sendKeyboard(
    "💼 Set " + wet + " Wallet,\n🆔 Menu",
    "🏪 Payment Order\n\nYour " +
      cur +
      " Wallet Not Found!. Please Set " +
      cur +
      " Wallet"
  )
} else {
  Bot.sendKeyboard("🆔 Menu", "*🏪 Payment Order*")
  Bot.sendMessage(
    "Transaction fee: " +
      fee +
      " " +
      cur +
      ".\n ▪️ Min. Withdraw: " +
      keyb +
      " " +
      cur +
      "\n ▪️ Your " +
      cur +
      ": *" +
      res.value().toFixed(8) +
      "*\n ▪️ " +
      cur +
      " will be sent to the wallet: " +
      "\n*" +
      b +
      "*\n\n 🔻 Enter " +
      cur +
      " want to withdraw:"
  )
  Bot.runCommand("/withdraw")
}

