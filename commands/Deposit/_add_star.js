/*CMD
  command: /add_star
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Deposit
  answer: 
  keyboard: 
  aliases: 
CMD*/

var cur = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID",
  field_name: "AdminCUR"
})
var ApiKey = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID",
  field_name: "ApiKey"
})
var SecretKey = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID",
  field_name: "SecretKey"
})
var depo = User.getProperty("depowall")
var key = options.amount
if (depo) {
  Bot.sendMessage(
    "\n\n💥 *Send " +
      key +
      " " +
      cur +
      " to the generated address of bot*" +
      "\n\n* 🌐 After 10 Confirmation Later Your Deposit Will Show Into The Bot.* " +
      "\n\n*📥 Your Personal Deposit Address :* " +
      "\n\n`" +
      depo +
      "`\n"
  )
} else {
var callback = Libs.Webhooks.getUrlFor({
      command: "/on_Add_star "+key,
      user_id: user.id
    })
CryptoAdGateWayBot({
      api_key: ApiKey,
      secret_key: SecretKey,
      currency: cur,
      callback: callback,
      name: "deposit"
    })
}

