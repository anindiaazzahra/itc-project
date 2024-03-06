const sequelize = require("./db_connect");
const User = require('../model/User');

//RELASI DITARUH DISINI

//SEMISAL ADA TABEL ROLES
//User.hasMany(Role)
//Role.belongsTo(User)

const association = async ()=>{
  try {
      await sequelize.sync({});
  } catch (error) {
      console.log(error.message);
  }
}

module.exports = association; 