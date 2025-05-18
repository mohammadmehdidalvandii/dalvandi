const mongoose = require('mongoose');


const schema = new mongoose.Schema({
    resumeFile:{
        type:String,
        required:true,
    }
},{
    timestamps:true,
});

const model = mongoose.models.Resume || mongoose.model("Resume",schema);

module.exports = model