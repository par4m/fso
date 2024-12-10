import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";
import { getPost } from "@/lib/data";

const getData = async () => {
  const res = await fetch(`${process.env.NEXT_API_URL}/blog`);
  if (!res.ok) {
    throw new Error("something went wrong");
  }
  return res.json();
};
const BlogPage = async props => {
  const searchParams = await props.searchParams;
  console.log(searchParams);
  const posts = await getData()

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};
export default BlogPage;
