import { useRef } from "react";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/FrameWorks";

const About = () => {
  const techStackContainer = useRef();

  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      
      {/* 12-Column Grid Layout */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 mt-8">
        
        {/* Card 1: Hero / About Me */}
        <div className="relative overflow-hidden grid-default-color lg:col-span-8 p-8 sm:p-10 flex flex-col justify-center min-h-[22rem]">
          {/* Background POV Image */}
          <img
            src={`${import.meta.env.BASE_URL}assets/coding-pov.png`}
            alt="Coding POV"
            className="absolute right-0 top-0 w-full h-full object-cover opacity-20 pointer-events-none mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080912] via-[#080912]/70 to-transparent pointer-events-none" />

          {/* Content Layer */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-8">
            <img
              src={`${import.meta.env.BASE_URL}assets/socials/profile.jpg`}
              alt="Abdul Rehman"
              className="object-cover object-top border-2 rounded-full size-44 sm:size-52 border-white/30 shadow-2xl shrink-0"
            />
            <div className="space-y-3 text-center sm:text-left">
              <p className="headtext text-3xl sm:text-4xl font-bold">Hi, I'm Abdul Rehman</p>
              <p className="subtext text-base sm:text-lg leading-relaxed max-w-xl">
                Computer Science student at Saarland University focused on AI engineering and systems design. I build end-to-end AI applications using Python, PyTorch, FastAPI, and RAG pipelines.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2: Tech Stack */}
        <div className="relative overflow-hidden grid-default-color lg:col-span-4 p-8 sm:p-10 flex flex-col justify-between min-h-[22rem]">
          <div className="relative z-10 space-y-4">
            <p className="headtext text-2xl sm:text-3xl font-bold">Tech Stack</p>
            <div className="subtext text-sm sm:text-base space-y-2.5 leading-relaxed">
              <p><span className="text-purple-400 font-semibold">Languages:</span> Python, Java, C, RISC-V, SQL</p>
              <p><span className="text-purple-400 font-semibold">AI & ML:</span> PyTorch, RAG, Embeddings, ChromaDB</p>
              <p><span className="text-purple-400 font-semibold">Dev & Ops:</span> FastAPI, Docker, GitHub Actions, CI/CD</p>
            </div>
          </div>
          {/* Frameworks Orbit Graphic */}
          <div className="absolute right-0 bottom-0 w-52 h-52 opacity-35 pointer-events-none translate-x-6 translate-y-6">
            <Frameworks />
          </div>
        </div>

        {/* Card 3: Contact / Socials */}
        <div className="relative overflow-hidden grid-special-color lg:col-span-12 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="headtext text-lg sm:text-xl font-medium text-center sm:text-left">
            Let's connect—reach out directly or check out my profiles.
          </p>
          <div className="flex items-center justify-center gap-4 shrink-0 z-10">
            <CopyEmailButton />
            <a
              href="https://www.linkedin.com/in/abdulrehmanhasan/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="flex items-center justify-center w-12 h-12 rounded-xl bg-midnight hover:bg-gray-700 transition-colors"
            >
              <img src={`${import.meta.env.BASE_URL}assets/socials/linkedIn.svg`} alt="LinkedIn" className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/manuwastaken"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="flex items-center justify-center w-12 h-12 rounded-xl bg-midnight hover:bg-gray-700 transition-colors"
            >
              <img src={`${import.meta.env.BASE_URL}assets/logos/github.png`} alt="GitHub" className="w-6 h-6 invert" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;