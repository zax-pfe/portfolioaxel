import styles from "./style.module.scss";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import AnimatedHeaderText from "../AnimatedText/AnimatedHeaderText";
import HoveredText from "./HoveredText";

export default function Contact({ setActiveSection, isLoading }) {
  const contactRef = useRef(null);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("axel75puech@gmail.com");
  };

  const [hoverStatus, setHoverStatus] = useState(false);

  return (
    <motion.section
      className={styles.contact}
      onViewportEnter={() => setActiveSection("Contact")}
      viewport={{ once: false, amount: 0.5 }}
      id="Contact"
    >
      <h1 ref={contactRef}>
        <AnimatedHeaderText
          isLoading={isLoading}
          text={
            "Curious to know more about me or my projects? I’d be happy to chat — let’s get in touch!"
          }
        />
      </h1>
      <h3 className={styles.linkContainer}>
        <HoveredText
          text={"axel75puech@gmail.com"}
          href={"mailto:axel75puech@gmail.com"}
        />
        <HoveredText
          text={"Linkedin: Axel Puech"}
          href="https://www.linkedin.com/in/axel-puech/"
        />
      </h3>
    </motion.section>
  );
}
