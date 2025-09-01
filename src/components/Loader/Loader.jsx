"use client";
import styles from "./style.module.scss";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";

export default function Loader() {
  const boxRef = useRef(null);
  const containerRef = useRef(null);
  const timeline = gsap.timeline();

  useGSAP(() => {
    timeline
      .fromTo(
        boxRef.current,
        { y: 100 },
        {
          y: 0,
          duration: 0.7,
          ease: "power.inOut",
        }
      )
      .to({}, { duration: 0.3 })
      .to(boxRef.current, {
        y: -200,
        duration: 0.7,
        ease: "back.inOut",
      })
      .to(
        containerRef.current,
        {
          y: "-100%",
          ease: "power4.inOut",
          duration: 1,
        },
        "-=0.4"
      );
  }, []);

  return (
    <div ref={containerRef} className={styles.container}>
      <div className={styles.window}>
        <div ref={boxRef} className={styles.box}></div>
      </div>
    </div>
  );
}
