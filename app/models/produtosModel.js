module.exports = function(){
    this.getProdutos = function(connection, callback){
        connection.query('SELECT * FROM produtos', callback);
    }//GetProdutos
    this.getProduto = function(connection, callback){
        connection.query('SELECT * FROM produtos WHERE id_produtos = 1', callback);
    }//GetProdutos
    return this;
}//Module