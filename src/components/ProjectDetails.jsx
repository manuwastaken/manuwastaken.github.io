import { motion } from "motion/react";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  github,
  closeModal,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden bg-black/60 backdrop-blur-md">
      <motion.div
        className="relative w-full max-w-2xl max-h-[90vh] flex flex-col rounded-[2rem] bg-midnight/95 backdrop-blur-2xl border border-white/10 shadow-2xl"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Sleek Close Button */}
        <button
          onClick={closeModal}
          className="absolute z-10 flex items-center justify-center p-2 transition-all rounded-full top-5 right-5 bg-white/5 border border-white/10 hover:bg-white/15 group"
        >
          <img 
            src={`${import.meta.env.BASE_URL}assets/close.svg`} 
            className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" 
            alt="Close" 
          />
        </button>

        {/* Content Container */}
        <div className="p-8 sm:p-10 overflow-y-auto">
          <h5 className="mb-4 text-3xl font-bold text-white tracking-tight">{title}</h5>
          
          <div className="space-y-4">
            <p className="text-base font-light leading-relaxed text-neutral-300">
              {description}
            </p>

            {subDescription.map((subDesc, index) => (
              <p key={index} className="text-base font-light leading-relaxed text-neutral-400">
                {subDesc}
              </p>
            ))}
          </div>

          {/* Footer: Tags & Action Buttons */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-10 gap-6 pt-6 border-t border-white/10">
            
            {/* Pill Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span 
                  key={tag.id || index}
                  className="px-3.5 py-1.5 text-xs font-mono rounded-full bg-white/5 border border-white/10 text-neutral-300"
                >
                  {tag.name}
                </span>
              ))}
            </div>

            {/* Action Links */}
            <div className="flex items-center gap-3 shrink-0">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 text-xs font-mono rounded-full bg-white/5 border border-white/10 text-neutral-300 hover:text-white hover:border-white/30 transition-all"
                >
                  GitHub
                  <img
                    src={`${import.meta.env.BASE_URL}assets/logos/github.png`}
                    className="size-4 invert"
                    alt="GitHub"
                  />
                </a>
              )} 
              {href && (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 text-xs font-mono rounded-full bg-royal text-white hover:bg-lavender transition-all cursor-pointer shadow-lg"
                >
                  View Project
                  <img 
                    src={`${import.meta.env.BASE_URL}assets/arrow-up.svg`} 
                    className="size-4" 
                    alt="Arrow Up" 
                  />
                </a>
              )}
            </div>  
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;