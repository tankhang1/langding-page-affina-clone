"use client";
import AppHeader from "@/components/AppHeader";
import { AppShell } from "@mantine/core";
import Image from "next/image";

export default function Home() {
  return (
    <AppShell>
      <AppHeader />

      <AppShell.Main>Main</AppShell.Main>
    </AppShell>
  );
}
