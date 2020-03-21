module.exports = (sequelize, Sequelize) => {
    const Shooter = sequelize.define("shooter", {
        id: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        club: {
            type: Sequelize.STRING
        },
        firstname: {
            type: Sequelize.STRING
        },
        lastname: {
            type: Sequelize.STRING
        }
    });

    return Shooter;
};