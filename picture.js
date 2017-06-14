var TelegramBot = require('node-telegram-bot-api'),
	token = '394771171:AAEF8E04lO7whVWH9fWJYjHhOm6hLCmnSyA';
	
var bot = new TelegramBot(token, {polling: true});
var sGame = 0;
var answ = 0;
var error = 0;
var remind = []; 

bot.on('message', function(msg){
	var id = msg.chat.id;
	
	
	//************RIDDLES******************
	if(msg.text == '/game')
	{
		sGame = 1;
	}

	if (sGame == 1)
	{
		if(answ == 0 && error == 0)
		{
			bot.sendMessage(id, 'Clean, but not water,\nWhite, but not snow,\nSweet, but not ice-cream,\nWhat is it?');
		}
		if(answ == 0){
			if(msg.text == 'sugar' || msg.text == 'Sugar' || msg.text == 'SUGAR'){ answ++; error = 0;}
			else {error++; if(msg.text != '/game')bot.sendMessage(id, 'Try again.'); if(error > 2) bot.sendMessage(id, 'Hint: ragus'); }
		}
		if(answ == 1 && error == 0)
		{
			bot.sendMessage(id, 'You are right!\n\nYou smile when you name it.\nThe mouse likes it very much.');
		}
		if(answ == 1){
			if(msg.text == 'cheese' || msg.text == 'Cheese' || msg.text == 'CHEESE'){ answ++; error = 0;}
			else {error++; if(msg.text != 'sugar' && msg.text != 'Sugar' && msg.text != 'SUGAR')bot.sendMessage(id, 'Try again.'); if(error > 2) bot.sendMessage(id, 'Hint: eseehc'); }
		}
		
		if(answ == 2 && error == 0)
		{
			bot.sendMessage(id, 'Well done!\n\nLittle old uncle,\ndressed in brown.\nTake off his coat...\nHow tears run down!');
		}
		if(answ == 2){
			if(msg.text == 'onion' || msg.text == 'Onion' || msg.text == 'ONION'){ answ++; error = 0;}
			else {error++; if(msg.text != 'cheese' && msg.text != 'Cheese' && msg.text != 'CHEESE')bot.sendMessage(id, 'Try again.'); if(error > 2) bot.sendMessage(id, 'Hint: noino'); }
		}
		if(answ == 3) {bot.sendMessage(id, 'Congratulations! You have solved all the riddles!\nHave a nice day!'); sGame=0;answ = 0; error = 0;}
	}
	//===================================
	
	//************/info******************
	else{
		if (msg.text == '/info')
		{
			bot.sendMessage(id, 'First name: ' + msg.chat.first_name);
			if(msg.chat.last_name != undefined) bot.sendMessage(id, '\nLast name: ' + msg.chat.last_name);
			if(msg.chat.username != undefined) bot.sendMessage(id, '\nUsername: ' + msg.chat.username);
		}
	//====================================
	
		//************TIMER******************
		else{
			if (msg.text == '/remind')
			{
				notes.push( { 'uid':id, 'time':time, 'text':text } );
				bot.sendMessage(id, 'Что мне напомнить?');
			}
		//===================================
		
			//************/help******************
			else{
				if (msg.text == '/help')
				{
					bot.sendMessage(id, 'To find the expression enter it.\nDo you want to play the game?(/game)\nYou can set timer, just write about this.\nExample: Set timer on 10 minutes.');
				}
			//====================================
			
				//************CALCULATION******************
				else{
					if (/^[-+()*\/0-9\s]+$/.test(msg.text)) {
						try {
							bot.sendMessage(id, eval(msg.text));
						}
						catch (e) {
							bot.sendMessage(id, 'Syntax error, please try again.');
						}
					}
					else {
						bot.sendMessage(id, 'Only numbers, "+", "-", "*", "/", "(" and ")" are allowed.');
					}
				}
				//====================================
			}
		}
	}
	console.log(msg);
});
