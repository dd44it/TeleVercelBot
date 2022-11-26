import TeleBot from "telebot"

const bot = new TeleBot(process.env.TELEGRAM_BOT_TOKEN)

bot.on('/start', (msg) => msg.reply.photo('https://picsum.photos/500') )

bot.on('text', msg => msg.reply.text(msg.text))

export default bot
