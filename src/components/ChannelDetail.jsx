import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Typography } from "@mui/material";
import { Sidebar } from "./";
import demoBannerImage from "../assets/ytb.jpg";
import { Stack } from "@mui/system";

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const [description, setDescription] = useState(true);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  return (
    <Stack sx={{ flexDirection: { xs: "column", md: "row" } }}>
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          width: { sx: "auto", md: "15vw" },
          height: { sx: "auto", md: "98vh" },
        }}
      >
        <Sidebar />
      </Box>
      <Box
        sx={{
          overflowY: "auto",
          height: { sx: "auto", md: "96vh" },
          width: { sx: "auto", md: "85vw" },
        }}
      >
        <Box sx={{ boxShadow: 2, mb: 2 }}>
          <div sx={{ mb: 0, height: { xs: "70px ", md: "130px" } }}>
            <img
              src={
                channelDetail?.id === "UCnvEyUM0WKO-kRKFGQZccjA"
                  ? demoBannerImage
                  : channelDetail?.brandingSettings?.image?.bannerExternalUrl
              }
              alt="bannerimage"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
          <ChannelCard channelDetail={channelDetail} marginTop="-50px" />
          <Box
            spacing={1}
            pb={2}
            sx={{ display: "flex", justifyContent: "space-around" }}
          >
            <Typography variant="body2" onClick={() => setDescription(true)}>
              HOME
            </Typography>
            <Typography variant="body2">VIDEOS</Typography>
            <Typography variant="body2" onClick={() => setDescription(false)}>
              DESCRIPTION
            </Typography>
          </Box>
        </Box>
        {description ? (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            px={2}
          >
            <Videos videos={videos} />
          </Box>
        ) : (
          <Box sx={{ p: 2 }}>
            <Typography variant="body2">
              {channelDetail?.snippet?.description}
            </Typography>
          </Box>
        )}
      </Box>
    </Stack>
  );
};

export default ChannelDetail;
