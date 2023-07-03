"use client";

import { Box, Container, Typography } from "@mui/material";
import { Remarkable } from "remarkable";

export default function ImageWithText({
  titleText,
  textLeft,
  image,
  bodyText,
  backgroundContain,
}: {
  titleText: string;
  textLeft: boolean;
  image: any;
  bodyText: string;
  backgroundContain: boolean;
}) {
  const md = new Remarkable();
  return (
    <Container disableGutters maxWidth={false}>
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
            <div dangerouslySetInnerHTML={{ __html: md.render(bodyText) }} />
          </Box>
        </Box>
        <Box
          className="p-12 min-h-[400px] min-w-[50%] text-left bg-no-repeat bg-center"
          sx={{
            backgroundImage: `url(${image.data.attributes.url})`,
            backgroundSize: backgroundContain == true ? "contain" : "cover",
          }}
        >
          <Box className="h-max flex items-center" />
        </Box>
      </Box>
    </Container>
  );
}
