import ClientRepository from "../repositories/client.repository.js";
async function createClient(client) {
  let dataCadastro = new Date()
  client.dataCadastro = dataCadastro
  return await ClientRepository.insertClient(client);
}
async function getClients() {
  return await ClientRepository.getClients();
}
async function getClient(client) {
  return await ClientRepository.getClient(client);
}
async function deleteClient(client) {
  await ClientRepository.deleteClient(client);
}
async function updateClient(client) {
  return await ClientRepository.updateClient(client);
}
export default {
  createClient,
  getClients,
  getClient,
  deleteClient,
  updateClient,
};
