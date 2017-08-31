module.exports = function(app){
    app.get('/addProduto',function(req, res){
	    res.render('admin/form_add_produto');
    });
    app.post('/produtos/salvar', (req, res)=> {
        var produto = req.body;

        var connection = app.config.db();
        var produtosModel = new app.app.models.produtosDAO(connection);
    
        produtosModel.addProduto(produto, (error,result)=>{
            //res.render('produtos/produtos',{produtos: result});
            res.redirect('/produtos');
        });
    });
};