import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId, // reference
      ref: "User", // id from the user collection
      required: true,
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId, // reference
      ref: "User", // id from the user collection
      required: true,
    },
    message: {
      type: String,
      required: true,
    },

    // created at , updated at
  },
  { timestamps: true },
);

const Message = mongoose.model("Message", messageSchema);

export default Message;
