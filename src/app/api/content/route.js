const connectToDB = require('@/config/db');
const ContentModel = require('@/models/Content');

export async function POST (req){
    try{
        connectToDB();
        const body = await req.json();
        const {titleHomePage , descriptionHomePage , bioAboutPage , githubLink , linkedinLink , telegramLink} = body;

        const content= await ContentModel.create({
            titleHomePage ,
            descriptionHomePage ,
            bioAboutPage ,
            githubLink ,
            linkedinLink ,
            telegramLink ,
        });

        if(content){
            return Response.json(
                {message:"add content successfully"},
                {status:201},
            )
        }

    }
    catch(error){
        console.log("Error create content web =>" ,error);
        return Response.json(
            {message:"Internal server Content error =>" ,error}
        )
    }
}