const connectToDB = require('@/config/db');
const ResumeModel = require('@/models/Resume');
const path = require('path');
const {writeFile} = require('fs/promises');

export async function POST (req){
    try{
        connectToDB();
        const formData = await req.formData();
        const resumeFile = formData.get('resumeFile');

        const buffer = Buffer.from(await resumeFile.arrayBuffer());
        const fileName = Date.now() + resumeFile.name;
        const resumePath = path.join(process.cwd() , 'public/uploads/' + fileName);
        await writeFile(resumePath, buffer);

        console.log("file resume ", fileName);
        const newResume = await ResumeModel.create({
            resumeFile:`http://localhost:3000/uploads/${fileName}`
        });

        if(newResume){
            return Response.json(
                {message:"add new Resume successfully" , data:newResume},
                {status:201}
            )
        }

    }
    catch (error){
        console.log("Error server upload resume" ,error)
        return Response.json(
            {message:"Internal server upload resume error"},
            {status:500}
        )
    }
}