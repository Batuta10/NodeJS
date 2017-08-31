//Extacia a conexição do banco que esta encapisulado.
//var db = require('../../config/db');

module.exports = function(app){
    app.get('/clientes',function(req, res){
        var connection = app.config.db();
        var clientesModel = new app.app.models.clientesDAO(connection);
    
        clientesModel.getClientes((error,result)=>{
            res.render('clientes/clientes', {clientes: result});
        }); 
    });
};