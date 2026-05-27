'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      foto_perfil: {
        type: Sequelize.STRING
      },
      bio: {
        type: Sequelize.TEXT
      },
      activo: {
        type: Sequelize.BOOLEAN
      },
      rol_id: {
      type: Sequelize.INTEGER,
      references: {
      model: 'Roles',
      key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};