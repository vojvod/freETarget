const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.shooters = require("./shooter.model.js")(sequelize, Sequelize);
db.series = require("./series.model.js")(sequelize, Sequelize);
db.shots = require("./shot.model.js")(sequelize, Sequelize);

db.shooters.Series = db.shooters.hasMany(db.series);
db.series.Shots = db.series.hasMany(db.shots);

module.exports = db;