document.addEventListener("DOMContentLoaded", () => {
  // Get the blog ID from the URL query parameters
  const urlParams = new URLSearchParams(window.location.search);
  const blogId = urlParams.get("id");

  if (blogId) {
    // Fetch and display the blog data
    fetch(`/blogs/${blogId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parse JSON if response is OK
      })
      .then((blog) => {
        // Update HTML with blog data
        document.getElementById("blog-title").textContent = blog.title;
        document.getElementById("blog-snippet").textContent = blog.snippet;
        document.getElementById("blog-body").textContent = blog.body;

        // Set up delete button event handler
        const deleteButton = document.getElementById("delete-button");
        deleteButton.addEventListener("click", () => {
          fetch(`/blogs/${blogId}`, {
            method: "DELETE", // Use DELETE method to remove the blog post
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error("Network response was not ok");
              }
              return response.json(); // Parse JSON if response is OK
            })
            .then((result) => {
              // Handle successful deletion (e.g., redirect or show message)
              alert("Blog deleted successfully");
              window.location.href = "/"; // Redirect to home or any other page
            })
            .catch((err) => {
              console.error("Fetch error:", err);
              alert("There was an error deleting the blog post.");
            });
        });
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        document.querySelector(".blog-content").innerHTML =
          "<p>There was an error loading the blog post.</p>";
      });
  } else {
    document.querySelector(".blog-content").innerHTML =
      "<p>No blog ID provided.</p>";
  }
});
