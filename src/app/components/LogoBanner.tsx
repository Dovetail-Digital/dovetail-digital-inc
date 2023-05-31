"use client";
import { Container, Typography } from "@mui/material";

export default function LogoBanner({ titleText }: { titleText: string }) {
  return (
    <Container disableGutters>
      <Typography
        textAlign="center"
        variant="h5"
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
        {titleText}
      </Typography>
    </Container>
  );
}
