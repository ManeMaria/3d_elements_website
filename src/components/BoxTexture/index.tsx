import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import texture from "@/assets/images/map.jpg";

export const BoxTexture: React.FC = () => {
  const colorMap = useLoader(TextureLoader, texture);
  return (
    <mesh rotation={[90, 0, 20]}>
      <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  );
};
