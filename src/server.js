const { MercadoPagoConfig, Payment } = require('mercadopago');
const configDotenv = require('dotenv');

const client = new MercadoPagoConfig({
  accessToken: process.env.ACCESSTOKEN,
  options: {
    timeout: 5000,
    idempotencyKey: 'abc'
  },
});

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