const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

// const promise4 = fetch("https://jsonplaceholder.typicode.com/posts").then(
//   (res) => res.json()
// );

// Promise.all([promise4]).then((values) => console.log(values));

// async await with fetch
async function init() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await res.json();
    console.log(data);
}


init();