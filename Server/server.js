require('dotenv').config();

const express = require("express");
const session = require('express-session');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const morgan = require('morgan');
const bodyParser = require("body-parser");
const cors = require("cors");
const utils = require("./utils");

const app = express();

const corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// set morgan to log info about our requests for development use.
app.use(morgan('dev'));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// initialize cookie-parser to allow us access the cookies stored in the browser.
app.use(cookieParser());

// initialize express-session to allow us track the logged-in user across sessions.
// app.use(session({
//     key: 'freETarget_user_sid',
//     secret: 'somerandonstuffs',
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//         expires: 600000
//     }
// }));

const db = require("./app/models");

db.sequelize.sync();
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// This middleware will check if user's cookie is still saved in browser and user is not set, then automatically log the user out.
// This usually happens when you stop your express server after login, your cookie still remains saved in the browser.
// app.use((req, res, next) => {
//     if (req.cookies.freETarget_user_sid && !req.session.user) {
//         res.clearCookie('freETarget_user_sid');
//     }
//     next();
// });


// middleware function to check for logged-in users
// var sessionChecker = (req, res, next) => {
//     if (req.session.user && req.cookies.freETarget_user_sid) {
//         res.redirect('/api/dashboard');
//     } else {
//         next();
//     }
// };


// route for Home-Page
// app.get('/', sessionChecker, (req, res) => {
//     res.redirect('/api/login');
// });


// const User = db.users;

// route for user signup
// app.route('/signup')
//     .get(sessionChecker, (req, res) => {
//         res.sendFile(__dirname + '/public/signup.html');
//     })
//     .post((req, res) => {
//         User.create({
//             username: req.body.username,
//             email: req.body.email,
//             password: req.body.password
//         })
//             .then(user => {
//                 req.session.user = user.dataValues;
//                 res.redirect('/api/dashboard');
//             })
//             .catch(error => {
//                 res.redirect('/signup');
//             });
//     });


// route for user Login
// app.route('/login')
//     .get(sessionChecker, (req, res) => {
//         res.sendFile(__dirname + '/public/login.html');
//     })
//     .post((req, res) => {
//         var username = req.body.username,
//             password = req.body.password;
//
//         User.findOne({ where: { username: username } }).then(function (user) {
//             if (!user) {
//                 res.redirect('/login');
//             } else if (!user.validPassword(password)) {
//                 res.redirect('/login');
//             } else {
//                 req.session.user = user.dataValues;
//                 res.redirect('/api/dashboard');
//             }
//         });
//     });


// route for user's dashboard
// app.get('/dashboard', (req, res) => {
//     if (req.session.user && req.cookies.freETarget_user_sid) {
//         res.sendFile(__dirname + '/public/dashboard.html');
//     } else {
//         res.redirect('/login');
//     }
// });


// route for user logout
// app.get('/logout', (req, res) => {
//     if (req.session.user && req.cookies.freETarget_user_sid) {
//         res.clearCookie('freETarget_user_sid');
//         res.redirect('/');
//     } else {
//         res.redirect('/login');
//     }
// });

// app.get("/", (req, res) => {
//     res.json({message: "Welcome to freETarget!"});
// });
//

//middleware that checks if JWT token exists and verifies it if it does exist.
//In all future routes, this helps to know if the request is authenticated or not.
app.use(function (req, res, next) {
    // check header or url parameters or post parameters for token
    if (req.path !== '/api/session') {
        var token = req.headers['token'] || req.body.token || req.query.token;
        if (!token) {
            return res.status(401).json({
                error: true,
                message: "Invalid token."
            });
        }

        token = token.replace('Bearer ', '');
        jwt.verify(token, process.env.JWT_SECRET, function (err, user) {
            if (err) {
                return res.status(401).json({
                    error: true,
                    message: "Invalid token."
                });
            } else {
                req.user = user; //set the user to req so other routes can use it
                next();
            }
        });
    } else {
        next();
    }
});

// verify the token and return it if it's valid
const User = db.users;
app.get('/verifyToken', function (req, res) {
    // check header or url parameters or post parameters for token
    var token = req.headers['token'] || req.body.token || req.query.token;
    var username = req.body.username || req.query.username;

    if (!token) {
        return res.status(400).json({
            error: true,
            message: "Token is required."
        });
    }
    // check token that was passed by decoding token using secret
    jwt.verify(token, process.env.JWT_SECRET, function (err, user) {
        if (err) return res.status(401).json({
            error: true,
            message: "Invalid token."
        });

        // return 401 status if the userId does not match.
        User.findOne({where: {username: username}}).then(function (user) {
            if (user.username !== username) {
                return res.status(401).json({
                    error: true,
                    message: "Invalid user."
                });
            }
            // get basic user details
            var userObj = utils.getCleanUser(user);
            return res.json({user: userObj, token});
        });


    });
});

// request handlers
app.get('/', (req, res) => {
    res.redirect('/api/login');
});

require("./app/routes/security.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/shooter.routes")(app);
require("./app/routes/series.routes")(app);
require("./app/routes/shot.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});