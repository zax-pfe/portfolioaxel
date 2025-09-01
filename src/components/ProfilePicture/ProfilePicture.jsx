import styles from "./style.module.scss";
import Image from "next/image";
import AnimatedHeaderText from "../AnimatedText/AnimatedHeaderText";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useRef } from "react";

export default function ProfilePicture({ isLoading }) {
  const screen = useRef(null);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const timeline = gsap.timeline({
      defaults: { duration: 1.2, autoAlpha: 0, yPercent: 100 },
      scrollTrigger: {
        trigger: screen.current,
        start: "top 90%",
        onEnter: () => timeline.play(),
        onEnterBack: () => {},
      },
    });

    timeline.to(screen.current, {
      y: 100,
      duration: 0.7,
      ease: "power.inOut",
    });
  }, [isLoading]);

  return (
    <div className={styles.profilepicture}>
      <div className={styles.imageContainer}>
        <Image
          src="/assets/me.jpg"
          alt="Me happy in Corea"
          fill
          className={styles.image}
        />
        <div ref={screen} className={styles.screen} />
      </div>
      <div className={styles.profileText}>
        <AnimatedHeaderText
          text={"<- Me happy in Corea"}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}
