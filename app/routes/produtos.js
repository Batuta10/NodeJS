//Extacia a conexição do banco que esta encapisulado.
//var db = require('../../config/db');

module.exports = function(app){
    app.get('/produtos',function(req, res){
        var connection = app.config.dbConnection();

        connection.query('SELECT * FROM produtos',(error,result)=>{
            res.render('produtos/produtos',{produtos: result});
            console.log('Consuta no Banco Realizada');
        });
    });
};