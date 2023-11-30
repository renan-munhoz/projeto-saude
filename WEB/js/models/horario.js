const Sequelize = require('sequelize');
const banco = require('../banco')
const Funcionario = require('./funcionario')
const Paciente = require('./paciente')
const Agendamento = require('./agendamento')

const Horario = banco.define(
  'horarios', {
    idHorario: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    }
  }
);

Horario.belongsTo(Funcionario)
Horario.belongsTo(Paciente)
//verificar como fazer 1:1 com o historico


// Sincroniza o modelo com o banco de dados
Horario.sync({alter: true});

module.exports = Horario;
