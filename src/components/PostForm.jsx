import React, { useState } from "react";
import { FormControl, FormLabel, TextField, Button } from "@mui/material";

const PostForm = ({ create, title }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();

    const newPost = {
      ...post,
      id: Date.now(),
    };

    create(newPost);
    setPost({ title: "", body: "" });
  };

  return (
    <FormControl>
      <FormLabel>{title}</FormLabel>
      <TextField
        style={{ marginTop: "10px" }}
        id="title"
        label="Title"
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      <TextField
        style={{ marginTop: "10px" }}
        id="body"
        label="Body"
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
      />
      <Button
        style={{ marginTop: "10px", height: "56px" }}
        variant="contained"
        color="primary"
        onClick={addNewPost}
      >
        Create post
      </Button>
    </FormControl>
  );
};

export default PostForm;
