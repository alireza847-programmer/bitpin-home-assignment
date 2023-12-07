"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { configureApiWrapper } from "react-api-wrapper-hook";
import { api } from "@/utils/api";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  configureApiWrapper(api);
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
