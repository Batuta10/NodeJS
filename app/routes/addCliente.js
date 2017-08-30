module.exports = function(app){
    app.get('/addCliente',function(req, res){
	    res.render('admin/form_add_cliente');
    });

    app.post('/clientes/salvar', (req, res)=> {
        var cliente = req.body;

        var connection = app.config.db();
        var clientesModel = app.app.models.clientesModel;
    
        clientesModel.addCliente(cliente, connection,(error,result)=>{
            res.redirect('/clientes');
        });
    });
};