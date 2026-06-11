import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GsapProvider from "@/components/GsapProvider";
import ScenicFlights from "@/components/ScenicFlights";

export const metadata: Metadata = {
  title: "Scenic Flights | Gold Coast Helitours",
  description:
    "Seven scenic helicopter flights over the Gold Coast — from a 5-minute Broadwater lift to the ultimate 45-minute coastal tour. Departing daily from Marina Mirage.",
};

export default function ScenicFlightsPage() {
  return (
    <>
      <GsapProvider />
      <Nav />
      <ScenicFlights />
      <Footer />
    </>
  );
}
