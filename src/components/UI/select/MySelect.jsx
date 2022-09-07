import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const MySelect = ({ options, defaultValue, value, onChange }) => {
  return (
    <FormControl fullWidth style={{ marginTop: "10px" }}>
      <InputLabel id="demo-simple-select-label">Sort</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Sort"
        value={value}
        onChange={(event) => {
          onChange(event.target.value);
        }}
      >
        <MenuItem disabled value="">
          {defaultValue}
        </MenuItem>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MySelect;
