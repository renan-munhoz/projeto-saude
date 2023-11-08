const express = require("express");
const path = require("path");

const spawnSync = require('child_process');

const router = express.Router();
const conexao = require('../../../BANCO_DE_DADOS/banco');
const Paciente = require('../models/paciente');

router.post("/cadastrarPacienteAPI", async (req, res)=>{
    await Paciente.create(req.body)
    .then(()=>{
       return res.json({
            erro: false,
            mensagem: "Paciente cadastrado com sucesso!"
       });
    }
    ).catch(()=>{
        return res.status(400).json({
            erro: true,
            mensagem: "Falha ao cadastrar paciente!"
       });
    });
});

router.post("/cadastrarPaciente", async (req, res)=>{
    console.log(req.body);
    await Paciente.create(req.body)
    .then(()=>{
        res.redirect('/');
    }).catch(()=>{
        res.sendFile(path.join(__dirname, "../../", "index.html"));
    });
});

//PADRÃO SINGLETON
module.exports = router;