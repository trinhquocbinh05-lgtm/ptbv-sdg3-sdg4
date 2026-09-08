import React, { useEffect, useRef, useState } from 'react';

interface FadingVideoProps {
  src: string | string[];
  className?: string;
  style?: React.CSSProperties;
}

export const FadingVideo: React.FC<FadingVideoProps> = ({ src, className = '', style = {} }) => {
  const sources = Array.isArray(src) ? src : [src];
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const animFrameRef = useRef<number | null>(null);
  const isFadingOutRef = useRef(false);
  const opacityRef = useRef(0);

  const currentSrc = sources[currentIndex % sources.length];

  const animateOpacity = (targetOpacity: number, durationMs: number, onComplete?: () => void) => {
    if (animFrameRef.current !== null) {
      cancelAnimationFrame(animFrameRef.current);
      animFrameRef.current = null;
    }

    const startOpacity = opacityRef.current;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, Math.max(0, elapsed / durationMs));
      const current = startOpacity + (targetOpacity - startOpacity) * progress;
      
      opacityRef.current = current;
      if (videoRef.current) {
        videoRef.current.style.opacity = current.toString();
      }

      if (progress < 1) {
        animFrameRef.current = requestAnimationFrame(tick);
      } else {
        animFrameRef.current = null;
        if (onComplete) onComplete();
      }
    };

    animFrameRef.current = requestAnimationFrame(tick);
  };

  const fadeIn = (duration = 500) => {
    animateOpacity(1, duration);
  };

  const fadeOut = (duration = 550) => {
    animateOpacity(0, duration);
  };

  const handleLoadedData = () => {
    isFadingOutRef.current = false;
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
    fadeIn(500);
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || !video.duration || isNaN(video.duration)) return;

    const remaining = video.duration - video.currentTime;
    if (remaining <= 0.55 && !isFadingOutRef.current) {
      isFadingOutRef.current = true;
      fadeOut(550);
    }
  };

  const handleEnded = () => {
    isFadingOutRef.current = false;
    const video = videoRef.current;

    if (sources.length === 1) {
      if (video) {
        video.currentTime = 0;
        video.play().catch(() => {});
      }
      fadeIn(500);
    } else {
      setCurrentIndex((prev) => (prev + 1) % sources.length);
    }
  };

  useEffect(() => {
    return () => {
      if (animFrameRef.current !== null) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={currentSrc}
      className={className}
      style={{
        ...style,
        opacity: 0,
        transition: 'none', // Managed strictly via requestAnimationFrame
      }}
      autoPlay
      muted
      playsInline
      preload="auto"
      onLoadedData={handleLoadedData}
      onTimeUpdate={handleTimeUpdate}
      onEnded={handleEnded}
    />
  );
};
