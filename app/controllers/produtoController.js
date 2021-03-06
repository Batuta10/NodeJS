module.exports.form_add_produto = function (app, req, res) {
    res.render('admin/form_add_produto', { validacao: {}, produto: {} });
}

module.exports.add_produto = function (app, req, res) {
    var produto = req.body;

    req.assert('nome', 'Nome é obrigatorio').notEmpty();
    req.assert('descricao', 'Descrição é obrigatorio').notEmpty();

    var erros = req.validationErrors();

    console.log(erros);

    if (erros) {
        res.render('admin/form_add_produto', { validacao: erros, produto: produto });
        return;
    }
    var connection = app.config.db();
    var produtosModel = new app.app.models.produtosDAO(connection);

    produtosModel.addProduto(produto, (error, result) => {
        //res.render('produtos/produtos',{produtos: result});
        res.redirect('/produtos');
    });
}