import React from "react";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

export const AnimetedSphere: React.FC = () => {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2.5}>
      <MeshDistortMaterial
        color="#8352FD"
        attach="material"
        roughness={0}
        speed={2}
      />
    </Sphere>
  );
};
