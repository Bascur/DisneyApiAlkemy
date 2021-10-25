//Token
const jwt = require('jwt-simple');

//Db
const { User } = require("../db");

//Moment
const moment = require('moment');

const checkToken = (req, res, next) => {
    if (!req.headers['user-token']) {
        return res.json({ error: 'Please provide the token on the header' });
    }
    const userToken = req.headers['user-token'];
    let payload = {};

    try {
        payload = jwt.decode(userToken, 'miviejamediolavidayelbitcoinlasganasdevivirlaxdxd');
    } catch {
        return res.json({ error: 'Invalid token' });
    }

    if (payload.expiredAt < moment().unix()) {
        return res.json({ error: 'Expired token' });
    }

    req.userId = payload.userId;
    next();
}

module.exports = {
    checkToken: checkToken
}