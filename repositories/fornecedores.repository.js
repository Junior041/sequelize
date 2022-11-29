import Fornecedores from "../models/fornecedores.model.js";

async function insertFornecedores(fornecedores) {
  try {
    return await Fornecedores.create(fornecedores);
  } catch (err) {
    throw err;
  }
}

async function getFornecedores() {
  try {
    return await Fornecedores.findAll();
  } catch (err) {
    throw err;
  }
}

async function getFornecedor(id) {
  try {
    return await Fornecedores.findByPk(id);
  } catch (err) {
    throw err;
  }
}

async function deleteFornecedor(id) {
  try {
    return await Fornecedores.destroy({
      where: {
        idFornecedoress: id,
      },
    });
  } catch (err) {
    throw err;
  }
}

async function updateFornecedores(fornecedores) {
  try {
    console.log(fornecedores);
    return await Fornecedores.update(fornecedores, {
      where: { idfornecedor: fornecedores.idfornecedor },
    });
  } catch (err) {
    throw err;
  }
}

export default {
  insertFornecedores,
  getFornecedor,
  getFornecedores,
  updateFornecedores,
  deleteFornecedor,
  updateFornecedores,
};
