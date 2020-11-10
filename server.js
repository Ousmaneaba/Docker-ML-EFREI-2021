'use strict';

const express = require('express');
const app = express();

const PORT = 8080;
const HOST = '0.0.0.0';

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));


app.get('/', (req, res) => {

	if(req.query.message == undefined || req.query.message == null || req.query.message == '' ){
		res.render('index');
	}
	else{

		var result;
		result = "neutral";

		res.render('index', {message: req.query.message, result: result});
	}
  
});


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);