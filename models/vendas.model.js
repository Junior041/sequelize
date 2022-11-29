import Sequelize from "sequelize";
import db from "../repositories/db.js";
import Usuarios from "./Usuario.model.js";
import Produtos from "./produtos.model.js"
import Clientes from "./client.model.js";


const Vendas = db.define(
  "vendas",
  {
    idvendas: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    data: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    valor: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    desconto: {
      type: Sequelize.INTEGER,
    },
    promocao: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  },
);

Vendas.belongsTo(Produtos, { foreignKey: "idProduto" });
Vendas.belongsTo(Clientes, { foreignKey: "idCliente" });
Vendas.belongsTo(Usuarios, { foreignKey: "idUsuario" });

export default Vendas;
