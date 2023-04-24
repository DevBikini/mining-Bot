/*CMD
  command: /buy
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (params == 1) {
var res = Libs.ResourcesLib.userRes("refco")
var m = Libs.ResourcesLib.userRes("Cloud" + params)
var amnt = AdminPanel.getFieldValue({
  panel_name: "cname1",
  field_name: "amnt"+params
})
  if (res.value() < amnt) {
    Api.answerCallbackQuery({
      callback_query_id: request.id,
      text: "👋 No enough balance",

      show_alert: false
    })
  } else {
    Api.answerCallbackQuery({
      callback_query_id: request.id,
      text: "✅ Miner Hired",

      show_alert: false
    })
    m.add(1)
    res.add(-amnt)
    Bot.runCommand("/cloud " + params)
  }
  return
}
if (params == 2) {
var res = Libs.ResourcesLib.userRes("refco")
var m = Libs.ResourcesLib.userRes("Cloud" + params)
var amnt = AdminPanel.getFieldValue({
  panel_name: "cname1",
  field_name: "amnt"+params
})
  if (res.value() < amnt) {
    Api.answerCallbackQuery({
      callback_query_id: request.id,
      text: "👋 No enough balance",

      show_alert: false
    })
  } else {
    Api.answerCallbackQuery({
      callback_query_id: request.id,
      text: "✅ Miner Hired",

      show_alert: false
    })
    m.add(1)
    res.add(-amnt)
    Bot.runCommand("/cloud " + params)
  }
  return
}
if (params == 3) {
var res = Libs.ResourcesLib.userRes("refco")
var m = Libs.ResourcesLib.userRes("Cloud" + params)
var amnt = AdminPanel.getFieldValue({
  panel_name: "cname1",
  field_name: "amnt" + params
})
  if (res.value() < amnt) {
    Api.answerCallbackQuery({
      callback_query_id: request.id,
      text: "👋 No enough balance",

      show_alert: false
    })
  } else {
    Api.answerCallbackQuery({
      callback_query_id: request.id,
      text: "✅ Miner Hired",

      show_alert: false
    })
    m.add(1)
    res.add(-amnt)
    Bot.runCommand("/cloud " + params)
  }
  return
}
if (params == 4) {
var res = Libs.ResourcesLib.userRes("refco")
var m = Libs.ResourcesLib.userRes("Cloud" + params)
var amnt = AdminPanel.getFieldValue({
  panel_name: "cname1",
  field_name: "amnt" + params
})
  if (res.value() < amnt) {
    Api.answerCallbackQuery({
      callback_query_id: request.id,
      text: "👋 No enough balance",

      show_alert: false
    })
  } else {
    Api.answerCallbackQuery({
      callback_query_id: request.id,
      text: "✅ Miner Hired",

      show_alert: false
    })
    m.add(1)
    res.add(-amnt)
    Bot.runCommand("/cloud " + params)
  }
  return
}
if (params == 5) {
var res = Libs.ResourcesLib.userRes("refco")
var m = Libs.ResourcesLib.userRes("Cloud" + params)
var amnt = AdminPanel.getFieldValue({
  panel_name: "cname1",
  field_name: "amnt" + params
})
  if (res.value() < amnt) {
    Api.answerCallbackQuery({
      callback_query_id: request.id,
      text: "👋 No enough balance",

      show_alert: false
    })
  } else {
    Api.answerCallbackQuery({
      callback_query_id: request.id,
      text: "✅ Miner Hired",

      show_alert: false
    })
    m.add(1)
    res.add(-amnt)
    Bot.runCommand("/cloud " + params)
  }
  return
}
if (params == 6) {
var res = Libs.ResourcesLib.userRes("refco")
var m = Libs.ResourcesLib.userRes("Cloud" + params)
var amnt = AdminPanel.getFieldValue({
  panel_name: "cname1",
  field_name: "amnt" + params
})
  if (res.value() < amnt) {
    Api.answerCallbackQuery({
      callback_query_id: request.id,
      text: "👋 No enough balance",

      show_alert: false
    })
  } else {
    Api.answerCallbackQuery({
      callback_query_id: request.id,
      text: "✅ Miner Hired",

      show_alert: false
    })
    m.add(1)
    res.add(-amnt)
    Bot.runCommand("/cloud " + params)
  }
  return
}
if (params == 7) {
var res = Libs.ResourcesLib.userRes("refco")
var m = Libs.ResourcesLib.userRes("Cloud" + params)
var amnt = AdminPanel.getFieldValue({
  panel_name: "cname1",
  field_name: "amnt" + params
})
  if (res.value() < amnt) {
    Api.answerCallbackQuery({
      callback_query_id: request.id,
      text: "👋 No enough balance",

      show_alert: false
    })
  } else {
    Api.answerCallbackQuery({
      callback_query_id: request.id,
      text: "✅ Miner Hired",

      show_alert: false
    })
    m.add(1)
    res.add(-amnt)
    Bot.runCommand("/cloud " + params)
  }
  return
}
