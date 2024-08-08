import { useState } from "react";
import { useNavigate } from "react-router";

const Create = () => {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [isPending, setIsPending] = useState(false);
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // stop refersh
    const blog = { title, body, author };

    setIsPending(true);

    // 
    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then((e) => {
      console.log('new blog added');
      setIsPending(false);
      // history(-1); // go back one page
      history("/")
    });
  }



  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form onSubmit={handleSubmit}>
        <label> Blog title:</label>
        <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
        <label> Blog body:</label>
        <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
        <label> Blog Author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">
            mario
          </option>
          <option value="yoshi">
            yoshi
          </option>
        </select>
        {!isPending && <button> Add Blog</button>}
        {isPending && <button disabled> Adding Blog...</button>}
      </form>
      <p>title: {title}</p>
      <p>body: {body}</p>
      <p>author: {author}</p>
    </div>
  )
}


export default Create;
