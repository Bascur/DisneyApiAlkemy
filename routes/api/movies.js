//Require Router
const router = require('express').Router();

//Require DB Model
const { Films } = require('../../db');

const apiUsersRouterLogin = require('../auth/login');

//Movie list & query search

router.get("/", async(req, res) => {
    //Query Title
    if (req.query.name) {
        const film = await Films.findOne({
            where: { title: req.query.name }
        });
        res.json(film);
    }
    //Query All
    else {
        const film = await Films.findAll({ attributes: ['title', 'releaseDate', 'img'] });

        res.json(film);
    }
});


//Movie Detail

router.get("/moviedetail", async(req, res) => {
    const film = await Films.findAll();
    res.json(film);
});

//Movie Crud

//Add Movie 

router.post('/', async(req, res) => {
    const film = await Films.create(req.body);
    res.json(film);
})

//Edit Movie

router.put('/:movieId', async(req, res) => {
    await Films.update(req.body, {
        where: { id: req.params.movieId }
    });
    res.json({
        success: "Updated"
    });

});

//Delete Movie 

router.delete('/:movieId', async(req, res) => {
    await Films.destroy({
        where: { id: req.params.movieId }
    });
    res.json({
        success: "Deleted"
    });
});


module.exports = router;