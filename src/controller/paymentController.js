const { Payment } = require('mercadopago');
const client = require('../config/mercadopago');
const configDotenv = require('dotenv');

class paymentController {
  async realizarPagamento(req, res) { // realização do pagamento
    const { transaction_amount } = req.body;
    const payment = new Payment(client);

    const body = {
      // transaction_amount: 20.10,
      description: '🌀 Deluxe package',
      // payment_method_id: 'pix',
      payer: {
        email: 'diiogomarsalcosta@gmail.com'
      },
    };

    payment.create({ body }).then(console.log).catch(console.log);
  }
}

module.exports = new paymentController();