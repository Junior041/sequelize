import ProdutosService from "../services/produtos.service.js";

async function createProdutos(req, res, next) {
  try {
    let produtos = req.body;
    produtos.dataCadastro = new Date();
    if (
      !produtos.nome ||
      !produtos.valor ||
      !produtos.descricao ||
      !produtos.quantidade ||
      !produtos.idfornecedor
    ) {
      throw new Error(
        "nome, valor, descricao, idfornecedor, quantidade obrigatorios. "
      );
    }
    res.send(await ProdutosService.createProdutos(produtos));
    global.logger.info(`POST /produtos ${JSON.stringify(produtos)}`);
  } catch (err) {
    next(err);
  }
}

async function getProdutos(req, res, next) {
  try {
    res.send(await ProdutosService.getProdutos());
  } catch (err) {
    next(err);
  }
}

async function getProduto(req, res, next) {
  try {
    let id = req.params.idProdutos;
    if (!id) {
      throw new Error("Parametro ID obrigatorio");
    }
    res.send(await ProdutosService.getProduto(id));
  } catch (err) {
    next(err);
  }
}

async function deleteProduto(req, res, next) {
  try {
    const id = req.params.idProdutos;
    if (!id) {
      throw new Error("Parametro ID obrigadotio");
    }
    await ProdutosService.deleteProduto(id);
    res.end();
    global.logger.info(`DELETE /produtos ${JSON.stringify(id)}`);
  } catch (err) {
    next(err);
  }
}

async function updateProduto(req, res, next) {
  try {
    if (produtos.dataCadastro) {
      throw new Error("Nao e possivel moidificar a data do cadastro");
    }
    let produtos = req.body;
    if (
      !produtos.idprodutos ||
      !produtos.nome ||
      !produtos.valor ||
      !produtos.descricao ||
      !produtos.quantidade
    ) {
      throw new Error(
        "idprodutos, nome, valor, descricao,  quantidade,  endereco obrigatorios. "
      );
    }
    await ProdutosService.updateProduto(produtos)
      .then(() => {
        res.send(produtos);
      })
      .catch((err) => {
        throw new err();
      });
    global.logger.info(`PUT /produtos ${JSON.stringify(produtos)}`);
  } catch (err) {
    next(err);
  }
}

export default {
  createProdutos,
  getProduto,
  getProdutos,
  deleteProduto,
  updateProduto,
};
