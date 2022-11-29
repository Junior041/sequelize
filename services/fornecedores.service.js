import FornecedoresRepository from "../repositories/fornecedores.repository.js";
async function createFornecedores(fornecedores) {
  let dataCadastro = new Date()
  fornecedores.dataCadastro = dataCadastro
  return await FornecedoresRepository.insertFornecedores(fornecedores);
}
async function getFornecedores() {
  return await FornecedoresRepository.getFornecedores();
}
async function getFornecedor(id) {
  return await FornecedoresRepository.getFornecedor(id);
}
async function deleteFornecedor(id) {
  await FornecedoresRepository.deleteFornecedor(id);
}
async function updateFornecedor(fornecedores) {
  return await FornecedoresRepository.updateFornecedores(fornecedores);
}
export default {
  createFornecedores,
  getFornecedor,
  getFornecedores,
  deleteFornecedor,
  updateFornecedor,
};
