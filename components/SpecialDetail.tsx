import { ArrowRight, PinIcon } from "./icons";
import SpecialGallery from "./SpecialGallery";
import type { Occasion } from "./specialData";

export default function SpecialDetail({ occasion }: { occasion: Occasion }) {
  const o = occasion;
  return (
    <main id="top">
      {/* ============ HERO ============ */}
      <section className="ch-hero">
        <div className="hero-media" data-hero-media>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={o.hero}
            alt={`${o.name} — Gold Coast Helitours`}
            style={o.heroPos ? { objectPosition: o.heroPos } : undefined}
          />
        </div>
        <div className="hero-scrim" />
        <div className="hero-grain" />
        <div className="hero-inner">
          <span className="eyebrow reveal">{o.eyebrow}</span>
          <h1 className="ch-title reveal" data-delay="1">
            {o.name}
          </h1>
          <p className="ch-lead reveal" data-delay="2">
            {o.lead}
          </p>
          <div className="hero-actions reveal" data-delay="3">
            <a href="/#contact" className="btn btn-primary">
              {o.cta}
              <ArrowRight />
            </a>
            <a href="/special-occasions" className="btn btn-ghost">
              All occasions
              <ArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* ============ BODY ============ */}
      <section className="section so-detail">
        <div className="wrap">
          <div className="so-intro reveal">
            {o.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* alternating feature rows */}
          {o.features && o.features.length > 0 && (
            <div className="so-features">
              {o.features.map((f, i) => (
                <div
                  key={f.image + i}
                  className={`so-feature reveal${i % 2 === 1 ? " rev" : ""}`}
                >
                  <figure className={`so-feat-media${f.aspect ? ` ${f.aspect}` : ""}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={f.image} alt={f.alt || `${o.name} — Gold Coast Helitours`} loading="lazy" />
                  </figure>
                  <div className="so-feat-body">
                    {f.heading && <h3>{f.heading}</h3>}
                    {f.paras.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* pricing card */}
          {o.pricing && (
            <div className="so-price reveal">
              <span className="eyebrow center">The experience</span>
              <h3 className="so-price-head">{o.pricing.headline}</h3>
              <p className="so-price-intro">{o.pricing.intro}</p>
              <ul className="so-price-options">
                {o.pricing.options.map((opt) => (
                  <li key={opt.label}>
                    <span className="so-opt-label">{opt.label}</span>
                    <span className="so-opt-value">{opt.value}</span>
                  </li>
                ))}
              </ul>
              {o.pricing.note && (
                <p className="so-price-note">
                  {o.pricing.note}{" "}
                  {o.pricing.noteLink && (
                    <a href={o.pricing.noteLink.href}>{o.pricing.noteLink.label}</a>
                  )}
                </p>
              )}
            </div>
          )}

          {/* venue list */}
          {o.venues && o.venues.length > 0 && (
            <div className="so-venues">
              {o.venues.map((v, i) => (
                <article
                  key={v.name}
                  className={`so-venue reveal${i % 2 === 1 ? " rev" : ""}`}
                >
                  <figure className="so-venue-media">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={v.image} alt={`${v.name}, ${v.location}`} loading="lazy" />
                  </figure>
                  <div className="so-venue-body">
                    <span className="so-venue-loc">
                      <PinIcon />
                      {v.location}
                    </span>
                    <h3>{v.name}</h3>
                    {v.paras.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* gallery with lightbox */}
          {o.gallery && o.gallery.length > 0 && (
            <SpecialGallery images={o.gallery} title={o.name} />
          )}
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="section sf-cta">
        <div className="wrap">
          <span className="eyebrow center reveal">Ready when you are</span>
          <h2 className="reveal" data-delay="1">
            Let&apos;s make it unforgettable
          </h2>
          <p className="reveal" data-delay="2">
            Get in touch with our crew and we&apos;ll tailor this experience to exactly
            what you have in mind.
          </p>
          <div className="actions reveal" data-delay="2">
            <a href="/#contact" className="btn btn-primary">
              {o.cta}
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
