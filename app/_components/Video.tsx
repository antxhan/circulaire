export default function VideoPlayer() {
  return (
    <video
      controls
      className="w-full max-w-xl h-auto rounded-xl border border-neutral-300"
    >
      <source src="/video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
