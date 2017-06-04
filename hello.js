var TelegramBot = require('node-telegram-bot-api'),
	token = '394771171:AAEF8E04lO7whVWH9fWJYjHhOm6hLCmnSyA';

var bot = new TelegramBot(token, {polling: true});

bot.on('message', function(msg){
	var id = msg.chat.id;
	if(msg.text == 'привет, бот' || msg.text == 'Привет, бот' || msg.text == 'привет бот' || msg.text == 'Привет бот'){
		bot.sendMessage(id, 'Привет, ' + msg.chat.first_name);
	}
	else 
	if(msg.text == 'hello, bot' || msg.text == 'Hello, bot' || msg.text == 'hello bot' || msg.text == 'Hello bot'){
		bot.sendMessage(id, 'Hello, ' + msg.chat.first_name);
	}
	else bot.sendMessage(id, msg.text);
})
