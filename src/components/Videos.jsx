import React from "react";
import { Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./";
import loadingImg from "../assets/dark-loader.gif";

const Videos = ({ videos, direction, widthProp }) => {
  if (!videos?.length)
    return (
      <Box
        sx={{
          height: { xs: "80vh", md: "95vh" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img style={{ width: "30px" }} src={loadingImg} alt="loadingImg" />
      </Box>
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
