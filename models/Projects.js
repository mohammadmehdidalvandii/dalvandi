const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    tags:{
        type:[String],
        required:true,
    },
    projectURL:{
        type:String,
        required:true,
    },
},{
    timestamps:true
});

const model = mongoose?.models.Projects || mongoose?.model("Projects", schema)

module.exports = model;