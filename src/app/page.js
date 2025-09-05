"use client";
import Loader from "@/components/Loader/Loader";
import React, { useEffect, useState } from "react";
import styles from "./page.module.scss";
import Description from "@/components/Desription/Description";
import Lenis from "lenis";
import Navbar from "@/components/NavBar/NavBar";
import Panel from "@/components/Panel/Panel";
import ProjectW3D from "@/components/ProjectW3D/ProjectW3D";
import Contact from "@/components/Contact/Contact";
import useDevice from "./hooks/useDevice";
import useBallSize from "./hooks/useBalllSize";
import PanelPhone from "@/components/Phone/PanelPhone/PanelPhone";
import InfoSectionPhone from "@/components/Phone/InfoSectionPhone/inforSectionPhone";
import InfoSection from "@/components/Desktop/InfoSection/InfoSection";
import { navlist } from "./data/navlist";
import ProfilePicture from "@/components/ProfilePicture/ProfilePicture";
import ParralaxTextPage from "@/components/ParallaxTextPage/ParallaxTextPage";
import AnimatedHeaderText from "@/components/AnimatedText/AnimatedHeaderText";
import {
  doingrntext,
  mybackgroundtext,
  projectstext,
  competencies,
} from "./data/text";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("Home");
  const device = useDevice();
  const ballSize = useBallSize(device);
  console.log("active section", activeSection);

  useEffect(() => {
    // Lenis scroll init
    const lenis = new Lenis({
      lerp: device === "phone" ? 0.05 : 0.1,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Hide the loader and scroll to the top while loading
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);
    setTimeout(() => {
      window.scrollTo(0, 0);
      setIsLoading(false);
      document.body.style.cursor = "default";
      document.body.style.overflow = "auto";
      setActiveSection("Home");
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={styles.pageContainer}>
      {isLoading && <Loader />}
      {device === "phone" ? (
        <div className={styles.phoneContainer}>
          <PanelPhone
            ballSize={ballSize}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
          <div className={styles.content}>
            <div className={styles.textSectionContainerPhone}>
              <Description setActiveSection={setActiveSection} />
              <ProfilePicture isLoading={isLoading} />
              <InfoSectionPhone
                setActiveSection={setActiveSection}
                isLoading={isLoading}
                name={"What i am doing right now"}
                id={navlist[1].name}
                texts={doingrntext}
              />

              <InfoSectionPhone
                setActiveSection={setActiveSection}
                isLoading={isLoading}
                name={"My Background"}
                id={navlist[2].name}
                texts={mybackgroundtext}
              />
              <InfoSectionPhone
                setActiveSection={setActiveSection}
                isLoading={isLoading}
                name={"My Core competencies"}
                id={navlist[3].name}
                texts={competencies}
              />
            </div>
            <div className={styles.parallaxWrapper}>
              <ParralaxTextPage />
            </div>
            <div className={styles.textSectionContainerPhone}>
              <InfoSectionPhone
                setActiveSection={setActiveSection}
                isLoading={isLoading}
                name={"Some Project i have worked on"}
                id={navlist[4].name}
                texts={projectstext}
              />
            </div>
            <div className="h-[10vh]" />
            <ProjectW3D setActiveSection={setActiveSection} />
            <div className={styles.textSectionContainerPhone}>
              <Contact
                setActiveSection={setActiveSection}
                isLoading={isLoading}
              />
            </div>
          </div>
        </div>
      ) : (
        <>
          <Panel ballSize={ballSize} />
          <div className={styles.content}>
            <div className={styles.textSectionContainer}>
              <Description setActiveSection={setActiveSection} />
              <ProfilePicture isLoading={isLoading} />
              <InfoSection
                setActiveSection={setActiveSection}
                isLoading={isLoading}
                name={"What i am doing right now"}
                id={navlist[1].name}
                texts={doingrntext}
              />
              <InfoSection
                setActiveSection={setActiveSection}
                isLoading={isLoading}
                name={"My Background"}
                id={navlist[2].name}
                texts={mybackgroundtext}
              />
              <InfoSection
                setActiveSection={setActiveSection}
                isLoading={isLoading}
                name={"Core competencies"}
                id={navlist[3].name}
                texts={competencies}
              />
            </div>
            <div className={styles.parallaxWrapper}>
              <ParralaxTextPage />
            </div>
            <div className={styles.textSectionContainer}>
              <InfoSection
                setActiveSection={setActiveSection}
                isLoading={isLoading}
                name={"Some Project i have worked on"}
                id={navlist[4].name}
                texts={projectstext}
              />
            </div>

            <ProjectW3D setActiveSection={setActiveSection} />
            <div className={styles.textSectionContainer}>
              <Contact
                setActiveSection={setActiveSection}
                isLoading={isLoading}
              />
            </div>
          </div>
          <Navbar
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        </>
      )}
    </div>
  );
}
