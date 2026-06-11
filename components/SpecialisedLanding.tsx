import { SPEC_OPS } from "./specialisedData";
import {
  ArrowRight,
  CameraIcon,
  BannerIcon,
  FlameIcon,
  AnchorIcon,
  FilmIcon,
  RescueIcon,
  CraneIcon,
} from "./icons";

const ICONS = {
  camera: CameraIcon,
  banner: BannerIcon,
  flame: FlameIcon,
  anchor: AnchorIcon,
  film: FilmIcon,
  rescue: RescueIcon,
  crane: CraneIcon,
} as const;

export default function SpecialisedLanding() {
  return (
    <main id="top">
      {/* ============ HERO ============ */}
      <section className="ch-hero">
        <div className="hero-media" data-hero-media>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/specialised/mpf-hero.jpg"
            alt="Helicopter rigged with a stabilised camera platform"
          />
        </div>
        <div className="hero-scrim" />
        <div className="hero-grain" />
        <div className="hero-inner">
          <span className="eyebrow reveal">Specialised operations</span>
          <h1 className="ch-title reveal" data-delay="1">
            Beyond the <span className="serif-em">scenic flight</span>
          </h1>
          <p className="ch-lead reveal" data-delay="2">
            Aerial film platforms, fire fighting, search &amp; rescue, sky-crane
            lifting and Australia&apos;s only registered marine helipad. When the job
            demands a helicopter, our fleet and crews deliver.
          </p>
          <div className="hero-actions reveal" data-delay="3">
            <a href="#operations" className="btn btn-primary">
              Explore operations
              <ArrowRight />
            </a>
            <a href="/#contact" className="btn btn-ghost">
              Enquire now
              <ArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* ============ OPERATIONS ============ */}
      <section className="section ch-services" id="operations">
        <div className="wrap">
          <div className="sf-head">
            <span className="eyebrow center reveal">What we do</span>
            <h2 className="reveal" data-delay="1">
              Seven specialised
              <br />
              <span className="serif-em">capabilities</span>
            </h2>
            <p className="reveal" data-delay="2">
              Three decades of experience, a modern jet-turbine fleet and
              specially-rated pilots. Choose an operation below to learn more.
            </p>
          </div>

          <div className="ch-grid">
            {SPEC_OPS.map((s, i) => {
              const Icon = ICONS[s.icon];
              return (
                <a
                  key={s.slug}
                  href={`/specialised-operations/${s.slug}`}
                  className="ch-card reveal"
                  data-delay={(i % 3) + 1}
                >
                  <div className="ch-card-media">
                    <span className="ch-card-ic">
                      <Icon />
                    </span>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={s.card} alt={`${s.name} — Gold Coast Helitours`} />
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
            Put our fleet to work
          </h2>
          <p className="reveal" data-delay="2">
            Tell us about your project — film shoot, lift job, survey or mission —
            and our crew will tailor the right aircraft and team.
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
