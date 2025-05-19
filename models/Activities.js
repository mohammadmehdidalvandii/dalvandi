const mongoose = require('mongoose')
require('./User');


const schema = new mongoose.Schema({
    UserID: {
        type: mongoose.Types.ObjectId,
        ref:'User'
    },
    action:{
        type:String,
    }
},{
    timestamps:true,
});

const model = mongoose.models.Activities || mongoose.model('Activities', schema)

module.exports = model