// requiring MySQL
var mysql = require('mysql');

// setting up mysql connection for heroku as well as local
var connection
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}   else {
        connection = mysql.createConnection({
            host: 'localhost',
            port: 8889,
            user: 'root',
            password: 'root',
            database: 'cats_db'
        })

    }


    //making the connection
    connection.connect(function (err) {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
        }
        console.log('connected as id: ' + connection.threadId);
    })

    // export connection for the ORM
    module.exports = connection;




