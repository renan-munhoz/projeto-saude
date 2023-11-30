const express = require("express");
const path = require("path");
const Funcionario = require('../models/funcionario');
const banco = require('../banco');
const Redis = require('Redis');

const router = express.Router();

router.get('/loginFuncionario', (req, res) => {
  res.render('login-funcionario')
});

router.post('/logarFuncionario', async (req, res) => {
  var campo_email = req.body.email;
  var campo_senha = req.body.senha;

  const funcionarios = await Funcionario.findOne({
      attributes: ['idFuncionario', 'nome', 'email', 'senha'],
      where: {
        email: campo_email
      }
  })

  if(funcionarios === null){
      console.log("Usuário ou senha inválida");
      res.render('start')
  }

  if(campo_email == funcionarios.email && campo_senha == funcionarios.senha){
      req.session.funcionarios = {
          idFuncionario: funcionarios.idFuncionario,
          nome: funcionarios.nome,
          email: funcionarios.email
      }
      
      console.log("Logado com sucesso")
      res.render('menu-funcionario')
  }else{
      console.log("Usuário ou senha inválida");
      res.render('index')
  }
});




module.exports = router;

