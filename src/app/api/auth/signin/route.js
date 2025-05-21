const connectToDB = require('@/config/db');
const userModel = require('@/models/User');
const {verifyPassword , generateAccessToken , generateRefreshToken} = require('@/src/utils/auth');
const {validationEmail , validationPassword} = require('@/src/utils/validation');


export async function POST(req){
    try{
        connectToDB()
        const body = await req.json();
        const {email , password} = body;
        
        const isValidEmail = validationEmail(email);
        if(!isValidEmail){
             return Response.json(
                {message:"Email or Password is not correct"},
                {status:401}
            )
        }

        const user = await userModel.findOne({email});
        console.log("user->" , user)
        if(!user){
            return Response.json({message:"User is not found"} ,{status:422})
        }

        const isCorrectPassword = verifyPassword(password , user.password);
        if(!isCorrectPassword){
            return Response.json(
                {message:"Email or Password is not correct"},
                {status:422}
            )
        };

        const isValidPassword = validationPassword(isCorrectPassword)
            if(!isValidPassword){
                  return Response.json(
                {message:"Email or Password is not correct"},
                {status:422}
            )
            }
        

        const accessToken = generateAccessToken({email});
        const refreshToken = generateRefreshToken({email});

        await userModel.findOneAndUpdate(
            {email},
            {
                $set:{
                    refreshToken
                }
            }
        );
        return Response.json(
            {message:"User Logged successfully"},
            {
                status:200,
                headers:{"Set-Cookie":`token=${refreshToken};path=/;httpOnly=true;`}
            }
        )

    }
    catch(error){
        console.log("Error signin =>", error.message)
    }
}