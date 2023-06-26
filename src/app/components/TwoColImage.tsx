"use client";

import { Box, Stack, Typography } from "@mui/material";

interface imageData {
  id: string;
  attributes: {
    name: string;
    alternativeText: string;
    url: string;
    caption: string;
  };
}

interface images {
  data: Array<imageData>;
}

export default function TwoColImage({ images }: { images: images }) {
  return (
    <Stack
      direction="row"
      useFlexGap
      flexWrap="wrap"
      justifyContent="center"
      spacing={4}
    >
      {images.data.map((image: imageData) => {
        return (
          <Box
            sx={{
              minHeight: { xs: 600, lg: 1300 },
              minWidth: { xs: 300, lg: 550 },
              overflow: "hidden",
            }}
          >
            <Typography variant="h2" sx={{ textAlign: "center" }}>
              {image.attributes.caption}
            </Typography>
            <Box
              id={image.id}
              sx={{
                width: "100%",
                height: "100%",
                backgroundImage: `url(
            ${image.attributes.url}
          )`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPositionX: "center",
              }}
            ></Box>
          </Box>
        );
      })}
    </Stack>
  );
}
