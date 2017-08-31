//Extacia a conexição do banco que esta encapisulado.
//var db = require('../../config/db');

module.exports = function(app){
    app.get('/produtos',function(req, res){
        var connection = app.config.db();
        var produtosModel = new app.app.models.produtosDAO(connection);

        produtosModel.getProdutos((error,result)=>{
            res.render('produtos/produtos',{produtos: result});
        });
    });
};