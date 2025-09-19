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
      <a
        href="https://maxime-despiau.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ width: "100%" }}
      >
        <ProjectItem
          projectname={"Maxime Despiau"}
          projectId={0}
          setActiveProject={setActiveProject}
        />
      </a>
      <ProjectItem
        projectname={"Chloe Girten s Website"}
        projectId={1}
        setActiveProject={setActiveProject}
      />
      <a
        href="https://yomy.care/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ width: "100%" }}
      >
        <ProjectItem
          projectname={"Yomy Care"}
          projectId={2}
          setActiveProject={setActiveProject}
        />
      </a>
      <ProjectItem
        projectname={"Contract Copilot : COCO"}
        projectId={3}
        setActiveProject={setActiveProject}
      />
      <div className={styles.lastline} />
    </motion.section>
  );
}
