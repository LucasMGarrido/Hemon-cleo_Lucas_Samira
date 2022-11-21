const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");

const Hemonucleo = sequelize.define("Hemonucleo", {
	nome: DataTypes.STRING,
	ponto: DataTypes.GEOMETRY("POINT"),
});

const point = { type: 'Point', coordinates: [-76.984722, 39.807222]}; 

Hemonucleo.create({nome: '"Teste"', geometry: point });

module.exports = Hemonucleo;
