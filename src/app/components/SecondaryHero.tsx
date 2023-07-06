"use client";
import { Container, Typography } from "@mui/material";
import Image from "next/image";

export default function SecondaryHero({
  image,
  title,
  secondaryText,
}: {
  image: {
    data: {
      attributes: {
        url: string;
        width: number;
        height: number;
        alternativeText: string;
      };
    };
  };
  title: string;
  secondaryText: string;
}) {
  return (
    <div style={{ position: "relative", height: "400px" }}>
      <Image
        src={image.data.attributes.url}
        width={image.data.attributes.width}
        height={image.data.attributes.height}
        alt={image.data.attributes.alternativeText}
        style={{
          objectFit: "cover",
          height: "400px",
          objectPosition: "center",
          width: "100%",
          filter: "brightness(0.30)",
          zIndex: 0,
          position: "absolute",
        }}
      />
      <Container
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h1" textAlign="center" color={"white"}>
          inside the container
        </Typography>
      </Container>
    </div>
  );
}
