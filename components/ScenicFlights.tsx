import { ArrowRight } from "./icons";

type Tour = {
  n: string;
  id: string;
  route: string;
  title: string;
  mins: number;
  adult: number;
  child: number;
  img: string;
  book: string;
  map: string;
  desc: string;
};

const OVERVIEW_MAP =
  "https://www.google.com/maps/d/embed?mid=1z7v-XDTakLIDd7rmScCPdO7Zf3rfT1s&ehbc=2E312F&noprof=1";

const TOURS: Tour[] = [
  {
    n: "01",
    id: "tour-1",
    route: "Broadwater Scenic",
    title: "Tour 1",
    mins: 5,
    adult: 85,
    child: 75,
    img: "/assets/tours/tour1.jpg",
    book: "https://goldcoasthelitours.rezdy.com/catalog/60270/tour-1-5-minute-flight",
    map: "https://www.google.com/maps/d/u/0/embed?mid=1PTSR6D90mFiW_lmP2KC_5iUsDpnWM5s&ehbc=2E312F&noprof=1",
    desc: "Departs our heliport and climbs out over Main Beach, viewing the Sheraton Hotel and Sea World, then tracks over the Broadwater via Wave Break Island and South Stradbroke Island before returning for a landing at Mirage Heliport.",
  },
  {
    n: "02",
    id: "tour-2",
    route: "Local City Scenic",
    title: "Tour 2",
    mins: 10,
    adult: 155,
    child: 135,
    img: "/assets/tours/tour2.jpg",
    book: "https://goldcoasthelitours.rezdy.com/catalog/60271/tour-2-10-minute-flight",
    map: "https://www.google.com/maps/d/u/0/embed?mid=1AzREiKJRRxyEE7UWMvgEfTdoA89HejA&ehbc=2E312F&noprof=1",
    desc: "Departs Mirage Heliport via the Gold Coast Turf Club, The Star Casino and Broadbeach before turning north along the foreshores of Surfers Paradise, Main Beach, Sea World and South Stradbroke Island, then returning over the Broadwater.",
  },
  {
    n: "03",
    id: "tour-3",
    route: "Golf Course Scenic",
    title: "Tour 3",
    mins: 15,
    adult: 235,
    child: 205,
    img: "/assets/tours/tour3.jpg",
    book: "https://goldcoasthelitours.rezdy.com/catalog/60272/tour-3-15-minute-flight",
    map: "https://www.google.com/maps/d/u/0/embed?mid=1J6AKNqJ8WD0X2M1UGLoELRQPngQILjA&ehbc=2E312F&noprof=1",
    desc: "Departs for the magnificent Royal Pines, heading south to Bond Uni and Robina, across via The Star Casino & Broadbeach before turning north along the foreshores of Surfers Paradise, Main Beach, Sea World and South Stradbroke Island.",
  },
  {
    n: "04",
    id: "tour-4",
    route: "Stadium & Island",
    title: "Tour 4",
    mins: 20,
    adult: 295,
    child: 275,
    img: "/assets/tours/tour4.jpg",
    book: "https://goldcoasthelitours.rezdy.com/catalog/60273/tour-4-20-minute-flight",
    map: "https://www.google.com/maps/d/u/0/embed?mid=1OXQfINc1j22sQsONUNGgnFkme5T7FA0&ehbc=2E312F&noprof=1",
    desc: "Departs northbound over Sea World to Sovereign Islands via Runaway Bay, turning west for Royal Pines, Robina Town Centre and Bond Uni before descending overhead 'Millionaires Row' Hedges Avenue — flying coastal past The Star Casino, Q1 and Surfers Paradise.",
  },
  {
    n: "05",
    id: "tour-5",
    route: "Hinze Dam & Island",
    title: "Tour 5",
    mins: 25,
    adult: 345,
    child: 325,
    img: "/assets/tours/tour5.jpg",
    book: "https://goldcoasthelitours.rezdy.com/catalog/106935/tour-5-25-minute-flight",
    map: "https://www.google.com/maps/d/u/0/embed?mid=1Cv8DKXh2C4jxAB0fromIy9Ay1riVSfg&ehbc=2E312F&noprof=1",
    desc: "Departs westbound via the Gold Coast Turf Club and Royal Pines for spectacular views of the Hinze Dam and hinterland, before tracking east via The Star Casino, the Surfers Paradise beaches, Sea World and Sovereign Islands.",
  },
  {
    n: "06",
    id: "tour-6",
    route: "Theme Parks Scenic",
    title: "Tour 6",
    mins: 30,
    adult: 395,
    child: 375,
    img: "/assets/tours/tour6.jpg",
    book: "https://goldcoasthelitours.rezdy.com/catalog/60274/tour-6-30-minute-flight",
    map: "https://www.google.com/maps/d/u/0/embed?mid=1cpnaHXWLfp9trKuCOFyZDvN0ua03YP4&ehbc=2E312F&noprof=1",
    desc: "Departs northbound via South Stradbroke Island, Sovereign Islands, Sanctuary Cove and Coomera, then on to Dreamworld — tracking south over Movie World, Royal Pines, Robina and Bond Uni across to Nobby Beach, flying low along the beaches home.",
  },
  {
    n: "07",
    id: "tour-7",
    route: "Ultimate G.C. Scenic",
    title: "Tour 7",
    mins: 45,
    adult: 595,
    child: 575,
    img: "/assets/tours/tour7.jpg",
    book: "https://goldcoasthelitours.rezdy.com/catalog/60275/tour-7-45-minute-flight",
    map: "https://www.google.com/maps/d/u/0/embed?mid=17Fp1C_4ZYuWHZGYUBjGGL343QSFRr1k&ehbc=2E312F&noprof=1",
    desc: "Departs for Royal Pines, Tallebudgera and Currumbin Valleys, across to fly low over the Tweed River to Fingal and Point Danger — tracking the coast past the Gold Coast Airport, Currumbin, Burleigh Heads, Q1, Surfers Paradise, the theme parks and Sea World.",
  },
];

