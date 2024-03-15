const { DataTypes, STRING } = require("sequelize");
const sequelize = require("../config/sequelize");

const Satelite = sequelize.define("satelites", {
  name: DataTypes.STRING,
  serial_Number: DataTypes.INTEGER,
  planetId: DataTypes.INTEGER,
});
module.exports = Satelite;
