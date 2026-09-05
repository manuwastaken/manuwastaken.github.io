import { FlipWords } from "./FlipWords";
import { motion } from "framer-motion";

const HeroText = () => {
  const words = ["AI Systems", "Semantic RAG", "LLM Apps"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="relative z-10 max-w-2xl px-6 text-center md:px-12 md:text-left drop-shadow-md">
      {/* Desktop View */}
      <div className="hidden flex-col md:flex">
        <motion.h1
          className="text-4xl font-medium text-white"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          Hi I'm Abdul Rehman
        </motion.h1>

        <div className="flex flex-col items-start mt-2">
          <motion.p
            className="text-5xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            CS student building
          </motion.p>

          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
          >
            <FlipWords 
              words={words} 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-lavender" 
            />
          </motion.div>

          <motion.p
            className="text-3xl font-medium text-neutral-300 mt-2"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}
          >
            with a focus on AI engineering and MLOps
          </motion.p>
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex flex-col space-y-4 md:hidden">
        <motion.p
          className="text-3xl font-medium text-white"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          Hi I'm Abdul Rehman
        </motion.p>

        <div>
          <motion.p
            className="text-4xl font-black text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            Building
          </motion.p>

          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
          >
            <FlipWords words={words} className="text-5xl font-bold text-lavender" />
          </motion.div>

          <motion.p
            className="text-2xl font-black text-neutral-300 mt-1"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}
          >
            for real-world AI products
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;