import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GsapProvider from "@/components/GsapProvider";
import PolicyPage from "@/components/PolicyPage";
import { BOOKING_SECTIONS } from "@/components/aboutData";

export const metadata: Metadata = {
  title: "Booking Policies | Gold Coast Helitours",
  description:
    "Gold Coast Helitours booking terms — minimum fares, deposits and payment, cancellation and refund policies, weights, age definitions and gift vouchers.",
};

export default function BookingPoliciesPage() {
  return (
    <>
      <GsapProvider />
      <Nav />
      <PolicyPage
        eyebrow="Before you fly"
        title="Booking"
        titleEm="policies"
        lead="Clear, fair terms so you know exactly what to expect when you book a flight with us."
        sections={BOOKING_SECTIONS}
      />
      <Footer />
    </>
  );
}
