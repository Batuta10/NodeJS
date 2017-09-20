module.exports = function(app){
    app.get('/addProduto',function(req, res){
	    app.app.controllers.produtoController.form_add_produto(app, req, res);
    });
    app.post('/produtos/salvar', (req, res)=> {
        app.app.controllers.produtoController.add_produto(app, req, res);
    });
};