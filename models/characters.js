const Sequelize = require('sequelize');


//Create model
module.exports = (sequelize, type) => {
    return sequelize.define('character', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: Sequelize.STRING,
        age: Sequelize.INTEGER,
        peso: Sequelize.FLOAT,
        history: Sequelize.STRING,
        associatedMovies: {
            type: Sequelize.INTEGER,
            references: {
                model: 'films',
                key: 'id',

            }
        },
        img: Sequelize.BLOB
    }, {
        timestamps: false
    });
}