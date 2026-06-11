import { ArrowRight, CheckIcon } from "./icons";
import SpecialGallery from "./SpecialGallery";
import type { SpecOp } from "./specialisedData";

export default function SpecialisedDetail({ op }: { op: SpecOp }) {
  const s = op;
  return (
    <main id="top">
      {/* ============ HERO ============ */}
      <section className="ch-hero">
        <div className="hero-media" data-hero-media>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={s.hero}
            alt={`${s.name} — Gold Coast Helitours`}
            style={s.heroPos ? { objectPosition: s.heroPos } : undefined}
          />
        </div>
        <div className="hero-scrim" />
        <div className="hero-grain" />
        <div className="hero-inner">
          <span className="eyebrow reveal">{s.eyebrow}</span>
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
            <a href="/specialised-operations" className="btn btn-ghost">
              All operations
              <ArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* ============ BODY ============ */}
      <section className="section so-detail">
        <div className="wrap">
          <div className="so-intro reveal">
            {s.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* alternating feature rows */}
          {s.features && s.features.length > 0 && (
            <div className="so-features">
              {s.features.map((f, i) => (
                <div
                  key={f.image + i}
                  className={`so-feature reveal${i % 2 === 1 ? " rev" : ""}`}
                >
                  <figure className={`so-feat-media${f.aspect ? ` ${f.aspect}` : ""}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={f.image} alt={f.alt || `${s.name} — Gold Coast Helitours`} loading="lazy" />
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

          {/* bullet capability list */}
          {s.bullets && (
            <div className="so-caps reveal">
              {s.bullets.lead && <p className="so-caps-lead">{s.bullets.lead}</p>}
              <ul className="ch-bullets">
                {s.bullets.items.map((b) => (
                  <li key={b}>
                    <CheckIcon />
                    {b}
                  </li>
                ))}
              </ul>
              {s.bullets.after && (
                <div className="ch-after">
                  {s.bullets.after.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* camera systems / equipment */}
          {s.equipment && s.equipment.length > 0 && (
            <div className="so-equip reveal">
              <span className="eyebrow center">Camera systems</span>
              <div className="so-equip-grid">
                {s.equipment.map((e) => (
                  <span key={e} className="so-chip">
                    {e}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* gallery with lightbox */}
          {s.gallery && s.gallery.length > 0 && (
            <SpecialGallery images={s.gallery} title={s.name} />
          )}

          {/* selected credits */}
          {s.credits && s.credits.length > 0 && (
            <div className="so-credits-wrap reveal">
              <span className="eyebrow center">Selected credits</span>
              <div className="so-credits">
                {s.credits.map((c) => (
                  <div key={c.title} className="so-credit-col">
                    <h4>{c.title}</h4>
                    <ul>
                      {c.items.map((it) => (
                        <li key={it}>{it}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="section sf-cta">
        <div className="wrap">
          <span className="eyebrow center reveal">Ready when you are</span>
          <h2 className="reveal" data-delay="1">
            Let&apos;s get to work
          </h2>
          <p className="reveal" data-delay="2">
            Get in touch with our crew and we&apos;ll tailor the right aircraft, rating
            and team to your operation.
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
