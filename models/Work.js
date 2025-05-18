const mongoose = require('mongoose');


const schema = new mongoose.Schema({
    job:{
        type:String,
        required:true,
    },
    company:{
        type:String,
        required:true,
    },
    startDate:{
        type:Number,
        required:true
    },
    endDate:{
        type:Number,
        required:true,
    },
    responsibilities:{
        type:String,
        required:true,
    }
});

const model  = mongoose.models.Work || mongoose.model("Work" ,schema);
 module.exports = model