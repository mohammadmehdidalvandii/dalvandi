const {sign , verify} = require('jsonwebtoken');
const {compare , hash} = require('bcrypt');

// create access token 
const generateAccessToken = (data)=>{
    const securityCodeAccess = process.env.SECURITY_ACCESS_TOKEN;
    if(!securityCodeAccess){
        throw new Error("Access token secret is not defined in environment variable")
    };
    try{
        const token = sign(data , securityCodeAccess);
        return token
    }
    catch(error){
        throw new Error(`Invalid access token = ${error.message}`);
    }
};

// verify access token 
const verifyAccessToken = (token)=>{
      const securityCodeAccess = process.env.SECURITY_ACCESS_TOKEN;
    if(!securityCodeAccess){
        throw new Error("Access token secret is not defined in environment variable")
    };
    try{
        const tokenPayload = verify(token , securityCodeAccess);
        return tokenPayload
    }
    catch(error){
        throw new Error(`Invalid verify access token = ${error.message}`)
    }
};

// create refresh token 
const generateRefreshToken = (data)=>{
    const securityCodeRefreshToken = process.env.SECURITY_REFRESH_TOKEN;
    if(!securityCodeRefreshToken){
        throw new Error("Refresh token secret is not defined in environment variable")
    };
    try{
        const token = sign(data , securityCodeRefreshToken);
        return token
    }
    catch(error){
        throw new Error(`Invalid Refresh token = ${error.message}`);
    }
};

// verify refresh token
const verifyRefreshToken  = (token)=>{
       const securityCodeRefreshToken = process.env.SECURITY_REFRESH_TOKEN;
    if(!securityCodeRefreshToken){
        throw new Error("Refresh token secret is not defined in environment variable")
    };
    try{
        const tokenPayload = verify(token , securityCodeRefreshToken);
        return tokenPayload
    }
    catch(error){
                throw new Error(`Invalid verify Refresh token = ${error.message}`);
    }
};

// hash password 
const hashedPassword = async (password)=>{
    const hashPassword = await hash(password ,10);
    return hashPassword
}

// verify hashPassword
const verifyPassword = async (password , hashedPassword)=>{
    const isValid = await compare(password , hashedPassword);
    return isValid
};


module.exports = {
    generateAccessToken,
    verifyAccessToken,
    generateRefreshToken,
    verifyRefreshToken,
    hashedPassword,
    verifyPassword,
}