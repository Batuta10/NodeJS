module.exports = function(app){
	app.get('/esporte',function(req, res){
		res.render('secao/esporte');
	});	
};