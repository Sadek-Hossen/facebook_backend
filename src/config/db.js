import mongoose from "mongoose";

export const connectDB = async ({ url }) => {
  console.log(" Connecting to MongoDB...");

  try {
    await mongoose.connect(url);
    console.log("✅ MongoDB connected successfully!");
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
    process.exit(1); // connection fail
  }
};
