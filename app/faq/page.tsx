import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GsapProvider from "@/components/GsapProvider";
import Faq from "@/components/Faq";

export const metadata: Metadata = {
  title: "FAQ | Gold Coast Helitours",
  description:
    "Answers to common questions about Gold Coast Helitours scenic flights — passengers, weather, opening hours, getting there, cameras, what to wear and payment.",
};

export default function FaqPage() {
  return (
    <>
      <GsapProvider />
      <Nav />
      <Faq />
      <Footer />
    </>
  );
}
