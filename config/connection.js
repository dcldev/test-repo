// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "ehc1u4pmphj917qf.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	",
  port: 3306,
  user: "x93ofef1du1hzhzy",
  password: "jjc7txeguge63qo8",
  database: "un3kowadgn3hk5fb"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
