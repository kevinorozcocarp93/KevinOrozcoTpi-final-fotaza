'use strict';

module.exports = {

    async up(queryInterface, Sequelize) {

        await queryInterface.createTable(
            'Ratings',
            {

                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },

                valor: {
                    type: Sequelize.INTEGER,
                    allowNull: false
                },

                usuario_id: {
                    type: Sequelize.INTEGER,
                    allowNull: false
                },

                post_id: {
                    type: Sequelize.INTEGER,
                    allowNull: false
                },

                createdAt: {
                    allowNull: false,
                    type: Sequelize.DATE
                },

                updatedAt: {
                    allowNull: false,
                    type: Sequelize.DATE
                }

            }
        );

    },

    async down(queryInterface, Sequelize) {

        await queryInterface.dropTable('Ratings');

    }

};
