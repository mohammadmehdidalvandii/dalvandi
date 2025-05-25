const connectToDB = require('@/config/db');
const ContentModel = require('@/models/Content');
const ActivityModel = require('@/models/Activities');
const {authUser} = require('@/src/utils/serverHelper');

export async function POST (req){
    try{
        connectToDB();

           const user = await authUser();
                if(!user) {
                    return Response.json(
                        {message: "Unauthorized"},
                        {status: 401}
                    );
                }

        await ContentModel.deleteMany();    

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

            await ActivityModel.create({
                    UserID: user._id,
                    action: `created Content all page`
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