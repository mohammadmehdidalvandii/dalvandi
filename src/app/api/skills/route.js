const connectToDB = require('@/config/db');
const skillsModel = require('@/models/Skills');

export async function POST(req) {
    connectToDB();
    const body = await req.json();
    const {name} = body;

    const newSkill = await skillsModel.create({name});
    if(newSkill){
        return Response.json(
            {message:"Created New Skill ", data: newSkill},
            {status:201}
        )
    }
}