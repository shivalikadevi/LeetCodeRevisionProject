'use strict';

import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import process from 'process';
import { fileURLToPath } from 'url';
import config from '../config/config.json' assert { type: 'json' };;
//const basename = path.basename(__filename);



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const basename = path.basename(__filename);
const env = 'development';
const configPath = path.join(__dirname, '..', 'config', 'config.json');
const configData = config[env];
const db = {};


let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
sequelize = new Sequelize(configData.database, configData.username, configData.password, configData);
}

const modelsPath = path.join(__dirname, '..', 'models');
fs.readdirSync(modelsPath)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' 
    );
  })
  .forEach(file => {
    const { default: model } = import(path.join(modelsPath, file));
    model(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default {db}
