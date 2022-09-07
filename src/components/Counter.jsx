import React, { useState } from "react";
import { Typography, Button } from "@mui/material";

const Counter = () => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <Typography variant="h1" color="initial">
        {count}
      </Typography>
      <Button variant="contained" onClick={increment}>
        INC
      </Button>
      <Button variant="contained" onClick={decrement}>
        DEC
      </Button>
    </div>
  );
};

export default Counter;
