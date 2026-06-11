import { ArrowRight } from "./icons";

export default function Facilities() {
  return (
    <main id="top">
      {/* ============ HERO ============ */}
      <section className="ch-hero">
        <div className="hero-media" data-hero-media>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/facilities/hero.jpg"
            alt="Inside the Gold Coast Helitours engineering hangar"
            style={{ objectPosition: "center 40%" }}
          />
        </div>
        <div className="hero-scrim" />
        <div className="hero-grain" />
        <div className="hero-inner">
          <span className="eyebrow reveal">About us</span>
          <h1 className="ch-title reveal" data-delay="1">
            Built for <span className="serif-em">airborne operations</span>
          </h1>
          <p className="ch-lead reveal" data-delay="2">
            A purpose-built heliport in the heart of the Gold Coast, a dedicated engineering
            base, and an infrastructure unmatched in the region — the foundations behind
            more than thirty years of safe flying.
          </p>
          <div className="hero-actions reveal" data-delay="3">
            <a href="/our-fleet" className="btn btn-primary">
              See the fleet
              <ArrowRight />
            </a>
            <a href="/#contact" className="btn btn-ghost">
              Get directions
              <ArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* ============ INTRO ============ */}
      <section className="section so-detail fac">
        <div className="wrap">
          <div className="so-intro reveal">
            <p>
              Established in 1992, Gold Coast Helitours is the area&apos;s largest private
              helicopter operator, owned and operated by well-known local businessman Scott
              Menzies.
            </p>
            <p>
              With an impeccable maintenance and safety record across more than thirty years
              of commercial operations — and an engineering and operational infrastructure
              unmatched in the region — Gold Coast Helitours is equipped like no other
              operator to offer corporate charter, joy flight and aerial work services.
            </p>
          </div>

          {/* stats strip */}
          <div className="fac-stats reveal" data-delay="1">
            <div className="fac-stat">
              <span className="num">1992</span>
              <span className="lbl">Established</span>
            </div>
            <div className="fac-stat">
              <span className="num">4</span>
              <span className="lbl">Helicopters housed on site</span>
            </div>
            <div className="fac-stat">
              <span className="num">24 / 7</span>
              <span className="lbl">On-site security patrols</span>
            </div>
            <div className="fac-stat">
              <span className="num">30+</span>
              <span className="lbl">Years of operations</span>
            </div>
          </div>

          {/* feature rows */}
          <div className="so-features">
            <div className="so-feature reveal">
              <figure className="so-feat-media wide">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/facilities/heliport.jpg"
                  alt="The Marina Mirage heliport at dusk"
                  loading="lazy"
                />
              </figure>
              <div className="so-feat-body">
                <h3>Marina Mirage headquarters</h3>
                <p>
                  Our operational headquarters sit at the Marina Mirage Heliport, in the
                  heart of the Gold Coast&apos;s business and tourist district — a
                  state-of-the-art, purpose-built hangar housing four of the company&apos;s
                  helicopters, with fuel supply systems, security monitoring, alarms and
                  24-hour on-site security patrols.
                </p>
                <p>
                  Located on the eastern side of the Broadwater with its own mooring
                  facilities, the base is unique in the region — landing pads for up to four
                  helicopters at once, plus executive offices and lounges. The pads carry
                  full night-landing capacity with navigation and flood lighting for ultimate
                  convenience and safety.
                </p>
              </div>
            </div>

            <div className="so-feature rev reveal">
              <figure className="so-feat-media wide">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/fleet/mv-helitours.jpg"
                  alt="MV Helitours — the mobile marine helicopter landing pad"
                  loading="lazy"
                />
              </figure>
              <div className="so-feat-body">
                <h3>A helipad that goes to sea</h3>
                <p>
                  Gold Coast Helitours owns and operates a fully mobile marine helicopter
                  landing pad — purpose-built on a fully approved and surveyed motorised
                  pontoon.
                </p>
                <p>
                  It lets us position special operations anywhere within the area&apos;s
                  waterways at very short notice, opening up locations no fixed base could
                  reach.
                </p>
              </div>
            </div>
          </div>

          {/* closing prose */}
          <div className="fac-close reveal">
            <p>
              A major player in the tourism sector, Gold Coast Helitours provides joy flights
              and entertainment packages for domestic and international visitors alike. As the
              operator of choice for major Queensland events — the Gold Coast 500 Supercars
              and the Sanctuary Cove International Boat Show among them — we are the only
              city-based commercial helicopter company with the capacity to move large numbers
              of passengers to and from major events on a non-stop rotating basis.
            </p>
            <p>
              Behind the scenes, our engineering base at Southport — remote from the operations
              base — is a large, dedicated facility where our engineering staff carry out
              preventative and routine maintenance across the entire fleet. It is this
              infrastructure, and our professional presentation, that has earned a reputation
              for efficiency and safety.
            </p>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="section sf-cta">
        <div className="wrap">
          <span className="eyebrow center reveal">Come and see us</span>
          <h2 className="reveal" data-delay="1">
            Visit the heliport
          </h2>
          <p className="reveal" data-delay="2">
            Find us at Marina Mirage, Seaworld Drive, Main Beach — a short drive from Surfers
            Paradise, with tram, ferry, bus and taxi access nearby.
          </p>
          <div className="actions reveal" data-delay="2">
            <a href="/#contact" className="btn btn-primary">
              Get directions
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
