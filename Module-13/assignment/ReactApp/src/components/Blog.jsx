import React, { useRef, useState, useEffect } from "react";
import "../components/Blog.css";

const Blog = () => {
  const [content, setContent] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    // You can use useEffect to fetch and display blog content, for example.
    fetch("https://api.example.com/blog")
        .then((response) => response.text())
        .then((data) => setContent(data));
        
  }, []);

  const handleButtonClick = () => {
    if (inputRef.current) {
      setContent(inputRef.current.value);
    }
  };

  return (
    <div className="blog">
      <h1>Blog</h1>
      <textarea ref={inputRef} placeholder="Write your blog here"></textarea>
      <button onClick={handleButtonClick}>Update Blog</button>
      <div className="blog-content">{content}</div>
    </div>
  );
};

export default Blog;
