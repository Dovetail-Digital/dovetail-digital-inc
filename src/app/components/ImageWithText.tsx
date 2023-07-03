"use client";

import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import { Remarkable } from "remarkable";

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
  const md = new Remarkable();
  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: textLeft == false ? "row" : "row-reverse",
      }}
    >
      <Grid item xs={12} sm={6}>
        <Image
          src={image.data.attributes.url}
          width={image.data.attributes.width}
          height={image.data.attributes.height}
          alt={image.data.attributes.alternativeText}
          style={{
            maxHeight: "800px",
            objectFit: "contain",
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </Grid>
      <Grid item xs={12} sm={6} className="p-4 sm:p-12">
        <Typography variant="h2">{titleText}</Typography>
        <div dangerouslySetInnerHTML={{ __html: md.render(bodyText) }} />
      </Grid>
    </Grid>
  );
}
