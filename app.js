const express = require("express");
const app = express();
const produtoController = require("./controllers/produtoController");

app.use(express.json());

app.use('/produtos', produtoController);

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});