import { url } from "inspector";
import mongoose from "mongoose";
const validator = require('validator')
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "username is required"],
      max: [32, "user name should be less than 32"],
      unique: true,
      index: true,
      lowercase: true,
    },
    email: {
      type: String,
      trim: true,
      required: [true, "email is required"],
      unique: true,
      validate(value:any) {
        if (!validator.isEmail(value)) {
          throw new Error("email is invalid");
        }
      },
    },
    phone:{
        type:Number,
        trim: true,
        required: [true, "phone number is required"],
        unique: true,
    },
    linkedin: {
        type:String,
        trim:true,
        required: [true, "url is required"],
    },
    company: String,
  },
  { timestamps: true }
);
export const User = mongoose.models.User || mongoose.model("User", userSchema);
