const express = require("express");
const path = require("path");
const Paciente = require('../models/paciente');
const banco = require('../banco');
const Redis = require('Redis');
const client = Redis.createClient();
client.on('error', err => console.log('Redis Client Error', err));



const router = express.Router();

router.get('/loginPaciente', (req, res) => {
  res.sendFile(path.join(__dirname, '../../', 'login-paciente.html'));
});

router.post('/logarPaciente', async (req, res) => {
  const { email, senha } = req.body;

  try {
    const paciente = await Paciente.findOne({ where: { email, senha } });

    if (paciente) {
      res.cookie('pacienteLogado', true, { maxAge: 900000, httpOnly: true });
      await client.set('user', paciente.idPaciente);

      return res.json({
        erro: false,
        mensagem: 'Paciente logado com sucesso!',
        pacienteId: paciente.idPaciente,
        pacienteInfo: paciente
      });
    } else {
      return res.status(400).json({
        erro: true,
        mensagem: 'Credenciais inválidas. Falha ao logar paciente!',
      });
    }
  } catch (error) {
    console.error('Erro durante o login do paciente:', error);
    return res.status(500).json({
      erro: true,
      mensagem: 'Ocorreu um erro ao processar o login do paciente.',
    });
  }
});




module.exports = router;

