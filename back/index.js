const hemonucleo = require("./models/Hemonucleo");
async function sincronizar() {
	await hemonucleo.sync();
	console.log("Sincronizado");
}
sincronizar();

const express = require("express");
var cors = require('cors')


const app = express();

app.use(cors())

app.use(express.json());

const port = 3000;
const hemonucleoController = require("./controllers/HemonucleoController");

app.get("/hemonucleo", hemonucleoController.listarHemonucleos);
app.get("/hemonucleo/:id", hemonucleoController.buscarHemonucleo);
app.post("/hemonucleo", hemonucleoController.salvarHemonucleo);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
