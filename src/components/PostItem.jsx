import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
} from "@mui/material";
import { generatePath, useNavigate } from "react-router-dom";

const PostItem = (props) => {
  const navigate = useNavigate();

  return (
    <Card className="post">
      <div className="post__content">
        <CardContent>
          <Typography variant="strong" color="text.secondary">
            {props.post.id}. {props.post.title}
          </Typography>
          <Typography variant="body1" color="initial">
            {props.post.body}
          </Typography>
        </CardContent>
      </div>
      <div className="post__btn">
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              navigate(generatePath("/posts/:id", { id: props.post.id }), {
                replace: true,
              });
            }}
          >
            Open
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => props.remove(props.post)}
          >
            Delete
          </Button>
        </CardActions>
      </div>
    </Card>
  );
};

export default PostItem;
