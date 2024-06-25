const mongoose = require('mongoose');

const volunteersSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    department:{
        type:String,
        required:true,
    }
})

const volunteer = mongoose.model('Volunteers',volunteersSchema);

module.exports = volunteer;