import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos, direction, widthProp }) => {
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
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "1fr 1fr",
          md: direction ? "repeat(1, 1fr)" : "repeat(3, 1fr)",
          lg: direction ? "repeat(1, 1fr)" : "repeat(4, 1fr)",
        },
        gap: { xs: 0, sm: 2, md: 2, lg: 2 },
      }}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} widthProp={widthProp} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Box>
  );
};

export default Videos;
