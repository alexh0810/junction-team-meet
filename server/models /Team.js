import mongoose, { Schema } from "mongoose";
const teamSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
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
const Team = mongoose.model("Team", teamSchema);
export default Team;
