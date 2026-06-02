'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      contenido: {
        type: Sequelize.TEXT
      },
      usuario_id: {
        type: Sequelize.INTEGER,
        references: {
        model: 'Users',
        key: 'id'
        },
      onDelete: 'CASCADE'
      },
      post_id: {
        type: Sequelize.INTEGER,
        references: {
        model: 'Posts',
        key: 'id'
        },
      onDelete: 'CASCADE'
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
    await queryInterface.dropTable('Comments');
  }
};