import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GsapProvider from "@/components/GsapProvider";
import Facilities from "@/components/Facilities";

export const metadata: Metadata = {
  title: "Facilities | Gold Coast Helitours",
  description:
    "Gold Coast Helitours' purpose-built Marina Mirage heliport, mobile marine helipad and dedicated Southport engineering base — the infrastructure behind 30+ years of safe operations.",
};

export default function FacilitiesPage() {
  return (
    <>
      <GsapProvider />
      <Nav />
      <Facilities />
      <Footer />
    </>
  );
}
