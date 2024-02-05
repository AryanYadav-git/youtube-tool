require('dotenv').config();
const express = require("express");
const bcrypt = require('bcrypt');
const router = express.Router();
const jwt = require('jsonwebtoken')
const { Admin, validate } = require("../DB/user");

//admin signup
router.post('/signup', async (req, res) => {
    try {
        const { error } = validate(req.body);
        if (error) {
            return res.status(400).send({ message: error.details[0].message });
        }
        const { username, password } = req.body;
        console.log(req.body);
        const admin = await Admin.findOne({ username });
        if (admin) {
            res.status(403).send({ message: 'Admin already exists' });
            return;
        }
        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(password, salt);
        await new Admin({ ...req.body, password: hashPassword }).save();
        res.status(200).send({ message: "User created successfully" })
    } catch {
        res.status(500).json({ message: "Internal server error" })
    }
});

//Admin login
router.post('/login', async (req, res) => {
    try{
        const { username, password } = req.body;
        const admin = await Admin.findOne({ username });
        if (!admin) {
            res.status(400).send({ message: "Invalid email" });
            return;
        }
        const validPassword = await bcrypt.compare(
            password,
            admin.password
        );
        if (!validPassword) {
            res.status(400).send({ message: "Invalid password" });
            return;
        }
        const token = jwt.sign({ username, role: 'admin' }, process.env.JWTKEY, {expiresIn:'1h'});
        res.status(200).json({ message: "logged in successfully ", token: token});
    }
    catch{
        res.status(500).json({ message: "Internal server error" })
    }
});

module.exports = router;