function fakeFetch(url) {
  return new Promise((resolve, reject) => {
    if (url == " ") reject({ error: "url is not valid" });
    setTimeout(() => resolve({ data: "this is your data" }), 3000);
  });
}


async function getData() {
  
  const data = await fakeFetch("google.com")
  console.log(data);
}

getData();