'use strict'

// const { Sequelize, DataTypes } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    const Sessions = sequelize.define('Sessions', {
            session_id: {
                type: DataTypes.STRING,
                primaryKey: true
            },
            expires: DataTypes.INTEGER,
            data: DataTypes.TEXT,
        },
        {
            tableName: 'sessions',
            timestamps: false,
        });
    return Sessions;
};