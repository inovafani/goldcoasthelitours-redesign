export default function PhotoBand() {
  return (
    <section className="photoband" id="charter">
      {/* Parallax animates this <img> via [data-parallax] and needs the 120%
          overflow height from CSS, so it stays a plain img (not next/image). */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/fleet/fleet-hero.jpg"
        alt="Gold Coast Helitours helicopter over the coast"
        className="pb-img"
        data-parallax
        loading="lazy"
        decoding="async"
      />
      <div className="pb-scrim" />
      <div className="pb-cap reveal">
        <span className="eyebrow">Our home base</span>
        <h3>A private heliport at Marina Mirage — ready when you are</h3>
      </div>
    </section>
  );
}
