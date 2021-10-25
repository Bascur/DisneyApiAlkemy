const Sequelize = require('sequelize');


//Create model
module.exports = (sequelize, type) => {
    return sequelize.define('genre', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: Sequelize.STRING,
        associatedMovies: Sequelize.STRING,
        img: Sequelize.BLOB

    }, {
        timestamps: false
    });
}