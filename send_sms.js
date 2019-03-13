// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'AC4465c513296acc5496d86d327fe21e0d';
const authToken = '5726bf88734ce645e0a5ee68a73dc983';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+16043730395',
     to: '+16043653641'
   })
  .then(message => console.log(message.sid));
