const connectToDB = require('@/config/db');
const skillsModel = require('@/models/Skills');
const ActivityModel = require('@/models/Activities');
const {authUser} = require('@/src/utils/serverHelper');

export async function POST(req) {
    connectToDB();
    const body = await req.json();
    const {name} = body;

       const user = await authUser();
            if(!user) {
                return Response.json(
                    {message: "Unauthorized"},
                    {status: 401}
                );
            }

    const isExistSkill = await skillsModel.findOne({name});
    if(isExistSkill){
        return Response.json(
            {message:"Skill is already exists"},
            {status:422}
        )
    }

    const newSkill = await skillsModel.create({name});
      await ActivityModel.create({
                        UserID: user._id,
                        action: `created new Skills : ${newSkill.name}`
                    });
    if(newSkill){
        return Response.json(
            {message:"Created New Skill ", data: newSkill},
            {status:201}
        )
    }
}