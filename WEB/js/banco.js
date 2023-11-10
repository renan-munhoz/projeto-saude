const sequelize = require("sequelize");
//const mysql = require('mysql');

const connection = new sequelize('projeto-saude','root','',{
	host: 'localhost',
	dialect:'mysql'
});


module.exports = connection