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
