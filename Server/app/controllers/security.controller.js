const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;
var path = require("path");

exports.dashboard = (req, res) => {
    if (req.session.user && req.cookies.freETarget_user_sid) {
        res.sendFile(path.join(__dirname, '..', '..', 'public/dashboard.html'));
    } else {
        res.redirect('/api/login');
    }
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
            req.session.user = user.dataValues;
            res.redirect('/api/dashboard');
        }
    });
};

exports.logout = (req, res) => {
    if (req.session.user && req.cookies.freETarget_user_sid) {
        res.clearCookie('freETarget_user_sid');
        res.redirect('/');
    } else {
        res.redirect('/api/login');
    }
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
    if (!req.session.user && !req.cookies.freETarget_user_sid) {
        var username = req.body.username,
            password = req.body.password;

        User.findOne({where: {username: username}}).then(function (user) {
            if (!user) {
                res.redirect('/api/login');
            } else if (!user.validPassword(password)) {
                res.redirect('/api/login');
            } else {
                req.session.user = user.dataValues;
                res.redirect('/api/dashboard');
            }
        });
    } else {
        res.status(500).send({
            message: "Session is already set!"
        });
    }
};