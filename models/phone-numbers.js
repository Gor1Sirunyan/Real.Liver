'use strict'
// const { Sequelize, DataTypes } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    var PhoneNumbers = sequelize.define('PhoneNumbers', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        code: DataTypes.STRING,
        name: DataTypes.STRING,
    }, {
        tableName: 'phone-numbers',
        timestamps: false,
    });

    return PhoneNumbers;
};