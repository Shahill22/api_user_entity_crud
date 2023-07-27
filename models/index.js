//initialize sequelize
const Sequelize = require("sequelize");
const dotenv = require("dotenv");
dotenv.config()

const sequelize = new Sequelize(process.env.DB,process.env.USER,process.env.PASSWORD,{
    storage: process.env.STORAGE,
    dialect : "sqlite",
    logging : false,
    benchmark : true,
    pool : {
        max : 5,
        min : 0,
        acquire : 50000,
        idle : 10000
    }
    });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.users = require("./user.js")(sequelize, Sequelize);

//export
module.exports = db;