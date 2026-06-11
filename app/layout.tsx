import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Cormorant_Garamond, Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-grotesk",
  display: "swap",
});
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});
const mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gold Coast Helitours — Helicopter tours & charter",
  description:
    "Scenic flights and private charters over Surfers Paradise, the broadwater and the hinterland — lifting off from our own heliport at Marina Mirage. Daily, weather permitting.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${grotesk.variable} ${cormorant.variable} ${inter.variable} ${mono.variable}`}
    >
      <head>
        {/* Add .js-anim before first paint so animated elements start hidden
            (no flash). Without JS the class is never added and everything shows. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js-anim');",
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
