import "dotenv/config";
import mongoose from "mongoose";

const uri = process.env.MONGODB_URI;

const checkDatabase = async () => {
  if (!uri) {
    console.error("❌ MONGODB_URI is not defined in .env.local");
    process.exit(1);
  }

  console.log("🔍 Connecting to MongoDB:", uri);

  try {
    await mongoose.connect(uri);
    const db = mongoose.connection.db;
    if (!db) {
      throw new Error("❌ MongoDB connection is not established.");
    }
    const dbList = await db.admin().listDatabases();
    console.log("✅ Available Databases:", dbList.databases);
    process.exit(0);
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    process.exit(1);
  }
};

checkDatabase();
