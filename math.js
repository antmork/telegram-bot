var TelegramBot = require('node-telegram-bot-api'),
	token = '394771171:AAEF8E04lO7whVWH9fWJYjHhOm6hLCmnSyA';

var bot = new TelegramBot(token, {polling: true});

bot.on('message', function(msg){
	var id = msg.chat.id;
	if (msg.text == '/help')
	{
		bot.sendMessage(id, 'To find the expression enter it');
	}
	else{
		if (/^[-+()*\/0-9\s]+$/.test(msg.text)) {
			try {
				bot.sendMessage(id, eval(msg.text));
			}
			catch (e) {
				bot.sendMessage(id, 'Syntax error, please, try again');
			}
		}
		else {
			bot.sendMessage(id, 'Only numbers, "+", "-", "*", "/", "(" and ")" are allowed.');
		}
	}
});
