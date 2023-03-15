
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: { type: String, unique: true, require: true },
    username: { type: String, require: true },
    password: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);


const USER =  mongoose.model("User", userSchema);
export default USER;

