"use client";

import { Card, CardActions, CardContent, CardMedia, Button, Typography, Chip } from '@mui/material';

export default function MediaCard(props: {
  image: string,
  title: string,
  body: string,
  buttonText: string,
  buttonLink: string,
}) {
  const {image, title, body, buttonText, buttonLink} = props;
  return (
    <Card
      sx = {{
        width: 368,
        height: 438,
      }}>
      <CardMedia
        sx = {{
          height: 200,
          mixBlendMode: "darken",
          marginBottom: "8px",
        }}
        image = { image }
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          color="text.primary"
          sx={{
            fontSize: "20px",
            lineHeight: "32px",
          }}
        >
          { title }
        </Typography>
        <Typography variant="body1" color="text.secondary">
          { body }
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          paddingLeft: "16px",
          paddingTop: "0px",
        }}
      >
        <Chip
          clickable
          component="a"
          href={ buttonLink }
          label={ buttonText }
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