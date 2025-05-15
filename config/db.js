const mongoose = require('mongoose');

const connectToDB = async ()=>{
    try{
        if(mongoose.connections[0].readyState){
            console.log("Using Existing Database connection");
            return true
        }
        const connection = await mongoose.connect(process.env.DATA_BASE_URL);
        if(connection){
            console.log("Connected To mongoDB successfully ✅")
            return true
        }
    }
    catch(error){
        console.log("Connection DataBase Error =>" ,error);
        process.exit(1)
    }
};

module.exports = connectToDB;