document.addEventListener("DOMContentLoaded", () => {
  fetch("/all-blogs")
    .then((response) => response.json())
    .then((blogs) => {
      const blogList = document.getElementById("blog-list");
      if (blogs.length > 0) {
        blogs.forEach((blog) => {
          const blogElement = document.createElement("a");
          blogElement.className = "single";
          blogElement.href = `/blog.html?id=${blog._id}`; // Redirect to /blog.html with blog ID

          const titleElement = document.createElement("h3");
          titleElement.className = "title";
          titleElement.textContent = blog.title;

          const snippetElement = document.createElement("p");
          snippetElement.className = "snippet";
          snippetElement.textContent = blog.snippet;

          blogElement.appendChild(titleElement);
          blogElement.appendChild(snippetElement);

          blogList.appendChild(blogElement);
        });
      } else {
        const noBlogsElement = document.createElement("p");
        noBlogsElement.textContent = "There are no blogs to display...";
        blogList.appendChild(noBlogsElement);
      }
    })
    .catch((err) => console.log(err));
});
