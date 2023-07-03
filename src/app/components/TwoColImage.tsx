"use client";

import { Grid, Typography } from "@mui/material";
import Image from "next/image";

interface imageData {
  id: string;
  attributes: {
    name: string;
    alternativeText: string;
    url: string;
    caption: string;
    width: number;
    height: number;
  };
}

interface images {
  data: Array<imageData>;
}

export default function TwoColImage({ images }: { images: images }) {
  return (
    <Grid container sx={{ justifyContent: "center" }} className="py-12">
      {images.data.map((image: imageData) => {
        return (
          <Grid item xs={12} sm={4} key={image.id} mx={4}>
            <Typography variant="h4" sx={{ textAlign: "center" }} mb={2}>
              {image.attributes.caption}
            </Typography>
            <Image
              src={image.attributes.url}
              alt={image.attributes.alternativeText}
              width={image.attributes.width}
              height={image.attributes.height}
              style={{
                objectFit: "contain",
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}
