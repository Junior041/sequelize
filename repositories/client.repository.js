import Client from "../models/client.model.js";

async function insertClient(client) {
  try {
    return await Client.create(client);
  } catch (err) {
    throw err;
  }
}

async function getClients() {
  try {
    return await Client.findAll();
  } catch (err) {
    throw err;
  }
}

async function getClient(id) {
  try {
    return await Client.findByPk(id);
  } catch (err) {
    throw err;
  }
}

async function deleteClient(id) {
  try {
    return await Client.destroy({
      where: {
        idClients: id,
      },
    });
  } catch (err) {
    throw err;
  }
}

async function updateClient(client) {
  try {
    return await Client.update(client, {
      where: { idClients: client.idClients },
    });
  } catch (err) {
    throw err;
  }
}

export default {
  insertClient,
  getClients,
  getClient,
  updateClient,
  deleteClient,
  updateClient,
};
