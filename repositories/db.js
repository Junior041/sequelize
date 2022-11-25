
import Sequelize from "sequelize";

const sequelize = new Sequelize('mydb','root','1508',{
  host:"localhost",
  dialect:"mysql",
  define:{
    timestamps: false
  }

});
export default  sequelize ;
