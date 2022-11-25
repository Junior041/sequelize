import Sequelize from "sequelize";
import db from "../repositories/db.js";

const Client = db.define(
  "clientes",
  {
    idClients: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    telefone: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    endereco: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    dataCadastro: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    cpf: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    indicacao: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
  },
);

export default Client;
