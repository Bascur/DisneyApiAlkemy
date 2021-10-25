//Require Router
const router = require('express').Router();

//Require DB Model
const { Character } = require('../../db');

const apiUsersRouterLogin = require('../auth/login');

//Characters List & Character Search by query

router.get("/", async(req, res) => {
    //Query Name
    if (req.query.name) {
        const character = await Character.findOne({
            where: { name: req.query.name }
        });
        res.json(character);
    }
    //Query Age
    if (req.query.age) {
        const character = await Character.findOne({
            where: { age: req.query.age }
        });
        res.json(character);
    }
    //Query Movies
    if (req.query.movies) {
        const character = await Character.findOne({
            where: { associatedMovies: req.query.movies }
        });
        res.json(character);
        //Find all
    } else {
        const character = await Character.findAll({ attributes: ['name', 'img'] });
        res.json(character);
    }
});



//Character Detail

router.get("/characterdetail", async(req, res) => {
    const character = await Character.findAll({ attributes: ['age', 'peso', 'history', 'associatedMovies'] });
    res.json(character);
});

//Add Character 

router.post('/', async(req, res) => {
    const character = await Character.create(req.body);
    res.json(character);
})

//Edit Character

router.put('/:characterId', async(req, res) => {
    await Character.update(req.body, {
        where: { id: req.params.characterId }
    });
    res.json({
        success: "Updated"
    });

});

//Delete Character 

router.delete('/:characterId', async(req, res) => {
    await Character.destroy({
        where: { id: req.params.characterId }
    });
    res.json({
        success: "Deleted"
    });
});





module.exports = router;