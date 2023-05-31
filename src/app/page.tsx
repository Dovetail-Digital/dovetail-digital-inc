"use client";

import { Stack } from "@mui/material";
import MainHero from "./components/MainHero";
import LogoBanner from "./components/LogoBanner";

export default function Home() {
  return (
    <Stack sx={{ backgroundColor: "#FAFAFA" }} spacing={4} useFlexGap mb={4}>
      <MainHero />
      <LogoBanner titleText="Technologies we use" />
    </Stack>
  );
}
