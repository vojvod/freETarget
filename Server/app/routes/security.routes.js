var path = require("path");
const db = require("../models");
const User = db.users;

module.exports = app => {
    var router = require("express").Router();

    router.get('/dashboard', (req, res) => {
        if (req.session.user && req.cookies.freETarget_user_sid) {
            res.sendFile(path.join(__dirname, '..', '..', 'public/dashboard.html'));
        } else {
            res.redirect('/api/login');
        }
    });

    router.route('/login')
        .get((req, res) => {
            if (!req.session.user && !req.cookies.freETarget_user_sid) {
                res.sendFile(path.join(__dirname, '..', '..', '/public/login.html'));
            }
        })
        .post((req, res) => {
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
        });

    router.get("/logout", (req, res) => {
        if (req.session.user && req.cookies.freETarget_user_sid) {
            res.clearCookie('freETarget_user_sid');
            res.redirect('/');
        } else {
            res.redirect('/api/login');
        }
    });

    router.route('/signup')
        .get((req, res) => {
            if (!req.session.user && !req.cookies.freETarget_user_sid) {
                res.sendFile(path.join(__dirname, '..', '..', '/public/signup.html'));
            }
        })
        .post((req, res) => {
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
        });


    router.post('/session', (req, res) => {
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
        }else {
            res.status(500).send({
                message: "Session is already set!"
            });
        }
    });

    app.use('/api', router);
};