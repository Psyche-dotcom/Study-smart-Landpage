import React from "react";
import { AppBar, Typography } from "@mui/material";
const Header = () => {
  return (
    <header>
      <AppBar
        className="Appbar"
        elevation={4}
        style={{
          backgroundColor: "#342056",
          padding: "10px",
        }}
      >
        <div className="Container">
          <Typography component={"h6"} textAlign={"center"}>
            HOW TO STUDY SMART AND BOOST YOUR GP
          </Typography>
        </div>
      </AppBar>
    </header>
  );
};

export default Header;
