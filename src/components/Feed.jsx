import React from "react";
import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Sidebar, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      setVideos(data.items);
    });
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { xs: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "96vh" },
          // borderRight: "1px solid #3d3d3d",
          px: { xs: "0", sm: "0", md: "1", lg: "2" },
          width: {
            xs: "96vw",
            sm: "100vw",
            md: "15vw",
            lg: "15vw",
            xl: "15vw",
          },
          m: "0 auto",
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#000" }}
        >
          Copyright 2022 RS
        </Typography>
      </Box>

      <Box
        className="videoswrapper"
        sx={{
          overflowY: "auto",
          height: { xs: "auto", sm: "96vh" },
          width: { xs: "100vw", sm: "90vw", md: "85vw" },
          p: { xs: 0, sm: 2 },
        }}
      >
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
