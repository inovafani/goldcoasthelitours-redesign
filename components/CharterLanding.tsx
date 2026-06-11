import { CHARTER_SERVICES } from "./charterData";
import {
  ArrowRight,
  SurveyIcon,
  PlaneIcon,
  BriefcaseIcon,
  FlagIcon,
  CalendarStarIcon,
} from "./icons";

const ICONS = {
  survey: SurveyIcon,
  plane: PlaneIcon,
  briefcase: BriefcaseIcon,
  flag: FlagIcon,
  calendar: CalendarStarIcon,
} as const;

export default function CharterLanding() {
  return (
    <main id="top">
      {/* ============ HERO ============ */}
      <section className="ch-hero">
        <div className="hero-media" data-hero-media>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/hero-coast.jpg"
            alt="Gold Coast Helitours helicopter cruising the coastline"
          />
        </div>
        <div className="hero-scrim" />
        <div className="hero-grain" />
        <div className="hero-inner">
          <span className="eyebrow reveal">Private charter · On your schedule</span>
          <h1 className="ch-title reveal" data-delay="1">
            Charter <span className="serif-em">flights</span>
          </h1>
          <p className="ch-lead reveal" data-delay="2">
            Our fleet of luxury helicopters gives you the freedom to fly where you
            want, when you want. From corporate transfers to the grandstands of the
            GC500 — bespoke charters, tailored entirely to you.
          </p>
          <div className="hero-actions reveal" data-delay="3">
            <a href="#services" className="btn btn-primary">
              Explore charters
              <ArrowRight />
            </a>
            <a href="/#contact" className="btn btn-ghost">
              Enquire now
              <ArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section className="section ch-services" id="services">
        <div className="wrap">
          <div className="sf-head">
            <span className="eyebrow center reveal">What we offer</span>
            <h2 className="reveal" data-delay="1">
              Five ways to charter<br />
              with <span className="serif-em">Gold Coast Helitours</span>
            </h2>
            <p className="reveal" data-delay="2">
              Every charter departs from our Mirage Heliport at the heart of the city.
              Choose a service below to see how we can tailor it to you.
            </p>
          </div>

          <div className="ch-grid">
            {CHARTER_SERVICES.map((s, i) => {
              const Icon = ICONS[s.icon];
              return (
                <a
                  key={s.slug}
                  href={`/charter/${s.slug}`}
                  className="ch-card reveal"
                  data-delay={(i % 3) + 1}
                >
                  <div className="ch-card-media">
                    <span className="ch-card-ic">
                      <Icon />
                    </span>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={s.hero} alt={`${s.name} — Gold Coast Helitours`} />
                  </div>
                  <div className="ch-card-body">
                    <h3>{s.name}</h3>
                    <p>{s.short}</p>
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
            Plan your private charter
          </h2>
          <p className="reveal" data-delay="2">
            Tell us where you&apos;d like to go and when — our crew will tailor a flight
            to suit you.
          </p>
          <div className="actions reveal" data-delay="2">
            <a href="/#contact" className="btn btn-primary">
              Contact us for a quote
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
