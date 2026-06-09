import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Offers from "@/components/Offers";
import GcCards from "@/components/GcCards";
import Aero from "@/components/Aero";
import PhotoBand from "@/components/PhotoBand";
import EventVideo from "@/components/EventVideo";
import Contact from "@/components/Contact";
import Closures from "@/components/Closures";
import Footer from "@/components/Footer";
import GsapProvider from "@/components/GsapProvider";

export default function Home() {
  return (
    <>
      <GsapProvider />
      <Nav />
      <main id="top">
        <Hero />
        <Offers />
        <GcCards />
        <Aero />
        <PhotoBand />
        <EventVideo />
        <Contact />
        <Closures />
      </main>
      <Footer />
    </>
  );
}
