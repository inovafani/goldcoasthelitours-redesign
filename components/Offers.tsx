import Image from 'next/image';
import { ArrowRight, CheckIcon } from './icons';

type Offer = {
  id: string;
  tag: string;
  title: string;
  desc: string;
  rows: string[];
  price: string;
  imgPosition: string;
};

const OFFERS: Offer[] = [
  {
    id: 'offer-fly-feast',
    tag: 'Scenic · 30 min',
    title: 'Fly and Feast',
    desc: 'Experience a 30 minute scenic flight over the Gold Coast and enjoy a hearty pub meal and a drink afterwards.',
    rows: [
      '10-minute scenic flight over the coast',
      'Hearty pub meal afterwards',
      'A drink to round it off',
    ],
    price: '$165',
    imgPosition: 'center 40%',
  },
  {
    id: 'offer-sea-sky',
    tag: 'Scenic · 45 min',
    title: 'Sea and Sky',
    desc: 'Experience a 45 minute scenic flight over the Gold Coast with a fresh seafood platter and bubbles afterwards.',
    rows: [
      '20-minute scenic flight over the coast',
      'Fresh seafood platter',
      'Bubbles afterwards',
    ],
    price: '$365',
    imgPosition: '30% 60%',
  },
];

export default function Offers() {
  return (
    <section className="section offers" id="offers">
      <div className="wrap">
        <div className="offers-head">
          <span className="eyebrow center reveal">
            Only available for a limited time
          </span>
          <h2 className="reveal" data-delay="1">
            Two ways to spend an
            <br />
            <span className="serif-em">unforgettable</span> afternoon
          </h2>
          <p className="reveal" data-delay="2">
            A scenic flight over the Gold Coast, then settle in for what comes
            after. Limited dates, booked direct with our team.
          </p>
        </div>

        <div className="offers-grid">
          {OFFERS.map((offer, i) => (
            <article
              key={offer.id}
              className="offer-card reveal"
              data-delay={i + 1}
            >
              <div className="offer-media">
                <span className="offer-tag">
                  <span className="dot" />
                  {offer.tag}
                </span>
                <Image
                  src="/assets/hero-coast.jpg"
                  alt={`${offer.title} — scenic helicopter flight over the Gold Coast`}
                  fill
                  sizes="(max-width:760px) 100vw, 50vw"
                  quality={80}
                  style={{ objectFit: 'cover', objectPosition: offer.imgPosition }}
                />
              </div>
              <div className="offer-body">
                <h3>{offer.title}</h3>
                <p className="offer-desc">{offer.desc}</p>
                <ul className="offer-rows">
                  {offer.rows.map((row) => (
                    <li key={row}>
                      <CheckIcon />
                      {row}
                    </li>
                  ))}
                </ul>
                <div className="offer-foot">
                  <div className="offer-price">
                    <span className="amt">
                      {offer.price}
                      <span>&nbsp;</span>
                    </span>
                    <span className="per">Per person</span>
                  </div>
                  <a href="#contact" className="btn btn-dark btn-sm">
                    Book now
                    <ArrowRight />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
