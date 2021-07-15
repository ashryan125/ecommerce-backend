const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

// creates Catergory Model
class Category extends Model {}

// definte table columns and configuration
Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
      category_name: {
        type: DataTypes.STRING,
        allowNull: false
      }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
