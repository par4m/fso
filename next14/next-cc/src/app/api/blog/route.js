import { Post } from "@/lib/models";
import connectToDb from "@/app/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    connectToDb();
    const posts = await Post.find();
    return NextResponse.json(posts);
  } catch (error) {
    console.log(err);
    throw new Error("Failed to Fetch Posts");
  }
};
