"use client";

import { ArrowRight, PinIcon, MailIcon, PhoneIcon, ClockIcon, CheckIcon } from "./icons";

const PARKING = [
  "Marina Mirage — South side",
  "Seaworld Drive — Street parking",
  "Phillip Park (beach) — Car park",
  "Mariner's Cove — Car park",
];

const STEPS: { img: string; cap: string }[] = [
  { img: "/assets/contact/step1.jpg", cap: "From the main road, turn into Marina Mirage." },
  { img: "/assets/contact/step2.jpg", cap: "Follow the driveway and continue straight ahead." },
  { img: "/assets/contact/step3.jpg", cap: "Proceed toward the marina precinct." },
  { img: "/assets/contact/step4.jpg", cap: "Enter through the gate and take the ramp down to the lower jetty." },
  { img: "/assets/contact/step5.jpg", cap: "Continue to the end of the jetty, where you'll see our logo on a grey building." },
  { img: "/assets/contact/step6.jpg", cap: "Turn right and take the ramp straight ahead." },
  { img: "/assets/contact/step7.jpg", cap: "Continue toward the black building." },
  { img: "/assets/contact/step8.jpg", cap: "You'll see a black ramp." },
  { img: "/assets/contact/step9.jpg", cap: "Take the ramp up to reach the Gold Coast Helitours reception." },
];

