import VendasService from "../services/vendas.service.js";

async function createVendas(req, res, next) {
  try {
    let vendas = req.body;
    vendas.data = new Date();
    if (
      !vendas.data ||
      !vendas.valor ||
      !vendas.promocao ||
      !vendas.idProduto ||
      !vendas.idCliente ||
      !vendas.idUsuario
    ) {
      throw new Error(
        "valor, promocao, idProduto, idCliente, idUsuario obrigatorios. "
      );
    }
    res.send(await VendasService.createVendas(vendas));
    global.logger.info(`POST /vendas ${JSON.stringify(vendas)}`);
  } catch (err) {
    next(err);
  }
}

async function getVendas(req, res, next) {
  try {
    res.send(await VendasService.getVendas());
  } catch (err) {
    next(err);
  }
}

async function getVenda(req, res, next) {
  try {
    let id = req.params.idVendas;
    if (!id) {
      throw new Error("Parametro ID obrigatorio");
    }
    res.send(await VendasService.getVenda(id));
  } catch (err) {
    next(err);
  }
}

async function deleteVenda(req, res, next) {
  try {
    const id = req.params.idVendas;
    if (!id) {
      throw new Error("Parametro ID obrigadotio");
    }
    await VendasService.deleteVenda(id);
    res.end();
    global.logger.info(`DELETE /vendas ${JSON.stringify(id)}`);
  } catch (err) {
    next(err);
  }
}

async function updateVenda(req, res, next) {
  try {
    let vendas = req.body;
    if (
      !vendas.idvendas ||
      !vendas.data ||
      !vendas.valor ||
      !vendas.promocao ||
      !vendas.idProduto ||
      !vendas.idCliente ||
      !vendas.idUsuario
    ) {
      throw new Error(
        "idvendas, data, valor, promocao,  idCliente <e> </e> idUsuario obrigatorios. "
      );
    }
    await VendasService.updateVenda(vendas)
      .then(() => {
        res.send(vendas);
      })
      .catch((err) => {
        throw new err();
      });
    global.logger.info(`PUT /vendas ${JSON.stringify(vendas)}`);
  } catch (err) {
    next(err);
  }
}

export default {
  createVendas,
  getVenda,
  getVendas,
  deleteVenda,
  updateVenda,
};
