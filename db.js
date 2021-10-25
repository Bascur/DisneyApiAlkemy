const Sequelize = require("sequelize");
require('dotenv').config();


//Get Model
const charactersModel = require('./models/characters');
const filmsModel = require('./models/films');
const genresModel = require('./models/genres');
const usersModel = require('./models/users');

//Config sequelize
const sequelize = new Sequelize(process.env.NAME, process.env.NAME, process.env.PASSWORD, {
    host: "remotemysql.com",
    dialect: "mysql"
});


//Excec the =>
const Character = charactersModel(sequelize, Sequelize);
const Films = filmsModel(sequelize, Sequelize);
const Genres = genresModel(sequelize, Sequelize);
const User = usersModel(sequelize, Sequelize);

//Update the DB
sequelize.sync({ force: false })
    .then(() => {
        console.log("Sync models");
    })

module.exports = {
    Character,
    Films,
    Genres,
    User
}