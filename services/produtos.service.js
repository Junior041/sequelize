import ProdutosRepository from "../repositories/produto.repository.js";
async function createProdutos(produtos) {
  let dataCadastro = new Date()
  produtos.dataCadastro = dataCadastro
  return await ProdutosRepository.insertProdutos(produtos);
}
async function getProdutos() {
  return await ProdutosRepository.getProdutos();
}
async function getProduto(id) {
  return await ProdutosRepository.getProduto(id);
}
async function deleteProduto(id) {
  await ProdutosRepository.deleteProduto(id);
}
async function updateProduto(produtos) {
  return await ProdutosRepository.updateProdutos(produtos);
}
export default {
  createProdutos,
  getProduto,
  getProdutos,
  deleteProduto,
  updateProduto,
};
