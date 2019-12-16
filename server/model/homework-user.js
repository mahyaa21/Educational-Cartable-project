const mongoose = require('mongoose');
const Homework = require('../model/HomeWork');
const User = require('../model/user');
const Schema = mongoose.Schema;

const HUSchema = new Schema({
 
    Homework:{
        type: Schema.Types.ObjectId,
        ref: 'HomeWork',
      },
      
    UserOwner:{
        type: Schema.Types.ObjectId,
        ref: 'User',
      }

 
});

module.exports = mongoose.model('HomeWorkUser', HUSchema);