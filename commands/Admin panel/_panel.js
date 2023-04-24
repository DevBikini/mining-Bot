/*CMD
  command: /panel
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Admin panel
  answer: 
  keyboard: 
  aliases: 
CMD*/

var panel = {
  title: "Admin Information",
  description: "Please fill here your admin id",

  index: 0,
  icon: "key",

  button_title: "SAVE",

  fields: [
    {
      name: "ADMIN_ID",
      title: "Admin ID",
      description: "you can mange your bot /admin",
      type: "string",
      placeholder: "your admin id"
    },
    {
      name: "channel1",
      title: "channel 1 Link",
      description: "example: https://t.me/group_gainerbots",
      type: "string",
      placeholder: "your link here"
    },
    {
      name: "channel2",
      title: "channel 2 link",
      description: "example: https://t.me/group_gainerbots",
      type: "string",
      placeholder: "your link here"
    },
    {
      name: "AdminCUR",
      title: "Currency ID",
      description: "example: LTC",
      type: "string",
      placeholder: "your currency id"
    },
    {
      name: "Apikey",
      title: "Api Key",
      description: "gateway Api key",
      type: "integer",
      placeholder: "your Gatway api key here"
    },
    {
      name: "SecretKey",
      title: "Secret Key",
      description: "gateway secret key",
      type: "integer",
      placeholder: "your gateway Secret key here"
    },
    {
      name: "GameRate",
      title: "Game Rate",
      description: "Game Rate for exchange",
      type: "integer",
      placeholder: "your Game Rate here"
    },
    {
      name: "AdminMinDepo",
      title: "Minimum Deposit",
      description: "Minimum Deposit",
      type: "integer",
      placeholder: "your minimum deposit here"
    },
    {
      name: "AdminMinWithdraw",
      title: "Minimum Withdraw",
      description: "Minimum Withdraw",
      type: "integer",
      placeholder: "your minimum withdraw here"
    },
    {
      name: "AdminFee",
      title: "Withdraw fee",
      description: "Withdraw fee",
      type: "integer",
      placeholder: "your withdraw fee here"
    }
  ]
}
AdminPanel.setPanel({
  panel_name: "ADMIN_ID",
  data: panel
})
var panel = {
  title: "Mining Setup",
  description: "Please fill Mining Set",

  index: 0,
  icon: "key",

  button_title: "SAVE",

  fields: [
    {
      name: "cname1",
      title: "M1 name",
      description: "M1 Mining name",
      type: "string",
      placeholder: "your M1 name here"
    },
    {
      name: "pers1",
      title: "M1 per hour",
      description: "M1 Mining per hour",
      type: "integer",
      placeholder: "your M1 per hour here"
    },
    {
      name: "amnt1",
      title: "M1 Price",
      description: "M1 Price",
      type: "integer",
      placeholder: "your M1 Price here"
    },
    {
      name: "cpic1",
      title: "M1 Picture",
      description: "M1 Picture",
      type: "string",
      placeholder: "your M1 Picture here"
    },
    {
      name: "cname2",
      title: "M2 name",
      description: "M2 Mining name",
      type: "string",
      placeholder: "your M2 name here"
    },
    {
      name: "pers2",
      title: "M2 per hour",
      description: "M2 Mining per hour",
      type: "integer",
      placeholder: "your M2 per hour here"
    },
    {
      name: "amnt2",
      title: "M2 Price",
      description: "M2 Price",
      type: "integer",
      placeholder: "your M2 Price here"
    },
    {
      name: "cpic2",
      title: "M2 Picture",
      description: "M2 Picture",
      type: "string",
      placeholder: "your M2 Picture here"
    },
    {
      name: "cname3",
      title: "M3 name",
      description: "M3 Mining name",
      type: "string",
      placeholder: "your M3 name here"
    },
    {
      name: "pers3",
      title: "M3 per hour",
      description: "M3 Mining per hour",
      type: "integer",
      placeholder: "your M3 per hour here"
    },
    {
      name: "amnt3",
      title: "M3 Price",
      description: "M3 Price",
      type: "integer",
      placeholder: "your M3 Price here"
    },
    {
      name: "cpic3",
      title: "M3 Picture",
      description: "M3 Picture",
      type: "string",
      placeholder: "your M3 Picture here"
    },
    {
      name: "cname4",
      title: "M4 name",
      description: "M4 Mining name",
      type: "string",
      placeholder: "your M4 name here"
    },
    {
      name: "pers4",
      title: "M4 per hour",
      description: "M4 Mining per hour",
      type: "integer",
      placeholder: "your M4 per hour here"
    },
    {
      name: "amnt4",
      title: "M4 Price",
      description: "M4 Price",
      type: "integer",
      placeholder: "your M4 Price here"
    },
    {
      name: "cpic4",
      title: "M4 Picture",
      description: "M4 Picture",
      type: "string",
      placeholder: "your M4 Picture here"
    },
    {
      name: "cname5",
      title: "M5 name",
      description: "M5 Mining name",
      type: "string",
      placeholder: "your M5 name here"
    },
    {
      name: "pers5",
      title: "M5 per hour",
      description: "M5 Mining per hour",
      type: "integer",
      placeholder: "your M5 per hour here"
    },
    {
      name: "amnt5",
      title: "M5 Price",
      description: "M5 Price",
      type: "integer",
      placeholder: "your M5 Price here"
    },
    {
      name: "cpic5",
      title: "M5 Picture",
      description: "M5 Picture",
      type: "string",
      placeholder: "your M5 Picture here"
    },
    {
      name: "cname6",
      title: "M6 name",
      description: "M6 Mining name",
      type: "string",
      placeholder: "your M6 name here"
    },
    {
      name: "pers6",
      title: "M6 per hour",
      description: "M6 Mining per hour",
      type: "integer",
      placeholder: "your M6 per hour here"
    },
    {
      name: "amnt6",
      title: "M6 Price",
      description: "M6 Price",
      type: "integer",
      placeholder: "your M6 Price here"
    },
    {
      name: "cpic6",
      title: "M6 Picture",
      description: "M6 Picture",
      type: "string",
      placeholder: "your M6 Picture here"
    },
    {
      name: "cname7",
      title: "M7 name",
      description: "M7 Mining name",
      type: "string",
      placeholder: "your M7 name here"
    },
    {
      name: "pers7",
      title: "M7 per hour",
      description: "M7 Mining per hour",
      type: "integer",
      placeholder: "your M7 per hour here"
    },
    {
      name: "amnt7",
      title: "M7 Price",
      description: "M7 Price",
      type: "integer",
      placeholder: "your M7 Price here"
    },
    {
      name: "cpic7",
      title: "M7 Picture",
      description: "M7 Picture",
      type: "string",
      placeholder: "your M7 Picture here"
    }
  ]
}

AdminPanel.setPanel({
  panel_name: "cname1",
  data: panel
})

var panel = {
  title: "Share Win",
  description: "Please fill Share win Set",

  index: 0,
  icon: "key",

  button_title: "SAVE",

  fields: [
    {
      name: "winshare",
      title: "Share Win",
      description: "Share Win Reward",
      type: "integer",
      placeholder: "your Share Win Reward here"
    },
    {
      name: "winshare-message",
      title: "Share Win Message",
      description: "Share Win Message",
      type: "text",
      placeholder: "your Share Win Message here example: your ref {ref}"
    }
  ]
}
AdminPanel.setPanel({
  panel_name: "winshare",
  data: panel
})

var key = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID", // panel name
  field_name: "Privatekey" // field name
})
var key2 = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID", // panel name
  field_name: "Publickey" // field name
})
var key3 = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID", // panel name
  field_name: "Apikey" // field name
})
Bot.sendMessage(
  "Go to bb app setup adminpanel After setup Api key run /panel to Execute setup coinpayment api"
)

