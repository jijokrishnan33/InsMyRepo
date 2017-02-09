var Bottr = require('bottr')

var BottrApp = require('bottr-app')


var bot = new Bottr.Bot()

bot.use(new BottrApp())



var attachment = {
    type: "template",
    payload: {
      template_type: "generic",
      elements: [{
        title: "rift",
        subtitle: "Next-generation virtual reality",
        item_url: "https://www.oculus.com/en-us/rift/",               
        image_url: "http://messengerdemo.parseapp.com/img/rift.png",
        buttons: [{
          type: "web_url",
          url: "https://www.oculus.com/en-us/rift/",
          title: "Open Web URL"
        }, {
          type: "postback",
          title: "Call Postback",
          payload: "Payload for first bubble",
        }],
      }, {
        title: "touch",
        subtitle: "Your Hands, Now in VR",
        item_url: "https://www.oculus.com/en-us/touch/",               
        image_url: "http://messengerdemo.parseapp.com/img/touch.png",
        buttons: [{
          type: "web_url",
          url: "https://www.oculus.com/en-us/touch/",
          title: "Open Web URL"
        }, {
          type: "postback",
          title: "Call Postback",
          payload: "Payload for second bubble",
        }]
      }]
    }
  }

bot.on('message_received', function(message, session) {
  
  session.send("Hello May I help you ??",attachment)

})

bot.use(new Bottr.FacebookMessengerClient())

bot.listen()
