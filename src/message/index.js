const twilio = require('twilio');

const {
  TWILIO_ID,
  TWILIO_AUTH_TOKEN,
  TWILIO_PHONE_NUMBER
} = process.env;

function message(recepient) {
  const message = {
    body: "It's alive!",
    to:   recepient,
    from: TWILIO_PHONE_NUMBER,
  };

  const callback = function (error, message) {
    error ? console.log(error.message) : console.log("Message sent to " + message.to + " successfully.");
  };

  const client = new twilio(TWILIO_ID, TWILIO_AUTH_TOKEN);

  return client.messages.create(message, callback);
}

module.exports = message;
