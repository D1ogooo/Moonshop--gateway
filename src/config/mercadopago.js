const { MercadoPagoConfig } = require('mercadopago');
const configDotenv = require('dotenv');

const client = new MercadoPagoConfig({
  accessToken: process.env.ACCESSTOKEN,
  options: {
    timeout: 5000,
    idempotencyKey: 'abc'
  },
});

module.exports = client