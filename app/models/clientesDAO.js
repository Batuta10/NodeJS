function ClientesDAO(connection) {
    this._connection = connection
}
ClientesDAO.prototype.getClientes = function(callback){
    this._connection.query('SELECT * FROM clientes', callback);
}//Getclientes
ClientesDAO.prototype.addCliente = function(cliente, callback){
    this._connection.query('INSERT INTO clientes SET ?', cliente, callback);
}//AddCliente

module.exports = function(){

    return ClientesDAO;

}//Module