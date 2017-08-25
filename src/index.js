require('dotenv').config();

const twilio = require('twilio');
const { TWILIO_ID, TWILIO_AUTH_TOKEN, TWILIO_PHONE_NUMBER } = process.env;

const message = {
  body: "It's alive!",
  to:   "+12165360799",
  from: TWILIO_PHONE_NUMBER
};

const callback = function (error, message) {
  error ? console.log(error) : console.log("Message sent to " + message.to + " successfully.");
}

const client = new twilio(TWILIO_ID, TWILIO_AUTH_TOKEN);

client.messages.create(message, callback);
