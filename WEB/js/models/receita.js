const Sequelize = require('sequelize');
const banco = require('../banco')
const Funcionario = require('./funcionario')
const Paciente = require('./paciente')

const Receita = banco.define(
  'receitas', {
    idReceita: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    receita: {
      type: Sequelize.BLOB,
      allowNull: false
    }
  }
);

Receita.belongsTo(Funcionario)
Receita.belongsTo(Paciente)

// Sincroniza o modelo com o banco de dados
Receita.sync({alter: true});

module.exports = Receita;
