module.exports = (sequelize, Sequelize) => {
    const Series = sequelize.define("series", {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        date: {
            type: Sequelize.DATE,
            allowNull: true,
            defaultValue: sequelize.literal('NOW()')
        },
        type: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });

    return Series;
};