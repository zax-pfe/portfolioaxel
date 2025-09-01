import styles from "./style.module.scss";
import ProjectItem from "../ProjectItem/ProjectItem";
import { motion } from "framer-motion";
export default function Projects({ setActiveSection, setActiveProject }) {
  return (
    <motion.section
      className={styles.projects}
      // onViewportEnter={() => setActiveSection("Projects")}
      // viewport={{ once: false, amount: 0.5 }}
      // id="Projects"
    >
      <ProjectItem
        projectname={"Project Apsideu"}
        projectId={0}
        setActiveProject={setActiveProject}
      />
      <ProjectItem
        projectname={"Chloe Girten s Website"}
        projectId={1}
        setActiveProject={setActiveProject}
      />
      <ProjectItem
        projectname={"Yomy Care"}
        projectId={2}
        setActiveProject={setActiveProject}
      />
      <ProjectItem
        projectname={"Contract Copilot : COCO"}
        projectId={3}
        setActiveProject={setActiveProject}
      />
      <div className={styles.lastline} />
    </motion.section>
  );
}
