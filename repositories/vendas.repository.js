import Vendas from "../models/vendas.model.js";

async function insertVendas(vendas) {
  try {
    return await Vendas.create(vendas);
  } catch (err) {
    throw err;
  }
}

async function getVendas() {
  try {
    return await Vendas.findAll();
  } catch (err) {
    throw err;
  }
}

async function getVenda(id) {
  try {
    return await Vendas.findByPk(id);
  } catch (err) {
    throw err;
  }
}

async function deleteVenda(id) {
  try {
    return await Vendas.destroy({
      where: {
        idVendass: id,
      },
    });
  } catch (err) {
    throw err;
  }
}

async function updateVendas(vendas) {
  try {
    return await Vendas.update(vendas, {
      where: { idVendas: vendas.idVendas },
    });
  } catch (err) {
    throw err;
  }
}

export default {
  insertVendas,
  getVenda,
  getVendas,
  updateVendas,
  deleteVenda,
  updateVendas,
};
