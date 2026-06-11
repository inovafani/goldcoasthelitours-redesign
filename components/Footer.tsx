import { ChevronUp, FacebookIcon, InstagramIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logo-white.png" alt="Gold Coast Helitours Australia" />
          <p>
            Scenic flights, private charters and specialised aerial operations across
            the Gold Coast — from our heliport at Marina Mirage.
          </p>
        </div>
        <div className="footer-cols">
          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              <li>
                <a href="/scenic-flights">Scenic Flights</a>
              </li>
              <li>
                <a href="/charter">Charter</a>
              </li>
              <li>
                <a href="/#offers">Special Occasions</a>
              </li>
              <li>
                <a href="/#aero">Specialised Operations</a>
              </li>
              <li>
                <a href="/#aero">About us</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Visit</h4>
            <ul>
              <li>Mirage Heliport, Marina Mirage</li>
              <li>74 Seaworld Drive</li>
              <li>Main Beach QLD 4217</li>
              <li>
                <a href="tel:+61755918457">07 5591 8457</a>
              </li>
              <li>
                <a href="mailto:info@goldcoasthelitours.com.au">
                  info@goldcoasthelitours.com.au
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span className="copy">© Gold Coast Helitours</span>
        <a href="#top" className="back-top">
          Back to top
          <ChevronUp />
        </a>
        <div className="f-social">
          <a href="#" aria-label="Facebook">
            <FacebookIcon />
          </a>
          <a href="#" aria-label="Instagram">
            <InstagramIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
