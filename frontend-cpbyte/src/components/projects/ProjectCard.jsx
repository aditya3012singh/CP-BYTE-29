import { ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="group relative flex flex-col h-full bg-[#0a0a0a]/40 backdrop-blur-2xl border border-white/[0.05] rounded-3xl overflow-hidden transition-all duration-700 hover:border-white/[0.1] hover:bg-[#0a0a0a]/80 hover:shadow-[0_20px_60px_-15px_rgba(255,255,255,0.05)] hover:-translate-y-2">
      
      {/* Premium Inner Glow */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.15] to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100 mix-blend-overlay"></div>

      {/* Image Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#050505]">
        
        {/* Soft Vignette Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] z-10 pointer-events-none transition-opacity duration-700 group-hover:opacity-0"></div>

        {/* Category Pill Over Image */}
        <div className="absolute top-4 left-4 z-20">
          <div className="bg-black/40 backdrop-blur-xl border border-white/[0.08] px-4 py-1.5 rounded-full text-[10px] font-medium tracking-[0.2em] text-white/90 uppercase">
            {project.category}
          </div>
        </div>

        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03] opacity-90 group-hover:opacity-100"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[#050505]">
            <span className="text-zinc-700 text-[10px] uppercase font-medium tracking-widest">
              No Imagery Available
            </span>
          </div>
        )}
      </div>

      {/* Text Content */}
      <div className="flex flex-col flex-1 p-6 md:p-8">
        
        <div className="flex justify-between items-baseline mb-4">
           <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-zinc-100 group-hover:text-white transition-colors">
             {project.title}
           </h3>
           <span className="text-[10px] text-zinc-500 tracking-widest font-mono">
             {project.version || '1.0'}
           </span>
        </div>
        
        <p className="mb-8 flex-1 text-sm leading-relaxed text-zinc-400 font-light tracking-wide line-clamp-3 group-hover:text-zinc-300 transition-colors duration-500">
          {project.description}
        </p>

        {/* Footer Area */}
        <div className="mt-auto pt-6 border-t border-white/[0.05] flex items-center justify-between">
          
          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2">
            {project.techStack?.slice(0, 3).map((tech, idx) => (
              <span key={idx} className="flex items-center px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.02] text-[9px] uppercase tracking-[0.15em] text-zinc-400 font-medium group-hover:bg-white/[0.06] transition-colors duration-500 relative overflow-hidden">
                <span className="relative z-10">{tech}</span>
              </span>
            ))}
            {project.techStack?.length > 3 && (
              <span className="text-[10px] text-zinc-600 px-1 font-medium">+{project.techStack.length - 3}</span>
            )}
          </div>
          
          {/* Elegant Action Button */}
          <a
            href={project.liveUrl || project.githubUrl || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/[0.05] text-zinc-400 hover:bg-white hover:text-black transition-all duration-500"
            aria-label="View Project"
          >
            <ArrowUpRight size={16} className="transition-transform group-hover:rotate-12 duration-500" />
          </a>

        </div>
      </div>

    </div>
  );
};

export default ProjectCard;
