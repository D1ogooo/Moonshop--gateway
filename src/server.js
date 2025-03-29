const { MercadoPagoConfig, Payment } = require('mercadopago');
const configDotenv = require('dotenv');
const router = require('./routes');
const express = require('express');
const cors = require('cors');
const app = express()

// const client = new MercadoPagoConfig({
//   accessToken: process.env.ACCESSTOKEN,
//   options: {
//     timeout: 5000,
//     idempotencyKey: 'abc'
//   },
// });

// const payment = new Payment(client);

// const body = {
//   transaction_amount: 20.10,
//   description: 'Teste api pix',
//   payment_method_id: 'pix',
//   payer: {
//     email: 'diiogomarsalcosta@gmail.com'
//   },
// };

// const requestOptions = {
//   idempotencyKey: '<IDEMPOTENCY_KEY>',
// };

// payment.create({ body }).then(console.log).catch(console.log);

app.use(cors());
app.use(express.json());
app.use(router)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🌸 Servidor rodando na porta ${PORT} 🌸`);
});