const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Planet = sequelize.define("planets", {
  name: DataTypes.STRING,
  positon: DataTypes.INTEGER,
});

module.exports = Planet;
