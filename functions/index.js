const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HRDPECHXQU9MKUUVFspFfZhFQFUFPmEbwZZz3VEshjFT3pSjX6KYmUsJGArOYhGyAItvluP3kRppS3eDKkXT8lU00xXdlahXv"
);

//API

//App config
const app = express();

// Middleware 🎈
app.use(
  cors({
    origin: true,
  })
);

app.use(express.json());

//API Routes
app.get("/", (req, res) => {
  res.status(200).send("API Base Route");
});
app.post("/payments/create", async (req, res) => {
  // get the total value from the request object
  const { total } = req.query;

  console.log("payment request recieved", total);

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    });

    // ok created
    res.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (e) {
    res.status(500).send(e.message);
  }
});

//listener
exports.api = functions.https.onRequest(app);
