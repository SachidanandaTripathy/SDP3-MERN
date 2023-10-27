const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');



router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        console.log(user);
        if (!user) {
            return res.send("newuser");
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.send("invalid");
        }
        console.log(validPassword);
        const data = {
            fname: user.fname,
            lname: user.lname,
            email: user.email,
            role: user.role,
        }


        res.status(200).send({
            message: "Login Successful",
            user: data,
        });

    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).send({
            message: "Internal Server Error",
        });
    }
});

module.exports = router;
