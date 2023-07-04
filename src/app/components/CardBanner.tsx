"use client";
import { Container, Stack } from "@mui/material";
import CaseStudyCard from "./CaseStudyCard";

interface card {
  id: number;
  title: string;
  description: string;
  url: string;
  image: {
    data: {
      id: string;
      attributes: {
        name: string;
        alternativeText: string;
        width: number;
        height: number;
        url: string;
        formats: {
          [key: string]: {
            url: string;
          };
        };
      };
    };
  };
}
export default function CardBanner({ card }: { card: card[] }) {
  return (
    <Stack
      direction="row"
      rowGap={4}
      spacing={4}
      justifyContent={"center"}
      p={4}
    >
      {card.map((cardItem: card) => {
        return (
          <CaseStudyCard
            image={cardItem.image.data.attributes.url}
            title={cardItem.title}
            body={cardItem.description}
            buttonText="Learn more"
            buttonLink={cardItem.url}
            alt={cardItem.image.data.attributes.alternativeText}
          />
        );
      })}
    </Stack>
  );
}
