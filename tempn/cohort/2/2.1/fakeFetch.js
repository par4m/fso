function fakeFetch(url) {
  return new Promise((resolve, reject) => {
    if (url == " ") reject({ error: "url is not valid" });
    setTimeout(() => resolve({ data: "this is your data" }), 3000);
  });
}

fakeFetch("google.com")
  .then((data) => console.log(data))
  .catch((error) => console.log(error))
  .finally( () => console.log("reject or resolved is called"));


// same as above 

async function getData() {
    try {
     const data = await fakeFetch("google.com")
     console.log(data);
    }
    catch(error) {
        console.log(error);
    }
    finally {
      console.log("reject or resolved is called");
    }
}

getData()