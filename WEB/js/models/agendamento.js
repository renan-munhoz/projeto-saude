const Sequelize = require('sequelize');
const banco = require('../banco')

const Agendamento = banco.define(
  'agendamentos', {
    idAgendamento: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    data: {
      type: Sequelize.STRING,
      allowNull: false
    },
    hora: {
      type: Sequelize.STRING,
      allowNull: false
    },
    idPaciente: {
      type: Sequelize.INTEGER,
      references: 'pacientes',
      referencekey: 'idPaciente',
      allowNull: false
    },
    idFuncionario: {
      type: Sequelize.INTEGER,
      references: 'funcionarios',
      referencekey: 'idFuncionario',
      allowNull: false
    }
  }
);

// Sincroniza o modelo com o banco de dados
Prontuario.sync();

module.exports = Agendamento;
