import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { Astronaut } from "../components/Astronaut";
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Suspense } from "react";
import Loader from "../components/Loader";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  
  return (
    <section className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space" id="home">
      {/* Content wrapper */}
      <div className="relative z-10 my-auto container mx-auto max-w-7xl c-space">
        <HeroText />
      </div>
      
      <ParallaxBackground />
      
      <figure
        className="absolute inset-0 pointer-events-none"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas camera={{ position: [0, 1, 3] }}>
          
          {/* --- NEW LIGHTING TO BLEND WITH BACKGROUND --- */}
          {/* Deep purple ambient light to match the space sky */}
          <ambientLight intensity={0.3} color="#2e1065" />
          {/* Dimmed orange light to match the mountain reflections */}
          <directionalLight position={[4, -1, 3]} intensity={0.8} color="#ea580c" />
          {/* Soft cyan rim light so it doesn't get completely lost in the dark */}
          <pointLight position={[-3, 2, 2]} intensity={0.4} color="#38bdf8" />
          {/* ------------------------------------------- */}

          <Suspense fallback={<Loader />}>
            <Float>
              <Astronaut
                scale={isMobile ? 0.23 : 0.3} 
                position={isMobile ? [0, -1.5, 0] : [1.3, -1, 0]}
              />
            </Float>
            <Rig />
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
}

export default Hero;