"use client";

import { useEffect, useRef, useState } from "react";

const THRESHOLDS = Array.from({ length: 41 }, (_, i) => i / 40);

export default function ScrollFadeIn({ children, className = "" }) {
  const ref = useRef(null);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setOpacity(1);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const r = entry.intersectionRatio;
        // Stay more transparent early, then ramp up (still hits 1 when mostly in view)
        const eased = Math.min(1, Math.pow(r, 2.15) * 1.58);
        setOpacity(eased);
      },
      { threshold: THRESHOLDS, rootMargin: "12% 0px 12% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className} style={{ opacity }}>
      {children}
    </div>
  );
}
