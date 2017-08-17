var mysql = require('mysql');
var conecMyslq = function(){
    return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'fiap',
            database: 'db_produtos'
    });
}

module.exports = function(){
    return conecMyslq;
}