// requiring MySQL
var mysql = require("mysql");

// setting up mysql connection for heroku as well as local
var connection
if (process.env.JAWSDB_URL) {
   connection = mysql.createConnection(process.env.JAWSDB_URL);
}   else {
       connection = mysql.createConnection({
           host: "ehc1u4pmphj917qf.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
           port: 3306,
           user: "x93ofef1du1hzhzy",
           password: "jjc7txeguge63qo8",
           database: "cat_db"
       })

   }


   //making the connection
   connection.connect(function (err) {
       if (err) {
           console.error("error connecting: " + err.stack);
           return;
       }
       console.log("connected as id: " + connection.threadId);
   })

   // export connection for the ORM
   module.exports = connection;
