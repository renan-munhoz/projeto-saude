const express = require("express");
const path = require("path");

const spawnSync = require('child_process');

const router = express.Router();
const conexao = require('../../../BANCO_DE_DADOS/banco');
const Funcionario = require('../models/funcionario');

router.post("/cadastrarFuncionarioAPI", async (req, res)=>{
    await Funcionario.create(req.body)
    .then(()=>{
       return res.json({
            erro: false,
            mensagem: "Funcionario cadastrado com sucesso!"
       });
    }
    ).catch(()=>{
        return res.status(400).json({
            erro: true,
            mensagem: "Falha ao cadastrar funcionario!"
       });
    });
});

router.post("/cadastrarFuncionario", async (req, res)=>{
    console.log(req.body);
    await Funcionario.create(req.body)
    .then(()=>{
        res.redirect('/');
    }).catch(()=>{
        res.sendFile(path.join(__dirname, "../../", "index.html"));
    });
});

//PADRÃO SINGLETON
module.exports = router;