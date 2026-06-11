"use client";

import { useCallback, useEffect, useState } from "react";
import { ArrowRight, CloseIcon } from "./icons";

export default function SpecialGallery({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [open, setOpen] = useState<number | null>(null);
  const isOpen = open !== null;

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (dir: number) =>
      setOpen((i) => (i === null ? i : (i + dir + images.length) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (!isOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close, step]);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <>
      <div className="so-gallery reveal">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            className="so-shot"
            onClick={() => setOpen(i)}
            aria-label={`View photo ${i + 1} of ${images.length}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={`${title} — Gold Coast Helitours`} loading="lazy" />
            <span className="so-shot-zoom" aria-hidden="true">
              <span />
              <span />
            </span>
          </button>
        ))}
      </div>

      {isOpen && (
        <div
          className="lb-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} gallery`}
          onClick={close}
        >
          <button className="lb-btn lb-close" onClick={close} aria-label="Close">
            <CloseIcon />
          </button>

          <button
            className="lb-btn lb-prev"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous photo"
          >
            <ArrowRight style={{ transform: "rotate(180deg)" }} />
          </button>

          <figure className="lb-figure" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={open}
              src={images[open as number]}
              alt={`${title} — photo ${(open as number) + 1}`}
            />
          </figure>

          <button
            className="lb-btn lb-next"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next photo"
          >
            <ArrowRight />
          </button>

          <span className="lb-counter">
            {pad((open as number) + 1)} <span className="lb-sep">/</span>{" "}
            {pad(images.length)}
          </span>
        </div>
      )}
    </>
  );
}
