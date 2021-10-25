//Require Env
require('dotenv').config();
//Require Router
const router = require('express').Router();
//Require hash
const bcrypt = require('bcryptjs');
//Require DB Model
const { User } = require('../../db');
//Require validator
const { check, validationResult } = require('express-validator');
//Require toker
const moment = require('moment');
const jwt = require('jwt-simple');




router.post('/', async(req, res) => {
    const user = await User.findOne({ where: { email: req.body.email } });
    if (user) {
        const samePassword = bcrypt.compareSync(req.body.password, user.password);
        if (samePassword) {
            res.json({ success: createToken(user) });

        } else {
            res.json({ error: 'Invalid user or password' });

        }
    } else {
        res.json({ error: 'Invalid user or password' });
    }

});

//Token

const createToken = (user) => {

    const payload = {
        userId: user.id,
        createdAt: moment().unix(),
        expiredAt: moment().add(5, 'minutes').unix()
    }
    return jwt.encode(payload, process.env.SECRET);

}




module.exports = router;