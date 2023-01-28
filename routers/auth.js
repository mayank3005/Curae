const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
router.use(cookieParser());

const User = require('../models/user');
const authenticate = require('../middleware/authenticate');

router.post('/signup', async (req, res) => {

    try {
        const userExist = await User.findOne({ email: req.body.email });
        if (userExist)
            return res.status(400).json({ error: "Email already exists" });
        else {
            const user = new User(req.body);
            // Here we need a function which can hash the password
            const userRegister = await user.save();

            if (userRegister) {
                res.status(201).json({ message: 'user registered successfully' });
            } else {
                res.status(400).json({ error: 'Failed to register' });
            }
        }

    } catch (err) { res.status(400).send(err); }

})

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password)
            return res.status(400).json({ error: 'Plzz fill the details' });

        const userLogin = await User.findOne({ email: email });

        if (userLogin) {
            const isMatch = (password === userLogin.password);

            console.log(isMatch);

            const token = await userLogin.generateAuthToken();
            // console.log(token);

            await res.cookie('jwtoken', token, {
                expires: new Date(Date.now() + 3000000),
                httpOnly: false
            });

            if (!isMatch) {
                throw new Error({ err: 'invalid credentials' });
            }
            else {
                // console.log(userLogin);
                res.json('Sigin successfull');
            }
        }
        else {
            throw new Error({ err: 'invalid credentials' });
        }
    } catch (err) { res.status(400).send(err); }
})

router.get('/about', authenticate, (req, res) => {
    res.send(req.rootUser);
    // res.send({ 'name': 'Hello world' });
})

router.get('/logout', (req, res) => {
    res.clearCookie('jwtoken', { path: '/' });
    res.status(200).send('User Logout');
})


module.exports = router;