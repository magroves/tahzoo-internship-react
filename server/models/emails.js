const mongoose = require('mongoose');

// Schema
const Schema = mongoose.Schema;
const EmailUsSchema = new Schema({
    message: String,
});

//Model
const Message = mongoose.model('emails', EmailUsSchema);

module.exports = Message;