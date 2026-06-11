import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GsapProvider from "@/components/GsapProvider";
import ContactPage from "@/components/ContactPage";

export const metadata: Metadata = {
  title: "Contact Us | Gold Coast Helitours",
  description:
    "Get in touch with Gold Coast Helitours at Marina Mirage, 74 Seaworld Drive, Main Beach. Phone, email, opening hours, parking, directions and a step-by-step visual tour to our heliport.",
};

export default function ContactUsPage() {
  return (
    <>
      <GsapProvider />
      <Nav />
      <ContactPage />
      <Footer />
    </>
  );
}
