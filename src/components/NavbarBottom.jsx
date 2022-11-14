import { Box } from "@mui/system";
import React from "react";
import {
  HomeOutlined,
  DuoOutlined,
  VideoLibraryOutlined,
  SubscriptionsOutlined,
} from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NavbarBottom = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "white",
        position: "sticky",
        bottom: "0",
        left: "0",
        py: 1,
        boxSizing: "border-box",
        borderTop: "1px solid #e5e5e5",
        display: { xs: "flex", sm: "flex", md: "none", lg: "none" },
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Link to="/">
        <Box style={{ paddingTop: "0px" }} onClick={scrollToTop}>
          <HomeOutlined sx={{ mx: "auto", display: "block" }} />
          <Typography variant="caption">Home</Typography>
        </Box>
      </Link>
      <Box style={{ paddingTop: "0px" }}>
        <DuoOutlined sx={{ mx: "auto", display: "block" }} />
        <Typography variant="caption">Shorts</Typography>
      </Box>
      <Box style={{ paddingTop: "0px" }}>
        <SubscriptionsOutlined sx={{ mx: "auto", display: "block" }} />
        <Typography variant="caption">Subscriptions</Typography>
      </Box>
      <Box style={{ paddingTop: "0px" }}>
        <VideoLibraryOutlined sx={{ mx: "auto", display: "block" }} />
        <Typography variant="caption">Library</Typography>
      </Box>
    </Box>
  );
};

export default NavbarBottom;
