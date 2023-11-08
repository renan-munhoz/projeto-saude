const express = require("express");
const router = express.Router();
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const bd = require('../../BANCO_DE_DADOS/banco');
const PacienteController = require('./controller/cadastroPaciente_controller');

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(PacienteController);

app.use(router);

app.listen(3030, ()=>{
    console.log("Servidor rodando")
});