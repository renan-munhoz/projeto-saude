const express = require("express");
const path = require("path");
const Funcionario = require('../models/funcionario');
const banco = require('../banco');
const Redis = require('Redis');
//let client;

const router = express.Router();

/*(async()=>{
	client = Redis.createClient();
	client.on('error', err => console.log('Redis Client Error', err));
	await client.connect();
})();*/

router.get('/loginFuncionario', (req, res) => {
  res.sendFile(path.join(__dirname, '../../', 'login-funcionario.html'));
});

router.post('/logarFuncionario', async (req, res) => {
  const { email, senha } = req.body;

  try {
    const funcionario = await Funcionario.findOne({ where: { email, senha } });

    if (funcionario) {
      res.cookie('funcionario Logado', true, { maxAge: 900000, httpOnly: true });
      await client.set('user', funcionario.idFuncionario);

      value = await client.get('user');

      return res.json({
        erro: false,
        mensagem: 'Funcionario logado com sucesso!',
        funcionarioId: funcionario.idFuncionario,
        funcionarioInfo: funcionario,
        value: value
      });
    } else {
      return res.status(400).json({
        erro: true,
        mensagem: 'Credenciais inválidas. Falha ao logar funcionario!',
      });
    }
  } catch (error) {
    console.error('Erro durante o login do funcionario:', error);
    return res.status(500).json({
      erro: true,
      mensagem: 'Ocorreu um erro ao processar o login do funcionario.',
    });
  }
});




module.exports = router;

