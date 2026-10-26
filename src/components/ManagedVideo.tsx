import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface ManagedVideoProps {
  src: string;
  poster: string;
  label: string;
  className?: string;
  eager?: boolean;
}

export const ManagedVideo = ({ src, poster, label, className = "", eager = false }: ManagedVideoProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reducedMotion = useReducedMotion();
  const [nearViewport, setNearViewport] = useState(eager);
  const [hasEntered, setHasEntered] = useState(eager);
  const [pageVisible, setPageVisible] = useState(!document.hidden);
  const [userPlayback, setUserPlayback] = useState<boolean | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [failed, setFailed] = useState(false);
  const [ready, setReady] = useState(false);
  const shouldLoad = hasEntered && (!reducedMotion || userPlayback === true);
  const shouldPlay = shouldLoad && nearViewport && pageVisible && (userPlayback ?? !reducedMotion) && !failed;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (!("IntersectionObserver" in window)) {
      setNearViewport(true);
      setHasEntered(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      setNearViewport(entry.isIntersecting);
      if (entry.isIntersecting) setHasEntered(true);
    }, { rootMargin: "200px" });
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onVisibilityChange = () => setPageVisible(!document.hidden);
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => document.removeEventListener("visibilitychange", onVisibilityChange);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (!shouldPlay) {
      video.pause();
      return;
    }
    let cancelled = false;
    void video.play().then(() => {
      if (cancelled) video.pause();
    }).catch(() => {
      if (!cancelled) setIsPlaying(false);
    });
    return () => { cancelled = true; };
  }, [shouldPlay]);

  return (
    <div ref={containerRef} className={`managed-video ${className}`}>
      <img src={poster} alt="" aria-hidden="true" className="managed-video__poster" loading={eager ? "eager" : "lazy"} fetchPriority={eager ? "high" : "auto"} decoding="async" />
      <video
        ref={videoRef}
        src={shouldLoad && !failed ? src : undefined}
        poster={poster}
        muted
        loop
        playsInline
        preload={eager ? "metadata" : "none"}
        aria-label={label}
        className={`managed-video__element${ready && !failed ? " managed-video__element--ready" : ""}`}
        onLoadedData={() => setReady(true)}
        onPlaying={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onError={() => { setFailed(true); setIsPlaying(false); }}
      />
      {!failed && (
        <button
          type="button"
          className="media-toggle"
          aria-label={`${isPlaying ? "Pause" : "Play"} ${label}`}
          onClick={() => {
            setUserPlayback(!isPlaying);
            if (!isPlaying && shouldLoad) void videoRef.current?.play().catch(() => setIsPlaying(false));
          }}
        >
          {isPlaying ? <Pause size={16} aria-hidden="true" /> : <Play size={16} aria-hidden="true" />}
          <span>{isPlaying ? "Pause video" : "Play video"}</span>
        </button>
      )}
      {failed && <p className="media-status" role="status">Video unavailable. Showing the preview image.</p>}
    </div>
  );
};
