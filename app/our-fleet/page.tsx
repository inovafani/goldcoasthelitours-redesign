import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GsapProvider from "@/components/GsapProvider";
import FleetLanding from "@/components/FleetLanding";

export const metadata: Metadata = {
  title: "Our Fleet | Gold Coast Helitours",
  description:
    "Meet the Gold Coast Helitours fleet — Eurocopter 350 Squirrel and Bell 206L Long Ranger jet-turbine helicopters, Robinson R44 pistons, and Australia's only registered mobile marine helipad.",
};

export default function OurFleetPage() {
  return (
    <>
      <GsapProvider />
      <Nav />
      <FleetLanding />
      <Footer />
    </>
  );
}
