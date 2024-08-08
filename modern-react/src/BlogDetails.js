import { useParams } from "react-router";
import useFetch from "./useFetch";
import { useNavigate } from "react-router";

const BlogDetails = () => {

  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
  const history = useNavigate();

  const handleDelete = (e) => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'DELETE'
    }).then((e) => {
      console.log('deleted ');
      history('/');
    });
  }
  return (
    <div className="blog-details">
      {isPending && <div> Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2> {blog.title}</h2>
          <p> Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleDelete}> Delete </button>
        </article>

      )}
    </div>
  )
};

export default BlogDetails;
