/*CMD
  command: /messageto
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var admin_chat = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID",
  field_name: "ADMIN_ID"
})
let inf =
  "[" + user.first_name + "]" + "(" + "tg://user?id=" + user.telegramid + ")"
if (!admin_chat) {
  Bot.sendMessage("Sorry. Bot have no admin now")
  return // exit
}
var msg = message
if (msg.length < 3) {
  Bot.sendMessage(
    "*⚠️ Please, send a longer message!*\n_Try to explain better what you need, as much as you can in a single message!_"
  )
  Bot.runCommand("/messageto")
} else {
  
  var msg = message

  var b = [
    [
      {
        title: "Reply to user " + user.first_name,
        command: "/replyto" + user.telegramid
      }
    ]
  ]

  Bot.sendInlineKeyboardToChatWithId(
    admin_chat,
    b,
    "📩 New Support Message\nFrom User: " + inf + "\nMessage: " + msg
  )
  Bot.sendMessage(
    "*Message sent to the administrator:*" + "\n" + message + "\n"
  )
}
