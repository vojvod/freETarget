const express = require("express");
const session = require('express-session');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const bodyParser = require("body-parser");
const cors = require("cors");

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
app.use(session({
    key: 'freETarget_user_sid',
    secret: 'somerandonstuffs',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}));

const db = require("./app/models");

db.sequelize.sync();
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// This middleware will check if user's cookie is still saved in browser and user is not set, then automatically log the user out.
// This usually happens when you stop your express server after login, your cookie still remains saved in the browser.
app.use((req, res, next) => {
    if (req.cookies.freETarget_user_sid && !req.session.user) {
        res.clearCookie('freETarget_user_sid');
    }
    next();
});


// middleware function to check for logged-in users
var sessionChecker = (req, res, next) => {
    if (req.session.user && req.cookies.freETarget_user_sid) {
        res.redirect('/api/dashboard');
    } else {
        next();
    }
};


// route for Home-Page
app.get('/', sessionChecker, (req, res) => {
    res.redirect('/api/login');
});


const User = db.users;

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