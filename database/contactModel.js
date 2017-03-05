const mongoose = require('mongoose'); 
const {Schema} = mongoose; 

const ContactSchema = new Schema({
  firstName: {
    type: String, 
    required: true 
  }, 
  lastName: {
    type: String,  
    required: true
  }
}); 

const Contact = mongoose.model('contact', ContactSchema); 

module.exports = Contact; 