const Sequelize = require('sequelize');
const banco = require('../banco')
const Funcionario = require('./funcionario')
const Paciente = require('./paciente')

const Atestado = banco.define(
  'atestados', {
    idAtestado: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    atestado: {
      type: Sequelize.STRING,
      allowNull: false
    }
  }
);

Atestado.belongsTo(Funcionario)
Atestado.belongsTo(Paciente)

// Sincroniza o modelo com o banco de dados
Atestado.sync({alter: true});

module.exports = Atestado;
