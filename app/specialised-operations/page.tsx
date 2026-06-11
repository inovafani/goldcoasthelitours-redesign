import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GsapProvider from "@/components/GsapProvider";
import SpecialisedLanding from "@/components/SpecialisedLanding";

export const metadata: Metadata = {
  title: "Specialised Operations | Gold Coast Helitours",
  description:
    "Aerial film platforms, fire fighting, search & rescue, sky-crane lifting, banner towing, aerial photography and Australia's only registered mobile marine helipad.",
};

export default function SpecialisedOperationsPage() {
  return (
    <>
      <GsapProvider />
      <Nav />
      <SpecialisedLanding />
      <Footer />
    </>
  );
}
