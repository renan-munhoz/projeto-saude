const express = require("express");
const path = require("path");
const mysql = require('mysql');
const Historico = require('../models/historico')
const banco = require("../banco")

const router = express.Router();

router.get("/historico", (req, res) =>{
    res.render('historico')
})

router.post("/cadastrarHistoricoAPI", async (req, res) => {
    await Receita.create(req.body)
        .then(() => {
            return res.json({
                erro: false,
                mensagem: "Historico cadastrado com sucesso!"
            });
        }
        ).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Falha ao cadastrar historico!"
            });
        });
});

router.post("/cadastrarHsitorico", async (req, res) => {
    console.log(req.body);
    await Historico.create(req.body)
        .then(() => {
            res.redirect('/');
        }).catch(() => {
            res.sendFile(path.join(__dirname, "../../", "index.html"));
        });
});

// PADRÃO SINGLETON
module.exports = router;
