// Model.jsx
import React, { useRef, useEffect } from "react";
import { fragment, vertex } from "./shader";
import { useFrame, useThree } from "@react-three/fiber";
import { useTexture, useAspect } from "@react-three/drei";
import useMouse from "./useMouse";
import useDimension from "./useDimention";
import { useTransform, animate, useMotionValue } from "framer-motion";
import { projectsList } from "./data";

export default function Model({ activeProject }) {
  const image = useRef();
  const texture = useTexture("/assets/project1.png");
  const { width, height } = texture.image;
  const dimension = useDimension();
  const mouse = useMouse();
  const scale = useAspect(width, height, 0.3);
  const { viewport } = useThree();
  const opacity = useMotionValue(0);
  const textures = projectsList.map((project) => useTexture(project.src));

  // Valeurs fixes
  const amplitude = 0.05;
  const waveLength = 13;

  const uniforms = useRef({
    uTime: { value: 0 },
    uAmplitude: { value: amplitude },
    uWaveLength: { value: waveLength },
    uTexture: { value: texture },
    uOpacity: { value: 1 },
  });

  useEffect(() => {
    if (!image.current) return;

    if (activeProject != null) {
      // Étape 1 : fade out
      animate(opacity, 0, {
        duration: 0.2,
        onUpdate: (progress) => {
          image.current.material.uniforms.uOpacity.value = progress;
        },
      }).finished.then(() => {
        // Étape 2 : changer la texture une fois invisible
        image.current.material.uniforms.uTexture.value =
          textures[activeProject];

        // Étape 3 : fade in
        animate(opacity, 1, {
          duration: 0.5,
          ease: [0.55, 0.085, 0.68, 0.53],
          onUpdate: (progress) => {
            image.current.material.uniforms.uOpacity.value = progress;
          },
        });
      });
    } else {
      // Aucun projet actif → fade out direct
      animate(opacity, 0, {
        duration: 0.2,
        onUpdate: (progress) => {
          image.current.material.uniforms.uOpacity.value = progress;
        },
      });
    }
  }, [activeProject]);

  const x = useTransform(
    mouse.x,
    [0, dimension.width],
    [(-1 * viewport.width) / 2, viewport.width / 2]
  );
  const y = useTransform(
    mouse.y,
    [0, dimension.height],
    [viewport.height / 2, (-1 * viewport.height) / 2]
  );
  useFrame(() => {
    // Animation continue de la vague
    image.current.material.uniforms.uTime.value += 0.04;
    image.current.position.y = y.get();
    image.current.position.x = x.get();
  });
  return (
    <mesh ref={image} scale={scale}>
      <planeGeometry args={[1.5, 1.5, 32, 32]} />
      <shaderMaterial
        wireframe={false}
        fragmentShader={fragment}
        vertexShader={vertex}
        uniforms={uniforms.current}
        transparent={true}
      />
    </mesh>
  );
}
