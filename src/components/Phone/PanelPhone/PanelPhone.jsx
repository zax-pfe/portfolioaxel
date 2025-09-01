"use client";
import styles from "./style.module.scss";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import Ball from "@/components/3DBall/Ball";
import BurgerMenu from "../burgerMenu/BurgerMenu";
import { motion, AnimatePresence } from "framer-motion";
import BurgerItems from "../BurgerItems/BurgetItems";

const burgerVariant = {
  hidden: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export default function PanelPhone({
  ballSize,
  setActiveSection,
  activeSection,
}) {
  const [activeBurger, setActiveBurger] = useState(false);

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

  useEffect(() => {
    if (activeBurger) {
      // Bloque le scroll
      document.body.style.overflow = "hidden";
    } else {
      // Restaure le scroll
      document.body.style.overflow = "auto";
    }

    // Nettoyage au cas où le composant se démonte
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeBurger]);

  return (
    <div className={styles.panelPhone}>
      <div className={styles.topPanel}>
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={styles.ballcontainer}
        >
          <div ref={screenRef} className={styles.screen} />
          <Ball ballSize={ballSize} />
        </div>

        <div className={styles.burgerMenuContainer}>
          <BurgerMenu
            setActiveBurger={setActiveBurger}
            activeBurger={activeBurger}
          />
        </div>
      </div>
      <AnimatePresence>
        {activeBurger && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={burgerVariant}
            className={styles.menu}
          >
            <BurgerItems
              setActiveSection={setActiveSection}
              activeSection={activeSection}
              setActiveBurger={setActiveBurger}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
