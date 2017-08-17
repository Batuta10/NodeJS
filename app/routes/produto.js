module.exports = function(app){
    app.get('/produto',function(req, res){
        var connection = app.config.db();
        var produtosModel = app.app.models.produtosModel;

        produtosModel.getProdutos(connection,(error,result)=>{
            res.render('produtos/produto',{produtos: result});
        });
    });
};