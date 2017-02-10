var Bottr = require('bottr')
var fs = require('fs')
var BottrApp = require('bottr-app')

var bot = new Bottr.Bot()
bot.use(new BottrApp())
bot.use(new Bottr.FacebookMessengerClient())

var options = [
  {
    index: "1. ",
	destination: "Get Insured"
  },
  {
    index: "2. ",
    destination: "Change Insured"
  },
  {
    index: "3. ",
    destination: "Contact a Representative"
  }
]

bot.hears(/hai|hello|hey|hi/i, function(message, session) {

	session.send("May I help you with any of the below services \n")
	var rows = options.map(function(item){
 	session.send(item.index +  " " + item.destination.link("http://www.w3schools.com/"));
	})
	
     	
});


function callRestService (session) {
session.send("Oops! I didn't understood that.I am in development phase only")
}

bot.listen()