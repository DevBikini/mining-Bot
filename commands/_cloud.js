/*CMD
  command: /cloud
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var res = Libs.ResourcesLib.userRes("M"+params)
var M = Libs.ResourcesLib.userRes("Cloud"+params)
var pers = AdminPanel.getFieldValue({
  panel_name: "cname1",
  field_name: "pers"+params
})
var hourly = M.value() * pers
var daily = 24 * hourly

res.growth.add({
  value: hourly,
interval : 1*60*60
})
