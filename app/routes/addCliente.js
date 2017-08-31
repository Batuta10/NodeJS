module.exports = function(app){
    app.get('/addCliente',function(req, res){
	    res.render('admin/form_add_cliente');
    });

    app.post('/clientes/salvar', (req, res)=> {
        var cliente = req.body;

        var connection = app.config.db();
        var clientesModel = new app.app.models.clientesDAO(connection);
    
        clientesModel.addCliente(cliente, (error,result)=>{
            res.redirect('/clientes');
        });
    });
};