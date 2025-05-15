const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    }
},{
    timestamps:true,
});

const model = mongoose.models.Skills || mongoose.model('Skills', schema);

module.exports = model;