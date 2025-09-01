import styles from "./style.module.scss";
import Image from "next/image";
import AnimatedHeaderText from "../AnimatedText/AnimatedHeaderText";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function ProfilePicture({ isLoading }) {
  const screenRef = useRef(null);
  const imageContainerRef = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(imageContainerRef, { once: true, margin: "-30%" });
  // déclenche l'animation quand l'image est visible
  if (isInView) {
    controls.start({
      y: "100%",
      transition: { duration: 0.7, ease: [0.86, 0, 0.07, 1] },
    });
  }
  return (
    <div className={styles.profilepicture}>
      <div ref={imageContainerRef} className={styles.imageContainer}>
        <Image
          src="/assets/me.jpg"
          alt="Me happy in Korea"
          fill
          className={styles.image}
        />
        <motion.div
          initial={{ y: 0 }}
          animate={controls}
          ref={screenRef}
          className={styles.screen}
        />
      </div>
      <div className={styles.profileText}>
        <AnimatedHeaderText
          text={"<- Me happy in Korea"}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}
