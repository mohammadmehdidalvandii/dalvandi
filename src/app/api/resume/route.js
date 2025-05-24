const connectToDB = require('@/config/db');
const ResumeModel = require('@/models/Resume');
const ActivityModel = require('@/models/Activities');
const path = require('path');
const {writeFile} = require('fs/promises');
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
            
                await ResumeModel.deleteMany();

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

         await ActivityModel.create({
                    UserID: user._id,
                    action: `upload new Resume`
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