export default function ScenicFlights() {
  return (
    <main id="top">
      {/* ============ HERO ============ */}
      <section className="sf-hero">
        <div className="hero-media" data-hero-media>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/hero-coast.jpg"
            alt="Gold Coast Helitours helicopter over the coast at golden hour"
          />
        </div>
        <div className="hero-scrim" />
        <div className="hero-grain" />
        <div className="hero-inner">
          <span className="eyebrow reveal">Daily · Weather permitting · From $85pp</span>
          <h1 className="sf-title reveal" data-delay="1">
            Scenic <span className="serif-em">flights</span>
          </h1>
          <p className="sf-lead reveal" data-delay="2">
            With three decades of experience operating on the Gold Coast and a 100%
            safety record, we are the carrier of choice to experience the region&apos;s
            landscapes. Our luxurious helicopters sweep you across the picturesque
            waterways, rolling hills and golden beaches — including the towering high
            rises the Gold Coast is famous for.
          </p>
          <div className="hero-actions reveal" data-delay="3">
            <a href="#tour-1" className="btn btn-primary">
              View flights
              <ArrowRight />
            </a>
            <a href="/#contact" className="btn btn-ghost">
              Enquire now
              <ArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* ============ TOURS ============ */}
      <section className="section sf-tours">
        <div className="wrap">
          <div className="sf-head">
            <span className="eyebrow center reveal">Choose your flight</span>
            <h2 className="reveal" data-delay="1">
              Seven ways to see<br />
              the <span className="serif-em">Gold Coast</span>
            </h2>
            <p className="reveal" data-delay="2">
              From a quick lift over the Broadwater to the ultimate 45-minute coastal
              epic — every flight departs and returns from our Mirage Heliport.
            </p>
          </div>

          {/* all-routes overview map (above the tours) */}
          <div className="sf-overview">
            <div className="ov-head reveal">
              <span className="eyebrow center">Every route, one map</span>
              <h3>Gold Coast Helitours route map</h3>
            </div>
            <div className="sf-routemap reveal" data-delay="1">
              <iframe
                title="Gold Coast Helitours route map"
                loading="lazy"
                src={OVERVIEW_MAP}
              />
            </div>
          </div>

          {/* quick index */}
          <div className="sf-index reveal" data-delay="1">
            {TOURS.map((t) => (
              <a key={t.id} className="sf-chip" href={`#${t.id}`}>
                <span className="num">{t.n}</span>
                <span className="nm">{t.route}</span>
                <span className="min">{t.mins} min</span>
              </a>
            ))}
          </div>

          {/* tour rows */}
          <div className="tour-list">
            {TOURS.map((t, i) => (
              <article key={t.id} id={t.id} className="tour-card reveal" data-delay={(i % 2) + 1}>
                <div className="tour-media">
                  <span className="t-index">{t.n}</span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={t.img} alt={`${t.title} — ${t.route} over the Gold Coast`} />
                </div>

                <div className="tour-body">
                  <span className="route">{t.route}</span>
                  <h3>{t.title}</h3>
                  <div className="tour-dur">Approx {t.mins} minutes</div>
                  <div className="tour-price">
                    <div className="p">
                      <span className="k">Adult</span>
                      <span className="v">
                        <span>$</span>
                        {t.adult}
                      </span>
                    </div>
                    <div className="p">
                      <span className="k">Child</span>
                      <span className="v">
                        <span>$</span>
                        {t.child}
                      </span>
                    </div>
                  </div>
                  <p className="tour-desc">{t.desc}</p>
                  <div className="tour-min">Per person · Minimum 2 adults</div>
                  <a
                    href={t.book}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn btn-dark btn-sm tour-book"
                  >
                    Book tour {t.n.replace(/^0/, "")}
                    <ArrowRight />
                  </a>
                </div>

                <div className="tour-map">
                  <span className="m-tag">Route · {t.route}</span>
                  <iframe title={`${t.title} route map`} loading="lazy" src={t.map} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="section sf-cta">
        <div className="wrap">
          <span className="eyebrow center reveal">Ready when you are</span>
          <h2 className="reveal" data-delay="1">
            Lift off from Marina Mirage
          </h2>
          <p className="reveal" data-delay="2">
            Book direct with our team, or get in touch and we&apos;ll help you choose
            the right flight.
          </p>
          <div className="actions reveal" data-delay="2">
            <a
              href="https://goldcoasthelitours.rezdy.com/catalog/60270/tour-1-5-minute-flight"
              target="_blank"
              rel="noreferrer noopener"
              className="btn btn-primary"
            >
              Book a flight
              <ArrowRight />
            </a>
            <a href="/#contact" className="btn btn-ghost">
              Contact us
              <ArrowRight />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
