const express = require("express");
const app = express();

app.get("/",function(req,res){
	res.send('Ola MF');
});


app.listen(8081);