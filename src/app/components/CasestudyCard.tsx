"use client";

import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';

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
        display: 'flex',
        flexDirection: 'column',
        padding: 0,
        width: 368,
        height: 438,
        borderRadius: 1
      }}>
      <CardMedia
        sx = {{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: 0,
          height: 200,
          mixBlendMode: 'darken'
        }}
        image = { image }
        title = "Card Media"
      />
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: 2
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          { title }
        </Typography>
        <Typography variant="body2" color="text.secondary">
          { body }
        </Typography>
      </CardContent>
      <CardActions>
        <Button href={ buttonLink } size="small">
          { buttonText }
        </Button>
      </CardActions>
    </Card>
  );
}