import styles from "./style.module.scss";
import Image from "next/image";
import AnimatedHeaderText from "../AnimatedText/AnimatedHeaderText";
import { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import dynamic from "next/dynamic";

const WaterDistortionCanvas = dynamic(
  () =>
    import("@/components/RippleEffect/WaterDistortion").then(
      (mod) => mod.WaterDistortionCanvas,
    ),
  { ssr: false },
);

const images = ["/assets/me.jpg"];

const rippleSettings = {
  intensity: 0.06,
  scale: 0.05,
  viscosity: 0.89,
  decay: 0.98,
  distortionStrength: 0.05,
  aberration: 0.01,
  lightIntensity: 0.04,
  specularPower: 8.1,
};

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
        {/* <Image
          src="/assets/me.jpg"
          alt="Me happy in Korea"
          fill
          className={styles.image}
        /> */}
        <div className={styles.waterDistorsionContainer}>
          <WaterDistortionCanvas images={images} settings={rippleSettings} />
        </div>
        <motion.div
          initial={{ y: 0 }}
          animate={controls}
          ref={screenRef}
          className={styles.screen}
        />
      </div>
      <div className={styles.profileText}>
        <AnimatedHeaderText text={"<- Hover me !"} isLoading={isLoading} />
      </div>
    </div>
  );
}
