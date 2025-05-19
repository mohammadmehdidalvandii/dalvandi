const connectToDB = require('@/config/db');
const projectsModel = require('@/models/Projects');
const ActivityModel = require('@/models/Activities');
const {writeFile} = require('fs/promises')
const path = require('path')
const {authUser} = require('@/src/utils/serverHelper');

export async function POST (req ){
    try{
        connectToDB();
        const user = await authUser();
        if(!user) {
            return Response.json(
                {message: "Unauthorized"},
                {status: 401}
            );
        }
    
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

        const isExistProject = await projectsModel.findOne({name})
        if(isExistProject){
            return Response.json(
                {message:"Project is Exist database"},
                {status:422}
            )
        }

        const newProject = await projectsModel.create({
            name,
            description,
            tags,
            projectURL,
            image:`http://localhost:3000/uploads/${fileName}`
        });

        await ActivityModel.create({
            UserID: user._id,
            action: `new project add : ${newProject.name}`
        });

        if(newProject){
            return Response.json(
                {message:"new Projects created " , data:newProject},
                {status:201},
            )
        }
    }
    catch(error){
        console.log("Error created projects" , error.message);
        return Response.json(
            {message:"Error created projects"},
            {status:500}
        )
    }
}