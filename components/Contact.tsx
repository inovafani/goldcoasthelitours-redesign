"use client";

import { ArrowRight, PinIcon, MailIcon, PhoneIcon, ClockIcon } from "./icons";

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="wrap">
        <div className="contact-grid">
          <div>
            <div className="contact-head reveal">
              <span className="eyebrow">Get in touch</span>
              <h2>Contact us</h2>
              <p className="lead">
                For more information or to book your next helicopter adventure, speak
                to our team.
              </p>
            </div>
            <div className="contact-details reveal" data-delay="1">
              <div className="cd-row">
                <span className="ic">
                  <PinIcon />
                </span>
                <div>
                  <div className="cd-k">Address</div>
                  <div className="cd-v">
                    Mirage Heliport, Marina Mirage,
                    <br />
                    74 Seaworld Drive, Main Beach QLD 4217
                    <br />
                    <span style={{ color: "var(--on-light-mut)", fontSize: 14 }}>
                      Entrance through the gate with the ramp to the lower jetty
                    </span>
                  </div>
                </div>
              </div>
              <div className="cd-row">
                <span className="ic">
                  <MailIcon />
                </span>
                <div>
                  <div className="cd-k">Email</div>
                  <div className="cd-v">
                    <a href="mailto:info@goldcoasthelitours.com.au">
                      info@goldcoasthelitours.com.au
                    </a>
                  </div>
                </div>
              </div>
              <div className="cd-row">
                <span className="ic">
                  <PhoneIcon />
                </span>
                <div>
                  <div className="cd-k">Phone</div>
                  <div className="cd-v">
                    <a href="tel:+61755918457">07 5591 8457</a>
                  </div>
                </div>
              </div>
              <div className="cd-row">
                <span className="ic">
                  <ClockIcon />
                </span>
                <div>
                  <div className="cd-k">Operating hours</div>
                  <div className="cd-v">8:30am – 5:00pm · 7 days a week</div>
                </div>
              </div>
            </div>
          </div>

          <form className="form-card reveal" data-delay="1" onSubmit={(e) => e.preventDefault()}>
            <div className="fc-title">Send us a message</div>
            <div className="field">
              <label htmlFor="f-name">Name</label>
              <input id="f-name" type="text" placeholder="Your name" />
            </div>
            <div className="field">
              <label htmlFor="f-addr">Address</label>
              <input id="f-addr" type="text" placeholder="Street, suburb" />
            </div>
            <div className="field row2">
              <div>
                <label htmlFor="f-email">Email</label>
                <input id="f-email" type="email" placeholder="you@email.com" />
              </div>
              <div>
                <label htmlFor="f-phone">Phone</label>
                <input id="f-phone" type="tel" placeholder="04 0000 0000" />
              </div>
            </div>
            <div className="field">
              <label htmlFor="f-subject">Subject</label>
              <input id="f-subject" type="text" placeholder="What's it about?" />
            </div>
            <div className="field">
              <label htmlFor="f-hear">How did you hear about us?</label>
              <select id="f-hear" defaultValue="">
                <option value="">Choose an option below</option>
                <option>Google search</option>
                <option>Social media</option>
                <option>Friend or referral</option>
                <option>Returning customer</option>
                <option>Other</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="f-msg">Message</label>
              <textarea id="f-msg" placeholder="Type your message here…" />
            </div>
            <button className="btn btn-primary" type="submit">
              Submit
              <ArrowRight />
            </button>
          </form>
        </div>

        <div className="map-wrap reveal">
          <iframe
            title="Gold Coast Helitours location"
            loading="lazy"
            src="https://www.google.com/maps?q=Marina+Mirage,+74+Seaworld+Drive,+Main+Beach+QLD+4217&output=embed"
          />
        </div>
      </div>
    </section>
  );
}
