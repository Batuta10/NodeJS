function ProdutosDAO(connection) {
    this._connection = connection
}

ProdutosDAO.prototype.getProdutos = function(callback){
    this._connection.query('SELECT * FROM produtos', callback);
}//GetProdutos
ProdutosDAO.prototype.getProduto = function(callback){
    this._connection.query('SELECT * FROM produtos WHERE id_produtos = 1', callback);
}//GetProdutos
ProdutosDAO.prototype.addProduto = function(produto, callback){
    this._connection.query('INSERT INTO produtos SET ?', produto, callback);
}//addProduto

module.exports = function(){
    
    return ProdutosDAO;

}//Module