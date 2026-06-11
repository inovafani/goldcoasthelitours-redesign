import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GsapProvider from "@/components/GsapProvider";
import CharterLanding from "@/components/CharterLanding";

export const metadata: Metadata = {
  title: "Charter Flights | Gold Coast Helitours",
  description:
    "Private helicopter charter on the Gold Coast — aerial survey, airport and corporate transfers, golf excursions and special events. Bespoke flights from Marina Mirage.",
};

export default function CharterPage() {
  return (
    <>
      <GsapProvider />
      <Nav />
      <CharterLanding />
      <Footer />
    </>
  );
}
