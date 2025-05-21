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

    return user
};

const authAdmin = async ()=>{
    connectToDB()
    const token = cookies().get('token');
    let user = null;
    if(token){
        const tokenPayload = verifyRefreshToken(token.value);
        if(tokenPayload){
            user = await UserModel.findOne({email:tokenPayload.email});
            if(user.role === "ADMIN"){
                return user
            }else{
                return null
            }
        }else{
            return null
        }
    }else{
        return null
    }
}


module.exports = {
    authUser,
    authAdmin
}