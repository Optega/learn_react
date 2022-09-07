import React from "react";
import { Typography } from "@mui/material";
import PostItem from "./PostItem";

const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return (
      <Typography variant="h1" color="initial" style={{ textAlign: "center" }}>
        Nothing
      </Typography>
    );
  }

  return (
    <div>
      <Typography variant="h1" color="initial" style={{ textAlign: "center" }}>
        {title}
      </Typography>
      {posts.map((post, index) => (
        <PostItem
          remove={remove}
          number={index + 1}
          post={post}
          key={post.id}
        />
      ))}
    </div>
  );
};

export default PostList;
