"use client";
import "./globals.css";
import "@mantine/core/styles.css";
import { ColorSchemeScript, createTheme, MantineProvider } from "@mantine/core";
import { Lexend_Deca } from "next/font/google";
const inner = Lexend_Deca({
  subsets: ["vietnamese"],
  display: "auto",
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
