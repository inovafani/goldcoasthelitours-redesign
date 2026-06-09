"use client";

import { useState } from "react";
import { PlayIcon } from "./icons";

export default function EventVideo() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="section events" id="scenic">
      <div className="wrap">
        <div className="events-head">
          <span className="eyebrow center reveal">From the air</span>
          <h2 className="reveal" data-delay="1">
            Recent events
          </h2>
        </div>
        <div
          className={`video-frame reveal${playing ? " playing" : ""}`}
          data-delay="1"
          onClick={() => setPlaying(true)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/hero-coast.jpg"
            alt="Hot Tomato Sheppard on the runway gig — Gold Coast Helitours"
          />
          <div className="v-scrim" />
          <div className="v-play">
            <PlayIcon />
          </div>
        </div>
        <p className="events-cap reveal" data-delay="2">
          Hot Tomato Sheppard on the runway gig — Gold Coast Helitours
        </p>
      </div>
    </section>
  );
}
