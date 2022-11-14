import React from "react";
import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Sidebar, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  const date = new Date();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      setVideos(data.items);
    });
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { xs: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "98vh" },
          // borderRight: "1px solid #3d3d3d",
          width: {
            xs: "100vw",
            sm: "100vw",
            md: "15vw",
            lg: "15vw",
            xl: "15vw",
          },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            className="copyright"
            variant="body2"
            sx={{ mx: "auto", mt: 1.9, color: "#000" }}
          >
            {`Copyright @${date.getFullYear()} Rubel`}
          </Typography>
        </Box>
      </Box>

      <Box
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
