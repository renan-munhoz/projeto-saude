const Sequelize = require('sequelize');
const banco = require('../banco')

const Paciente = banco.define(
  'pacientes', {
    idPaciente: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    endereco: {
      type: Sequelize.STRING,
      allowNull: false
    },
    telefone: {
      type: Sequelize.STRING,
      allowNull: false
    },
    senha: {
      type: Sequelize.STRING,
      allowNull: false
    }
  }
);

// Sincroniza o modelo com o banco de dados
Paciente.sync({alter: true});

module.exports = Paciente;
