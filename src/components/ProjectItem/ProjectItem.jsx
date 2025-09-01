import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function ProjectItem({
  projectname,
  setActiveProject,
  projectId,
}) {
  const [hoverStatus, setHoverStatus] = useState(false);

  function mouseHoverAction() {
    setHoverStatus(true);
    setActiveProject(projectId);
  }

  function mouseLeavingAction() {
    setHoverStatus(false);
    setActiveProject(null);
  }

  useEffect(() => {
    console.log("hoverStatus:", hoverStatus);
    // console.log("projectname:", projectname);
  }, [hoverStatus]);
  return (
    <div
      className={styles.projectItem}
      onMouseOver={() => mouseHoverAction(true)}
      onMouseOut={() => mouseLeavingAction(false)}
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
          {projectname}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={
            hoverStatus
              ? { opacity: 0.7, transition: { duration: 0.5 } }
              : { opacity: 0, transition: { duration: 0.5 } }
          }
          className={styles.full}
        >
          {projectname}
        </motion.div>
      </div>
    </div>
  );
}
