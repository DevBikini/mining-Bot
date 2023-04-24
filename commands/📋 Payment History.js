/*CMD
  command: 📋 Payment History
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var his = User.getProperty("history")
if (!his) {
  var go = "You don't have any transactions yet."
  Bot.sendMessage(go)
} else {
  Bot.sendMessage("\n" + his)
}

