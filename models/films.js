const Sequelize = require('sequelize');
const characters = require('./characters');


//Create model
module.exports = (sequelize, type) => {
    return sequelize.define('film', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: Sequelize.STRING,
        releaseDate: Sequelize.DATE,
        stars: Sequelize.INTEGER,
        img: Sequelize.BLOB
    }, {
        timestamps: false
    });
}