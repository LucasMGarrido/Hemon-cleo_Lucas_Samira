const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");

const Hemonucleo = sequelize.define("Hemonucleo", {
	nome: DataTypes.STRING,
	ponto: DataTypes.GEOMETRY("POINT"),
});

module.exports = Hemonucleo;
