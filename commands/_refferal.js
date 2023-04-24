/*CMD
  command: /refferal
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "💎 Create Referral Link 💎",

  show_alert: false
})
var lib = Libs.ReferralLib
var reflist = lib.currentUser.refList
reflist = lib.currentUser.refList.get()
var bots = Libs.ReferralLib.currentUser.getRefLink("" + bot.name + "", "r")

Api.sendMessage({
  text: "<b>Invite Friends Link</b>\n" + bots,
  parse_mode: "html"
})

