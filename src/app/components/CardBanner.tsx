"use client";
import { Container } from "@mui/material";
import MediaCard from "./CasestudyCard";

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
    <Container>
      {card.map((cardItem: card) => {
        return (
          <MediaCard
            image={cardItem.image.data.attributes.url}
            title={cardItem.title}
            body={cardItem.description}
            buttonText="Learn more"
            buttonLink={cardItem.url}
            alt={cardItem.image.data.attributes.alternativeText}
          />
        );
      })}
    </Container>
  );
}
