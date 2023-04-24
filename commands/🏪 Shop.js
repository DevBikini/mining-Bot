/*CMD
  command: 🏪 Shop
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var cur = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID",
  field_name: "AdminCUR"
})
var cname1 = AdminPanel.getFieldValue({
  panel_name: "cname1",
  field_name: "cname1"
})
if (!cname1) {
  Bot.sendMessage("Set up your mining go yo admin panel")
  return
}
var pers1 = AdminPanel.getFieldValue({
  panel_name: "cname1",
  field_name: "pers1"
})

var amnt1 = AdminPanel.getFieldValue({
  panel_name: "cname1",
  field_name: "amnt1"
})
var cpic1 = AdminPanel.getFieldValue({
  panel_name: "cname1",
  field_name: "cpic1"
})
var M1 = Libs.ResourcesLib.userRes("Cloud1")
var go =
  "(Cloud M1) " +
  cname1 +
  "\nProduce per hour: " +
  pers1 +
  " " +
  cur +
  "\nYour Cloud: " +
  M1.value() +
  "\nPrice: " +
  amnt1 +
  " 🌟"
var but = [[{ text: "🛒 Buy", callback_data: "/buy 1" }]]
Api.sendPhoto({
  photo: cpic1,
  caption: go,
  reply_markup: {
    inline_keyboard: but
  }
})
var cname2 = AdminPanel.getFieldValue({
  panel_name: "cname1",
  field_name: "cname2"
})
var pers2 = AdminPanel.getFieldValue({
  panel_name: "cname1",
  field_name: "pers2"
})
var amnt2 = AdminPanel.getFieldValue({
  panel_name: "cname1",
  field_name: "amnt2"
})
var cpic2 = AdminPanel.getFieldValue({
  panel_name: "cname1",
  field_name: "cpic2"
})
var M2 = Libs.ResourcesLib.userRes("Cloud2")
var go2 =
  "(Cloud M2) " +
  cname2 +
  "\nProduce per hour: " +
  pers2 +
  " " +
  cur +
  "\nYour Cloud: " +
  M2.value() +
  "\nPrice: " +
  amnt2 +
  " 🌟"
var but2 = [[{ text: "🛒 Buy", callback_data: "/buy 2" }]]
Api.sendPhoto({
  photo: cpic2,
  caption: go2,
  reply_markup: {
    inline_keyboard: but2
  }
})
var cname3 = AdminPanel.getFieldValue({
  panel_name: "cname1",
  field_name: "cname3"
})
var pers3 = AdminPanel.getFieldValue({
  panel_name: "cname1",
  field_name: "pers3"
})
var amnt3 = AdminPanel.getFieldValue({
  panel_name: "cname1",
  field_name: "amnt3"
})
var cpic3 = AdminPanel.getFieldValue({
  panel_name: "cname1",
  field_name: "cpic3"
})
var M3 = Libs.ResourcesLib.userRes("Cloud3")
var go3 =
  "(Cloud M3) " +
  cname3 +
  "\nProduce per hour: " +
  pers3 +
  " " +
  cur +
  "\nYour Cloud: " +
  M3.value() +
  "\nPrice: " +
  amnt3 +
  " 🌟"
var but3 = [[{ text: "🛒 Buy", callback_data: "/buy 3" }]]
Api.sendPhoto({
  photo: cpic3,
  caption: go3,
  reply_markup: {
    inline_keyboard: but3
  }
})
var cname4 = AdminPanel.getFieldValue({
  panel_name: "cname1",
  field_name: "cname4"
})
var pers4 = AdminPanel.getFieldValue({
  panel_name: "cname1",
  field_name: "pers4"
})
var amnt4 = AdminPanel.getFieldValue({
  panel_name: "cname1",
  field_name: "amnt4"
})
var cpic4 = AdminPanel.getFieldValue({
  panel_name: "cname1",
  field_name: "cpic4"
})
var M4 = Libs.ResourcesLib.userRes("Cloud4")
var go4 =
  "(Cloud M4) " +
  cname4 +
  "\nProduce per hour: " +
  pers4 +
  " " +
  cur +
  "\nYour Cloud: " +
  M4.value() +
  "\nPrice: " +
  amnt4 +
  " 🌟"
var but4 = [[{ text: "🛒 Buy", callback_data: "/buy 4" }]]
Api.sendPhoto({
  photo: cpic4,
  caption: go4,
  reply_markup: {
    inline_keyboard: but4
  }
})
var cname5 = AdminPanel.getFieldValue({
  panel_name: "cname1",
  field_name: "cname5"
})
var pers5 = AdminPanel.getFieldValue({
  panel_name: "cname1",
  field_name: "pers5"
})
var amnt5 = AdminPanel.getFieldValue({
  panel_name: "cname1",
  field_name: "amnt5"
})
var cpic5 = AdminPanel.getFieldValue({
  panel_name: "cname1",
  field_name: "cpic5"
})
var M5 = Libs.ResourcesLib.userRes("Cloud5")
var go5 =
  "(Cloud M5) " +
  cname5 +
  "\nProduce per hour: " +
  pers5 +
  " " +
  cur +
  "\nYour Cloud: " +
  M5.value() +
  "\nPrice: " +
  amnt5 +
  " 🌟"

var but5 = [[{ text: "🛒 Buy", callback_data: "/buy 5" }]]
Api.sendPhoto({
  photo: cpic5,
  caption: go5,
  reply_markup: {
    inline_keyboard: but5
  }
})
var cname6 = AdminPanel.getFieldValue({
  panel_name: "cname1",
  field_name: "cname6"
})
var pers6 = AdminPanel.getFieldValue({
  panel_name: "cname1",
  field_name: "pers6"
})
var amnt6 = AdminPanel.getFieldValue({
  panel_name: "cname1",
  field_name: "amnt6"
})
var cpic6 = AdminPanel.getFieldValue({
  panel_name: "cname1",
  field_name: "cpic6"
})
var M6 = Libs.ResourcesLib.userRes("Cloud6")
var go6 =
  "(Cloud M6) " +
  cname6 +
  "\nProduce per hour: " +
  pers6 +
  " " +
  cur +
  "\nYour Cloud: " +
  M6.value() +
  "\nPrice: " +
  amnt6 +
  " 🌟"
var but6 = [[{ text: "🛒 Buy", callback_data: "/buy 6" }]]
Api.sendPhoto({
  photo: cpic5,
  caption: go6,
  reply_markup: {
    inline_keyboard: but6
  }
})
var cname7 =AdminPanel.getFieldValue({
  panel_name: "cname1",
  field_name: "cname7"
})
var pers7 = AdminPanel.getFieldValue({
  panel_name: "cname1",
  field_name: "pers7"
})
var amnt7 = AdminPanel.getFieldValue({
  panel_name: "cname1",
  field_name: "amnt7"
})
var cpic7 = AdminPanel.getFieldValue({
  panel_name: "cname1",
  field_name: "cpic7"
})
var M7 = Libs.ResourcesLib.userRes("Cloud7")
var go7 =
  "(Cloud M7) " +
  cname7 +
  "\nProduce per hour: " +
  pers7 +
  " " +
  cur +
  "\nYour Cloud: " +
  M7.value() +
  "\nPrice: " +
  amnt7 +
  " 🌟"

var but7 = [[{ text: "🛒 Buy", callback_data: "/buy 7" }]]
Api.sendPhoto({
  photo: cpic7,
  caption: go7,
  reply_markup: {
    inline_keyboard: but7
  }
})

