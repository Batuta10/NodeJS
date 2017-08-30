module.exports = function(){
    this.getClientes = function(connection, callback){
        connection.query('SELECT * FROM clientes', callback);
    }//GetClientes

    this.addCliente = function(cliente, connection, callback){
        connection.query('INSERT INTO clientes SET ?', cliente, callback);
    }
    return this;
}//Module