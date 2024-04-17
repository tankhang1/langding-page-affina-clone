"use client";
import "./globals.css";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/dates/styles.css";
import { ColorSchemeScript, createTheme, MantineProvider } from "@mantine/core";
import { Lexend } from "next/font/google";
const inner = Lexend({
  subsets: ["vietnamese"],
});
const theme = createTheme({});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inner.className}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider withCssVariables withGlobalClasses>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
