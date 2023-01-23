'use strict'
// const { Sequelize, DataTypes } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    var Legal = sequelize.define('Legal', {
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
    }, {
        tableName: 'legal',
        timestamps: false,
    });

    return Legal;
};