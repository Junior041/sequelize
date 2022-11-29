import VendasRepository from "../repositories/vendas.repository.js";
async function createVendas(vendas) {
  let dataCadastro = new Date()
  vendas.dataCadastro = dataCadastro
  return await VendasRepository.insertVendas(vendas);
}
async function getVendas() {
  return await VendasRepository.getVendas();
}
async function getVenda(id) {
  return await VendasRepository.getVenda(id);
}
async function deleteVenda(id) {
  await VendasRepository.deleteVenda(id);
}
async function updateVenda(vendas) {
  return await VendasRepository.updateVendas(vendas);
}
export default {
  createVendas,
  getVenda,
  getVendas,
  deleteVenda,
  updateVenda,
};
