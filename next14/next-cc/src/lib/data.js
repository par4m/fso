import connectToDb from "@/app/lib/utils";
import { Post, User } from "./models";

//
export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts!");
  }
};

export const getPost = async (slug) => {
  try {
    connectToDb();
    const posts = await Post.findOne({ slug });
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch post!");
  }
};

export const getUser = async (id) => {
  try {
    connectToDb();
    const posts = await User.findById({ _id: id });
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch user!");
  }
};

export const getUsers = async () => {
  try {
    connectToDb();
    const posts = await User.find();
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch users!");
  }
};
