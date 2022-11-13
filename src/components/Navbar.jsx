import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/youtube-logo.png";
import SearchBar from "./SearchBar";
import { useState } from "react";

const Navbar = () => {
  const [hideNav, setHideNav] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY < 200) {
      setHideNav(false);
    }
    if (window.scrollY > 200) {
      setHideNav(true);
    }
  });

  return (
    <Stack
      direction="row"
      alignItems="center"
      px={1}
      sx={{
        // position: "relative",
        background: "#fff",
        top: 0,
        justifyContent: "space-between",
        zIndex: 999,
        boxShadow: 2,
      }}
      style={{
        top: `${hideNav ? "-60px" : "0"}`,
        position: `${hideNav ? "relative" : "sticky"}`,
        // transition: `${hideNav && "4s"}`,
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={21} />
        <p
          style={{
            marginLeft: "4px",
            fontFamily: "Oswald",
            fontWeight: 500,
          }}
        >
          YouTube
        </p>
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
