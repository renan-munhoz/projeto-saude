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
    var campo_nome = req.body.Paciente;

    const paciente = await Paciente.findOne({
        attributes: ['idPaciente', 'nome', 'email', 'endereco', 'telefone', 'senha'],
        where: {
            nome: campo_nome
        }
    })

    if(paciente === null){
        console.log("Paciente inválido");
        res.sendFile(path.join(__dirname, "../../", "prontuario.html"));
    }

    var pacienteId = paciente.idPaciente
    console.log('idPaciente')
    console.log(pacienteId)

    const funcionario = req.session.funcionarios

    var funcionarioId = funcionario.idFuncionario

    await Prontuario.create({
            texto: req.body.texto,
            idPaciente: pacienteId,
            idFuncionario: funcionarioId
        }  
        )
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

// PADRÃO SINGLETON
module.exports = router;
