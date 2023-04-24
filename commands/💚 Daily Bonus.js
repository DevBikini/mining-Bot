/*CMD
  command: 💚 Daily Bonus
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

function canRun() {
  var last_run_at5 = User.getProperty("last_run_at555")
  if (!last_run_at5) {
    return true
  }

  var minutes = (Date.now() - last_run_at5) / 1000 / 60

  var minutes_in_day = 24 * 60
  var next = minutes_in_day - minutes
  var wait_hours = Math.floor(next / 3600)
  next -= wait_hours * 60
  var wait_minutes = Math.floor(next)
  var seconds = Math.floor((next - wait_minutes) * 60)
  if (minutes < minutes_in_day) {
    Bot.sendMessage(
      "▪️ Bonus will be generated randomly from 1 to 100 🌟\n▪️ You can obtain the bonus every 24 hours.\n\n👋 You have already received a bonus in the last 24 hours."
    )
    return
  }
  return true
}

if (!canRun()) {
  return
}
User.setProperty("last_run_at555", Date.now(), "integer")

var d = Libs.Random.randomInt(5, 100)
var am = d / 5

var res = Libs.ResourcesLib.userRes("refco")
res.add(am)
Bot.sendMessage(
  "▪️ Bonus will be generated randomly from 1 to 100 🌟\n▪️ You can obtain the bonus every 24 hours.*\n▪️ The amount you earn is automatically transferred to your account.\n\n✅ You received " +
    am +
    "  Come Back in 24 hours!"
)

