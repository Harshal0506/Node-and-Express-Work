const express = require('express');
const app=express();


app.get('/',function(req,res){

	res.send("<h1>Hello</h1>");
});

app.get('/contact',function(req,res){
	res.send("contact me at harshaljain0055@gmail.com");
});

app.get('/about',function(req,res){
	res.send("Krishna follower");

});

app.get('/hobbies',function(req,res){
	res.send("learning new  skill | praying | working for free education");
})




app.listen(3000,function(){
	console.log('server is running on port 3000');
});


