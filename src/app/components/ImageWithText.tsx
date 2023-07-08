"use client";

import { Button, Grid, Paper, Typography } from "@mui/material";
import Image from "next/image";
import { Remarkable } from "remarkable";
import Carousel from "react-material-ui-carousel";

export default function ImageWithText({
  titleText,
  textLeft,
  image,
  bodyText,
}: {
  titleText: string;
  textLeft: boolean;
  image: {
    data: [
      {
        attributes: {
          url: string;
          width: number;
          height: number;
          alternativeText: string;
        };
      }
    ];
  };
  bodyText: string;
}) {
  const md = new Remarkable();

  function Item(props: {
    item: {
      attributes: {
        url: string;
        width: number;
        height: number;
        alternativeText: string;
      };
    };
  }) {
    return (
      <Image
        src={props.item.attributes.url}
        width={props.item.attributes.width}
        height={props.item.attributes.height}
        alt={props.item.attributes.alternativeText}
        style={{
          maxHeight: "400px",
          objectFit: "contain",
          maxWidth: "100%",
          height: "auto",
        }}
      />
    );
  }

  let imageMultiple = false;
  if (image.data.length > 1) {
    imageMultiple = true;
  }

  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: textLeft == false ? "row" : "row-reverse",
      }}
    >
      <Grid item xs={12} sm={6}>
        {imageMultiple ? (
          <Carousel>
            {image.data.map((item, i) => (
              <Item key={i} item={item} />
            ))}
          </Carousel>
        ) : (
          <Image
            src={image.data[0].attributes.url}
            width={image.data[0].attributes.width}
            height={image.data[0].attributes.height}
            alt={image.data[0].attributes.alternativeText}
            style={{
              maxHeight: "800px",
              objectFit: "contain",
              maxWidth: "100%",
              height: "auto",
            }}
          />
        )}
      </Grid>
      <Grid item xs={12} sm={6} className="p-4 sm:p-12">
        <Typography variant="h2">{titleText}</Typography>
        <div dangerouslySetInnerHTML={{ __html: md.render(bodyText) }} />
      </Grid>
    </Grid>
  );
}
