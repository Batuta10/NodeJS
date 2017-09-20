module.exports = function(app){
    app.get('/addCliente',function(req, res){
	    app.app.controllers.clienteController.form_add_cliente(app, req, res);
    });

    app.post('/clientes/salvar', (req, res)=> {
        app.app.controllers.clienteController.add_cliente(app, req, res);
    });
};