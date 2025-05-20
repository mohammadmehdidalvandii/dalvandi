const connectToDB = require("@/config/db");
const WorkModel = require('@/models/Work');
const {authUser} = require('@/src/utils/serverHelper');


export async function PUT (req, {params}){
    try{
        connectToDB();

         const user = await authUser();
                if(!user) {
                    return Response.json(
                        {message: "Unauthorized"},
                        {status: 401}
                    );
                }

        const body = await req.json();
        const workID = params?.id;

        const {job , company , startDate , endDate , responsibilities} = body;

        if(!workID){
            return Response.json(
                {message:"WorkID is required"},
                {status:400}
            )
        };

        const update  = await WorkModel.findOneAndUpdate(
            {_id:workID},
            {
                job,
                company,
                startDate,
                endDate,
                responsibilities,
            },
            {new:true}
        )

        if(update){
            return Response.json(
                {message:"update Work Experience success"},
                {status:200}
            )
        }

    }
    catch(error){
        console.log("update work Experience error" , error)
        return Response.json(
            {message:"Internal server work Experience"},
            {status:500}
        )
    }
}