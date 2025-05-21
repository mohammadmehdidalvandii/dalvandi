const connectToDB = require('@/config/db');
const ActivityModel = require('@/models/Activities');
const SkillModel = require('@/models/Skills');
const {authUser} = require('@/src/utils/serverHelper');


export async function DELETE (req ,{params}){
    try{
        connectToDB();

        const user = await authUser();
                    if(!user) {
                        return Response.json(
                            {message: "Unauthorized"},
                            {status: 401}
                        );
                    }

        const skillID = params?.id;

        const skill = await SkillModel.findOne({_id:skillID});

        if(!skillID){
            return Response.json(
                {message:"SkillID is required"},
                {status:400}
            )
        };

        await SkillModel.findOneAndDelete({_id:skillID});

        await ActivityModel.create({
            userId: user._id,
            action:`Delete skill is ${skill.name}`,
        })
        
        return Response.json(
            {message:"Removed skill by id"},
            {status:200}
        )

    }
    catch(error){

    }
}