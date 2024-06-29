'use strict';
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

class Url extends Model {

}

Url.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey:true
  },
  shortUrl: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  longUrl: {
    type: DataTypes.STRING(20000),
    allowNull: false,
    unique: true
  },
}, {
  sequelize,
  modelName: 'Urls',
  timestamps: true
});

export default Url;
