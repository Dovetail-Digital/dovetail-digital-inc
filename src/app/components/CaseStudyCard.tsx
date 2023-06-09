"use client";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";

export default function CaseStudyCard(props: {
  image: string;
  title: string;
  body: string;
  buttonText: string;
  buttonLink: string;
  alt: string;
}) {
  const { image, title, body, buttonText, buttonLink, alt } = props;
  return (
    <Card
      sx={{
        width: 360,
        height: 438,
      }}
    >
      <CardMedia
        component="img"
        alt={alt}
        sx={{
          height: 200,
          mixBlendMode: "darken",
          marginBottom: "2",
          objectFit: "scale-down",
          padding: 2,
        }}
        image={image}
      />
      <CardContent
        sx={{
          height: "160px",
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          color="text.primary"
          sx={{
            fontSize: "1.25rem",
            lineHeight: "32px",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            // All this nonsense just to truncate the text at 4 lines and trail off with an ellipsis
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "4",
            WebkitBoxOrient: "vertical",
          }}
        >
          {body}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          padding: 2,
        }}
      >
        <Chip
          clickable
          component="a"
          href={buttonLink}
          label={buttonText}
          sx={{
            borderRadius: "4px",
            fontSize: "1remx",
            height: "38px",
            "&:hover": {
              backgroundColor: "#1B9B74",
              color: "#FFFFFF",
            },
          }}
        />
      </CardActions>
    </Card>
  );
}
