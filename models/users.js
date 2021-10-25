const Sequelize = require('sequelize');


//Create model
module.exports = (sequelize, type) => {
    return sequelize.define('user', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.STRING(150)

    }, {
        timestamps: false
    });
}