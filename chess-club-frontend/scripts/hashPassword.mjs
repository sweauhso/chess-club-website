import bcrypt from "bcryptjs";
import User from "../models/user.js"; // ✅ Use relative path
import "dotenv/config"; // ✅ Loads .env.local for standalone scripts


const generateHashedPassword = async () => {
  const password = "Pd0J4pfj1NqAGlI8awsd"; // ✅ Change this to your desired password
  const hashedPassword = await bcrypt.hash(password, 10);

  console.log("🔑 Hashed Password:", hashedPassword);

  // ✅ Dynamically import CommonJS module
  const { connectMongoDB } = await import("../lib/mongodb.js");

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
