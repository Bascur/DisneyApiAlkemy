//Require models
const Sequelize = require('sequelize');



const Characters = require('./characters');
const Films = require('./films');
const Genres = require('./genres');


//Films => Characters
Films.hasMany(Characters);
Characters.belongsTo(Films);



//Movies => Genres

Films.hasOne(Genres);
Genres.belongsTo(Films);