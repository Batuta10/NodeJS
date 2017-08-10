//Extacia a conexição do banco que esta encapisulado.
var db = require('../../config/db');

module.exports = function(app){

    var connection = db();

    app.get('/clientes',function(req, res){

        connection.query('SELECT * FROM clientes',(error,result)=>{
            res.render('clientes/clientes',{clientes: result});
            console.log('Consuta no Banco Realizada');
        });
    });
};