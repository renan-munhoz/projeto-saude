const Sequelize = require('sequelize');
const banco = require('../banco')
const Funcionario = require('./funcionario')
const Paciente = require('./paciente')

const Prontuario = banco.define(
  'prontuarios', {
    idProntuario: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    texto: {
      type: Sequelize.STRING,
      allowNull: false
    }
  
  }
);

Prontuario.belongsTo(Funcionario)
Prontuario.belongsTo(Paciente)

// Sincroniza o modelo com o banco de dados
Prontuario.sync({alter: true});
module.exports = Prontuario;
