const express = require("express");
const path = require("path");
const Funcionario = require('../models/funcionario');
const banco = require("../banco")

const router = express.Router();

router.get("/cadastroFuncionario", (req, res) =>{
    res.render('cadastro-funcionario')
})

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
        res.render('cadastroFuncionario')
    }).catch(()=>{
        res.render('index')
    });
});

//PADRÃO SINGLETON
module.exports = router;