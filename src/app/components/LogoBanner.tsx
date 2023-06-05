"use client";
import { Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function LogoBanner({ title, logo }) {
  //  const logos: { title: string; src: string; alt: string }[] = [
  //    { title: "Git", src: "/git-logo.svg", alt: "Git" },
  //    { title: "NextJS", src: "/nextjs-logo.svg", alt: "NextJS" },
  //    {
  //      title: "ElasticSearch",
  //      src: "/elasticsearch-logo.svg",
  //      alt: "ElasticSearch",
  //    },
  //    { title: "MaterialUI", src: "/mui-logo.svg", alt: "MaterialUI" },
  //    {
  //      title: "ContentStack",
  //      src: "/contentstack-logo.svg",
  //      alt: "ContentStack",
  //    },
  //    { title: "AWS", src: "/aws-logo.svg", alt: "Amazon Web Services" },
  //  ];
  return (
    <Container>
      <Typography className="sm:hidden" variant="h5" textAlign="center">
        {title}
      </Typography>
      <Typography
        textAlign="center"
        variant="h5"
        className="hidden sm:block"
        sx={{
          "::before": {
            backgroundColor: "#000",
            content: '""',
            display: "inline-block",
            height: "1px",
            position: "relative",
            verticalAlign: "middle",
            width: "50%",
            right: "1.5em",
            marginLeft: "-50%",
            maxWidth: "115px",
          },
          "::after": {
            backgroundColor: "#000",
            content: '""',
            display: "inline-block",
            height: "1px",
            position: "relative",
            verticalAlign: "middle",
            width: "50%",
            left: "1.5em",
            marginRight: "-50%",
            maxWidth: "115px",
          },
        }}
      >
        {title}
      </Typography>
      <Stack
        direction="row"
        spacing={4}
        mt={4}
        useFlexGap
        flexWrap={"wrap"}
        justifyContent="center"
      >
        {logo.map((logo) => {
          console.log("Slo", logo);
          return (
            <Image
              key={logo.title}
              src={
                process.env.STRAPI_SERVER + logo.image.data[0].attributes.url
              }
              alt={logo.alt}
              width={160}
              height={60}
            />
          );
        })}
      </Stack>
    </Container>
  );
}
