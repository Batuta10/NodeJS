//Extacia a conexição do banco que esta encapisulado.
var db = require('../../config/db');

module.exports = function(app){

    var connection = db();

    app.get('/produtos',function(req, res){

        connection.query('SELECT * FROM produtos',(error,result)=>{
            res.render('produtos/produtos',{produtos: result});
            console.log('Consuta no Banco Realizada');
        });
    });
};