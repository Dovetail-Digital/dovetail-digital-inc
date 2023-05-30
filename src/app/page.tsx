"use client";

import { Box } from "@mui/material";
import MainHero from "./components/MainHero";
import Services from "./components/Services";

export default function Home() {
  return (
    <Box>
      <MainHero />
      <Services />
    </Box>
  );
}
