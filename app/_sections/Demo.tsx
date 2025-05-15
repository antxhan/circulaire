"use client";

import Section from "../_components/Section";
import H2 from "../_components/H2";
import BookDemoButton from "../_components/BookDemoButton";
import { useState, useEffect, useRef } from "react";
import { Toggle } from "../_components/Toggle";

export default function Demo() {
  const videos = [
    {
      id: "/videos/video1.mp4",
      content: "1. Category",
    },
    {
      id: "/videos/video2.mp4",
      content: "2. Keywords",
    },
    {
      id: "/videos/video3.mp4",
      content: "3. Price",
    },
  ];

  const [currentVideo, setCurrentVideo] = useState(videos[0].id);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentVideo(e.currentTarget.value);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current
        .play()
        .catch((e) => console.log("Auto-play prevented:", e));
    }
  }, [currentVideo]);

  return (
    <Section id="demo">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:mb-12 items-center">
        <H2 className="col-span-1 text-center md:text-left">How it works</H2>
        <div className="col-span-1 flex justify-center items-center md:justify-end">
          <Toggle
            items={videos}
            onChange={handleChange}
            currentValue={currentVideo}
            name="video"
          />
        </div>
        <div className="flex justify-end items-center w-full md:w-auto">
          <BookDemoButton className="!hidden lg:!inline-flex" />
        </div>
      </div>
      <div className=" bg-neutral-100 border border-neutral-300 dark:border-neutral-800 rounded-4xl aspect-[5/3]">
        <video
          ref={videoRef}
          key={currentVideo} // forces re-render
          loop
          muted
          autoPlay
          playsInline
          controls={false}
          className="rounded-[inherit] w-full h-full overflow-hidden pointer-events-none"
        >
          <source src={currentVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </Section>
  );
}
