const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("hemonucleo", "postgres", "postgres", {
	host: "127.0.0.1",
	port: "5432",
	dialect: "postgres",
});

module.exports = sequelize;
