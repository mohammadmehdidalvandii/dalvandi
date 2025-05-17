const connectToDB = require('@/config/db');
const skillsModel = require('@/models/Skills');

export async function POST(req) {
    connectToDB();
    const body = await req.json();
    const {name} = body;

    const isExistSkill = await skillsModel.findOne({name});
    if(isExistSkill){
        return Response.json(
            {message:"Skill is already exists"},
            {status:422}
        )
    }

    const newSkill = await skillsModel.create({name});
    if(newSkill){
        return Response.json(
            {message:"Created New Skill ", data: newSkill},
            {status:201}
        )
    }
}