const express = require("express");
const path = require("path");
const Agendamento = require('../models/agendamento')
const Paciente = require('../models/paciente')
const banco = require("../banco")

const spawnSync = require('child_process');

const router = express.Router();

router.get("/horario", async (req, res) => {
    try {
        // Lógica para obter o ID do médico da sessão, aqui assumindo que está armazenado em req.session.idMedico

        const idMedico = req.session.funcionarios.idFuncionario; // Obtém o ID do médico da sessão
        const dataAtual = new Date().toISOString().split('T')[0]; // Obtém a data atual do computador

        // Buscar os horários de atendimento do médico para o dia atual
        const horarios = await Agendamento.findAll({
            where: {
                funcionarioIdFuncionario: idMedico,
                data: dataAtual
            },
            attributes: ['hora'], // Especifica os campos que você quer retornar
            include: [{
                model: Paciente, // Nome do modelo Paciente (substitua Paciente pelo nome correto do seu modelo)
                attributes: ['nome'] // Especifique os campos do paciente que você deseja retornar (como o nome)
            }],
            raw: true // Retorna os resultados como objetos simples em vez de instâncias Sequelize
        });


        console.log("Horários retornados:", horarios);


        // Calcular os horários de término com base na duração de uma hora (60 minutos)
        const horariosFormatados = horarios.map((horario) => {
            if (horario && horario.hora && horario['paciente.nome']) { // Verifica se existem dados do paciente
                const horaInicio = new Date(`${dataAtual}T${horario.hora}`);
                if (!isNaN(horaInicio)) {
                    const horaFim = new Date(horaInicio.getTime() + (60 * 60 * 1000)); // Adiciona uma hora à hora de início
                    return {
                        horarioInicio: horaInicio,
                        horarioFim: horaFim,
                        nomePaciente: horario['paciente.nome'] // Acesse o nome do paciente usando a notação ['chave']
                    };
                } else {
                    console.error("Hora de início inválida:", horario.hora);
                    return null;
                }
            } else {
                console.error("Horário ou dados do paciente não encontrados ou inválidos.");
                return null;
            }
        }).filter(Boolean);

        // Envie os horários formatados (incluindo os nomes dos pacientes) para a página
        res.render('horario', { horarios: horariosFormatados });


        console.log("Horário de Início:", horariosFormatados.map(horario => horario.horarioInicio));
        console.log("Horário de Término:", horariosFormatados.map(horario => horario.horarioFim));

        horariosFormatados.sort((a, b) => a.horarioInicio - b.horarioInicio);

        // Renderiza a página 'horario' e envia os horários de atendimento para serem utilizados na página HTML
        res.render('horario', { horarios: horariosFormatados });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao buscar os horários de atendimento' });
    }
});



// PADRÃO SINGLETON
module.exports = router;
