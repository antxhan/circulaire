"use client";

import Section from "../_components/Section";
import H2 from "../_components/H2";
import BookDemoButton from "../_components/BookDemoButton";
import { useState, useEffect, useRef } from "react";
import { Toggle } from "../_components/Toggle";

export default function Demo() {
  const videos = [
    { id: "/videos/video1.mp4", content: "1. Select Category" },
    { id: "/videos/video2.mp4", content: "2. Search Keywords" },
    { id: "/videos/video3.mp4", content: "3. Evaluate Price" },
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
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
        <H2 className="text-left w-full md:w-auto">How it works</H2>
        <Toggle
          items={videos}
          onChange={handleChange}
          currentValue={currentVideo}
          name="video"
        />
        <BookDemoButton className="!hidden md:!inline-flex" />
      </div>
      <div className=" bg-neutral-100 border border-neutral-300 dark:border-neutral-800 rounded-4xl aspect-[5/3]">
        <video
          ref={videoRef}
          key={currentVideo} // forces re-render
          loop
          muted
          autoPlay
          className="rounded-[inherit] w-full h-full overflow-hidden"
        >
          <source src={currentVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </Section>
  );
}
