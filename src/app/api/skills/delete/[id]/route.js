const connectToDB = require('@/config/db');
const SkillModel = require('@/models/Skills');

export async function DELETE (req ,{params}){
    try{
        connectToDB();

        const skillID = params?.id;

        if(!skillID){
            return Response.json(
                {message:"SkillID is required"},
                {status:400}
            )
        };

        await SkillModel.findOneAndDelete({_id:skillID});
        return Response.json(
            {message:"Removed skill by id"},
            {status:200}
        )

    }
    catch(error){

    }
}