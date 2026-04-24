const connection = require("../databases/connection");

const getAll = async () => {
    const [rows] = await connection.query("SELECT * FROM produtos");
    return rows;
};

const getById = async (id) => {
    const [rows] = await connection.query("SELECT * FROM produtos WHERE id = ?", [id]);
    return rows[0];
};

const create = async (produto) => {
    const [result] = await connection.query(
        "INSERT INTO produtos (nome) VALUES (?)",
        [produto.nome]
    );

    return { id: result.insertId, nome: produto.nome };
};

module.exports = {
    getAll,
    getById,
    create
};