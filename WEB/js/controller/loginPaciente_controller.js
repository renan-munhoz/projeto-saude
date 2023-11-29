const express = require("express");
const path = require("path");
const Paciente = require('../models/paciente');
const banco = require('../banco');
const Redis = require('Redis');



const router = express.Router();

router.get('/loginPaciente', (req, res) => {
  res.render('login-paciente')
});

router.post('/logarPaciente', async (req, res) => {
  var campo_email = req.body.email;
  var campo_senha = req.body.senha;

  const paciente = await Paciente.findOne({
      attributes: ['idPaciente', 'nome', 'email', 'senha'],
      where: {
        email: campo_email
      }
  })

  if(paciente === null){
      console.log("Usuário ou senha inválida");
      res.sendFile(path.join(__dirname, '../../', 'login-paciente'));
  }

  if(campo_email == paciente.email && campo_senha == paciente.senha){
      req.session.paciente = {
          idPaciente: paciente.idPaciente,
          nome: paciente.nome,
          email: paciente.email
      }
      
      console.log("Logado com sucesso")
      res.render("index");
  }else{
      console.log("Usuário ou senha inválida");
      res.sendFile("index");
  }
});




module.exports = router;

