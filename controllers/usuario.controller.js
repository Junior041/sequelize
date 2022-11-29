import UsuarioService from "../services/usuario.service.js";
async function createUsuario(req, res, next) {
  try {
    let usuario = req.body;
    if (
      !usuario.nome ||
      !usuario.email ||
      !usuario.senha ||
      !usuario.cpf ||
      !usuario.telefone ||
      !usuario.endereco
    ) {
      throw new Error("nome, email, senha, cpf,  telefone,  endereco obrigatorios. ");
    }
    res.send(await UsuarioService.createUsuario(usuario));
    global.logger.info(`POST /usuario ${JSON.stringify(usuario)}`);
  } catch (err) {
    next(err);
  }
}

async function getUsuarios(req, res, next) {
  try {
    res.send(await UsuarioService.getUsuarios());
  } catch (err) {
    next(err);
  }
}

async function getUsuario(req, res, next) {
  try {
    let id = req.params.idUsuario;
    if (!id) {
      throw new Error("Parametro ID obrigatorio");
    }
    res.send(await UsuarioService.getUsuario(id));
  } catch (err) {
    next(err);
  }
}

async function deleteUsuario(req, res, next) {
  try {

    const id = req.params.idUsuario;
    if (!id) {
      throw new Error("Parametro ID obrigadotio");
    }
    await UsuarioService.deleteUsuario(id);
    res.end()
    global.logger.info(`DELETE /usuario ${JSON.stringify(id)}`);
  } catch (err) {
    next(err);
  }
}

async function updateUsuario(req, res, next) {
  try{
  let usuario = req.body;
    if (
      !usuario.idUsuario ||
      !usuario.nome ||
      !usuario.email ||
      !usuario.senha ||
      !usuario.cpf ||
      !usuario.telefone ||
      !usuario.endereco
    ) {
      throw new Error("nome, email, senha, cpf,  telefone,  endereco obrigatorios. ");
    }
    await UsuarioService.updateUsuario(usuario).then(()=>{
      res.send(usuario);
    }).catch(err => {
      throw new err
    })
    global.logger.info(`PUT /usuario ${JSON.stringify(usuario)}`);
  } catch (err) {
    next(err);
  }
}

export default {
  createUsuario,
  getUsuarios,
  getUsuario,
  deleteUsuario,
  updateUsuario,
};
