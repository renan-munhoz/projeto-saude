const express = require("express");
const path = require("path");
const mysql = require('mysql');
const Receita = require('../models/receita')
const banco = require("../banco")
const Paciente = require('../models/paciente')
const Funcionario = require('../models/funcionario')


const router = express.Router();

router.get("/cadastroReceita/:idPaciente&:idFuncionario", async (req, res) =>{
    const pacienteId = req.params.idPaciente
    const paciente = await Paciente.findByPk(pacienteId);
    console.log(paciente.nome)

    const funcionarioId = req.params.idFuncionario
    const funcionario = await Funcionario.findByPk(funcionarioId);
    console.log(funcionario.nome)


    res.render("prontuario", {paciente,funcionario});
})

router.post("/cadastrarReceitaAPI", async (req, res) => {
    await Receita.create(req.body)
        .then(() => {
            return res.json({
                erro: false,
                mensagem: "Receita cadastrado com sucesso!"
            });
        }
        ).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Falha ao cadastrar receita!"
            });
        });
});

router.post("/cadastrarReceita", async (req, res) => {
    console.log(req.body);
    await Receita.create(req.body)
        .then(() => {
            res.redirect('/');
        }).catch(() => {
            res.sendFile(path.join(__dirname, "../../", "index.html"));
        });
});

// PADRÃO SINGLETON
module.exports = router;
