const { Payment } = require('mercadopago');
const client = require('../config/mercadopago');
const configDotenv = require('dotenv');
const prisma = require('../lib/prisma');

class cursosController {
  async adicionar(req, res) { // adicionar curso
    const { name, valor } = req.body
    await prisma.curso.create({
      data: {
        name,
        valor,
      }
    }).then((res) => {
      res.status(200).json({ "message": 'Curso criado com sucesso' })
    }).catch((err) => {
      res.status(500).json({ "falha": err })
    })
  }

  async deletar(req, res) { // deletar curso
    const { id } = req.params

    try {
      await prisma.curso.delete({
        where: {
          id,
        }
      })
    } catch (e) {
      res.send(e)
    }
  }
}

module.exports = new cursosController();