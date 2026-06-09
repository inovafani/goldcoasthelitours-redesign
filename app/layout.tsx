import type { Metadata, Viewport } from "next";
import "./globals.css";

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
    <html lang="en">
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
