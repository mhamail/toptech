import { NextResponse } from "next/server";
import { User } from "@/lib/model";
import { mongoConnect } from "@/lib/mongoConnect";
mongoConnect()

export const POST = async (request: Request) => {
  const { name, email, phone, linkedin, company } = await request.json();
  const data = { name, email, phone, linkedin, company };
  console.log(data)
  try {
    const newUser = new User(data);
    const user = await newUser.save();
    return NextResponse.json({ message: "Ok" }, { status: 201 });
  } catch (err) {
    console.log(err)
    NextResponse.json({ message: err });
  }
};

export const GET = async (request: Request) => {
  try {
    const user = await User.find({});
    return NextResponse.json(user, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: err }, { status: 500 });
  }
};
