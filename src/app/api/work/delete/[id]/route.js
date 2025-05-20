const connectToDB = require("@/config/db");
const WorkModel = require("@/models/Work");
const { authUser } = require("@/src/utils/serverHelper");

export async function DELETE(req, { params }) {
  try {
    connectToDB();

    const user = await authUser();
    if (!user) {
      return Response.json({ message: "Unauthorized" }, { status: 401 });
    }

    const workID = params?.id;
    
    if(!workID){
        return Response.json({message:"workID is required"}, {status:400});
    }

    await WorkModel.findOneAndDelete({_id:workID});
    return Response.json(
        {message:"delete work bi id success "},
        {status:200}
    )

  } catch (error) {
    console.log("delete work by by id ", error);
    return Response.json(
      { message: "Internal server delete work" },
      { status: 500 }
    );
  }
}
