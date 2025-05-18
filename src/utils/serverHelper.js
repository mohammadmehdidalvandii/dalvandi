const { cookies} = require('next/headers');
const UserModel= require('@/models/User');
const connectToDB = require('@/config/db');
const {verifyRefreshToken} = require('@/src/utils/auth');

const authUser  =  async ()=>{
    connectToDB();
    const token = cookies().get("token");
    let user = null;
    if(token){
        const tokenPayload = verifyRefreshToken(token.value);
        user = await UserModel.findOne({email:tokenPayload.email});
    }
};


module.exports = {
    authUser,
    
}