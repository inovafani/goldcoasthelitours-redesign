"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import {
  AlertIcon,
  ArrowRight,
  PhoneIcon,
  FacebookIcon,
  InstagramIcon,
  BurgerIcon,
  CloseIcon,
} from "./icons";

type NavLink = { label: string; href: string; spyId?: string };

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/", spyId: "top" },
  { label: "Scenic Flights", href: "/scenic-flights" },
  { label: "Charter", href: "/#charter", spyId: "charter" },
  { label: "Special Occasions", href: "/#offers", spyId: "offers" },
  { label: "Specialised Operations", href: "/#aero", spyId: "aero" },
  { label: "About us", href: "/#aero" },
  { label: "Contact Us", href: "/#contact", spyId: "contact" },
];

const SPY_SECTIONS = ["top", "scenic", "charter", "offers", "aero", "contact"];

export default function Nav() {
  const pathname = usePathname();
  const onHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSpy, setActiveSpy] = useState("top");
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

      // scroll-spy only matters on the homepage (single-page sections)
      if (pathname !== "/") return;
      const mid = window.innerHeight * 0.35;
      let current = "top";
      SPY_SECTIONS.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= mid) current = id;
      });
      setActiveSpy(current);
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
  }, [pathname]);

  // lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function isActive(link: NavLink) {
    // On a subpage, highlight the link that points to this page.
    if (!onHome) return link.href === pathname;
    // On the homepage, follow the scroll-spy section.
    return !!link.spyId && link.spyId === activeSpy;
  }

  return (
    <>
      {/* ============ ANNOUNCEMENT BAR ============ */}
      <div ref={announceRef} className={`announce${scrolled ? " hide" : ""}`}>
        <AlertIcon />
        <span className="a-txt">
          Access to our location has changed due to nearby construction.
        </span>
        <a href="/#contact">
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
        <a href="/" className="nav-logo" aria-label="Gold Coast Helitours home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logo-white.png" alt="Gold Coast Helitours Australia" />
        </a>
        <nav className="nav-menu" aria-label="Primary">
          {NAV_LINKS.map((link, i) => (
            <a
              key={`${link.href}-${i}`}
              className={`nav-link${isActive(link) ? " active" : ""}`}
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
          <a href="/#offers" className="btn btn-primary btn-sm nav-cta">
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
          <a href="/#offers" className="btn btn-primary" onClick={() => setMenuOpen(false)}>
            Book now
          </a>
        </div>
      </div>
    </>
  );
}
