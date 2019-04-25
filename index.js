var express = require('express')
var mongoose = require('mongoose')
var cors = require('cors')
var bodyparser = require('body-parser')
var usrRoutes = require('./routes/user_related_routes.js')

var app = express();

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

var connectionString = 'mongodb+srv://thomas:st654321@cluster0-8krio.mongodb.net/test?retryWrites=true/mychatdb';

mongoose.connect(connectionString,{useNewUrlParser:true},(err)=>{
	if (err) throw err;
	console.log('Successful Connection with User Database');
})

app.use('/usr',usrRoutes);

var PORT = process.env.PORT || 8000;

app.listen(PORT,()=>{
	console.log('User Server Running');
})