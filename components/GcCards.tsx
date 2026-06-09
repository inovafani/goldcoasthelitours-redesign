export default function GcCards() {
  return (
    <section className="gccards">
      <div className="wrap">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/gc-cards.png" alt="GC Cards — Gold Coast" className="reveal" />
        <div className="gc-divider" />
        <div className="gc-text reveal" data-delay="1">
          <span className="lbl">Booking with a LOVE GC card</span>
          <span className="num">
            Please call <a href="tel:+61755918457">(07) 5591 8457</a>
          </span>
        </div>
      </div>
    </section>
  );
}
