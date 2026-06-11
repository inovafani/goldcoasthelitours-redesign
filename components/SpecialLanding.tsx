import { OCCASIONS } from "./specialData";
import {
  ArrowRight,
  PicnicIcon,
  RingIcon,
  HeartIcon,
  WineIcon,
} from "./icons";

const ICONS = {
  picnic: PicnicIcon,
  ring: RingIcon,
  heart: HeartIcon,
  wine: WineIcon,
} as const;

export default function SpecialLanding() {
  return (
    <main id="top">
      {/* ============ HERO ============ */}
      <section className="ch-hero">
        <div className="hero-media" data-hero-media>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/special/picnic-champagne.jpg"
            alt="Champagne on ice above the Gold Coast skyline"
          />
        </div>
        <div className="hero-scrim" />
        <div className="hero-grain" />
        <div className="hero-inner">
          <span className="eyebrow reveal">Special occasions</span>
          <h1 className="ch-title reveal" data-delay="1">
            Once-in-a-lifetime <span className="serif-em">moments</span>
          </h1>
          <p className="ch-lead reveal" data-delay="2">
            An island picnic for two, a proposal written across the sand, a grand
            wedding arrival, or a hinterland escape to a world-class winery — we turn
            your milestone into something unforgettable.
          </p>
          <div className="hero-actions reveal" data-delay="3">
            <a href="#occasions" className="btn btn-primary">
              Explore occasions
              <ArrowRight />
            </a>
            <a href="/#contact" className="btn btn-ghost">
              Enquire now
              <ArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* ============ OCCASIONS ============ */}
      <section className="section ch-services" id="occasions">
        <div className="wrap">
          <div className="sf-head">
            <span className="eyebrow center reveal">What we create</span>
            <h2 className="reveal" data-delay="1">
              Four ways to mark the
              <br />
              moments that <span className="serif-em">matter</span>
            </h2>
            <p className="reveal" data-delay="2">
              Every experience departs from our Mirage Heliport at the heart of the
              city. Choose an occasion below to see how we tailor it to you.
            </p>
          </div>

          <div className="ch-grid">
            {OCCASIONS.map((o, i) => {
              const Icon = ICONS[o.icon];
              return (
                <a
                  key={o.slug}
                  href={`/special-occasions/${o.slug}`}
                  className="ch-card reveal"
                  data-delay={(i % 3) + 1}
                >
                  <div className="ch-card-media">
                    <span className="ch-card-ic">
                      <Icon />
                    </span>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={o.card} alt={`${o.name} — Gold Coast Helitours`} />
                  </div>
                  <div className="ch-card-body">
                    <h3>{o.name}</h3>
                    <p>{o.short}</p>
                    <span className="ch-card-link">
                      Learn more
                      <ArrowRight />
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="section sf-cta">
        <div className="wrap">
          <span className="eyebrow center reveal">Ready when you are</span>
          <h2 className="reveal" data-delay="1">
            Let&apos;s plan your special day
          </h2>
          <p className="reveal" data-delay="2">
            Tell us what you have in mind and our crew will craft a bespoke experience
            around it.
          </p>
          <div className="actions reveal" data-delay="2">
            <a href="/#contact" className="btn btn-primary">
              Contact us for more information
              <ArrowRight />
            </a>
            <a href="tel:+61755918457" className="btn btn-ghost">
              Call (+61) 07 5591 8457
              <ArrowRight />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
