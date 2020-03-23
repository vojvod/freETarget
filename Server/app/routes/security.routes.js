var path = require("path");
const db = require("../models");
const User = db.users;

module.exports = app => {
    const security = require("../controllers/security.controller.js");

    var router = require("express").Router();

    router.get('/dashboard', security.dashboard);

    router.route('/login')
        .get((req, res) => {
            if (!req.session.user && !req.cookies.freETarget_user_sid) {
                res.sendFile(path.join(__dirname, '..', '..', '/public/login.html'));
            }
        })
        .post(security.login);

    router.get("/logout",security.logout);

    router.route('/signup')
        .get((req, res) => {
            if (!req.session.user && !req.cookies.freETarget_user_sid) {
                res.sendFile(path.join(__dirname, '..', '..', '/public/signup.html'));
            }
        })
        .post(security.signup);


    router.post('/session', security.session);

    app.use('/api', router);
};