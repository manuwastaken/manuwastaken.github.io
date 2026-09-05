import { motion, useScroll, useSpring, useTransform } from "motion/react";

const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { damping: 50 });
  const mountain3Y = useTransform(x, [0, 0.5], ["0%", "70%"]);
  const planetsX = useTransform(x, [0, 0.5], ["0%", "-20%"]);
  const mountain2Y = useTransform(x, [0, 0.5], ["0%", "30%"]);
  const mountain1Y = useTransform(x, [0, 0.5], ["0%", "0%"]);

  return (
    <section className="absolute inset-0 bg-[#030412]">
      {/* Container with brightness-50 applied ONLY to background image layers */}
      <div className="relative h-screen overflow-y-hidden brightness-50">
        {/* Background Sky */}
        <div
          className="absolute inset-0 w-full h-screen -z-50"
          style={{
            backgroundImage: `url(${import.meta.env.BASE_URL}assets/sky.jpg)`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        />
        {/* Mountain Layer 3 */}
        <motion.div
          className="absolute inset-0 -z-40"
          style={{
            backgroundImage: `url(${import.meta.env.BASE_URL}assets/mountain-3.png)`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain3Y,
          }}
        />
        {/* Planets */}
        <motion.div
          className="absolute inset-0 -z-30"
          style={{
            backgroundImage: `url(${import.meta.env.BASE_URL}assets/planets.png)`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            x: planetsX,
          }}
        />
        {/* Mountain Layer 2 */}
        <motion.div
          className="absolute inset-0 -z-20"
          style={{
            backgroundImage: `url(${import.meta.env.BASE_URL}assets/mountain-2.png)`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain2Y,
          }}
        />
        {/* Mountain Layer 1 */}
        <motion.div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `url(${import.meta.env.BASE_URL}assets/mountain-1.png)`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain1Y,
          }}
        />
      </div>

      {/* Dark overlay specifically behind content to soften highlights */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      {/* Bottom fade mask */}
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#030412] via-[#030412]/80 to-transparent pointer-events-none" />
    </section>
  );
};

export default ParallaxBackground;