'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    email:{type: DataTypes.STRING,
      required:true,
      validate:{
        isEmail:true,
        isUnique(value, next){
          User.findOne({
            where:{
              email:value
            }
          }).then(user=>{
            if(user){
              next(new Error('Email already exists'));
            }else{
              next();
            }
          })
        }
      }
    },
    password: {
      type:DataTypes.STRING,
      required:true
    },
    role: {
      type:DataTypes.STRING,
      enum:['Admin','Student','WorkingProfessional']
    },
    name: {type:DataTypes.STRING,
    required:true
  },
    id: {type:DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey:true},
    leetcode_profile: DataTypes.STRING,
    linkedin_profile: DataTypes.STRING,
    country: DataTypes.STRING,
    current_company: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};