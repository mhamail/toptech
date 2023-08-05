import mongoose from "mongoose";
const db = process.env.db || "";

export const mongoConnect = async () => {
  try {
    await mongoose.connect(db);
    console.log("connected To Mongodb");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
  }
};
