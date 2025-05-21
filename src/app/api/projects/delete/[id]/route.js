const connectToDB = require('@/config/db');
const ProjectModel = require('@/models/Projects');
const ActivityModel = require('@/models/Activities');
const {authUser} = require('@/src/utils/serverHelper');


export async function DELETE (req , {params}){
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

        const project = await ProjectModel.findOne({_id:projectID})

        if(!projectID){
            return Response.json(
                {message :"ProjectID is required"},
                {status:400}
            )
        }else{
            await ProjectModel.findOneAndDelete({_id:projectID});

            await ActivityModel.create({
                userID:user._id,
                action:`Delete Project ${project.name}`
            })

            return Response.json(
                {message:"Removed ProjectID successfully"},
                {status:200}
            )
        }

    }
    catch(error){
        console.log("Delete Project error =>" , error);
        return Response.json(
            {message:"Internal server projects delete =>" , error},
            {status:500}
        )
    }
}