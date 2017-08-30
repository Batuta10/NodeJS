//Extacia a conexição do banco que esta encapisulado.
//var db = require('../../config/db');

module.exports = function(app){
    app.get('/clientes',function(req, res){
        var connection = app.config.db();
        var clientesModel = app.app.models.clientesModel;
    
        clientesModel.getClientes(connection,(error,result)=>{
            res.render('clientes/clientes', {clientes: result});
        }); 
    });
};