import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GsapProvider from "@/components/GsapProvider";
import SpecialisedDetail from "@/components/SpecialisedDetail";
import { SPEC_OPS, SPEC_OP_BY_SLUG } from "@/components/specialisedData";

export function generateStaticParams() {
  return SPEC_OPS.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = SPEC_OP_BY_SLUG[params.slug];
  if (!s) return { title: "Specialised Operations | Gold Coast Helitours" };
  return {
    title: `${s.name} | Gold Coast Helitours`,
    description: s.lead,
  };
}

export default function SpecialisedOperationPage({ params }: { params: { slug: string } }) {
  const op = SPEC_OP_BY_SLUG[params.slug];
  if (!op) notFound();
  return (
    <>
      <GsapProvider />
      <Nav />
      <SpecialisedDetail op={op} />
      <Footer />
    </>
  );
}
