"use client";
import styles from "./style.module.scss";
import React, { useEffect, useRef } from "react";
import AnimatedHeaderText from "@/components/AnimatedText/AnimatedHeaderText";
import AnimatedParagraphText from "@/components/AnimatedText/AnimatedParagraphText";
import { motion } from "framer-motion";

export default function InfoSection({
  setActiveSection,
  isLoading,
  name,
  id,
  texts,
}) {
  const headerRef = useRef(null);

  return (
    <motion.section
      className={styles.infoSection}
      onViewportEnter={() => setActiveSection(id)}
      viewport={{ once: false, amount: 0.7 }}
      id={id}
    >
      <h2 ref={headerRef}>
        <AnimatedHeaderText text={name} isLoading={isLoading} />{" "}
      </h2>
      <div className={styles.textContainer}>
        {texts.map((text, i) => (
          <div key={i}>
            <AnimatedParagraphText isLoading={isLoading} text={text.txt} />
          </div>
        ))}
      </div>
    </motion.section>
  );
}
