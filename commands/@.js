/*CMD
  command: @
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

//gateway
var url =
  "https://api.bots.business/v1/bots/725421/new-webhook?&command=connect&public_user_token=919138ec0afd896221a03ef2bd840a27&user_id=8785339"
function CryptoAdGateWayBot(data) {
  HTTP.post({
    url: url,
    body: data
  })
}
