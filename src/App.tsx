import { HeroBackground, Box, BoxTexture, AnimetedSphere } from "@/components";
import { GlobalStyle } from "./config/globalCss/configGlobalCss";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const stylesCanvas = { height: "40rem" };

function App() {
  return (
    <>
      <GlobalStyle />
      <HeroBackground />
      <div style={{ display: "flex" }}>
        <Canvas style={stylesCanvas}>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          <Box />
        </Canvas>
        <Canvas style={stylesCanvas}>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          <BoxTexture />
        </Canvas>
      </div>
      <Canvas style={stylesCanvas}>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <AnimetedSphere />
      </Canvas>
    </>
  );
}

export default App;
