import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  // destructure the object
  const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');


  const [name, setName] = useState('mario');


  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading..</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
      <button onClick={() => setName('luigi')}> change name</button>
      <p>{name}</p>

    </div>
  );
}

export default Home;
