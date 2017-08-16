var mysql = require('mysql');
var conecMyslq = function(){
    console.log('Conexao foi estabelecida');
    return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'fiap',
            database: 'db_produtos'
    });
}

module.exports = function(){
    console.log('Conexao f');
    return conecMyslq;
}