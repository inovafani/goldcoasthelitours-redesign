import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GsapProvider from "@/components/GsapProvider";
import SpecialLanding from "@/components/SpecialLanding";

export const metadata: Metadata = {
  title: "Special Occasions | Gold Coast Helitours",
  description:
    "Mark life's milestones from the sky — island picnics, beach proposals, wedding arrivals and hinterland winery transfers by private helicopter from Marina Mirage.",
};

export default function SpecialOccasionsPage() {
  return (
    <>
      <GsapProvider />
      <Nav />
      <SpecialLanding />
      <Footer />
    </>
  );
}
