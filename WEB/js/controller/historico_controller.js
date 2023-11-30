const express = require("express");
const path = require("path");
const Agendamento = require('../models/agendamento')
const banco = require("../banco")
const Paciente = require('../models/paciente')
const Funcionario = require('../models/funcionario')

const spawnSync = require('child_process');

const router = express.Router();

router.get("/historico", async (req, res) =>{
    try {
        // Lógica para obter o ID do médico da sessão, aqui assumindo que está armazenado em req.session.idMedico

        const pacienteId = req.session.paciente.idPaciente; // Obtém o ID do médico da sessão

        // Buscar os horários de atendimento do médico para o dia atual
        const horarios = await Agendamento.findAll({
            where: {
                pacienteIdPaciente: pacienteId
            },
            attributes: ['data','hora'], // Especifica os campos que você quer retornar
            include: [{
                model: Funcionario, // Nome do modelo Paciente (substitua Paciente pelo nome correto do seu modelo)
                attributes: ['nome'] // Especifique os campos do paciente que você deseja retornar (como o nome)
            }],
            raw: true // Retorna os resultados como objetos simples em vez de instâncias Sequelize
        });


        console.log("Horários retornados:", horarios);


        // Calcular os horários de término com base na duração de uma hora (60 minutos)
        const horariosFormatados = horarios.map((horario) => {
            const horaInicio = new Date(`${horario.data}T${horario.hora}`);
            if (!isNaN(horaInicio)) {
                const horaFim = new Date(horaInicio.getTime() + (60 * 60 * 1000)); // Adiciona uma hora à hora de início
                return {
                    data: horario.data,
                    horarioInicio: horaInicio,
                    horarioFim: horaFim,
                    nomeFuncionario: horario['funcionario.nome']
                };
            } else {
                console.error("Hora de início inválida:", horario.hora);
                return null;
            }
        }).filter(Boolean);



        console.log("Horário de Início:", horariosFormatados.map(horario => horario.horarioInicio));
        console.log("Horário de Término:", horariosFormatados.map(horario => horario.horarioFim));

        horariosFormatados.sort((a, b) => a.horarioInicio - b.horarioInicio);

        // Renderiza a página 'horario' e envia os horários de atendimento para serem utilizados na página HTML
        res.render('historico', { horarios: horariosFormatados });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao buscar os horários de atendimento' });
    }
})



// PADRÃO SINGLETON
module.exports = router;
