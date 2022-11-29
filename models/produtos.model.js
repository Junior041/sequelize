import Sequelize from "sequelize";
import db from "../repositories/db.js";
import Fornecedores from "./fornecedores.model.js";

const Produtos = db.define(
  "produtos",
  {
    idprodutos: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    valor: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    descricao: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    dataCadastro: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    quantidade: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  { underscored: true }
);

Produtos.belongsTo(Fornecedores, { foreignKey: "idfornecedor" });

export default Produtos;
