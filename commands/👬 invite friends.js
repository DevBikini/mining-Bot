/*CMD
  command: 👬 invite friends
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var lib = Libs.ReferralLib
var reflist = lib.currentUser.refList
var key = [[{ title: "Get Referral Link", command: "/refferal" }]]
Bot.sendKeyboard("🆔 Menu", "*Partnership*")
Bot.sendInlineKeyboard(
  key,
  "Invite your friends and receive *90* 🌟 as a bonus and *30%* from every deposit of your friend. Your income is unlimited!" +
    "\n\n*▪️ Referrals : * " +
    Libs.ReferralLib.getRefCount() +
    "\n" +
    "*▪️Your Income :* " +
    90 * Libs.ReferralLib.getRefCount() +
    "\n"
)

