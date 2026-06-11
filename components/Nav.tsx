"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { CHARTER_SERVICES } from "./charterData";
import {
  AlertIcon,
  ArrowRight,
  PhoneIcon,
  FacebookIcon,
  InstagramIcon,
  BurgerIcon,
  CloseIcon,
  ChevronDown,
  SurveyIcon,
  PlaneIcon,
  BriefcaseIcon,
  FlagIcon,
  CalendarStarIcon,
} from "./icons";

const CHARTER_ICONS = {
  survey: SurveyIcon,
  plane: PlaneIcon,
  briefcase: BriefcaseIcon,
  flag: FlagIcon,
  calendar: CalendarStarIcon,
} as const;

type Child = { label: string; href: string; short: string; icon: keyof typeof CHARTER_ICONS };
type NavLink = { label: string; href: string; spyId?: string; children?: Child[] };

const CHARTER_CHILDREN: Child[] = CHARTER_SERVICES.map((s) => ({
  label: s.name,
  href: `/charter/${s.slug}`,
  short: s.short,
  icon: s.icon,
}));

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/", spyId: "top" },
  { label: "Scenic Flights", href: "/scenic-flights" },
  { label: "Charter", href: "/charter", children: CHARTER_CHILDREN },
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
  const [charterOpen, setCharterOpen] = useState(false);
  const [activeSpy, setActiveSpy] = useState("top");
  const [announceH, setAnnounceH] = useState(42);
  const navRef = useRef<HTMLElement>(null);
  const announceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function measure() {
      if (announceRef.current) setAnnounceH(announceRef.current.offsetHeight);
    }
    function onScroll() {
      setScrolled(window.scrollY > 40);
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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function closeMobile() {
    setMenuOpen(false);
    setCharterOpen(false);
  }

  function isActive(link: NavLink) {
    if (!onHome) {
      return link.href !== "/" && pathname.startsWith(link.href);
    }
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
          {NAV_LINKS.map((link, i) =>
            link.children ? (
              <div className="nav-dd-wrap" key={`${link.href}-${i}`}>
                <a className={`nav-link nav-dd-trigger${isActive(link) ? " active" : ""}`} href={link.href}>
                  {link.label}
                  <ChevronDown className="nav-caret" />
                </a>
                <div className="nav-dd" role="menu">
                  <div className="nav-dd-panel">
                    {link.children.map((c) => {
                      const Icon = CHARTER_ICONS[c.icon];
                      return (
                        <a key={c.href} className="nav-dd-item" href={c.href} role="menuitem">
                          <span className="dd-ic">
                            <Icon />
                          </span>
                          <span className="dd-text">
                            <span className="dd-nm">{c.label}</span>
                            <span className="dd-desc">{c.short}</span>
                          </span>
                          <ArrowRight className="dd-arrow" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={`${link.href}-${i}`}
                className={`nav-link${isActive(link) ? " active" : ""}`}
                href={link.href}
              >
                {link.label}
              </a>
            )
          )}
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
        <button className="mm-close" aria-label="Close menu" onClick={closeMobile}>
          <CloseIcon />
        </button>
        {NAV_LINKS.map((link, i) =>
          link.children ? (
            <div className="mm-group" key={`mm-${link.href}-${i}`}>
              <button
                className={`mm-link mm-dd-toggle${charterOpen ? " open" : ""}`}
                onClick={() => setCharterOpen((v) => !v)}
                aria-expanded={charterOpen}
              >
                {link.label}
                <ChevronDown className="mm-caret" />
              </button>
              <div className={`mm-sub${charterOpen ? " open" : ""}`}>
                <a className="mm-sub-link" href={link.href} onClick={closeMobile}>
                  Charter overview
                </a>
                {link.children.map((c) => (
                  <a key={c.href} className="mm-sub-link" href={c.href} onClick={closeMobile}>
                    {c.label}
                  </a>
                ))}
              </div>
            </div>
          ) : (
            <a
              key={`mm-${link.href}-${i}`}
              className="mm-link"
              href={link.href}
              onClick={closeMobile}
            >
              {link.label}
            </a>
          )
        )}
        <div className="mm-foot">
          <a className="nav-phone" href="tel:+61755918457">
            <PhoneIcon />
            (+61) 07 5591 8457
          </a>
          <a href="/#offers" className="btn btn-primary" onClick={closeMobile}>
            Book now
          </a>
        </div>
      </div>
    </>
  );
}
