const express = require("express");
const Blog = require("./models/blog.js");
const router = express.Router();

router.get("/create", (req, res) => {
  res.sendFile("./public/create.html", { root: __dirname });
});

router.post("/", (req, res) => {
  console.log(req.body);
  // create new instance of blog using req
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      // redirect to home page after submitting
      res.redirect("/blogs");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  Blog.findById(id).then((result) => {
    res.send(result);
  });
});
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id).then((result) => {
    res.json({ redirect: "/blogs" });
  });
});

module.exports = router;
