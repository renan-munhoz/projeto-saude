const express = require("express");
const path = require("path");
const Agendamento = require('../models/agendamento')
const banco = require("../banco")
const Paciente = require('../models/paciente')
const Funcionario = require('../models/funcionario')

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

    var campo_nome = req.body.medico;

    const funcionario = await Funcionario.findOne({
        attributes: ['idFuncionario', 'nome'],
        where: {
            nome: campo_nome
        }
    })
    console.log(funcionario.nome)
    if(funcionario === null){
        console.log("Medico inválido");
    }

    var pacienteId = req.session.paciente.idPaciente

    var funcionarioId = funcionario.idFuncionario


    await Agendamento.create({
        data: req.body.data,
        hora: req.body.hora,
        funcionarioIdFuncionario: funcionarioId,
        pacienteIdPaciente: pacienteId
    })
        .then(() => {
            res.redirect('index-logado');
        }).catch(() => {
            res.render("agendamento");
        });
});

// PADRÃO SINGLETON
module.exports = router;
