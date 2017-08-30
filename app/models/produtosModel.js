module.exports = function(){
    this.getProdutos = function(connection, callback){
        connection.query('SELECT * FROM produtos', callback);
    }//GetProdutos
    this.getProduto = function(connection, callback){
        connection.query('SELECT * FROM produtos WHERE id_produtos = 1', callback);
    }//GetProdutos
    this.addProduto = function(produto, connection, callback){
        connection.query('INSERT INTO produtos SET ?', produto, callback);
    }
    return this;
}//Module