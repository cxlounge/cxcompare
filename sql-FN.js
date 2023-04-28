const http = require('http');
const url = require('url');
const db = require('./sqlitehandler');



http.createServer(function (req, res) {
    const querystring = url.parse(req.url,true).query;
    var username = querystring.username;
    var password = querystring.password;

    var query = `INSERT INTO user (username) VALUES('${username}','${password}')`

    var results = db.all(query);



    }).listen(1234);
