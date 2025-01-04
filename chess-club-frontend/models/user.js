import mongoose from "mongoose"; // ✅ Import mongoose
const { Schema, models } = mongoose; // ✅ Extract Schema and models

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = models.User || mongoose.model("User", userSchema);
export default User;
