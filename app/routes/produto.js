module.exports = function(app){
    app.get('/produto',function(req, res){
        var connection = app.config.db();
        var produtosModel = new app.app.models.produtosDAO(connection);

        produtosModel.getProdutos((error,result)=>{
            res.render('produtos/produto',{produtos: result});
        });
    });
};