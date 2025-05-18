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
        type:String,
        required:true
    },
    endDate:{
        type:String,
        required:true,
    },
    responsibilities:{
        type:String,
        required:true,
    }
},
{
    timestamps:true,
});

const model  = mongoose.models.Work || mongoose.model("Work" ,schema);
 module.exports = model