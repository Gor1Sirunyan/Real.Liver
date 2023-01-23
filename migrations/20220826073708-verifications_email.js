'use strict';
var sequelize = require('sequelize');
module.exports = {
  async up (queryInterface, DataTypes) {
    return queryInterface.createTable('verifications_email', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      email: DataTypes.STRING,
      token: DataTypes.STRING,
      verify: {
        type: DataTypes.STRING,
        DEFAULT: '0'
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('NOW()')
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('NOW()')
      },
    },
        {
          charset:'utf8',
          collatez:'utf_general_ci'
        });
  },

  async down (queryInterface, DataTypes) {
    return queryInterface.dropTable('verifications_email');
  }
};
