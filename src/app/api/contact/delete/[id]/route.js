const connectToDB = require("@/config/db");
const MessageModel = require("@/models/Message");
const { authUser } = require("@/src/utils/serverHelper");

export async function DELETE(req, { params }) {
  try {
    connectToDB();
    const user = await authUser();
    if (!user) {
      return Response.json({ message: "Unauthorized" }, { status: 401 });
    }

    const messageID = await params.id 

    if(!messageID){
        return Response.json(
            {message:"message id is required"},
            {status:400}
        )
    };

    await MessageModel.findOneAndDelete({_id:messageID});

    return Response.json(
        {message:"Delete message by id is success"},
        {status:200}
    )

  } catch (error) {
    console.log("Error delete message by id", error);
    return Response.json(
      { message: "Internal server delete message by id" },
      { status: 500 }
    );
  }
}
