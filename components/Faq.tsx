"use client";

import { useState } from "react";
import { ArrowRight, ChevronDown } from "./icons";
import { FAQS } from "./aboutData";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <main id="top">
      {/* ============ COMPACT HERO ============ */}
      <header className="about-hero">
        <div className="hero-grain" />
        <div className="wrap about-hero-inner">
          <span className="eyebrow center reveal">Your questions, answered</span>
          <h1 className="reveal" data-delay="1">
            Frequently asked <span className="serif-em">questions</span>
          </h1>
          <p className="reveal" data-delay="2">
            Everything you need to know before you fly. Still wondering about something?
            Our team is only a phone call away.
          </p>
        </div>
      </header>

      {/* ============ ACCORDION ============ */}
      <section className="section faq-section">
        <div className="wrap faq-wrap">
          <ul className="faq-list reveal">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.q} className={`faq-item${isOpen ? " open" : ""}`}>
                  <button
                    type="button"
                    className="faq-q"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span>{f.q}</span>
                    <ChevronDown className="faq-caret" />
                  </button>
                  <div className="faq-a">
                    <div className="faq-a-inner">
                      {f.a.map((p, j) => (
                        <p key={j}>{p}</p>
                      ))}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <aside className="faq-aside reveal" data-delay="1">
            <span className="eyebrow">Still curious?</span>
            <h3>Talk to our crew</h3>
            <p>
              If your question isn&apos;t here, give us a call or send a message — we&apos;re
              happy to help you plan the perfect flight.
            </p>
            <div className="faq-aside-actions">
              <a href="tel:+61755918457" className="btn btn-primary">
                Call us
                <ArrowRight />
              </a>
              <a href="/#contact" className="btn btn-ghost">
                Send a message
                <ArrowRight />
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
