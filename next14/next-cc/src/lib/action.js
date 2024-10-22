import connectToDb from "@/app/lib/utils";
import { Post } from "./models";

export const addPost = async (formData) => {
  "use server";
  const { title, slug, desc, userId } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newPost = new Post({ title, desc, slug, userId });
    await newPost.save();
    revalidatePath("/blog");
    console.log("saved to db");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong" };
  }
  console.log(title, slug, desc);
};

export const deletePost = async (formData) => {
  "use server";
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();
    await Post.findByIdAndDelete(id);
    console.log("deleted from db");
    revalidatePath("/blog");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong" };
  }
  console.log(title, slug, desc);
};
