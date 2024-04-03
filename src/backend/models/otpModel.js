'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class otpModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  otpModel.init({
    otp:{type: DataTypes.STRING,required:true},
    email: {type:DataTypes.STRING,require:true}
  }, {
    sequelize,
    modelName: 'otpModel',
  });
  return otpModel;
};