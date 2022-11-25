import ClientService from "../services/client.service.js";

async function createClient(req, res, next) {
  try {
    let client = req.body;
    if (
      !client.nome ||
      !client.cpf ||
      !client.telefone ||
      !client.email ||
      !client.endereco
    ) {
      throw new Error("nome, CPF, telefone, endereco são obrigatorios. ");
    }
    res.send(await ClientService.createClient(client));
    global.logger.info(`POST /client ${JSON.stringify(client)}`);
  } catch (err) {
    next(err);
  }
}

async function getClients(req, res, next) {
  try {
    res.send(await ClientService.getClients());
  } catch (err) {
    next(err);
  }
}

async function getClient(req, res, next) {
  try {
    let id = req.params.idClients;
    if (!id) {
      throw new Error("Parametro ID obrigatorio");
    }
    res.send(await ClientService.getClient(id));
  } catch (err) {
    next(err);
  }
}

async function deleteClient(req, res, next) {
  try {

    const id = req.params.idClients;
    if (!id) {
      throw new Error("Parametro ID obrigadotio");
    }
    await ClientService.deleteClient(id);
    res.end()
    global.logger.info(`DELETE /client ${JSON.stringify(id)}`);
  } catch (err) {
    next(err);
  }
}

async function updateClient(req, res, next) {
  try {
    let client = req.body;
    if (
      !client.idClients ||
      !client.nome ||
      !client.cpf ||
      !client.telefone ||
      !client.email ||
      !client.endereco
    ) {
      throw new Error("ID,Name, CPF, Phone, Email e Addres são obrigatorios. ");
    }
    await ClientService.updateClient(client).then(()=>{
      res.send(client);
    }).catch(err => {
      throw new err
    })
    global.logger.info(`PUT /client ${JSON.stringify(client)}`);
  } catch (err) {
    next(err);
  }
}

export default {
  createClient,
  getClients,
  getClient,
  deleteClient,
  updateClient,
};
