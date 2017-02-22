var Bottr = require('bottr')
var fs = require('fs')
var BottrApp = require('bottr-app')
var ElizaBot = require('./elizabot');
var eliza = new ElizaBot();

var bot = new Bottr.Bot()
bot.use(new BottrApp())
bot.use(new Bottr.FacebookMessengerClient())

bot.on('message_received', function(message, session) {
  	var reply = eliza.transform(String(message.text));
 	session.send(reply);
})


bot.listen()