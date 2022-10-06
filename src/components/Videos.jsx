import React from "react";
import { Stack, Box } from "@mui/material";
import { VideoCard } from "./";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return "Loading...";

  return (
    <div>
      <Stack
        direction={direction || "row"}
        flexWrap="wrap"
        justifyContent="start"
        gap={2}
      >
        {videos.map((item, index) => (
          <Box key={index}>{item.videoId && <VideoCard video={item} />}</Box>
        ))}
      </Stack>
    </div>
  );
};

export default Videos;
