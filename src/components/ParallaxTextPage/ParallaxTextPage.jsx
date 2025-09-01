"use client";
import lego1 from "../../../public/assets/images/lego1.png";
import lego2 from "../../../public/assets/images/lego2.png";
import lego3 from "../../../public/assets/images/lego3.png";
import lego4 from "../../../public/assets/images/lego4.png";

import FramerMotion from "../../../public/assets/images/gsap.png";
import Line from "@/components/ParallaxText/ParallaxText";
import { technoimages } from "../data/technoimages";

import { useEffect, useRef } from "react";

import { motion } from "framer-motion";
import { useScroll, MotionValue, useTransform } from "framer-motion";

export default function Page() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  return (
    <div className="overflow-hidden">
      <div className="h-[100vh]"></div>
      <div ref={container}>
        <Line
          image1={technoimages[2].src}
          text1={technoimages[2].name}
          image2={technoimages[4].src}
          text2={technoimages[4].name}
          image3={technoimages[3].src}
          text3={technoimages[3].name}
          left="-55%"
          progress={scrollYProgress}
          direction="left"
        ></Line>
        <Line
          image1={technoimages[0].src}
          text1={technoimages[1].name}
          image2={technoimages[3].src}
          text2={technoimages[3].name}
          image3={technoimages[3].src}
          text3={technoimages[3].name}
          left="-35%"
          progress={scrollYProgress}
          direction="right"
        ></Line>
        <Line
          image1={technoimages[0].src}
          text1={technoimages[1].name}
          image2={technoimages[3].src}
          text2={technoimages[3].name}
          image3={technoimages[3].src}
          text3={technoimages[3].name}
          left="-15%"
          progress={scrollYProgress}
          direction="left"
        ></Line>
      </div>
      <div className="h-[100vh]"></div>
    </div>
  );
}
