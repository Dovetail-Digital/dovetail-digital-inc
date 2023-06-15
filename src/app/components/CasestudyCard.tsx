"use client";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Chip,
} from "@mui/material";

export default function MediaCard(props: {
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
        width: 368,
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
          backgroundSize: "contain",
          mx: 2,
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
            fontSize: "20px",
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
          padding: "16px",
        }}
      >
        <Chip
          clickable
          component="a"
          href={buttonLink}
          label={buttonText}
          sx={{
            borderRadius: "4px",
            fontSize: "16px",
            height: "38px",
          }}
        />
      </CardActions>
    </Card>
  );
}
