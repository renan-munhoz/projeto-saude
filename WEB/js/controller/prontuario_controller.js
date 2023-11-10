const express = require("express");
const path = require("path");
const mysql = require('mysql');
const Prontuario = require('../models/prontuario')
const banco = require("../banco")

const router = express.Router();

router.get("/cadastroProntuario", (req, res) =>{
    res.sendFile(path.join(__dirname, "../../", "prontuario.html"));
})

router.post("/cadastrarProntuarioAPI", async (req, res) => {
    await Prontuario.create(req.body)
        .then(() => {
            return res.json({
                erro: false,
                mensagem: "Prontuario cadastrado com sucesso!"
            });
        }
        ).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Falha ao cadastrar prontuario!"
            });
        });
});

router.post("/cadastrarProntuario", async (req, res) => {
    console.log(req.body);
    await Prontuario.create(req.body)
        .then(() => {
            res.redirect('/');
        }).catch(() => {
            res.sendFile(path.join(__dirname, "../../", "index.html"));
        });
});

// PADRÃO SINGLETON
module.exports = router;
