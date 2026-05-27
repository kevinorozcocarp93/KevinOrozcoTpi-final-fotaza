'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Roles', [
      {
        nombre: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'usuario',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'validador',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Roles', null, {});

  }
};