const Sequelize = require('sequelize');
const banco = require('../banco')

const Paciente = banco.define(
  'paciente', {
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
Paciente.sync();

module.exports = Paciente;
