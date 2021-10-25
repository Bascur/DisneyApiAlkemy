//Require Router
const router = require('express').Router();
//Require hash
const bcrypt = require('bcryptjs');
//Require DB Model
const { User } = require('../../db');
//Require validator
const { check, validationResult } = require('express-validator');
//Require Nodemailer
const nodemailer = require('nodemailer');



router.post('/', [
    check('username', 'Username Required').not().isEmpty(),
    check('password', 'Password Required').not().isEmpty(),
    check('email', 'Invalid Email').isEmail()

], async(req, res) => {
    //Validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ error: errors.array() });
    }

    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const user = await User.create(req.body);
    res.json(user);

    //Nodemailer

    const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        post: 587,
        secure: false,
        auth: {
            user: "alexandrea.denesik33@ethereal.email",
            pass: "FWAd2sccgT9pR9qQnW"
        }
    });

    const mailOptions = {
        from: "Disney Api Alkemy",
        to: req.body.email,
        subject: "Welcome to the Disney Api",
        text: "Thanks for using our service"
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            console.log("Email enviado");
            res.status(200).json(req.body);
        }
    })
});

router.post('/login', async(req, res) => {
    const user = await User.findOne({ where: { email: req.body.email } });
    if (user) {

    } else {
        res.json({ error: 'Invalid user or password' });
    }

});

module.exports = router;