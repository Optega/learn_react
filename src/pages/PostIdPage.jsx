import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostSerice from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";
import { Typography } from "@mui/material";

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostSerice.getById(id);
    setPost(response.data);
  });
  const [fetchComments, isCommentsLoading, commentsError] = useFetching(
    async (id) => {
      const response = await PostSerice.getCommentsByPostId(id);
      setComments(response.data);
    }
  );

  useEffect(() => {
    fetchPostById(params.id);
    fetchComments(params.id);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <Typography variant="h3" color="initial">
          {post.id}. {post.title}
        </Typography>
      )}
      <Typography variant="h4" color="initial">
        Comments
      </Typography>
      {isCommentsLoading ? (
        <Loader />
      ) : (
        <div>
          {comments.map((comm) => (
            <div key={comm.id} style={{ marginTop: 15 }}>
              <Typography variant="h5" color="initial">
                {comm.email}
              </Typography>
              <Typography variant="body1" color="initial">
                {comm.body}
              </Typography>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostIdPage;
