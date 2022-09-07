import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context";

const MyAppBar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };

  return (
    <div className="app-bar">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/posts">Posts</Link>
              <Link to="/about">About</Link>
            </Typography>
            {isAuth ? (
              <Button color="inherit" onClick={logout}>
                Logout
              </Button>
            ) : (
              <Link to="/login">
                <Button color="inherit">Login</Button>
              </Link>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default MyAppBar;
