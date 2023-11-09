const express = require("express");
const router = express.Router();
const path = require("path");
const bodyParser = require("body-parser");
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'usuario',
  password: 'senha',
  database: 'projeto-saude'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Conectado ao banco de dados MySQL!');
});

const PacienteController = require('./controller/cadastroPaciente_controller.js');
//const FuncionarioController = require('./controller/cadastroFuncionario_controller');

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(PacienteController);

app.use(router);

app.listen(3030, () => {
    console.log("Servidor rodando")
});
