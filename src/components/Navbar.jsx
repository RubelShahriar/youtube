import React from "react";
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/youtube-logo.png";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { Box } from "@mui/system";
import { NotificationAddOutlined, PersonOutline } from "@mui/icons-material";

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
      sx={{
        background: "#fff",
        top: 0,
        justifyContent: "space-between",
        zIndex: 999,
        boxShadow: { xs: 2, sm: 2, md: "none", lg: "none", xl: "none" },
        px: { xs: 1, md: 2 },
      }}
      style={{
        top: `${hideNav ? "-60px" : "0"}`,
        position: `${hideNav ? "relative" : "sticky"}`,
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
      <Box
        sx={{
          mt: "10px",
          gap: "40px",
          alignItems: "center",
          display: { xs: "none", md: "flex" },
        }}
      >
        <NotificationAddOutlined sx={{ fontSize: "26px", color: "gray" }} />
        <Typography
          variant="body1"
          sx={{
            display: "flex",
            flexDirection: "row",
            border: "1px solid #90a4ae",
            borderRadius: "40px",
            p: "4px 6px",
            backgroundColor: "",
            color: "blue",
            "&:hover": {
              backgroundColor: "#81d4fa",
              border: "1px solid #81d4fa",
            },
          }}
        >
          <PersonOutline sx={{ mr: "5px" }} />
          Sign in
        </Typography>
      </Box>
    </Stack>
  );
};

export default Navbar;
