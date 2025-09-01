import styles from "./style.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function NavBarItem({ name, active, hover, setactive }) {
  const [hoverStatus, setHoverStatus] = useState(false);

  function action() {
    setHoverStatus(true);
  }

  function actionOnClick() {
    if (name.toLowerCase() === "home") {
      // Si c'est la section "home", on remonte en haut
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const section = document.getElementById(name);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    setactive(name);
  }

  return (
    <motion.div
      className={styles.NavBarItem}
      initial={{ x: 0 }}
      animate={
        active === name
          ? { x: -20, transition: { duration: 0.3 } }
          : { x: 0, transition: { duration: 0.3 } }
      }
      onMouseOver={() => action()}
      onMouseOut={() => setHoverStatus(false)}
      onClick={() => actionOnClick()}
    >
      <motion.div
        className={styles.name}
        initial={{ opacity: 0 }}
        animate={
          hover
            ? { opacity: 0.5, transition: { duration: 0.5 } }
            : { opacity: 0, transition: { duration: 0.5 } }
        }
      >
        {name}
      </motion.div>
      <div className={styles.icon}>
        {active === name && (
          <motion.div
            className={styles.line}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          ></motion.div>
        )}

        {/* <div className={styles.line} /> */}
        <motion.div
          initial={{ scale: 1 }}
          animate={hoverStatus ? { scale: 2 } : { scale: 1 }}
          className={styles.dot}
        />
      </div>
    </motion.div>
  );
}
