import { useRef, useState } from "react";
import { motion } from "framer-motion";
import styles from "./style.module.scss";

export default function HoveredText({ text, href }) {
  const [hoverStatus, setHoverStatus] = useState(false);

  return (
    <a
      className={styles.projectItem}
      onMouseOver={() => setHoverStatus(true)}
      onMouseOut={() => setHoverStatus(false)}
      href={href}
    >
      <div className={styles.textContainer}>
        <motion.div
          className={styles.stroke}
          initial={{ opacity: 1 }}
          animate={
            hoverStatus
              ? { opacity: 0, transition: { duration: 0.5 } }
              : { opacity: 1, transition: { duration: 0.5 } }
          }
        >
          {/* axel75puech@gmail.com */}
          {text}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={
            hoverStatus
              ? { opacity: 1, transition: { duration: 0.5 } }
              : { opacity: 0, transition: { duration: 0.5 } }
          }
          className={styles.full}
        >
          {text}
          {/* axel75puech@gmail.com */}
        </motion.div>
      </div>
    </a>
  );
}
