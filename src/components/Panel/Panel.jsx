"use client";
import styles from "./style.module.scss";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import Ball from "@/components/3DBall/Ball";

export default function Panel({ ballSize }) {
  const panel = useRef(null);
  const screenRef = useRef(null);
  const timeline = gsap.timeline();
  useGSAP(() => {
    timeline
      .to({}, { duration: 2 })

      .from(panel.current, {
        opacity: 0,
        duration: 1.5,
      })

      .to(
        screenRef.current,
        {
          opacity: 0,
          duration: 1,
          onComplete: () => {
            screenRef.current.style.display = "none";
            screenRef.current.style.pointerEvents = "none";
          },
        },
        "-=1"
      );
  }, []);

  return (
    <div className={styles.leftPanel}>
      <div
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={styles.ballcontainer}
      >
        <div ref={screenRef} className={styles.screen} />
        <Ball ballSize={ballSize} />
      </div>
      <div ref={panel} className={styles.infopanel}>
        <p> Axel Puech</p>
        <p> Créative developper </p>
      </div>
    </div>
  );
}
