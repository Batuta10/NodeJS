var app = require('./config/server');

var rotaHome = require('./app/routes/home');
rotaHome(app);

var rotaAddProduto = require('./app/routes/addProduto');
rotaAddProduto(app);

var rotaProdutos = require('./app/routes/produtos');
rotaProdutos(app);

var rotaClientes = require('./app/routes/clientes');
rotaClientes(app);



//Modo Simples passando o html inline direto.
app.get('/',function(req, res){
  res.send('<!DOCTYPE html><html><head><meta charset="utf-8"><title>NodeJs</title><style media="screen">body{background-color: #000;color: #FFF;}p{font-family: sans-serif;}.text-center{text-align:center}</style></head><body><h2 class="text-center">Pagina Inicial</h2></body></html>');
});
app.get('/lol',function(req, res){
  res.send('<!DOCTYPE html><html><head><meta charset="utf-8"><title>NodeJs</title><style media="screen">body{background-color: #000;color: #FFF;}p{font-family: sans-serif;}.text-center{text-align:center}</style></head><body><h2 class="text-center">League of Legends</h2></body></html>');
});
//Modo Simples com logica
app.get('/tabuada',function(req, res){
	var msg = '';
	for (var i = 1; i <= 10 ; i++) {
		 msg += '<hr><p>Tabuada do ' + i + '</p>';
		for (var e = 1; e <= 10 ; e++) {
			var estrutura = '<p>' + i + ' x ' + e +' = ' + i*e + '</p>'
			msg += estrutura;
		}
	}
	res.send('<!DOCTYPE html><html><head><meta charset="utf-8"><title>NodeJs</title><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.5.0/css/bulma.min.css"></head><body><section class="section"><div class="container"><h2>Tabuada</h2>' + msg + '</div></section></body>');
});

//Server e Porta
app.listen(3000, function() {
  console.log('\nRunner - Server ON\n');
});