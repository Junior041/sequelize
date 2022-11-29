import FornecedoresService from "../services/fornecedores.service.js";

async function createFornecedores(req, res, next) {
  try {
    let fornecedores = req.body;
    fornecedores.data = new Date();
    if (
      !fornecedores.nome ||
      !fornecedores.cnpj ||
      !fornecedores.telefone ||
      !fornecedores.endereco
    ) {
      throw new Error("nome, cnpj, telefone e endereco sao obrigatorios.");
    }
    res.send(await FornecedoresService.createFornecedores(fornecedores));
    global.logger.info(`POST /fornecedores ${JSON.stringify(fornecedores)}`);
  } catch (err) {
    next(err);
  }
}

async function getFornecedores(req, res, next) {
  console.log("aaa");
  try {
    res.send(await FornecedoresService.getFornecedores());
  } catch (err) {
    next(err);
  }
}

async function getFornecedor(req, res, next) {
  try {
    let id = req.params.idFornecedores;
    if (!id) {
      throw new Error("Parametro ID obrigatorio");
    }
    res.send(await FornecedoresService.getFornecedor(id));
  } catch (err) {
    next(err);
  }
}

async function deleteFornecedor(req, res, next) {
  try {
    const id = req.params.idFornecedores;
    if (!id) {
      throw new Error("Parametro ID obrigadotio");
    }
    await FornecedoresService.deleteFornecedor(id);
    res.end();
    global.logger.info(`DELETE /fornecedores ${JSON.stringify(id)}`);
  } catch (err) {
    next(err);
  }
}

async function updateFornecedor(req, res, next) {
  try {
    let fornecedores = req.body;
    if (
      !fornecedores.idfornecedor ||
      !fornecedores.nome ||
      !fornecedores.cnpj ||
      !fornecedores.telefone ||
      !fornecedores.endereco
    ) {
      throw new Error(
        "idfornecedor, cnpj, telefone e endereco sao obrigatorios."
      );
    }

    await FornecedoresService.updateFornecedor(fornecedores)
      .then(() => {
        res.send(fornecedores);
      })
      .catch((err) => {
        throw new Error(err);
      });
    global.logger.info(`PUT /fornecedores ${JSON.stringify(fornecedores)}`);
  } catch (err) {
    next(err);
  }
}

export default {
  createFornecedores,
  getFornecedor,
  getFornecedores,
  deleteFornecedor,
  updateFornecedor,
};
