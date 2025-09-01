import styles from "./style.module.scss";
import { useState, useRef } from "react";
import NavBarItem from "../NavBarItem/NavBarItem";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { navlist } from "@/app/data/navlist";

export default function Navbar({ activeSection, setActiveSection }) {
  const [hoverStatus, setHoverStatus] = useState(false);
  const timeline = gsap.timeline();
  const navbar = useRef(null);

  function action() {
    setHoverStatus(true);
  }
  useGSAP(() => {
    timeline
      .to({}, { duration: 2 })

      .from(navbar.current, {
        opacity: 0,
        duration: 1.5,
      });
  }, []);

  return (
    <motion.div
      onMouseOver={() => action()}
      onMouseOut={() => setHoverStatus(false)}
      className={styles.navbar}
      ref={navbar}
    >
      {navlist.map((item, i) => (
        <NavBarItem
          name={item.name}
          key={i}
          active={activeSection}
          hover={hoverStatus}
          setactive={setActiveSection}
        />
      ))}
    </motion.div>
  );
}
