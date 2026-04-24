const express = require("express");
const router = express.Router();
const produtoService = require("../services/produtoService");

router.get('/', async (req, res) => {
    const produtos = await produtoService.getAll();
    res.json(produtos);
});

router.get('/:id', async (req, res) => {
    const produto = await produtoService.getById(req.params.id);

    if (!produto) {
        return res.status(404).send("Produto não encontrado");
    }

    res.json(produto);
});

router.post('/', async (req, res) => {
    const novoProduto = await produtoService.create(req.body);
    res.status(201).json(novoProduto);
});

module.exports = router;