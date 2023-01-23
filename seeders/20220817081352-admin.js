'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('admin',[
      {
        userName: 'DS13',
        email: 'a@a.com',
        password: 1234567,
      },
      {
        userName: 'Qwt',
        email: 'ab@a.com',
        password: 123456,
      },
      {
        userName: 'Wt',
        email: 'gorsirunyan1@gmail.com',
        password: 12345,
      }
    ])
  },

  async down (queryInterface, Sequelize) {
   return queryInterface.bulkDelete('admin')
  }
};
