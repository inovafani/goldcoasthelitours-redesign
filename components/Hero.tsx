import Image from "next/image";
import { ArrowRight, PinIcon, ShieldIcon, ClockIcon } from "./icons";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-media" data-hero-media>
        {/* LCP image — served as AVIF/WebP, responsive, and preloaded via priority */}
        <Image
          src="/assets/hero-coast.jpg"
          alt="Gold Coast Helitours helicopter flying over Surfers Paradise at golden hour"
          fill
          priority
          sizes="100vw"
          quality={82}
          style={{ objectFit: "cover", objectPosition: "center 42%" }}
        />
      </div>
      <div className="hero-scrim" />
      <div className="hero-grain" />

      <div className="hero-inner">
        <span className="eyebrow hero-eyebrow" data-hero="eyebrow">
          Scenic Flights · Private Charter · Gold Coast
        </span>
        <h1>
          <span className="line">
            <span data-hero="line">See the coast</span>
          </span>
          <span className="line">
            <span data-hero="line">
              the way <span className="serif-em">pilots</span> do.
            </span>
          </span>
        </h1>
        <p className="hero-sub" data-hero="sub">
          Scenic flights and private charters over Surfers Paradise, the broadwater
          and the hinterland — lifting off from our own heliport at Marina Mirage.
          Daily, weather permitting.
        </p>
        <div className="hero-actions" data-hero="actions">
          <a href="#offers" className="btn btn-primary">
            Book now
            <ArrowRight />
          </a>
          <a href="#contact" className="btn btn-ghost">
            Enquire now
            <ArrowRight />
          </a>
        </div>
      </div>

      <div className="hero-meta">
        <span className="m-item" data-hero="meta">
          <PinIcon />
          Departs Marina Mirage
        </span>
        <span className="m-item" data-hero="meta">
          <ShieldIcon />
          CASA-certified fleet
        </span>
        <span className="m-item" data-hero="meta">
          <ClockIcon />
          8:30am – 5:00pm · 7 days
        </span>
      </div>

      <div className="scroll-cue" data-hero="cue">
        <span>Scroll</span>
        <span className="line" />
      </div>
    </section>
  );
}
