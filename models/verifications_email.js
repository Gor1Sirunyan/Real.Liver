'use strict'

module.exports =(sequelize,DataTypes)=>{
    const VerificationsEmail = sequelize.define('VerificationsEmail', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        email: DataTypes.STRING,
        token: DataTypes.STRING,
        verify:{
            type: DataTypes.STRING,
            DEFAULT:'0'
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('NOW()')
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('NOW()')
        }
    }, {
        tableName: 'verifications_email',
        timestamps: false,
    });
    return VerificationsEmail;
}