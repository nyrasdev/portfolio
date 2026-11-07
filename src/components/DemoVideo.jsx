import { useEffect, useRef } from 'react';

// A muted, looping demo video in a window frame. It only loads and plays while on screen.
export default function DemoVideo({ src, poster, title, label }) {
  const ref = useRef(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) v.play().catch(() => {});
      else v.pause();
    }, { threshold: 0.25 });
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <figure className="win">
      <div className="win-bar" aria-hidden="true">
        <span /><span /><span />
        <em>{title}</em>
      </div>
      <video ref={ref} src={src} poster={poster} muted loop playsInline preload="none" aria-label={label} width="1200" height="750" />
    </figure>
  );
}
