const connectToDB = require('@/config/db');
const workModel = require('@/models/Work');
 
export async function POST(req){
    try{
        connectToDB()
        const body = await req.json();
        const {job , company , startDate , endDate , responsibilities} = body;

        const existWork = await workModel.findOne({company});
        if(existWork){
            return Response.json(
                {message:"work is already exist"},
                {status:422},
            )
        };

        const newWork = await workModel.create({
            job,
            company,
            startDate,
            endDate,
            responsibilities,   
        });

        if(newWork){
            return Response.json(
                {message:"create new work successfully "  , data:newWork},
                {status:201}
            )
        }

    }
    catch(error){
        console.log("Error Work created =>" ,error)
        return Response.json(
            {message:"Internal server error Create work"},
            {status:500}
        )
    }
}