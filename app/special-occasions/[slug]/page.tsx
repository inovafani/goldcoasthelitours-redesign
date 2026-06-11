import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GsapProvider from "@/components/GsapProvider";
import SpecialDetail from "@/components/SpecialDetail";
import { OCCASIONS, OCCASION_BY_SLUG } from "@/components/specialData";

export function generateStaticParams() {
  return OCCASIONS.map((o) => ({ slug: o.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const o = OCCASION_BY_SLUG[params.slug];
  if (!o) return { title: "Special Occasions | Gold Coast Helitours" };
  return {
    title: `${o.name} | Gold Coast Helitours`,
    description: o.lead,
  };
}

export default function SpecialOccasionPage({ params }: { params: { slug: string } }) {
  const occasion = OCCASION_BY_SLUG[params.slug];
  if (!occasion) notFound();
  return (
    <>
      <GsapProvider />
      <Nav />
      <SpecialDetail occasion={occasion} />
      <Footer />
    </>
  );
}
