import Usuario from "../models/usuario.model.js";

async function insertUsuario(usuario) {
  try {
    return await Usuario.create(usuario);
  } catch (err) {
    throw err;
  }
}

async function getUsuarios() {
  try {
    return await Usuario.findAll();
  } catch (err) {
    throw err;
  }
}

async function getUsuario(id) {
  try {
    return await Usuario.findByPk(id);
  } catch (err) {
    throw err;
  }
}

async function deleteUsuario(id) {
  try {
    return await Usuario.destroy({
      where: {
        idUsuario: id,
      },
    });
  } catch (err) {
    throw err;
  }
}

async function updateUsuario(usuario) {
  try {
    return await Usuario.update(usuario, {
      where: { idUsuario: usuario.idUsuario },
    });
  } catch (err) {
    throw err;
  }
}

export default {
  insertUsuario,
  getUsuarios,
  getUsuario,
  updateUsuario,
  deleteUsuario,
  updateUsuario,
};
