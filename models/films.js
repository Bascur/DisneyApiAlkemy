const Sequelize = require('sequelize');


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
        associatedCharacters: Sequelize.STRING,
        img: Sequelize.BLOB
    }, {
        timestamps: false
    });
}