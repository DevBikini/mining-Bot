/*CMD
  command: /withdraw
  help: 
  need_reply: true
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
var Apikey = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID",
  field_name: "ApiKey"
})
var SecretKey = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID",
  field_name: "SecretKey"
})
var withdraw = Libs.ResourcesLib.userRes("withdraw")
var wallet = User.getProperty("wallet")
var balance = Libs.ResourcesLib.userRes("balance")
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
if (!isNumeric(message)) {
  Bot.sendMessage("*📛 Invaild amount. Try again*", {
    is_reply: true
  })
  return
}

if (message < keyb) {
  Bot.sendMessage("*⚠️ Minimum Withdrawal :* " + keyb + " *" + cur + "*")
} else {
  if (message > balance.value()) {
    Bot.sendMessage(
      "*⚠️ Insufficient balance* " +
        "*(You Have* *" +
        balance.value().toFixed(8) +
        "* *" +
        cur +
        ")*"
    )
  } else {
    if (message >= keyb && message <= 150000) {
      var callback = Libs.Webhooks.getUrlFor({
        command: "/successful",
        user_id: user.id
      })
      CryptoAdGateWayBot({
        api_key: Apikey,
        secret_key: SecretKey,
        amount: message,
        address: wallet,
        currency: cur,
        callback: callback,
        name: "withdraw"
      })
      balance.add(-message)
      withdraw.add(+message)
    }
    Bot.sendMessage(
      "✅* Withdrawal Requested*\nYour payment is being processed automatically right now!\n\n_You will receive TXID soon_" +
        "\n\n💳 *Transaction Details:* " +
        message +
        " " +
        cur +
        " to the wallet\n" +
        "`" +
        wallet +
        "`"
    )
  }
}

