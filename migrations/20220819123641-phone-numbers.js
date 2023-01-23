'use strict';
var sequelize = require('sequelize');
module.exports = {
  async up (queryInterface, DataTypes) {
    return queryInterface.createTable('phone-numbers',{
          id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
          code: DataTypes.STRING,
          name: DataTypes.STRING,
        },
        {
          charset:'utf8',
          collatez:'utf_general_ci'
        });
  },

  async down (queryInterface, DataTypes) {
    return queryInterface.dropTable('phone-numbers');
  }
};
