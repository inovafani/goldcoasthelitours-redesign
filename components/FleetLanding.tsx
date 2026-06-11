import { ArrowRight } from "./icons";
import SpecialGallery from "./SpecialGallery";
import { FLEET, CABIN_GALLERY } from "./aboutData";

export default function FleetLanding() {
  return (
    <main id="top">
      {/* ============ HERO ============ */}
      <section className="ch-hero">
        <div className="hero-media" data-hero-media>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/fleet/fleet-hero.jpg" alt="Gold Coast Helitours fleet at the Marina Mirage heliport" />
        </div>
        <div className="hero-scrim" />
        <div className="hero-grain" />
        <div className="hero-inner">
          <span className="eyebrow reveal">Our fleet</span>
          <h1 className="ch-title reveal" data-delay="1">
            A fleet built for <span className="serif-em">every mission</span>
          </h1>
          <p className="ch-lead reveal" data-delay="2">
            Seven modern jet-turbine and piston helicopters — plus Australia&apos;s only
            registered mobile marine helipad — maintained to an impeccable standard and
            ready to fly direct from the heart of the Gold Coast.
          </p>
          <div className="hero-actions reveal" data-delay="3">
            <a href="#fleet" className="btn btn-primary">
              Meet the aircraft
              <ArrowRight />
            </a>
            <a href="/#contact" className="btn btn-ghost">
              Enquire now
              <ArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* ============ FLEET GRID ============ */}
      <section className="section fleet-section" id="fleet">
        <div className="wrap">
          <div className="sf-head">
            <span className="eyebrow center reveal">The aircraft</span>
            <h2 className="reveal" data-delay="1">
              Modern jet-turbine &amp;
              <br />
              <span className="serif-em">piston helicopters</span>
            </h2>
            <p className="reveal" data-delay="2">
              Each aircraft is configured for comfort and finished with leather interiors,
              air-conditioning and a Bose audio system — so the view is the only thing on
              your mind.
            </p>
          </div>

          <div className="fleet-grid">
            {FLEET.map((a, i) => (
              <article key={a.reg} className="fleet-card reveal" data-delay={(i % 3) + 1}>
                <div className="fleet-card-media">
                  <span className="fleet-tag">{a.category}</span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={a.image}
                    alt={`${a.model} ${a.reg} — Gold Coast Helitours`}
                    loading="lazy"
                    style={a.imagePos ? { objectPosition: a.imagePos } : undefined}
                  />
                  <span className="fleet-reg">{a.reg}</span>
                </div>
                <div className="fleet-card-body">
                  <h3>
                    {a.model}
                    {a.variant && <span className="fleet-variant"> {a.variant}</span>}
                  </h3>
                  <span className="fleet-seats">{a.seats}</span>
                  <p className="fleet-desc">{a.desc}</p>
                  {a.note && <p className="fleet-note">{a.note}</p>}
                  <dl className="fleet-specs">
                    <div>
                      <dt>Engine</dt>
                      <dd>{a.engine}</dd>
                    </div>
                    <div>
                      <dt>Range</dt>
                      <dd>{a.range}</dd>
                    </div>
                    <div>
                      <dt>Cruise</dt>
                      <dd>{a.cruise}</dd>
                    </div>
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ MV HELITOURS ============ */}
      <section className="section fleet-marine-section">
        <div className="wrap">
          <div className="fleet-marine reveal">
            <figure className="fleet-marine-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/fleet/mv-helitours.jpg"
                alt="MV Helitours — Australia's only registered mobile marine helipad"
                loading="lazy"
              />
            </figure>
            <div className="fleet-marine-body">
              <span className="eyebrow">On the water</span>
              <h3>MV Helitours</h3>
              <p>
                Gold Coast Helitours presents Australia&apos;s only officially registered
                mobile marine helipad. Powered by twin V4 115 bhp outboards, MV Helitours
                can cruise at 15 knots with a helicopter on board.
              </p>
              <p>
                She is the ideal marine environment for our fleet to work from — a certified
                platform that lets us operate for any occasion near the water.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CABIN GALLERY ============ */}
      <section className="section fleet-cabin">
        <div className="wrap">
          <div className="sf-head">
            <span className="eyebrow center reveal">Inside the cabin</span>
            <h2 className="reveal" data-delay="1">
              Comfort at <span className="serif-em">altitude</span>
            </h2>
          </div>
          <SpecialGallery images={CABIN_GALLERY} title="Gold Coast Helitours cabins" />
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="section sf-cta">
        <div className="wrap">
          <span className="eyebrow center reveal">Ready when you are</span>
          <h2 className="reveal" data-delay="1">
            Choose your aircraft
          </h2>
          <p className="reveal" data-delay="2">
            Tell us where you&apos;re headed and how many are flying — we&apos;ll match the
            right helicopter from our fleet.
          </p>
          <div className="actions reveal" data-delay="2">
            <a href="/#contact" className="btn btn-primary">
              Enquire now
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
