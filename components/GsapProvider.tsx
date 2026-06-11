"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const EASE = "power3.out";

export default function GsapProvider() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // ---- Full motion (respects prefers-reduced-motion) ----
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        /* ---------- HERO load timeline ----------
           Elements start hidden via .js-anim CSS, so we use fromTo with
           explicit start/end states (a plain .from would animate 0 -> 0). */
        const hasHeroTimeline = !!document.querySelector('[data-hero="line"]');
        if (hasHeroTimeline) {
        const tl = gsap.timeline({ defaults: { ease: EASE }, delay: 0.15 });

        tl.fromTo(
          '[data-hero="eyebrow"]',
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 }
        )
          .fromTo(
            '[data-hero="line"]',
            // y:0 forces GSAP to own the transform in px, so the CSS
            // translateY(112%) hide isn't misread and left behind.
            { yPercent: 112, y: 0 },
            { yPercent: 0, y: 0, duration: 1.1, ease: "power4.out", stagger: 0.12 },
            "-=0.35"
          )
          .fromTo(
            '[data-hero="sub"]',
            { y: 26, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8 },
            "-=0.7"
          )
          .fromTo(
            '[data-hero="actions"]',
            { y: 22, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.7 },
            "-=0.5"
          )
          .fromTo(
            '[data-hero="meta"]',
            { y: 16, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, stagger: 0.12 },
            "-=0.5"
          )
          .fromTo(
            '[data-hero="cue"]',
            { opacity: 0 },
            { opacity: 1, duration: 0.8 },
            "-=0.4"
          );
        }

        /* ---------- Hero media gentle parallax on scroll ---------- */
        gsap.to("[data-hero-media]", {
          yPercent: 14,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        /* ---------- Generic scroll reveals ---------- */
        gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
          const delay = parseFloat(el.dataset.delay || "0") * 0.1;
          gsap.to(el, {
            y: 0,
            opacity: 1,
            duration: 0.9,
            delay,
            ease: EASE,
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          });
        });

        /* ---------- Stat counters ---------- */
        gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
          const target = parseFloat(el.dataset.count || "0");
          const suffix = el.dataset.suffix || "";
          const obj = { val: 0 };
          ScrollTrigger.create({
            trigger: el,
            start: "top 85%",
            once: true,
            onEnter: () => {
              gsap.to(obj, {
                val: target,
                duration: 1.6,
                ease: "power2.out",
                onUpdate: () => {
                  el.textContent = Math.round(obj.val) + suffix;
                },
              });
            },
          });
        });

        /* ---------- Photo-band parallax ---------- */
        if (document.querySelector("[data-parallax]")) {
          gsap.fromTo(
            "[data-parallax]",
            { yPercent: -8 },
            {
              yPercent: 8,
              ease: "none",
              scrollTrigger: {
                trigger: ".photoband",
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        }
      });

      // ---- Reduced motion: just make everything visible, no movement ----
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(".reveal", { opacity: 1, y: 0 });
        gsap.set('[data-hero="line"]', { yPercent: 0 });
        gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
          el.textContent = (el.dataset.count || "") + (el.dataset.suffix || "");
        });
      });

      // settle after fonts/images change layout
      const onLoad = () => ScrollTrigger.refresh();
      window.addEventListener("load", onLoad);
      const t = window.setTimeout(() => ScrollTrigger.refresh(), 600);

      return () => {
        window.removeEventListener("load", onLoad);
        window.clearTimeout(t);
      };
    });

    return () => ctx.revert();
  }, []);

  return null;
}
