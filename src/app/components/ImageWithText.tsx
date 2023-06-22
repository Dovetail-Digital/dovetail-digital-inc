"use client";

import { Box, Container, Typography } from "@mui/material";

export default function ImageWithText({
  titleText,
  textLeft,
  image,
  bodyText,
}: {
  titleText: string;
  textLeft: boolean;
  image: any;
  bodyText: string;
}) {
  return (
    <Container disableGutters maxWidth="100%">
      <Box
        sx={{
          display: "flex",
          flexDirection: textLeft == false ? "row" : "row-reverse",
        }}
        className="relative"
      >
        <Box className="p-12 min-w-[50%] align-center justify-end flex">
          <Box className="float-right min-w-[640px] text-left">
            <Typography variant="h2">{titleText}</Typography>
            <Typography variant="body1">{bodyText}</Typography>
          </Box>
        </Box>
        <Box
          className="p-12 min-h-[400px] min-w-[50%] text-left bg-cover"
          sx={{
            backgroundImage: `url(${image.data.attributes.url})`,
          }}
        >
          <Box className="h-max flex items-center" />
        </Box>
      </Box>
    </Container>
  );
}
