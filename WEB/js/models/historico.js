
const Sequelize = require('sequelize');
const db = require('../../../BANCO_DE_DADOS/banco');

const Historico = db.define(
    'Historico',{
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        paciente_idPaciente: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        funcionario_idFuncionario: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
});

//COMANDO PARA CRIAR A TABELA NO BANCO DE DADOS
Historico.sync();

//VERIFICA SE TEM ALGUMA ALTERAÇÃO NA TABELA PARA INSERIR OS NOVOS CAMPOS
//Usuario.sync({alter: true});
module.exports = Historico;