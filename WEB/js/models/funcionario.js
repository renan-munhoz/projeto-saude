
const Sequelize = require('sequelize');
const db = require('../../../BANCO_DE_DADOS/banco');

const Funcionario = db.define(
    'Funcionario',{
        id: {
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
        cpf: {
            type: Sequelize.STRING,
            allowNull: false
        },
        rg: {
            type: Sequelize.STRING,
            allowNull: false
        },
        cnh: {
            type: Sequelize.STRING,
            allowNull: false
        },
        carteira_de_trabalho: {
            type: Sequelize.STRING,
            allowNull: false
        },
        funcao: {
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
});

//COMANDO PARA CRIAR A TABELA NO BANCO DE DADOS
Funcionario.sync();

//VERIFICA SE TEM ALGUMA ALTERAÇÃO NA TABELA PARA INSERIR OS NOVOS CAMPOS
//Usuario.sync({alter: true});
module.exports = Funcionario;