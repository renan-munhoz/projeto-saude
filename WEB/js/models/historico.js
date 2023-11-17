const Sequelize = require('sequelize');
const banco = require('../banco')
const Funcionario = require('./funcionario')
const Paciente = require('./paciente')
const Agendamento = require('./agendamento')

const Historico = banco.define(
  'historicos', {
    idHistorico: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    }
  }
);

Historico.belongsTo(Funcionario)
Historico.belongsTo(Paciente)
//verificar como fazer 1:1 com o historico
Historico.belongsTo(Historico)

// Sincroniza o modelo com o banco de dados
Historico.sync({alter: true});

module.exports = Receita;
