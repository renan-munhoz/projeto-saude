const express = require("express");
const path = require("path");
const Receita = require('../models/receita')
const banco = require("../banco")
const Paciente = require('../models/paciente')
const Funcionario = require('../models/funcionario')


const router = express.Router();

router.get("/receita", async (req, res) =>{
    res.render("prontuario");
})

router.post("/cadastrarReceitaAPI", async (req, res) => {
    await Receita.create(req.body)
        .then(() => {
            return res.json({
                erro: false,
                mensagem: "Receita cadastrado com sucesso!"
            });
        }
        ).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Falha ao cadastrar receita!"
            });
        });
});

router.post("/cadastrarReceita", async (req, res) => {
    const fs = require('fs');
    const html_to_pdf = require('html-pdf-node');

    let options = { format: 'A4' };
    const pathToHTML = './models/receita.html';

    try {
        const data = fs.readFileSync(pathToHTML, 'utf8');

        // Gerando o PDF usando o conteúdo do arquivo HTML
        const pdfBuffer = await html_to_pdf.generatePdf({ content: data }, options);

        if (!pdfBuffer) {
          throw new Error('Falha ao gerar o PDF');
        }

        // Convertendo o buffer para um formato adequado para inserção no PostgreSQL
        const pdfData = Buffer.from(pdfBuffer);

        console.log("PDF armazenado no banco com sucesso!");

        var campo_nome = req.body.nomeReceita;

        const paciente = await Paciente.findOne({
            attributes: ['idPaciente', 'nome'],
            where: {
                nome: campo_nome
            }
        });

        if (paciente === null) {
            console.log("Paciente inválido");
            res.render('menu-funcionario');
            return;
        }

        var pacienteId = paciente.idPaciente;
        var funcionarioId = req.session.funcionarios.idFuncionario;

        console.log('idFuncionario:', funcionarioId);
        console.log('idPaciente:', pacienteId);

        await Receita.create({
            receita: pdfData,
            funcionarioIdFuncionario: funcionarioId,
            pacienteIdPaciente: pacienteId
        });

        console.log("receita cadastrado com sucesso!");
            res.render('prontuario');
        } catch (error) {
            console.error("Erro ao cadastrar receita:", error);
            res.render('prontuario');
        }
    });


// PADRÃO SINGLETON
module.exports = router;
