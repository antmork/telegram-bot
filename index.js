var TelegramBot = require('node-telegram-bot-api'),
	token = '394771171:AAEF8E04lO7whVWH9fWJYjHhOm6hLCmnSyA';

var bot = new TelegramBot(token, {polling: true});

bot.on('message', function(msg){
	var id = msg.chat.id;
	bot.sendMessage(id, msg.text);
})