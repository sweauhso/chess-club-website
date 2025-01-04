import bcrypt from "bcryptjs";
import { connectMongoDB } from "../lib/mongodb.js";
import User from "../models/user.js";

const generateHashedPassword = async () => {
  const password = "adminpassword"; // ✅ Change this to your desired password
  const hashedPassword = await bcrypt.hash(password, 10);

  console.log("🔑 Hashed Password:", hashedPassword);

  await connectMongoDB();

  const user = new User({
    username: "admin",
    password: hashedPassword,
  });

  await user.save();
  console.log("✅ Admin user inserted into MongoDB!");

  process.exit(); // Exit script
};

generateHashedPassword();
