const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51Ny3vOJxbnnV3RS8tkZ3UoN2r3T6MYy7O8V7uiCcnfIl5ynCrkFHYZcKpzf8vbTRznpXZwqMN6GXREDCzsRGdIRB00kdRiE3do"
);

// - App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
  const total = request.query.total;
if (total>0) {
  console.log("Payment Request Recived for this amount >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  //OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
} else {
  response.status(200).json({
    mesage : "can not prosses payment"
  })
}
  
});

// - Listen command
exports.app = functions.https.onRequest(app);

// http://127.0.0.1:5001/clone-a1923/us-central1/app

// http://127.0.0.1:5001/rep-1-e9a22/us-central1/app
