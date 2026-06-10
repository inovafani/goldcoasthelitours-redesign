"use client";

import { useEffect, useRef, useState } from "react";
import {
  AlertIcon,
  ArrowRight,
  PhoneIcon,
  FacebookIcon,
  InstagramIcon,
  BurgerIcon,
  CloseIcon,
} from "./icons";

const NAV_LINKS = [
  { label: "Home", href: "#top" },
  { label: "Scenic Flights", href: "#scenic" },
  { label: "Charter", href: "#charter" },
  { label: "Special Occasions", href: "#offers" },
  { label: "Specialised Operations", href: "#aero" },
  { label: "About us", href: "#aero" },
  { label: "Contact Us", href: "#contact" },
];

const SPY_SECTIONS = ["top", "scenic", "charter", "offers", "aero", "contact"];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("top");
  const [announceH, setAnnounceH] = useState(42);
  const navRef = useRef<HTMLElement>(null);
  const announceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function measure() {
      // The announcement bar can wrap to multiple lines on mobile, so its
      // height isn't fixed — measure it and let the nav sit just below it.
      if (announceRef.current) setAnnounceH(announceRef.current.offsetHeight);
    }
    function onScroll() {
      setScrolled(window.scrollY > 40);

      // scroll-spy: pick the last section whose top has crossed 35% of viewport
      const mid = window.innerHeight * 0.35;
      let current = "top";
      SPY_SECTIONS.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= mid) current = id;
      });
      setActive(current);
    }
    function onResize() {
      measure();
      onScroll();
    }

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* ============ ANNOUNCEMENT BAR ============ */}
      <div ref={announceRef} className={`announce${scrolled ? " hide" : ""}`}>
        <AlertIcon />
        <span className="a-txt">
          Access to our location has changed due to nearby construction.
        </span>
        <a href="#contact">
          View directions
          <ArrowRight />
        </a>
      </div>

      {/* ============ NAV ============ */}
      <header
        ref={navRef}
        className={`nav${scrolled ? " scrolled" : ""}`}
        id="nav"
        style={{ top: scrolled ? 0 : announceH }}
      >
        <a href="#top" className="nav-logo" aria-label="Gold Coast Helitours home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logo-main.jpg" alt="Gold Coast Helitours Australia" />
        </a>
        <nav className="nav-menu" aria-label="Primary">
          {NAV_LINKS.map((link, i) => (
            <a
              key={`${link.href}-${i}`}
              className={`nav-link${active === link.href.slice(1) ? " active" : ""}`}
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="nav-right">
          <a className="nav-phone" href="tel:+61755918457">
            <PhoneIcon />
            <span className="ph-txt">(+61) 07 5591 8457</span>
          </a>
          <div className="nav-social">
            <a href="#" aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href="#" aria-label="Instagram">
              <InstagramIcon />
            </a>
          </div>
          <a href="#offers" className="btn btn-primary btn-sm nav-cta">
            Book now
          </a>
          <button
            className="nav-burger"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <BurgerIcon />
          </button>
        </div>
      </header>

      {/* mobile drawer */}
      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        <button className="mm-close" aria-label="Close menu" onClick={() => setMenuOpen(false)}>
          <CloseIcon />
        </button>
        {NAV_LINKS.map((link, i) => (
          <a
            key={`mm-${link.href}-${i}`}
            className="mm-link"
            href={link.href}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <div className="mm-foot">
          <a className="nav-phone" href="tel:+61755918457">
            <PhoneIcon />
            (+61) 07 5591 8457
          </a>
          <a href="#offers" className="btn btn-primary" onClick={() => setMenuOpen(false)}>
            Book now
          </a>
        </div>
      </div>
    </>
  );
}
