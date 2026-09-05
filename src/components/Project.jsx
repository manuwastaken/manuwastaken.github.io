import React from "react";

const Project = ({
  title,
  description,
  tags,
  github,
  onOpenDetails,
}) => {
  return (
    <div className="group relative overflow-hidden rounded-[2.5rem] bg-midnight/60 border border-white/10 p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:border-lavender/40 hover:bg-storm/40 flex flex-col md:flex-row md:items-center justify-between gap-6">
      
      {/* Project Info */}
      <div className="space-y-3 max-w-2xl">
        <h3 className="text-2xl font-bold text-white group-hover:text-lavender transition-colors">
          {title}
        </h3>
        <p className="text-sm text-neutral-400 font-light leading-relaxed">
          {description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-1">
          {tags?.map((tag) => (
            <span
              key={tag.id || tag.name}
              className="px-3.5 py-1 text-xs font-mono rounded-full bg-white/5 border border-white/10 text-neutral-300"
            >
              {tag.name}
            </span>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-3 shrink-0 pt-2 md:pt-0">
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
              alt=""
              className="size-4 invert"
            />
          </a>
        )}

        <button
          onClick={onOpenDetails}
          className="flex items-center gap-2 px-5 py-2.5 text-xs font-mono rounded-full bg-royal text-white hover:bg-lavender transition-all cursor-pointer"
        >
          Details
          <img
            src={`${import.meta.env.BASE_URL}assets/arrow-right.svg`}
            alt=""
            className="size-4"
          />
        </button>
      </div>
    </div>
  );
};

export default Project;