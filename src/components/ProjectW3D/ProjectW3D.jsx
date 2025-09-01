"use client";
import React, { useEffect, useState } from "react";
import Scene from "@/components/CurvedImage/Scene";
import Projects from "@/components/Projects/Projects";

export default function ProjectW3D({ setActiveSection }) {
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    console.log("activeProject:", activeProject);
  }, [activeProject]);

  return (
    <>
      <Scene activeProject={activeProject} />
      {/* <div className="h-50"></div> */}
      <Projects
        setActiveSection={setActiveSection}
        setActiveProject={setActiveProject}
      />
      {/* <div className="h-50"></div> */}
    </>
  );
}
