const Hemonucleo = require("../models/Hemonucleo");
const path = require("path");

const salvarHemonucleo = async (req, res) => {
	try {
		await Hemonucleo.create(req.body);
		res.status(201).send("Hemonúcleo criado");
	} catch (error) {
		console.log(error);
		res.status(400).send("Falha ao salvar");
	}
};

module.exports = {
	salvarHemonucleo,
	listarHemonucleos,
};
