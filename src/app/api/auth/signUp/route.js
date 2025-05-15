import { headers } from 'next/headers';

const connectToDB = require('@/config/db');
const userModel = require('@/models/User');
const {generateAccessToken , hashedPassword} = require('@/src/utils/auth');
const {validationEmail ,validationPassword , validationPhone} = require('@/src/utils/validation');

export async function POST(req){
  try{
      connectToDB();
    const body = await req.json();
    const {fullName , email , password , phone} = body;

    const isValidPassword = validationPassword(password);
    if(!isValidPassword){
        return Response.json(
            {message:"Password is not valid" , status:400}
        )
    }
    const isValidEmail = validationEmail(email);
    if(!isValidEmail){
        return Response.json(
            {message:"Email is not valid" , status:400}
        )
    }
    const isValidPhone = validationPhone(phone);
    if(!isValidPhone){
        return Response.json(
            {message:"Phone is not valid" , status:400}
        )
    }

    const isExistUser = await userModel.findOne({email});
    if(isExistUser){
        return Response.json(
            {message:"This email already exists."},
            {status:422}
        )
    };
    const hashPassword = await hashedPassword(password);
    const createAccessToken = generateAccessToken({email});

    const newUser = await userModel.create({
        fullName,
        email,
        password:hashPassword,
        phone,
        role:'ADMIN'
    });
    if(newUser){
        return Response.json(
            {message:"User created successfully ✅" , data:newUser},
            {
                status:201,
                headers:{'Set-Cookie':`token=${createAccessToken};path=/;httpOnly=true`},
            }
        )
    }
  }catch(error){
    console.log("Error Signup =>" ,error.message)
  }
}