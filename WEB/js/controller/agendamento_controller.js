const express = require("express");
const path = require("path");
const Agendamento = require('../models/agendamento')
const banco = require("../banco")

const spawnSync = require('child_process');

const router = express.Router();

router.get("/agendamento", (req, res) =>{
    res.render('agendamento')
})

router.post("/cadastrarAgendamentoAPI", async (req, res) => {
    await Agendamento.create(req.body)
        .then(() => {
            return res.json({
                erro: false,
                mensagem: "Agendamento cadastrado com sucesso!"
            });
        }
        ).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Falha ao cadastrar agendamento!"
            });
        });
});

router.post("/cadastrarAgendamento", async (req, res) => {
    console.log(req.body);
    await Agendamento.create(req.body)
        .then(() => {
            res.redirect('/');
        }).catch(() => {
            res.render("index");
        });
});

// PADRÃO SINGLETON
module.exports = router;
