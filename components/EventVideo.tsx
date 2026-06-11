"use client";

import { useState } from "react";
import Image from "next/image";
import { PlayIcon } from "./icons";

const VIDEO_SRC =
  "https://video.wixstatic.com/video/09b6e1_86b8143ac5e34cddb5a870af68d972ed/1080p/mp4/file.mp4";

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
          {playing ? (
            <video
              src={VIDEO_SRC}
              poster="/assets/hero-coast.jpg"
              autoPlay
              controls
              playsInline
              preload="none"
            />
          ) : (
            <>
              <Image
                src="/assets/hero-coast.jpg"
                alt="Hot Tomato Sheppard on the runway gig — Gold Coast Helitours"
                fill
                sizes="(max-width:1020px) 100vw, 980px"
                quality={80}
                style={{ objectFit: "cover" }}
              />
              <div className="v-scrim" />
              <div className="v-play">
                <PlayIcon />
              </div>
            </>
          )}
        </div>
        <p className="events-cap reveal" data-delay="2">
          Hot Tomato Sheppard on the runway gig — Gold Coast Helitours
        </p>
      </div>
    </section>
  );
}
