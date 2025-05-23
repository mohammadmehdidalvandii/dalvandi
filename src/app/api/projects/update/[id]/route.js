const connectToDB = require('@/config/db');
const ProjectModel = require('@/models/Projects');
const ActivityModel = require('@/models/Activities');
const {writeFile} = require('fs/promises')
const path = require('path')
const {authUser} = require('@/src/utils/serverHelper');


export async function PUT (req , {params}){
    try{
        connectToDB();

          const user = await authUser();
                if(!user) {
                    return Response.json(
                        {message: "Unauthorized"},
                        {status: 401}
                    );
                }
            

        const projectID = params?.id;

         const formData = await req.formData();
                
                const name = formData.get("name")
                const description = formData.get("description")
                const tags = formData.get("tags")
                const projectURL = formData.get("projectURL")
                const image = formData.get("image")
        
                const buffer = Buffer.from(await image.arrayBuffer());
                const fileName = Date.now() + image.name;
                const imgPath = path.join(process.cwd() , 'public/uploads/' + fileName)
                await writeFile(imgPath ,buffer)

        if(!projectID){
            return Response.json(
                {message:"projectID is required"},
                {status:400}
            )
        }else{
            const update  = await ProjectModel.findOneAndUpdate(
                {_id:projectID},
                {
                    name,
                    description,
                    tags,
                    projectURL,
                   image:`http://localhost:3000/uploads/${fileName}`
                },
                {new:true}
            )
            await ActivityModel.create({
                userID:user._id,
                action:`Update Project ${update.name}`,
            })
            if(!update){
                return  Response.json(
                    {message:"project update failed"},
                    {status:400}
                )
            }
            return Response.json(
                {message:"update project by id successfully"},
                {status:200}
            )
        }
    }
    catch(error){
        console.log("update Project error" , error);
        return Response.json(
            {message:"Internal server project update error"},
            {status:500}
        )
    }
}