module.exports.form_add_cliente = function (app, req, res) {
    res.render('admin/form_add_cliente', { validacao: {}, cliente: {} });
}

module.exports.add_cliente = function (app, req, res) {
    var cliente = req.body;

    req.assert('nome', 'Nome é obrigatorio não pode passar de 45 ou ser menor que 3 letras').len(3, 45);
    req.assert('sobrenome', 'Sobrenome é obrigatorio não pode passar de 45 ou ser menor que 3 letras').len(3, 45);
    //req.assert('dt_nascimento', 'Data de nascimento é obrigatorio').notEmpty().isDate({format: 'YYYY-MM-DD'});
    req.assert('cep', 'Cep é obrigatorio e deve ter 11 letras').len(8, 8);
    req.assert('endereco', 'Endereço é obrigatorionao não pode passar de 45 ou ser menor que 3 letras').len(3, 45);
    req.assert('cpf', 'CPF é obrigatorio e deve ter 11 letras').len(11, 11);

    var erros = req.validationErrors();

    if (erros) {
        res.render('admin/form_add_cliente', { validacao: erros, cliente: cliente });
        return;
    }

    var connection = app.config.db();
    var clientesModel = new app.app.models.clientesDAO(connection);

    clientesModel.addCliente(cliente, (error, result) => {
        res.redirect('/clientes');
    });
}