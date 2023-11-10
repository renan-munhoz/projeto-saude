const Sequelize = require('sequelize');
const banco = require('../banco')

const Prontuario = banco.define(
  'prontuario', {
    idProntuario: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    texto: {
      type: Sequelize.STRING,
      allowNull: false
    },
    idPaciente: {
      type: Sequelize.STRING,
      allowNull: false
    },
    idFuncionario: {
      type: Sequelize.STRING,
      allowNull: false
    }
  }
);

// Sincroniza o modelo com o banco de dados
Prontuario.sync();

module.exports = Prontuario;
