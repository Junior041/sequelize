import Sequelize from "sequelize";
import db from "../repositories/db.js";

const Client = db.define(
  "usuarios",
  {
    idUsuario: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    senha: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    cpf: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    dataCadastro: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    telefone: {
      type: Sequelize.STRING,
    },
    endereco: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    permicoes: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    cargo: {
      type: Sequelize.STRING,
    },
  },
);

export default Client;
