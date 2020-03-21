module.exports = (sequelize, Sequelize) => {
    const Shot = sequelize.define("shots", {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        no: {
            type: Sequelize.INTEGER,
            unique: true,
            allowNull: false
        },
        score: {
            type: Sequelize.DOUBLE,
            allowNull: false,
            defaultValue: 0
        }
    });

    return Shot;
};