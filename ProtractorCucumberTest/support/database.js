var pg = require("pg");
var connectDB = function(){
    var connectionString  = "postgress://username:password@localhost:5432/database_name";
    this.client = new pg.client(connectionString);
    this.client.connect(function(err){
        if(err){
           return console.error('could not connect',err)
        }
    });
}
module.exports = connectDB;