/*CMD
  command: /on_Add_star
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Deposit
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
if (json.address) {
  var wallet = json.address
  var key = params
  Bot.sendMessage(
    "*💥 Send " +
      key +
      " " +
      cur +
      " to the generated address of bot*" +
      "\n\n* 🌐 After 10 Confirmation Later Your Deposit Will Show Into The Bot.* " +
      "\n\n*📥 Your Personal Deposit Address :* " +
      "\n\n`" +
      wallet +
      "`\n"
  )
  User.setProperty("depowall", wallet, "string")
  return
}
if (json.hash) {
  var channel2 = AdminPanel.getFieldValue({
    panel_name: "ADMIN_ID",
    field_name: "channel2"
  })
  var cur = json.currency
  var amount = json.amount
  var amountt = amount * 20
  var time = Libs.DateTimeFormat.format(new Date(), "dd/m/yyyy h:M:s T") + "M"
  var history = User.getProperty("history")
  var keyb = Bot.getProperty("Mindepo")
  var txn_id = json.hash
  var info =
    "[" + user.first_name + "]" + "(" + "tg://user?id=" + user.telegramid + ")"

  // see another fields by
  //Bot.sendMessage(inspect(options));

  if (amount >= keyb && amount <= 150000) {
    Bot.sendMessage(
      "*✅ Your Deposit Confirmed* " +
        "\n\n*💴 Invested Amount:* " +
        amount +
        " *" +
        cur +
        "*" +
        "\n\n*Your deposit has been converted to STARS ⭐️.*" +
        "\n\n*➕ Total Received Stars :* " +
        amountt +
        " *⭐️*"
    )
    Api.sendMessage({
      chat_id: channel2,
      text:
        "*❤️ New Deposit Received ❤️*" +
        "\n\n🔸 Status: Confirmed" +
        "\n *🔸Amount Deposited: * " +
        amount +
        "* " +
        cur +
        " * \n *🔸Name:* " +
        info +
        "\n * \n🌐 Transaction ID:  *" +
        "\n " +
        txn_id +
        "\n",
      parse_mode: "Markdown",
      disable_web_page_preview: true
    })
    var depo = Libs.ResourcesLib.anotherChatRes("depo", "global")
    var deposit = Libs.ResourcesLib.userRes("refco")
    deposit.add(amountt)
    depo.add(amount)
    User.setProperty("minertrx", amount, "text")
    var lilo = Bot.getProperty("total")
    var total = lilo + amount
    Bot.setProperty("total", total, "integer")
    var referrer = Libs.ReferralLib.currentUser.attractedByUser()
    var bonus = amount * 0.1

    if (history == undefined) {
      var newh =
        "*Invested Amount* : " +
        amount +
        " " +
        cur +
        " " +
        "\n⚕DATE " +
        time +
        "\n"
      User.setProperty("history", newh, "string")
    } else {
      var nwh =
        "*Invested Amount* : " +
        amount +
        " " +
        cur +
        " " +
        "\n⚕DATE " +
        time +
        "\n"
      var toal = nwh + history
      User.setProperty("history", toal, "string")
    }

    if (referrer) {
      var referrerRes = Libs.ResourcesLib.anotherUserRes(
        "balance",
        referrer.telegramid
      )
      referrerRes.add(bonus)
      var refcom = Libs.ResourcesLib.anotherUserRes(
        "refcom",
        referrer.telegramid
      )
      refcom.add(bonus)
      Bot.sendMessageToChatWithId(
        referrer.telegramid,
        "*➕ Referral Deposit:* " + bonus.toFixed(8) + "*" + cur + "*"
      )
    } else {
      Bot.sendMessage("Check Payment [Channel](" + channel2 + ")")
    }
  }
  return
}

