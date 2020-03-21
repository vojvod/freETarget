module.exports = (sequelize, Sequelize) => {
    const Shooter = sequelize.define("shooter", {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        registrationnumber: {
            type: Sequelize.STRING,
            allowNull: false
        },
        club: {
            type: Sequelize.STRING,
            allowNull: false
        },
        firstname: {
            type: Sequelize.STRING,
            allowNull: false
        },
        lastname: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });

    return Shooter;
};