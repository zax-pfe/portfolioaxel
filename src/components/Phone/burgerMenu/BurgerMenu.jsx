import styles from "./style.module.scss";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

export default function BurgerMenu({ setActiveBurger, activeBurger }) {
  return (
    <div
      className={styles.burgerMenu}
      onClick={() => setActiveBurger(!activeBurger)}
    >
      <AnimatePresence mode="wait">
        {activeBurger ? (
          <>
            <motion.div
              key="burger"
              className={styles.crossContainer}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={burgerVariant}
            >
              <div className={styles.lineOne} />
              <div className={styles.lineTwo} />
            </motion.div>
          </>
        ) : (
          <>
            <motion.div
              key="cross"
              className={styles.lineDotContainer}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={burgerVariant}
            >
              <div className={styles.topLine} />
              <div className={styles.dot} />
            </motion.div>
            <div className={styles.bottomLine} />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
