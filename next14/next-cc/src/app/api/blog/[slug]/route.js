import { Post } from "@/lib/models";
import connectToDb from "@/app/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request, {params}) => {
  const {slug} = params;
  try {
    connectToDb();
    const post = await Post.findOne({slug});
    return NextResponse.json(post);
  } catch (error) {
    console.log(err);
    throw new Error("Failed to Fetch Post");
  }
};
