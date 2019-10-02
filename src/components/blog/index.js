import React from "react";
import BlogCard from "./blogCard";
import "./style.css";

const Blog = () => {
  return (
    <div className="columns is-multiline is-centered">
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  );
};

export default Blog;
