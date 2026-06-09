export default function PhotoBand() {
  return (
    <section className="photoband" id="charter">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/hero-coast.jpg"
        alt="Gold Coast Helitours helicopter over the coast"
        className="pb-img"
        data-parallax
      />
      <div className="pb-scrim" />
      <div className="pb-cap reveal">
        <span className="eyebrow">Our home base</span>
        <h3>A private heliport at Marina Mirage — ready when you are</h3>
      </div>
    </section>
  );
}
