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
  widthProp,
}) => {
  return (
    <Card
      sx={{
        width: {
          xs: "100vw",
          sm: "100%",
          md: "100%",
          lg: "100%",
        },
        boxShadow: "none",
        borderRadius: 0,
        backgroundColor: "white",
        display: { xs: "block", md: widthProp ? "flex" : "block" },
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{
            width: {
              xs: "100%",
              sm: "100%",
              md: widthProp || "100%",
              lg: widthProp || "100%",
            },
            height: {
              xs: 230,
              sm: 180,
              md: widthProp ? 110 : 140,
              lg: widthProp ? 110 : 160,
            },
            borderRadius: { xs: "none", sm: "none", md: "5px", lg: "10px" },
          }}
        />
      </Link>
      <CardContent
        sx={{
          width: { md: widthProp },
          height: "30px",
          display: "flex",
          justifyContent: "space-between",
          mb: { xs: 2 },
          p: { xs: 2 },
          pl: { md: 1 },
          pt: { md: widthProp && 0 },
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
