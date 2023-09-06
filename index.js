const express = require('express')
const session = require('express-session')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const db = require('./db')

const verify = function (username, password, done) {
    db.users.findByUsername(username, function (err, user) {
        if (err) {return done(err)}
        if(!user) { return done(null, false)}

        if (!db.users.verifyPassword(user, password)){
            return done(null, false)
        }

        return done(null, user)
    })
}

const options = {
    usernameField: "username",
    passwordField: "password",
}

passport.use('local', new LocalStrategy(options, verify))

passport.serializeUser((user, cb) => {
    cb(null, user.id)
})

passport.deserializeUser( (id, cb) => {
    db.users.findById(id,  (err, user) => {
        if (err) { return cb(err) }
        cb(null, user)
    })
})


const app = express()
app.set("view engine", "ejs");

app.use(express.urlencoded());
app.use(session({ secret: 'SECRET'}));

app.use(passport.initialize())
app.use(passport.session())

app.get('/', function (req, res) {
    res.render('index', {
        title: 'index page',
        user: req.user
    })
})

// GET /api/user/login 
app.get('/api/user/login',function (req,res) {
    console.log('GET /api/user/login (страница с формой входа / регистрации)')
    res.render('form', {
        title: 'form page'
    })
})

// GET /api/user/me
app.get('/api/user/me', function(req, res, next) {
      if (!req.isAuthenticated()) {
        return res.redirect('/')
      }
      next()
    },

    function(req, res) {
      res.render('profile', { title: 'profile page', user: req.user })
    }
)

// POST /api/user/login
app.post('/api/user/login',
    passport.authenticate('local', { failureRedirect: '/' }), function (req, res) {
    console.log('/api/user/login')
    res.redirect('/')
})


// Появляется ошибка
app.get('/api/user/logout', function (req, res) {
    req.logout();
    res.redirect('/');
})


// // POST /api/user/signup
// app.post('/api/user/signup',function (req,res) {
//     console.log('/api/user/signup')
//     res.json('/api/user/signup')
// })

const PORT = 3000;

app.listen(PORT, function () {
    console.log('app work on',`http://localhost:${PORT}`)
})
