const express = require("express");
const path = require("path");
const Funcionario = require('../models/funcionario');
const banco = require('../banco');

const router = express.Router();

router.get('/loginFuncionario', (req, res) => {
  res.render('loginFuncionario')
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
      res.sendFile(path.join(__dirname, '../../', 'login-funcionario.html'));
  }

  if(campo_email == funcionarios.email && campo_senha == funcionarios.senha){
      req.session.funcionarios = {
          idFuncionario: funcionarios.idFuncionario,
          nome: funcionarios.nome,
          email: funcionarios.email
      }
      
      console.log("Logado com sucesso")
      res.sendFile(path.join(__dirname, '../../', "menu-funcionario.html"));
  }else{
      console.log("Usuário ou senha inválida");
      res.sendFile(path.join(__dirname, '../../', "index.html"));
  }
});




module.exports = router;

