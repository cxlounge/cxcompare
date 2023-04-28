module.exports = {

    all(username,password)  {
        var query = `INSERT INTO user (username) VALUES('${username}','${password}')`

        db.sequelize.query(query)

    },
}
