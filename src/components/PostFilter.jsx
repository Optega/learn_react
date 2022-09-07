import React from "react";
import { TextField } from "@mui/material";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <TextField
        id="search"
        label="Search"
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        fullWidth
      />
      <MySelect
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue="Sort"
        options={[
          { value: "title", name: "Title" },
          { value: "body", name: "Body" },
        ]}
      />
    </div>
  );
};

export default PostFilter;
