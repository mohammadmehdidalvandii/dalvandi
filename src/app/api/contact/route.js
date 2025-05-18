const connectToDB = require('@/config/db');
const MessageModel = require('@/models/Message');

export async function POST(req){
    try{
        connectToDB();
        const body = await req.json();
        const {name , email , subject , message} = body;
        
        const newMessage = await MessageModel.create({
            name ,
            email ,
            subject ,
            message ,
        });

        if(newMessage){
            return Response.json(
                {message:"Create new Message successfully "},
                {status:201}
            )
        }
    }
    catch(error){
        console.log("Error send Message =>" ,error);
        return Response.json(
            {message:"Internal server message error =>" ,error},
            {status:500}
        )
    }
}