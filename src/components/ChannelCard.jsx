import React from "react";
import { CardContent, Box, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { demoProfilePicture, demoChannelUrl } from "../utils/constants";
import { Link } from "react-router-dom";

function numFormatter(num) {
  if (num > 999 && num < 1000000) {
    return (num / 1000).toFixed(1) + "K"; // convert to K for number from > 1000 < 1 million
  } else if (num > 1000000 && num < 10000000000) {
    return (num / 1000000).toFixed(1) + "M"; // convert to M for number from > 1 million
  } else if (num > 1000000000) {
    return (num / 1000000000).toFixed(1) + "B"; // convert to B for numer from > 1 billion
  } else if (num < 900) {
    return num; // if value < 1000, nothing to do
  }
}

const ChannelCard = ({ channelDetail }) => {
  return (
    <Box
      sx={{
        marginTop: "-50px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardContent sx={{ textAlign: "center" }}>
        <CardMedia
          image={
            channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture
          }
          alt={channelDetail?.snippet?.title}
          sx={{
            borderRadius: "50%",
            height: { xs: "60px", md: "150px" },
            width: { xs: "60px", md: "150px" },
            ml: { xs: 6, md: 10 },
            border: "1px solid #e3e3e3",
            backgroundColor: "#ffee58",
          }}
        />
        <Typography variant="h6">
          {channelDetail?.snippet?.title}
          <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
        </Typography>
        {channelDetail?.statistics?.subscriberCount && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <Typography variant="body2" sx={{ mr: 2 }}>
                {numFormatter(
                  parseInt(channelDetail?.statistics?.subscriberCount)
                )}{" "}
                subscribers
              </Typography>
              <Typography variant="body2" sx={{ mr: 2 }}>
                {numFormatter(parseInt(channelDetail?.statistics?.videoCount))}{" "}
                videos
              </Typography>
              <Typography variant="body2" sx={{ mr: 2 }}>
                {numFormatter(parseInt(channelDetail?.statistics?.viewCount))}{" "}
                views
              </Typography>
            </Box>
          </Box>
        )}
      </CardContent>
    </Box>
  );
};

export default ChannelCard;
