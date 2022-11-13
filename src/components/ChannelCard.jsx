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

const ChannelCard = ({ channelDetail, marginTop }) => {
  // const { snippet } = channelDetail;

  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "356px", md: "320px" },
        height: "auto",
        margin: "auto",
        marginTop,
      }}
    >
      {/* <Link to={`/channel/${channelDetail?.id?.channelId}`}> */}
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          color: "#000",
        }}
      >
        <Link
          to={
            channelDetail?.snippet?.channelId
              ? `/channel/${channelDetail?.snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <CardMedia
            image={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelDetail?.snippet?.title}
            sx={{
              borderRadius: "50%",
              height: "60px",
              width: "60px",
              // margin: "0 auto",
              border: "1px solid #e3e3e3",
            }}
          />
          <Typography variant="h6">
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
        {channelDetail?.statistics?.subscriberCount && (
          <div style={{ display: "flex" }}>
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
          </div>
        )}
      </CardContent>
      {/* </Link> */}
    </Box>
  );
};

export default ChannelCard;
