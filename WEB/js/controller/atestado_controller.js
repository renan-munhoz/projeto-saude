const express = require("express");
const path = require("path");
const mysql = require('mysql');
const Atestado = require('../models/atestado')
const banco = require("../banco")

const router = express.Router();

router.get("/atestado", (req, res) =>{
    res.render('agendamento')
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
    const fs = require('fs');
    const html_to_pdf = require('html-pdf-node');

    let options = { format: 'A4' };
    const pathToHTML = './models/atestado.html';

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

        var campo_nome = req.body.nomeAtestado;

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

        await Atestado.create({
            receita: pdfData,
            funcionarioIdFuncionario: funcionarioId,
            pacienteIdPaciente: pacienteId
        });

        console.log("atestado cadastrado com sucesso!");
            res.render('prontuario');
        } catch (error) {
            console.error("Erro ao cadastrar atestado:", error);
            res.render('prontuario');
        }
});

// PADRÃO SINGLETON
module.exports = router;
