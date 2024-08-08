import { useState, useEffect } from "react";

// pass url as prop
const useFetch = (url) => {

  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);

  const [error, setError] = useState(null);


  useEffect(() => {

    const abortCont = new AbortController();

    setTimeout(() => {

      fetch(url, { signal: abortCont.signal }).then((res) => {
        console.log(res);
        if (!res.ok) {
          throw Error('could not fetch the data for that resource');
        }
        return res.json(); // passes the json into a JS Object
      }).then(data => {
        // setBlogs(data)
        console.log(data);
        setData(data);
        setIsPending(false);
        setError(null);
      }).catch(err => {
        if (err.name === 'AbortError') {
          console.log('fetch aborted');
        } else {

          setIsPending(false);
          setError(err.message);
        }
      })


    }, 1000);

    return () => abortCont.abort();
  }, [url]); // dependency to useEffect
  // whenever url changes rerun this function to get the data again


  // return an object
  return {
    data, isPending, error
  }
}

export default useFetch;
