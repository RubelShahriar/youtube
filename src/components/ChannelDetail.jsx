import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Typography } from "@mui/material";
import demoBannerImage from "../assets/ytb.jpg";

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
    <Box minHeight="95vh">
      <Box sx={{ boxShadow: 2, mb: 2 }}>
        <div sx={{ mb: 0 }}>
          <img
            src={
              // channelDetail?.brandingSettings?.image?.bannerExternalUrl ===
              // undefined
              channelDetail?.id === "UCnvEyUM0WKO-kRKFGQZccjA"
                ? demoBannerImage
                : channelDetail?.brandingSettings?.image?.bannerExternalUrl
            }
            alt="bannerimage"
            style={{
              width: "100%",
              height: "70px",
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
          width="100%"
          justifyContent="center"
          alignItems="center"
          p="0"
        >
          {/* sm: means it applys only for sm and higher not for xs devices */}
          {/* <Box sx={{ mx: { sm: "0px" } }} /> */}
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
  );
};

export default ChannelDetail;
