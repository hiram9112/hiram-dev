import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const sora = localFont({
  src: "../../public/fonts/sora-latin.woff2",
  variable: "--font-display",
  display: "swap",
});
const sourceSans = localFont({
  src: "../../public/fonts/source-sans-3-latin.woff2",
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hiram Dev",
  description: "Technical profile and engineering casebook.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sora.variable} ${sourceSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
