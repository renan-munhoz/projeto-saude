const sequelize = require("sequelize");
//const mysql = require('mysql');

const connection = new sequelize('projeto-saude','postgres','labinfo123',{
	host: 'localhost',
	dialect:'postgres'
});


module.exports = connection