export default function ContactPage() {
  return (
    <main id="top">
      {/* ============ HERO ============ */}
      <header className="about-hero">
        <div className="hero-grain" />
        <div className="wrap about-hero-inner">
          <span className="eyebrow center reveal">Get in touch</span>
          <h1 className="reveal" data-delay="1">
            Contact <span className="serif-em">us</span>
          </h1>
          <p className="reveal" data-delay="2">
            For more information, or to book your next helicopter adventure, speak to our
            team. We&apos;re at Marina Mirage, Main Beach — seven days a week.
          </p>
        </div>
      </header>

      {/* ============ INFO CARDS + FORM ============ */}
      <section className="section contact-page">
        <div className="wrap">
          <div className="contact-cards reveal">
            <div className="contact-card">
              <span className="ic">
                <PinIcon />
              </span>
              <div className="cd-k">Address</div>
              <div className="cd-v">
                Mirage Heliport, Marina Mirage,
                <br />
                74 Seaworld Drive, Main Beach QLD 4217
              </div>
              <p className="contact-card-note">
                Entrance through the gate with the ramp to the lower jetty.
              </p>
            </div>
            <div className="contact-card">
              <span className="ic">
                <MailIcon />
              </span>
              <div className="cd-k">Email</div>
              <div className="cd-v">
                <a href="mailto:info@goldcoasthelitours.com.au">
                  info@goldcoasthelitours.com.au
                </a>
              </div>
            </div>
            <div className="contact-card">
              <span className="ic">
                <PhoneIcon />
              </span>
              <div className="cd-k">Phone</div>
              <div className="cd-v">
                <a href="tel:+61755918457">07 5591 8457</a>
              </div>
            </div>
            <div className="contact-card">
              <span className="ic">
                <ClockIcon />
              </span>
              <div className="cd-k">Operating hours</div>
              <div className="cd-v">
                8:30am – 5:00pm
                <br />7 days a week
              </div>
            </div>
          </div>

          <div className="contact-grid contact-grid-form">
            <div className="contact-intro reveal">
              <span className="eyebrow">Send a message</span>
              <h2>Speak to our team</h2>
              <p className="lead">
                Tell us a little about what you&apos;re after and we&apos;ll get back to you
                with the right options for your flight.
              </p>
              <ul className="contact-assure">
                <li>
                  <CheckIcon />
                  Open seven days a week, all year round
                </li>
                <li>
                  <CheckIcon />
                  Friendly local team who fly the coast daily
                </li>
                <li>
                  <CheckIcon />
                  Tailored scenic, charter &amp; special-occasion flights
                </li>
              </ul>
            </div>

            <form className="form-card reveal" data-delay="1" onSubmit={(e) => e.preventDefault()}>
              <div className="fc-title">Send us a message</div>
              <div className="field">
                <label htmlFor="cu-name">Name</label>
                <input id="cu-name" type="text" placeholder="Your name" />
              </div>
              <div className="field">
                <label htmlFor="cu-addr">Address</label>
                <input id="cu-addr" type="text" placeholder="Street, suburb" />
              </div>
              <div className="field row2">
                <div>
                  <label htmlFor="cu-email">Email</label>
                  <input id="cu-email" type="email" placeholder="you@email.com" />
                </div>
                <div>
                  <label htmlFor="cu-phone">Phone</label>
                  <input id="cu-phone" type="tel" placeholder="04 0000 0000" />
                </div>
              </div>
              <div className="field">
                <label htmlFor="cu-subject">Subject</label>
                <input id="cu-subject" type="text" placeholder="What's it about?" />
              </div>
              <div className="field">
                <label htmlFor="cu-hear">How did you hear about us?</label>
                <select id="cu-hear" defaultValue="">
                  <option value="">Choose an option below</option>
                  <option>Google search</option>
                  <option>Social media</option>
                  <option>Friend or referral</option>
                  <option>Returning customer</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="cu-msg">Message</label>
                <textarea id="cu-msg" placeholder="Type your message here…" />
              </div>
              <button className="btn btn-primary" type="submit">
                Submit
                <ArrowRight />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ============ GETTING HERE ============ */}
      <section className="section getting-here">
        <div className="wrap">
          <div className="sf-head">
            <span className="eyebrow center reveal">Finding us</span>
            <h2 className="reveal" data-delay="1">
              Getting to the <span className="serif-em">marina</span>
            </h2>
            <p className="reveal" data-delay="2">
              We&apos;re conveniently located at Marina Mirage, 74 Seaworld Drive, Main Beach.
            </p>
          </div>

          <div className="gh-grid">
            <figure className="gh-aerial reveal">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/contact/aerial.jpg" alt="Aerial map of Marina Mirage showing the heliport, construction area and parking" />
              <figcaption>Marina Mirage from above — our heliport sits at the end of C Arm.</figcaption>
            </figure>

            <div className="gh-info reveal" data-delay="1">
              <div className="gh-block">
                <h3>
                  <span className="ic">
                    <PinIcon />
                  </span>
                  Parking
                </h3>
                <ul className="gh-list">
                  {PARKING.map((p) => (
                    <li key={p}>
                      <CheckIcon />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="gh-block">
                <h3>
                  <span className="ic">
                    <ArrowRight />
                  </span>
                  How to find our heliport
                </h3>
                <p>
                  We&apos;re at the end of the jetty on Marina Mirage C Arm — look for the grey
                  hangar and black building right at the end of the jetty.
                </p>
                <p>
                  There is some construction work in the area which may change from time to
                  time; however, access to the marina remains open. If you can&apos;t find us,
                  call <a href="tel:+61755918457">07 5591 8457</a> and we&apos;ll be happy to
                  guide you in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ VISUAL TOUR ============ */}
      <section className="section visual-tour">
        <div className="wrap">
          <div className="sf-head">
            <span className="eyebrow center reveal">Step by step</span>
            <h2 className="reveal" data-delay="1">
              A visual tour <span className="serif-em">to our door</span>
            </h2>
            <p className="reveal" data-delay="2">
              Follow these nine steps from the main road right through to our reception.
            </p>
          </div>

          <ol className="tour-grid">
            {STEPS.map((s, i) => (
              <li key={s.img} className="tour-step reveal" data-delay={(i % 3) + 1}>
                <figure className="tour-media">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.img} alt={`Step ${i + 1} — ${s.cap}`} loading="lazy" />
                  <span className="tour-num">{String(i + 1).padStart(2, "0")}</span>
                </figure>
                <p className="tour-cap">{s.cap}</p>
              </li>
            ))}
          </ol>

          <p className="tour-welcome reveal">
            Thank you — we look forward to welcoming you aboard.
          </p>
        </div>
      </section>

      {/* ============ MAP ============ */}
      <section className="section contact-map-sec">
        <div className="wrap">
          <div className="map-wrap map-tall reveal">
            <iframe
              title="Gold Coast Helitours location"
              loading="lazy"
              src="https://www.google.com/maps?q=Gold+Coast+Helitours,+Marina+Mirage,+74+Seaworld+Drive,+Main+Beach+QLD+4217&output=embed"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
