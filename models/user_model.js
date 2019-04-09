const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var User_Schema = new Schema({
	username : {type:String,required:true,unique:true},
	password : {type:String}
})

module.exports = mongoose.model('UserModel',User_Schema);