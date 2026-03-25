import { useEffect, useState } from "react";

/**
 * Thin reading-progress bar — common on polished dev portfolios.
 */
const ScrollProgress = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const update = () => {
      const el = document.documentElement;
      const scrollable = el.scrollHeight - el.clientHeight;
      if (scrollable <= 0) {
        setWidth(0);
        return;
      }
      setWidth((el.scrollTop / scrollable) * 100);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[100] h-[2px]"
      aria-hidden
    >
      <div
        className="h-full rounded-none bg-gradient-to-r from-accent via-accent2 to-accent shadow-[0_0_12px_rgba(34,211,238,0.45)] transition-[width] duration-150 ease-out"
        style={{ width: `${width}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
