for (i = 0; i < 11; i++) {
    console.log(i);
}

//pares e Impares antigo pag.js
for (i = 0; i <= 100; i++) {
  if (i%2) {
    console.log(i + ' Impar');
  }else {
    console.log(i + ' Par');
  }
};

//Maneira basica de fazer um servidor com paginas sem encapsulamento  antigo: pag.js
var http = require('http');

var server = http.createServer(function(req, res){
var categoria = req.url;
  if (categoria == "/tecnologia") {
    res.end('<!DOCTYPE html><html><head><meta charset="utf-8"><title>NodeJs</title><style media="screen">body{background-color: #000;color: #FFF;}p{font-family: sans-serif;}.text-center{text-align:center}</style></head><body><h2 class="text-center">Categoria de Tecnologia</h2></body></html>');
  }else if (categoria == "/lol") {
    res.end('<!DOCTYPE html><html><head><meta charset="utf-8"><title>NodeJs</title><style media="screen">body{background-color: #000;color: #FFF;}p{font-family: sans-serif;}.text-center{text-align:center}</style></head><body><h2 class="text-center">Categoria de League of Legends</h2></body></html>');
  } else if (categoria == "/pop") {
    res.end('<!DOCTYPE html><html><head><meta charset="utf-8"><title>NodeJs</title><style media="screen">body{background-color: #000;color: #FFF;}p{font-family: sans-serif;}.text-center{text-align:center}</style></head><body><h2 class="text-center">Categoria de Pop</h2></body></html>');
  }
  res.end('<!DOCTYPE html><html><head><meta charset="utf-8"><title>NodeJs</title><style media="screen">body{background-color: #000;color: #FFF;}p{font-family: sans-serif;}.text-center{text-align:center}</style></head><body><h2 class="text-center">Pagina Inicial</h2></body></html>');


});

server.listen(3000);

//Exemplo de modoulo antigo: mod_teste.js
module.exports = function () {
    var msg = 'Este módulo contem apenas uma string ';
    return msg;
};