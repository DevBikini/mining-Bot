/*CMD
  command: 💻 Working
  help: 
  need_reply: false
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
let M1 = Libs.ResourcesLib.userRes("M1");
let M2 = Libs.ResourcesLib.userRes("M2");
let M3 = Libs.ResourcesLib.userRes("M3");
let M4 = Libs.ResourcesLib.userRes("M4");
let M5 = Libs.ResourcesLib.userRes("M5");
let M6 = Libs.ResourcesLib.userRes("M6");
let M7 = Libs.ResourcesLib.userRes("M7");
let res = (M1.value()+M2.value()+M3.value()+M4.value()+M5.value()).toFixed(3)

 let key = [[{title:"Collect "+cur,command:"/collect"}]]
Bot.sendKeyboard("🆔 Menu","*Working is where your machines produce Satoshi. Please harvest Satoshi and withdraw it whenever you like!*")
Bot.sendInlineKeyboard(key,"*🔧 My Machines*" + "\n\n*💻 Cloud M1:* " +  M1.value().toFixed(3) + " "+cur+" " + "\n*💻 Cloud M2:* " + M2.value().toFixed(3) + " "+cur+" " + "\n*💻 Cloud M3:* " + M3.value().toFixed(3) + " "+cur+" " + "\n*💻 Cloud M4:* " + M4.value().toFixed(3) + " "+cur+" " + "\n*💻 Cloud M5:* " + M5.value().toFixed(3) + " "+cur+" " + "\n*💻 Cloud M6:* " + M6.value().toFixed(3) + " "+cur+" " + "\n*💻 Cloud M7:* " + M7.value().toFixed(3) + " "+cur+" " + "\n\n" + "Totally produced: *" +res+ "* *"+cur+"* ")

