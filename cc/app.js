const express = require("express");
const mongoose = require("mongoose");
const app = express();

const blogRoutes = require("./routes/blogRoutes");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const dbURI = process.env.dbURI;

// connect after connection is made
mongoose
  .connect(dbURI)
  .then(() => app.listen(3000))
  .catch((err) => console.log(err));

app.get("/add-blog", (req, res) => {
  // using blog model to create a new instance
  const blog = new Blog({
    title: "new Blog 2",
    snippet: "about my new blog",
    body: "all about my new blog",
  });
  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    }); // method to save into db
});

app.get("/all-blogs", (req, res) => {
  Blog.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});

app.get("/single-blog", (req, res) => {
  Blog.findById("66a601d7d5c6a7f22e6c6d22").then((result) => {
    res.send(result);
  });
});

app.get("/", (req, res) => {
  res.sendFile("./public/index.html", { root: __dirname });
});

router.get("/blog.html", (req, res) => {
  res.sendFile(__dirname + "/public/blog.html");
});

// blog routes
app.use(blogRoutes);

app.use("/blogs", blogRoutes);
