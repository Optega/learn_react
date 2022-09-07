import { Button, Divider, Pagination, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import PostSerice from "../API/PostService";
import PostFilter from "../components/PostFilter";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import Loader from "../components/UI/Loader/Loader";
import MyModal from "../components/UI/MyModal/MyModal";
import { getPageCount } from "../components/utils/pages";
import { useFetching } from "../hooks/useFetching";
import { usePagination } from "../hooks/usePagination";
import { usePosts } from "../hooks/usePosts";
import "../styles/App.css";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  let pagesArray = usePagination(totalPages);

  const [fetchPosts, isPostsLoading, postError] = useFetching(
    async (limit, page) => {
      const response = await PostSerice.getAll(limit, page);
      setPosts(response.data);
      const totalCount = response.headers["x-total-count"];
      setTotalPages(getPageCount(totalCount, limit));
    }
  );

  useEffect(() => {
    fetchPosts(limit, page);
  }, []);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const changePage = (page) => {
    setPage(page);
    fetchPosts(limit, page);
  };

  return (
    <div className="App">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Divider style={{ margin: 10 }} />
        <PostFilter filter={filter} setFilter={setFilter} />
        <Button
          style={{ marginTop: 10, height: 56 }}
          variant="outlined"
          onClick={() => setModal(true)}
        >
          Create Post
        </Button>
        <MyModal modal={modal} setModal={setModal} title="Create post">
          <PostForm create={createPost} />
        </MyModal>
      </div>

      {postError && (
        <Typography variant="h1" color="initial">
          Error: {postError}
        </Typography>
      )}

      {isPostsLoading ? (
        <Loader />
      ) : (
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title="Post's list"
        />
      )}

      <Pagination
        style={{ margin: "30px 0" }}
        count={totalPages}
        onChange={(event, value) => changePage(value)}
      />
    </div>
  );
};

export default Posts;
