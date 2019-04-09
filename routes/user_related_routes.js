var express = require('express');
var router = express.Router();
var User = require('../models/user_model')

router.put('/addUser',(req,res)=>{
	var newUser = new User({
		username:req.body.username,
		password:req.body.password
	});
	newUser.save((err,usr)=>{
		if(err && err.code == 11000){
			res.send('Username Already Exists');
			return 
		}
		console.log(usr.username+' added');
		res.send('User Added Successfully');
	});
})

router.delete('/removeUser',(req,res)=>{
	User.deleteOne({username:req.body.username},(err)=>{
		if(err)
			console.log(err);
		else
			res.send('User Deleted Succesfully');
	});
})

router.get('/authUser',(req,res)=>{
	User.findOne({username:req.headers.username},(err,user)=>{
		if(err)
			console.log(err);
		if(user==null)
			res.send('User Doesnt Exist');
		else
			User.findOne({username:req.headers.username,password:req.headers.password},(err,user)=>{
				if(err)
					console.log(err);
				if(user==null)
					res.send('Username or Password Incorrect');
				else
					res.send('Authenticated');
			});
	});
})

module.exports = router