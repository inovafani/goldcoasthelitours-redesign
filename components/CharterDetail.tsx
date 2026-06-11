import { ArrowRight, CheckIcon } from "./icons";
import type { CharterService } from "./charterData";

export default function CharterDetail({ service }: { service: CharterService }) {
  const s = service;
  return (
    <main id="top">
      {/* ============ HERO ============ */}
      <section className="ch-hero">
        <div className="hero-media" data-hero-media>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={s.hero} alt={`${s.name} — Gold Coast Helitours`} />
        </div>
        <div className="hero-scrim" />
        <div className="hero-grain" />
        <div className="hero-inner">
          <span className="eyebrow reveal">Charter</span>
          <h1 className="ch-title reveal" data-delay="1">
            {s.name}
          </h1>
          <p className="ch-lead reveal" data-delay="2">
            {s.lead}
          </p>
          <div className="hero-actions reveal" data-delay="3">
            <a href="/#contact" className="btn btn-primary">
              {s.cta}
              <ArrowRight />
            </a>
            <a href="/charter" className="btn btn-ghost">
              All charters
              <ArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* ============ BODY ============ */}
      <section className="section ch-detail">
        <div className="wrap">
          <div className="ch-body reveal">
            {s.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {s.gallery && (
            <div className={`ch-gallery cols-${s.gallery.length} reveal`} data-delay="1">
              {s.gallery.map((src) => (
                <figure key={src} className="ch-shot">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt={`${s.name} — Gold Coast Helitours`} loading="lazy" />
                </figure>
              ))}
            </div>
          )}

          {s.bullets && (
            <ul className="ch-bullets reveal" data-delay="1">
              {s.bullets.map((b) => (
                <li key={b}>
                  <CheckIcon />
                  {b}
                </li>
              ))}
            </ul>
          )}

          {s.bulletsAfter && (
            <div className="ch-after reveal" data-delay="1">
              {s.bulletsAfter.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          )}

          {s.extra?.map((e) => (
            <div key={e.heading} className="ch-extra reveal">
              <span className="eyebrow center">More destinations</span>
              <h2>{e.heading}</h2>
              {e.paras.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              {e.image && (
                <figure className="ch-shot ch-extra-shot">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={e.image} alt={`${e.heading} — Gold Coast Helitours`} loading="lazy" />
                </figure>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="section sf-cta">
        <div className="wrap">
          <span className="eyebrow center reveal">Ready when you are</span>
          <h2 className="reveal" data-delay="1">
            Let&apos;s plan your flight
          </h2>
          <p className="reveal" data-delay="2">
            Get in touch with our crew and we&apos;ll tailor this charter to exactly
            what you need.
          </p>
          <div className="actions reveal" data-delay="2">
            <a href="/#contact" className="btn btn-primary">
              {s.cta}
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
