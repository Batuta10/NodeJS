//Extacia a conexição do banco que esta encapisulado.
//var db = require('../../config/db');

module.exports = function(app){
    app.get('/clientes',function(req, res){
        
        var connection = app.config.dbConnection();

        connection.query('SELECT * FROM clientes',(error,result)=>{
            res.render('clientes/clientes',{clientes: result});
            console.log('Consuta no Banco Realizada');
        });
    });
};