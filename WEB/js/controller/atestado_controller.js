const express = require("express");
const path = require("path");
const mysql = require('mysql');
const Atestado = require('../models/atestado')
const banco = require("../banco")

const router = express.Router();

router.get("/cadastroAtestado", (req, res) =>{
    res.sendFile(path.join(__dirname, "../../", "prontuario.html"));
})

router.post("/cadastrarAtestadoAPI", async (req, res) => {
    await Atestado.create(req.body)
        .then(() => {
            return res.json({
                erro: false,
                mensagem: "Atestado cadastrado com sucesso!"
            });
        }
        ).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Falha ao cadastrar atestado!"
            });
        });
});

router.post("/cadastrarAtestado", async (req, res) => {
    console.log(req.body);
    await Atestado.create(req.body)
        .then(() => {
            res.redirect('/');
        }).catch(() => {
            res.sendFile(path.join(__dirname, "../../", "index.html"));
        });
});

// PADRÃO SINGLETON
module.exports = router;
