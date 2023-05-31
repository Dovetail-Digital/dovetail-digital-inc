"use client";

import { Stack } from "@mui/material";
import MainHero from "./components/MainHero";
import LogoBanner from "./components/LogoBanner";

export default function Home() {
  return (
    <Stack sx={{ backgroundColor: "#FAFAFA" }} spacing={8} useFlexGap>
      <MainHero />
      <LogoBanner titleText="Technologies we use" />
    </Stack>
  );
}
