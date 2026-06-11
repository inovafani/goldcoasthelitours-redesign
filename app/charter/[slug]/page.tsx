import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GsapProvider from "@/components/GsapProvider";
import CharterDetail from "@/components/CharterDetail";
import { CHARTER_SERVICES, CHARTER_BY_SLUG } from "@/components/charterData";

export function generateStaticParams() {
  return CHARTER_SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = CHARTER_BY_SLUG[params.slug];
  if (!s) return { title: "Charter | Gold Coast Helitours" };
  return {
    title: `${s.name} | Gold Coast Helitours`,
    description: s.lead,
  };
}

export default function CharterServicePage({ params }: { params: { slug: string } }) {
  const service = CHARTER_BY_SLUG[params.slug];
  if (!service) notFound();
  return (
    <>
      <GsapProvider />
      <Nav />
      <CharterDetail service={service} />
      <Footer />
    </>
  );
}
