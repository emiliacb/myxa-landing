import { useEffect, useRef } from "react";

// Matches the source encode (see scripts used to generate /public/hero-video.mp4).
const FRAME_RATE = 24;

// Higher = slower rotation: this many video-heights of scrolling are needed
// to go through the whole 360 degrees.
const SCROLL_HEIGHTS_PER_ROTATION = 6;

export default function HeroVideo({ className, wrapperClassName }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const saveData = navigator.connection?.saveData;
    if (reducedMotion || saveData) return undefined;

    // Anchor progress=0 to the video's position at mount (i.e. page load).
    const startTop = video.getBoundingClientRect().top;
    let lastFrame = -1;
    let seeking = false;
    let pendingProgress = null;

    const getScrollProgress = () => {
      const top = video.getBoundingClientRect().top;
      const height = video.getBoundingClientRect().height || 1;
      return Math.min(
        1,
        Math.max(0, (startTop - top) / (height * SCROLL_HEIGHTS_PER_ROTATION))
      );
    };

    const applyProgress = (progress) => {
      if (!video.duration) return;
      const frame = Math.round(progress * video.duration * FRAME_RATE);
      if (frame === lastFrame) return;
      if (seeking) {
        pendingProgress = progress;
        return;
      }
      lastFrame = frame;
      const target = Math.min(video.duration, frame / FRAME_RATE);
      // A seek to the current position never fires "seeked", which would
      // otherwise leave the gate stuck closed forever (this reliably
      // happens for frame 0, since that's where the video already sits
      // right after it loads).
      if (Math.abs(video.currentTime - target) < 1 / FRAME_RATE / 2) return;
      seeking = true;
      video.currentTime = target;
    };

    const handleSeeked = () => {
      seeking = false;
      if (pendingProgress !== null) {
        const next = pendingProgress;
        pendingProgress = null;
        applyProgress(next);
      }
    };

    let rafId = null;
    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        applyProgress(getScrollProgress());
      });
    };

    const handleReady = () => {
      // iOS Safari sometimes won't paint a seeked frame until playback has
      // been unlocked once by a real play() call.
      video.play().then(() => video.pause()).catch(() => {});
      onScroll();
    };

    if (video.readyState >= 1) {
      handleReady();
    } else {
      video.addEventListener("loadedmetadata", handleReady, { once: true });
    }
    video.addEventListener("seeked", handleSeeked);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      video.removeEventListener("loadedmetadata", handleReady);
      video.removeEventListener("seeked", handleSeeked);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    // clip-path instead of rounded-*/overflow-hidden: border-radius
    // unreliably fails to clip this <video> in Chromium (also triggered by
    // a responsive max-height override on the clipped element - avoid
    // adding one back). clip-path clips it correctly and consistently.
    <div
      className={wrapperClassName}
      style={{ clipPath: "inset(0 round 30px)" }}
    >
      <video
        ref={videoRef}
        src="/hero-video.mp4"
        poster="/hero-video-poster.webp"
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        className={className}
      />
    </div>
  );
}
