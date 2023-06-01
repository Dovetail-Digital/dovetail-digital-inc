"use client";
import { Stack } from "@mui/material";

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Stack sx={{ backgroundColor: "#FAFAFA" }} spacing={4} useFlexGap mb={4}>
      {children}
    </Stack>
  );
}
