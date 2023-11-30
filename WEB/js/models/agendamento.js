const Sequelize = require('sequelize');
const banco = require('../banco');
const Funcionario = require('./funcionario');
const Paciente = require('./paciente');

const Agendamento = banco.define('agendamentos', {
    idAgendamento: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    data: {
        type: Sequelize.DATEONLY, // Utilizando DATEONLY para armazenar apenas a data, sem a hora
        allowNull: false
    },
    hora: {
        type: Sequelize.TIME, // Utilizando TIME para armazenar apenas a hora, sem a data
        allowNull: false
    }
});

Agendamento.belongsTo(Funcionario);
Agendamento.belongsTo(Paciente);

// Sincroniza o modelo com o banco de dados
Agendamento.sync({ alter: true });

module.exports = Agendamento;
