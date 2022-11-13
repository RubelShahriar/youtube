import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { MoreVert } from "@mui/icons-material";

import {
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";
const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "358px", md: "320px" },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{
            width: {
              xs: "100%",
              sm: "358px",
              md: "320px",
            },
            height: 220,
          }}
        />
      </Link>
      <CardContent
        sx={{
          backgroundColor: "white",
          height: "30px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <Typography
              variant="subtitle2"
              lineHeight={"18px"}
              fontWeight="medium"
              color="#000"
            >
              {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
            </Typography>
          </Link>
          <Link
            to={
              snippet?.channelId
                ? `/channel/${snippet?.channelId}`
                : demoChannelUrl
            }
          >
            <Typography
              variant="body2"
              fontSize={13}
              fontWeight="light"
              color="gray"
            >
              {snippet?.channelTitle || demoChannelTitle}
              <CheckCircle
                sx={{ fontSize: 13, color: "gray", ml: "5px", mb: "-3px" }}
              />
            </Typography>
          </Link>
        </div>
        <div>
          <MoreVert />
        </div>
      </CardContent>
    </Card>
  );
};

export default VideoCard;