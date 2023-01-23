'use strict';
var sequelize = require('sequelize');
module.exports = {
  async up (queryInterface, DataTypes) {
    return queryInterface.createTable('legal',{
          id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
            status:{
                type: DataTypes.INTEGER,
                defaultValue: 1,
            },
          organization_name:DataTypes.STRING,
          email:DataTypes.STRING,
        //  country_id:DataTypes.INTEGER,
        //   phone_code:DataTypes.STRING,
        //   number:DataTypes.INTEGER,
            phone_number:DataTypes.STRING,
          shipping_country:DataTypes.STRING,
          weight_type:DataTypes.STRING,
          weight:DataTypes.STRING,
          length_type:DataTypes.STRING,
            v_3m:DataTypes.INTEGER,
          comments:DataTypes.STRING,
          created_at: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('NOW()')
          },
          updated_at: {
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
    return queryInterface.dropTable('legal');
  }
};
