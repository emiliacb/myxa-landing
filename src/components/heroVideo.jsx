import { useEffect, useRef, useState } from "react";

// Same parameters used to pre-key the poster frame with ffmpeg's colorkey
// filter (colorkey=0x000000:0.12:0.08), replicated here so the live canvas
// keying matches it frame-for-frame.
const KEY_SIMILARITY = 0.12;
const KEY_BLEND = 0.08;
const MAX_KEY_DISTANCE = Math.sqrt(3) * 255;

function keyOutBlack(ctx, width, height) {
  const frame = ctx.getImageData(0, 0, width, height);
  const data = frame.data;
  for (let i = 0; i < data.length; i += 4) {
    const distance =
      Math.sqrt(data[i] ** 2 + data[i + 1] ** 2 + data[i + 2] ** 2) / MAX_KEY_DISTANCE;
    if (distance <= KEY_SIMILARITY) {
      data[i + 3] = 0;
    } else if (distance < KEY_SIMILARITY + KEY_BLEND) {
      data[i + 3] = Math.round(
        data[i + 3] * ((distance - KEY_SIMILARITY) / KEY_BLEND)
      );
    }
  }
  ctx.putImageData(frame, 0, 0);
}

export default function HeroVideo({ className, alt }) {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const seekingRef = useRef(false);
  const pendingProgressRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    sectionRef.current = document.getElementById("nosotros");

    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return undefined;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = canvas.getContext("2d");

    const drawCurrentFrame = () => {
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      keyOutBlack(ctx, canvas.width, canvas.height);
    };

    const applyProgress = (progress) => {
      if (!video.duration) return;
      const targetTime = progress * video.duration;
      if (Math.abs(video.currentTime - targetTime) < 0.01) return;
      if (seekingRef.current) {
        pendingProgressRef.current = progress;
        return;
      }
      seekingRef.current = true;
      video.currentTime = targetTime;
    };

    const getScrollProgress = () => {
      const section = sectionRef.current;
      if (!section) return 0;
      const rect = section.getBoundingClientRect();
      return Math.min(1, Math.max(0, -rect.top / rect.height));
    };

    let rafId = null;
    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        applyProgress(getScrollProgress());
      });
    };

    const handleLoadedData = () => {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      drawCurrentFrame();
      setReady(true);
      if (!reducedMotion) applyProgress(getScrollProgress());
    };

    const handleSeeked = () => {
      drawCurrentFrame();
      seekingRef.current = false;
      if (pendingProgressRef.current !== null) {
        const next = pendingProgressRef.current;
        pendingProgressRef.current = null;
        applyProgress(next);
      }
    };

    video.addEventListener("loadeddata", handleLoadedData, { once: true });
    video.addEventListener("seeked", handleSeeked);

    if (!reducedMotion) {
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
    }

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData);
      video.removeEventListener("seeked", handleSeeked);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      role="img"
      aria-label={alt}
      className="absolute m-auto flex h-full w-full items-center justify-center"
    >
      <img
        src="/hero-video-poster.webp"
        alt=""
        aria-hidden="true"
        width={1280}
        height={720}
        className={`${className} transition-opacity duration-500 ${
          ready ? "opacity-0" : "opacity-100"
        }`}
      />
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className={`${className} transition-opacity duration-500 ${
          ready ? "opacity-100" : "opacity-0"
        }`}
      />
      <video
        ref={videoRef}
        src="/hero-video.mp4"
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        className="pointer-events-none absolute h-px w-px opacity-0"
      />
    </div>
  );
}
