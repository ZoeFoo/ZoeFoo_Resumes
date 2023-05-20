const express = require('express');
const User = require('../model/User');
const app = express();
const bcrypt = require("bcrypt");

app.use(express.json());

exports.register = async (req, res) => {
    const { email, password, firstName, lastName } = req.body;
    const saltRounds = 10;

    bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(password, salt, async function (err, hash) {
            try {
                const user = await User.create({
                    email,
                    password: hash,
                    firstName,
                    lastName,
                });

                res.status(200).json({
                    message: "User created successfully",
                    user
                });
            } catch (e) {
                res.status(401).json({
                    message: "User not created successfully",
                    error: e.message,
                });
            }
        });
    });
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.statue(400).json({
            message: "Email or Password not present",
        })
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.statue(401).json({
                message: "Login not successful",
                error: "User not found"
            });
        }

        const result = await bcrypt.compare(password, user.password);
        if (result == true) {
            return res.status(200).json({
                message: "Login successful",
                user
            })
        } else {
            return res.status(401).json({
                messag: "Login not successful",
                error: "Invalid password"
            });
        }
    } catch (e) {
        return res.status(400).json({
            message: "An error occurred",
            error: e.massage,
        });
    }
};