import mongoose from "mongoose";

export const connectMongoDB = async () => {
  if (mongoose.connection.readyState >= 1) return;

  console.log("🔍 MONGODB_URI:", process.env.MONGODB_URI || "❌ NOT FOUND");

  if (!process.env.MONGODB_URI) {
    throw new Error("❌ MONGODB_URI is not defined. Check your .env.local file.");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "announcements-api-db",
    });
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
  }
};
