import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GsapProvider from "@/components/GsapProvider";
import PolicyPage from "@/components/PolicyPage";
import { PRIVACY_INTRO, PRIVACY_SECTIONS } from "@/components/aboutData";

export const metadata: Metadata = {
  title: "Privacy Policy | Gold Coast Helitours",
  description:
    "How Gold Coast Helitours collects, uses, stores and protects your personal information, in accordance with the Australian Privacy Principles.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <GsapProvider />
      <Nav />
      <PolicyPage
        eyebrow="Your privacy"
        title="Privacy"
        titleEm="policy"
        lead="Our ongoing commitment to how we collect, use and protect your personal information, in line with the Australian Privacy Principles."
        intro={PRIVACY_INTRO}
        sections={PRIVACY_SECTIONS}
        contact={{
          address: "Mirage Heliport, D-Arm Marina Mirage, Seaworld Drive, Main Beach QLD 4217",
          email: "info@goldcoasthelitours.com.au",
          phone: "07 5591 8457",
        }}
      />
      <Footer />
    </>
  );
}
