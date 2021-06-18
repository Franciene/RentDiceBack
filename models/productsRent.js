//Require Mongoose
const { ObjectId } = require('mongodb');
var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ProductRentModel = new Schema({
    product_id: {type : ObjectId},
    user_id: {type : ObjectId}
},
{ versionKey: false });


//Export function to create "UsersModel" model class
module.exports = mongoose.model('ProductRent', ProductRentModel )