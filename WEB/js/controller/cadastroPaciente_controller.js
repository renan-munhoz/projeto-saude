const express = require("express");
const path = require("path");
const mysql = require('mysql');

const router = express.Router();

// Configuração da conexão
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'usuario',
  password: 'senha',
  database: 'projeto-saude'
});

// Verifica a conexão
connection.connect((err) => {
  if (err) throw err;
  console.log('Conectado ao banco de dados MySQL!');
});

router.post("/cadastrarPacienteAPI", async (req, res) => {
    await Paciente.create(req.body)
        .then(() => {
            return res.json({
                erro: false,
                mensagem: "Paciente cadastrado com sucesso!"
            });
        }
        ).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Falha ao cadastrar paciente!"
            });
        });
});

router.post("/cadastrarPaciente", async (req, res) => {
    console.log(req.body);
    await Paciente.create(req.body)
        .then(() => {
            res.redirect('/');
        }).catch(() => {
            res.sendFile(path.join(__dirname, "../../", "index.html"));
        });
});

// PADRÃO SINGLETON
module.exports = router;
