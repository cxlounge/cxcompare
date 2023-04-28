var cookieParser = require('cookie-parser') //for cookie parsing
//FN to SEMGREP because it only search for the import, but there is no sanitizer
var csrf = require('csurf') //csrf module
var bodyParser = require('body-parser') //for body parsing

var express = require('express')


var parseForm = bodyParser.urlencoded({
    extended: false
})

// ruleid: express-check-csurf-middleware-usage
var app = express()

// parse cookies
app.use(cookieParser())

app.get('/form', function(req, res) {
    // generate and pass the csrfToken to the view
    res.render('send', {
        csrfToken: req.csrfToken()
    })
})

app.post('/process', parseForm, function(req, res) {
    res.send('data is being processed')
})

app.post('/bad', parseForm, function(req, res) {
    res.send('data is being processed')
})
