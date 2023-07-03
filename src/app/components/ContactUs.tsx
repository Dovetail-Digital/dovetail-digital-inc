"use client";

import { Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import ContactForm from "./ContactForm";

export default function ContactUs({ formSparkUrl }: { formSparkUrl: string }) {
  return (
    <Container className="py-12">
      <Typography variant="h2" textAlign={"center"}>
        Contact us
      </Typography>
      <Stack
        direction={{ lg: "row", xs: "column-reverse" }}
        spacing={2}
        useFlexGap
        sx={{ marginTop: "3rem" }}
        className="md:flex items-center justify-around"
      >
        <Image
          src={"/contact-us.jpg"}
          alt="Photo Credit: Austin Distel"
          width={540}
          height={448}
          className="object-cover object-left"
        />
        <ContactForm formSparkUrl={formSparkUrl} />
      </Stack>
    </Container>
  );
}
