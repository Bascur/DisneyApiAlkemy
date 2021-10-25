const router = require('express').Router();
//Middleware
const middleware = require('./middlewares');

//Routes

const apiCharactersRouter = require('./api/characters');
const apiUsersRouter = require('./auth/register');
const apiUsersRouterLogin = require('./auth/login');
const apiMoviesRouter = require('./api/movies');

router.use('/characters', middleware.checkToken, apiCharactersRouter);
router.use('/auth/register', apiUsersRouter);
router.use('/auth/login', apiUsersRouterLogin);
router.use('/movies', middleware.checkToken, apiMoviesRouter);


module.exports = router;