const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    titleHomePage:{
        type:String,
        required:true,
    },
    descriptionHomePage:{
        type:String,
        required:true,
    },
    bioAboutPage:{
        type:String,
        required:true,
    },
    githubLink:{
        type:String,
        required:true,
    },
    linkedinLink:{
        type:String,
        required:true,
    },
    telegramLink:{
        type:String,
        required:true,
    },
},{
    timestamps:true,
});

const model = mongoose.models.Content || mongoose.model("Content" ,schema);

module.exports = model ;