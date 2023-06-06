"use client";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function LogoBanner({
  title,
  logo,
}: {
  title: String;
  logo: any;
}) {
  return (
    <div className="py-16">
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
        {logo.map(
          (logo: {
            title: string;
            alt: string;
            image: { data: [{ attributes: { url: string } }] };
          }) => {
            return (
              <Image
                key={logo.title}
                src={
                  "http://127.0.0.1:1337" + logo.image.data[0].attributes.url
                }
                alt={logo.alt}
                width={160}
                height={60}
              />
            );
          }
        )}
      </Stack>
    </div>
  );
}
