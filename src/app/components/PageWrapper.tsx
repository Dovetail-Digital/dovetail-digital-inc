"use client";
import { Stack } from "@mui/material";

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Stack sx={{ backgroundColor: "#FAFAFA" }} spacing={16} useFlexGap mb={4}>
      {children}
    </Stack>
  );
}
