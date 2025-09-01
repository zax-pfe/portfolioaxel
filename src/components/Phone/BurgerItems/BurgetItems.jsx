import styles from "./style.module.scss";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import { navlist } from "@/app/data/navlist";

export default function BurgerItems({
  activeSection,
  setActiveSection,
  setActiveBurger,
}) {
  const itemsRef = useRef(null);

  useGSAP(() => {
    const items = itemsRef.current.querySelectorAll(
      `.${styles.item}, .${styles.itemActive}`
    );
    const timeline = gsap.timeline();
    timeline
      .to({}, { duration: 0.7 }) // Délai initial si nécessaire
      .from(items, {
        opacity: 0,
        x: -30, // Déplacement vertical pour un effet plus dynamique
        // duration: 0.5,
        stagger: 0.08, // Délai de 0.2s entre chaque élément
        ease: "power4.inOut",
      });
  }, []);

  return (
    <div ref={itemsRef} className={styles.burgeritems}>
      {navlist.map((item, i) => (
        <Item
          name={item.name}
          key={i}
          setActiveSection={setActiveSection}
          activeSection={activeSection}
          setActiveBurger={setActiveBurger}
        />
      ))}
    </div>
  );
}

function Item({ name, setActiveSection, activeSection, setActiveBurger }) {
  console.log("active section: ", activeSection);
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
    setActiveSection(name);
    setActiveBurger(false);
  }
  return (
    <>
      {activeSection === name ? (
        <div onClick={() => actionOnClick()} className={styles.itemActive}>
          {name}
        </div>
      ) : (
        <div onClick={() => actionOnClick()} className={styles.item}>
          {name}
        </div>
      )}
    </>
    // <motion.div
    //   animate={
    //     activeSection === name
    //       ? { opacity: 1, transition: { duration: 0.3 } }
    //       : { opacity: 0.7, transition: { duration: 0.3 } }
    //   }
    //   onClick={() => actionOnClick()}
    //   className={styles.item}
    // >
    //   {name}
    // </motion.div>
  );
}
