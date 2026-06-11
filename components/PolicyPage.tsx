import { ArrowRight, MailIcon, PhoneIcon, PinIcon } from "./icons";
import type { Block, PolicySection } from "./aboutData";

function slug(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        if (b.kind === "p") return <p key={i}>{b.text}</p>;
        if (b.kind === "h") return <h4 key={i}>{b.text}</h4>;
        return (
          <ul key={i} className="policy-list">
            {b.items.map((it) => (
              <li key={it}>{it}</li>
            ))}
          </ul>
        );
      })}
    </>
  );
}

export type PolicyContact = { address: string; email: string; phone: string };

export default function PolicyPage({
  eyebrow,
  title,
  titleEm,
  lead,
  intro,
  sections,
  contact,
}: {
  eyebrow: string;
  title: string;
  titleEm: string;
  lead: string;
  intro?: string[];
  sections: PolicySection[];
  contact?: PolicyContact;
}) {
  return (
    <main id="top">
      {/* ============ COMPACT HERO ============ */}
      <header className="about-hero">
        <div className="hero-grain" />
        <div className="wrap about-hero-inner">
          <span className="eyebrow center reveal">{eyebrow}</span>
          <h1 className="reveal" data-delay="1">
            {title} <span className="serif-em">{titleEm}</span>
          </h1>
          <p className="reveal" data-delay="2">
            {lead}
          </p>
        </div>
      </header>

      {/* ============ BODY ============ */}
      <section className="section policy-section-wrap">
        <div className="wrap policy-layout">
          <nav className="policy-toc" aria-label="On this page">
            <span className="policy-toc-label">On this page</span>
            <ol>
              {sections.map((s) => (
                <li key={s.title}>
                  <a href={`#${slug(s.title)}`}>{s.title}</a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="policy-body">
            {intro && intro.length > 0 && (
              <div className="policy-intro reveal">
                {intro.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            )}

            {sections.map((s, i) => (
              <article key={s.title} id={slug(s.title)} className="policy-block reveal">
                <header className="policy-block-head">
                  <span className="policy-num">{String(i + 1).padStart(2, "0")}</span>
                  <h2>{s.title}</h2>
                </header>
                <div className="policy-block-body">
                  <Blocks blocks={s.blocks} />
                </div>
              </article>
            ))}

            {contact && (
              <aside className="policy-contact reveal">
                <span className="eyebrow">Get in touch</span>
                <ul>
                  <li>
                    <PinIcon />
                    <span>{contact.address}</span>
                  </li>
                  <li>
                    <MailIcon />
                    <a href={`mailto:${contact.email}`}>{contact.email}</a>
                  </li>
                  <li>
                    <PhoneIcon />
                    <a href={`tel:${contact.phone.replace(/[^0-9+]/g, "")}`}>{contact.phone}</a>
                  </li>
                </ul>
              </aside>
            )}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="section sf-cta">
        <div className="wrap">
          <span className="eyebrow center reveal">Have a question?</span>
          <h2 className="reveal" data-delay="1">
            We&apos;re here to help
          </h2>
          <p className="reveal" data-delay="2">
            If anything here needs clarifying before you book, our team will happily talk it
            through.
          </p>
          <div className="actions reveal" data-delay="2">
            <a href="/#contact" className="btn btn-primary">
              Contact us
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
