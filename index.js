var Bottr = require('bottr')

var BottrApp = require('bottr-app')


var bot = new Bottr.Bot()

bot.use(new BottrApp())



bot.on('message_received', function(message, session) {

var button = {
              "type": "survey",
              "question": "What would you like to do?",
              "options": ["Eat", "Drink", "Both"],
              "msgid": "gt_212"
             }  
  session.send(JSON.stringify(button))
})

bot.listen()
