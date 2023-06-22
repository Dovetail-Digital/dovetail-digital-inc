"use client";

import { Box } from "@mui/material";

export default function TwoColImage() {
  return (
    <Box>
      <Box
        width={1 / 2}
        height={"100%"}
        sx={{
          backgroundImage: `url(
            "https://dovetail-digital-corpsite-dev.s3.ca-central-1.amazonaws.com/legacy_65409a740f.png"
          )`,
        }}
      ></Box>
      <Box
        width={1 / 2}
        height={"100%"}
        sx={{
          backgroundImage: `url(
            "https://dovetail-digital-corpsite-dev.s3.ca-central-1.amazonaws.com/legacy_65409a740f.png"
          )`,
        }}
      ></Box>
    </Box>
  );
}
