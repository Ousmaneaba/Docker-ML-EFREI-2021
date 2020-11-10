'use strict';

const express = require('express');
const { spawn } = require('child_process');
const fs = require('fs');

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

		let timestamp = new Date().getTime();
		let fileName = timestamp + "_tmp.txt";
		let scriptProcess = spawn('python', ['run_model.py', req.query.message, fileName]);
		let result = "error";

		 scriptProcess.on('close', (code) => {

		  	fs.readFile(fileName, 'utf8', function (err,data) {

			  if(data == "1"){
			  	result = "positive";
			  }
			  if(data == "0"){
			  	result = "negative";
			  }
			  if(data == "2"){
			  	result = "neutral";
			  }

		      res.render('index', {message: req.query.message, result: result});

		      spawn('rm', [fileName]);

			});
		    
		  });

	}
  
});


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);