/*CMD
  command: *
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

// send this link only in PM - secure reason
if (chat.chat_type != "private") {
  return
}

if (!message) {
  // sometimes message can be blank
  return // exit from command
}

let isAdminReply = message.indexOf("/replyto") + 1
if (!isAdminReply) {
  return
}

// only admin here!
var admin_chat = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID",
  field_name: "ADMIN_ID"
})
if (chat.chatid != admin_chat) {
  Bot.sendMessage("You are not admin!")
  return
}

var tgid = message.split("/replyto")[1]
if (!tgid) {
  return
}

// run other command
Bot.run({
  command: "/adminReply",
  options: { tgid: tgid } // pass tgid in options to that command
})

