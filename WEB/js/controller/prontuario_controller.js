const express = require("express");
const path = require("path");
const Prontuario = require('../models/prontuario')
const banco = require("../banco")
const Paciente = require('../models/paciente')
const Funcionario = require('../models/funcionario')

const router = express.Router();

router.get("/prontuario", (req, res)=>{
    res.render("prontuario");
});

router.post("/cadastrarProntuarioAPI", async (req, res) => {
    await Prontuario.create(req.body)
        .then(() => {
            return res.json({
                erro: false,
                mensagem: "prontuario cadastrado com sucesso!"
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

    var campo_nome = req.body.Paciente;

    const paciente = await Paciente.findOne({
        attributes: ['idPaciente', 'nome'],
        where: {
            nome: campo_nome
        }
    })

    if(paciente === null){
        console.log("Paciente inválido");
        res.render('menu-funcionario')
    }

    var pacienteId = paciente.idPaciente

    var funcionarioId = req.session.funcionarios.idFuncionario;

    console.log('idFuncionario:', funcionarioId);
    console.log('idPaciente:', pacienteId);


    try {
        await Prontuario.create({
            texto: req.body.texto,
            funcionarioIdFuncionario: funcionarioId,
            pacienteIdPaciente: pacienteId
        });

        console.log("Prontuário cadastrado com sucesso!");
        res.render('prontuario')
    } catch (error) {
        console.error("Erro ao cadastrar prontuário:", error);
        res.render('prontuario')
    }
});

// PADRÃO SINGLETON
module.exports = router;
