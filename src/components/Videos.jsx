import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos, direction }) => {
  if (!videos?.length)
    return (
      <div
        style={{
          height: "82vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="body1">Loading videos...</Typography>
      </div>
    );
  return (
    <Box
      className="videos"
      // direction={direction || "row"}
      // flexWrap="wrap"
      // justifyContent={{
      //   xs: "center",
      //   sm: "center",
      //   md: "flex-start",
      //   lg: "flex-start",
      // }}
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "1fr 1fr",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        },
        gap: { xs: 0, sm: 2, md: 2, lg: 2 },
      }}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Box>
  );
};

export default Videos;
