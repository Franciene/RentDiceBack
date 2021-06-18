//Require Mongoose
var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var PlansModel = new Schema({
    nome: {type : String},
    valueToSpend: {type : Number},
    price: {type : Number},
    descr: {type : String},
    imageName: {type : String},
    imageFile: {type : String}
},
{ versionKey: false });


//Export function to create "UsersModel" model class
module.exports = mongoose.model('Plans', PlansModel )