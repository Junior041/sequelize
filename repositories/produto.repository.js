import Produtos from "../models/produtos.model.js";

async function insertProdutos(produtos) {
  try {
    return await Produtos.create(produtos);
  } catch (err) {
    throw err;
  }
}

async function getProdutos() {
  try {
    return await Produtos.findAll();
  } catch (err) {
    throw err;
  }
}

async function getProduto(id) {
  try {
    return await Produtos.findByPk(id);
  } catch (err) {
    throw err;
  }
}

async function deleteProduto(id) {
  try {
    return await Produtos.destroy({
      where: {
        idProdutoss: id,
      },
    });
  } catch (err) {
    throw err;
  }
}

async function updateProdutos(produtos) {
  try {
    return await Produtos.update(produtos, {
      where: { idProdutos: produtos.idProdutos },
    });
  } catch (err) {
    throw err;
  }
}

export default {
  insertProdutos,
  getProduto,
  getProdutos,
  updateProdutos,
  deleteProduto,
  updateProdutos,
};
