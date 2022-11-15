import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { ThumbUpAlt, Visibility } from "@mui/icons-material";
import loadingImg from "../assets/dark-loader.gif";

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

const VideoDetails = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );
    fetchFromAPI(`search?part=snippet&relatedVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  if (!videos?.length)
    return (
      <Box
        sx={{
          height: "95vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img style={{ width: "30px" }} src={loadingImg} alt="loadingImg" />
      </Box>
    );

  return (
    <Box minHeight="95vh" sx={{ px: { xs: 0, md: 2 } }}>
      <Stack direction={{ xs: "column", md: "row" }} gap={2}>
        <Box flex={1}>
          <Box
            sx={{
              width: "100%",
              position: "sticky",
              top: "0",
            }}
          >
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              playing={true}
              controls
            />
            <Typography
              color="#000"
              variant="body1"
              sx={{ lineHeight: "23px" }}
              fontWeight="medium"
              p={2}
            >
              {videoDetail?.snippet?.title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#000" }}
              px={2}
            >
              <Link to={`/channel/${videoDetail?.snippet?.channelId}`}>
                <Typography variant="body1" color="#000">
                  {videoDetail?.snippet?.channelTitle}
                  <CheckCircle
                    sx={{
                      fontSize: "15px",
                      color: "gray",
                      ml: "5px",
                      mb: "-3px",
                    }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography
                  variant="body2"
                  sx={{ opacity: 0.7, display: "flex", alignItems: "center" }}
                >
                  <ThumbUpAlt sx={{ fontSize: "21px", mr: "5px" }} />{" "}
                  {numFormatter(parseInt(videoDetail?.statistics?.likeCount))}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    opacity: 0.7,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Visibility sx={{ fontSize: "21px", mr: "5px" }} />{" "}
                  {numFormatter(parseInt(videoDetail?.statistics?.viewCount))}
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={0}
          py={{ md: 1, xs: 0 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={videos} direction="column" widthProp="200px" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetails;
