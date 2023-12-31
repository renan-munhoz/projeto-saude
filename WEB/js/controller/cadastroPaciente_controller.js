const express = require("express");
const path = require("path");
const mysql = require('mysql');
const Paciente = require('../models/paciente')
const banco = require("../banco")

const router = express.Router();

router.get("/cadastroPaciente", (req, res) =>{
    res.render('cadastro-paciente')
})

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
        .then(()=>{
        res.render('cadastroPaciente')
    }).catch(()=>{
        res.render('index')
    });
});

// PADRÃO SINGLETON
module.exports = router;
