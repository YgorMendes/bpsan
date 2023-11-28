import type { Metadata } from "next";
import "./globals.scss";
import "./page.scss";

export const metadata: Metadata = {
  title: "bpsan",
  description: "Seguros automotivos.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
