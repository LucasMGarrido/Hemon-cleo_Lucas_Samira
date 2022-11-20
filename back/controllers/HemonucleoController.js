const Hemonucleo = require("../models/Hemonucleo");

const salvarHemonucleo = async (req, res) => {
	try {
		await Hemonucleo.create(req.body);
		res.status(201).send("Hemonúcleo criado");
	} catch (error) {
		console.log(error);
		res.status(400).send("Falha ao salvar");
	}
};

const listarHemonucleos = async (req, res) => {
	const Hemonucleos = await Hemonucleo.findAll();
	res.status(200).send(Hemonucleos);
};

const buscarHemonucleo = async (req, res) => {
	const Hemonucleo = await Hemonucleo.findByPk(req.params.id);
	if (Hemonucleo === null) {
		res.status(404).send("Hemonúcleo não encontrado");
	} else {
		res.status(200).send(Hemonucleo);
	}
};

module.exports = {
	salvarHemonucleo,
	listarHemonucleos,
	buscarHemonucleo
};
