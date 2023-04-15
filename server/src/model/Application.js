import mongoose, { Schema } from "mongoose";
const applicationSchema = new Schema({
  team_id: {
    type: Schema.Types.ObjectId,
    ref: "Team",
  },
  user_id: {
    type: String,
    required: true,
  },
  message: {
    type: String,
  },
});

export const Application = mongoose.model("Application", applicationSchema);
