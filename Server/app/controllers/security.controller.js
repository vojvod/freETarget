require('dotenv').config();
const db = require("../models");
const User = db.users;
const Shooter = db.shooters;
const Op = db.Sequelize.Op;
const utils = require("../../utils");
var path = require("path");
const jwt = require('jsonwebtoken');

exports.dashboard = (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'public/dashboard.html'));
};

exports.login = (req, res) => {
    var username = req.body.username,
        password = req.body.password;

    User.findOne({where: {username: username}}).then(function (user) {
        if (!user) {
            res.redirect('/api/login');
        } else if (!user.validPassword(password)) {
            res.redirect('/api/login');
        } else {

            // generate token
            const token = utils.generateToken(user.dataValues);
            // get basic user details
            const userObj = utils.getCleanUser(user.dataValues);
            // return the token along with user details
            // return res.json({ user: userObj, token });
            res.redirect('/api/dashboard?token=' + token);

        }
    });
};

exports.logout = (req, res) => {
    var token = req.headers['token'] || req.body.token || req.query.token;
    utils.deleteToken(token);
};

exports.signup = (req, res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
        .then(user => {
            req.session.user = user.dataValues;
            res.redirect('/api/dashboard');
        })
        .catch(error => {
            res.redirect('/api/signup');
        });
};

exports.session = (req, res) => {
    var username = req.body.username,
        password = req.body.password;

    User.findOne({where: {username: username}, include: [Shooter]}).then(function (user) {
        if (!user) {
            return res.status(400).json({
                error: true,
                message: "Username or Password is Wrong."
            });
        } else if (!user.validPassword(password)) {
            return res.status(400).json({
                error: true,
                message: "Username or Password is Wrong."
            });
        } else {
            // generate token
            const token = utils.generateToken(user.dataValues);
            // get basic user details
            const userObj = utils.getCleanUser(user.dataValues);
            // return the token along with user details
            return res.json({user: userObj, shooters: user.dataValues.shooters, token});
        }
    });
};