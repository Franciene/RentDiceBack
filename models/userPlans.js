const { ObjectId } = require('mongodb');
var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UsersPlansModel = new Schema({
    plan_id: {type : ObjectId},
    user_id: {type : ObjectId},
    valueToSpend: {type : Number}
},
{ versionKey: false }
);


//Export function to create "UsersModel" model class
module.exports = mongoose.model('UsersPlans', UsersPlansModel )