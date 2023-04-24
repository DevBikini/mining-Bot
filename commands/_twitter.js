/*CMD
  command: /twitter
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 🔻 Send Us Share Link (Only Twitter):
  keyboard: 
  aliases: 
CMD*/

var admin_chat = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID",
  field_name: "ADMIN_ID"
})
var inf =
  "[" + user.telegramid + "]" + "(" + "tg://user?id=" + user.telegramid + ")"
if (!admin_chat) {
  Bot.sendMessage("Sorry. Bot have not admin now")
  return // exit
}
var msg = message
if (msg.length < 10) {
  Bot.sendMessage(
    "*⚠️ This is not a twitter link*"
  )
Bot.runCommand("/message2")
} else {
  var msg = message

  var b = [
    [
      {
        title: "Reply to user " + user.first_name,
        command: "/reply" + user.telegramid
      }
    ]
  ]

  Bot.sendInlineKeyboardToChatWithId(
    admin_chat,
    b,
    "📩 New Support Message\nFrom User: " + inf + "\nTwitter link: " + msg
  )
  Bot.sendMessage(
    "*Message sent to the administrator:*" + "\n" + message + "\n"
  )
}

