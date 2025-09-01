"use client";
import styles from "./style.module.scss";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import AnimatedHeaderText from "@/components/AnimatedText/AnimatedHeaderText";
import AnimatedParagraphText from "@/components/AnimatedText/AnimatedParagraphText";
import { motion } from "framer-motion";

export default function InfoSectionPhone({
  setActiveSection,
  isLoading,
  name,
  id,
  texts,
}) {
  const headerRef = useRef(null);

  return (
    <motion.section
      className={styles.DoingRN}
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
