import UsuarioRepository from "../repositories/usuario.repository.js";
async function createUsuario(usuario) {
  let dataCadastro = new Date()
  usuario.dataCadastro = dataCadastro
  return await UsuarioRepository.insertUsuario(usuario);
}
async function getUsuarios() {
  return await UsuarioRepository.getUsuarios();
}
async function getUsuario(usuario) {
  return await UsuarioRepository.getUsuario(usuario);
}
async function deleteUsuario(usuario) {
  return await UsuarioRepository.deleteUsuario(usuario);
}
async function updateUsuario(usuario) {
  return await UsuarioRepository.updateUsuario(usuario);
}
export default {
  createUsuario,
  getUsuarios,
  getUsuario,
  deleteUsuario,
  updateUsuario,
};
