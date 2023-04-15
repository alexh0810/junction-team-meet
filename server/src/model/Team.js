import mongoose, { Schema } from "mongoose";
const teamSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  challenge: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  rolesNeeded: {
    type: Array,
    required: true,
  },
  members: {
    type: Array,
    required: true,
  },
});
export const Team = mongoose.model("Team", teamSchema);
