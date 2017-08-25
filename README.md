# jerry-maguire

```
"Show me the money!" - Jerry Maguire
```

Bulk SMS messenger, using `node.js` and Twilio.

## Setup

Clone this repository.
```
git clone https://gitlab.com/decentcrypto/jerry-maguire.git
```

Enter the repository.
```
cd jerry-maguire/
```

Setup dotenv.
```
cp .env.example .env
```

Make sure to set `TWILIO_ID`, `TWILIO_AUTH_TOKEN`, and `TWILIO_PHONE_NUMBER`.
```
vim .env

TWILIO_ID="YOUR_TWILIO_ID"
TWILIO_AUTH_TOKEN="YOUR_TWILIO_AUTH_TOKEN"
TWILIO_PHONE_NUMBER="YOUR_TWILIO_PHONE_NUMBER"
```

Install dependencies.
```
npm install
```

Copy your CSV file into the project. See **CSV Requirements** for details.
```
cp <path-to-csv> ./src/index.csv
```

Copy your message file into the project. See **SMS Requirements** for details.
```
cp <path-to-txt> ./src/message.txt
```

That's it!
```
npm start
```

## CSV Requirements

Any CSV document will work, as long as the column containing phone numbers contains a derivative
of the string `phone`.

i.e. `phone`, `phone_numbers`, `PHONE_NUMBERS`, `PHONE`, `phonenumbers`

Only works with US phone numbers.

## SMS Requirements

Any text file under 160 characters will work.
