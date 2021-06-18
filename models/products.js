//Require Mongoose
var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ProductModel = new Schema({
    nome: {type : String},
    priceRent: {type : Number},
    priceBuy: {type : Number},
    priceNew: {type : Number},
    age: {type : Number},
    timePlay: {type : Number},
    amountPlayers: {type : String},
    history:{type : String},
    desc:{type : String},
    components: {type : String},
    imageName: {type : String},
    imageFile: {type : String}
},
{ versionKey: false });


//Export function to create "UsersModel" model class
module.exports = mongoose.model('Product', ProductModel )