import { useMotionValue } from "framer-motion";
import { useEffect } from "react";

export default function useMouse() {
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const mouseMove = (e) => {
    const { clientX, clientY } = e;
    // const { innerWidth, innerHeight } = window;
    // const x = clientX / innerWidth;
    // const y = clientY / innerHeight;
    const x = clientX;
    const y = clientY;
    mouse.x.set(x);
    mouse.y.set(y);
  };

  useEffect(() => {
    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  });

  return mouse;
}
