import { AwardIcon } from "./icons";

export default function Aero() {
  return (
    <section className="section aero" id="aero">
      <div className="wrap">
        <div className="aero-grid">
          <div className="aero-head reveal">
            <span className="eyebrow">Who we are</span>
            <h2>
              Aeronautical
              <br />
              excellence
            </h2>
          </div>
          <div className="aero-copy reveal" data-delay="1">
            <p>
              Gold Coast Helitours and its fleet of helicopters offers a complete
              aeronautical solution for both corporate and private clients, direct
              from its heliport at the heart of the Gold Coast City.
            </p>
            <p>
              With a crew of experienced pilots and ground staff operating a diverse
              range of luxury helicopters, we can cater for all your aviation needs.
              From custom charters, airport transfers, aerial filming and fire fighting
              to skydives or scenic flights across the region&apos;s hinterland, beaches
              and attractions, we are the choice of corporations, governments and
              fun-seekers alike.
            </p>
          </div>
        </div>

        <div className="aero-stats reveal" data-delay="1">
          <div className="aero-stat">
            <span className="num">
              <span data-count="30" data-suffix="+">30</span>
            </span>
            <span className="lbl">Years of experience</span>
          </div>
          <div className="aero-stat">
            <span className="num">
              <span data-count="100" data-suffix="%">100</span>
            </span>
            <span className="lbl">Safety record</span>
          </div>
          <div className="aero-stat">
            <span className="num">
              <AwardIcon />
            </span>
            <span className="lbl">Operational excellence</span>
          </div>
        </div>

        <div className="aero-badges reveal" data-delay="2">
          <span className="b-label">
            Recommended by travellers · Best of Queensland Experience
          </span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/badge-2024.png" alt="Best of Queensland Experience 2024" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/badge-2023.png" alt="Best of Queensland Experience 2023" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/badge-2025.png" alt="Best of Queensland Experience 2025" />
        </div>
      </div>
    </section>
  );
}
