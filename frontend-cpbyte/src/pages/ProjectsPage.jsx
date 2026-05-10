import { useState, useEffect } from 'react';
import { Search, Plus } from 'lucide-react';
import ProjectCard from '../components/projects/ProjectCard';
import AddProjectModal from '../components/projects/AddProjectModal';

const CATEGORIES = ['ALL', 'WEB3', 'AI/ML', 'CLOUD', 'OPEN SOURCE'];

const INITIAL_PROJECTS = [
  {
    id: '1',
    title: 'NeuralNexus Core',
    description: 'A decentralized transformer model optimized for edge computing devices, enabling real-time NLP without cloud dependency.',
    category: 'AI/ML',
    version: '1.2.0',
    techStack: ['PyTorch', 'CUDA', 'React'],
    githubUrl: '#',
    liveUrl: '#',
    imageUrl: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'EtherVault Protocol',
    description: 'A high-security smart contract architecture for institutional-grade asset fractionalization on the Ethereum network.',
    category: 'WEB3',
    version: '0.9.4',
    techStack: ['Solidity', 'Hardhat', 'Go'],
    githubUrl: '#',
    liveUrl: '#',
    imageUrl: 'https://images.unsplash.com/photo-1622630998477-20b41cd0e025?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    title: 'Stratus Orchestrator',
    description: 'Automated multi-cloud deployment engine using Terraform and Kubernetes for dynamic workload scaling.',
    category: 'CLOUD',
    version: '2.1.0',
    techStack: ['AWS', 'Terraform', 'Docker'],
    githubUrl: '#',
    liveUrl: '#',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    title: 'BioScan AI',
    description: 'A computer vision project that achieves 99.2% accuracy in identifying early-stage anomalies in microscopic imaging datasets. Deployed as an open-source tool for researchers.',
    category: 'AI/ML',
    techStack: ['Python', 'TensorFlow', 'FastAPI'],
    githubUrl: '#',
    liveUrl: '#',
    imageUrl: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '5',
    title: 'CLI Toolkit',
    description: 'The official command-line interface for the CPBYTE community, managing deployments and access to club resources.',
    category: 'OPEN SOURCE',
    version: '3.0.1',
    techStack: ['Rust', 'Cargo', 'Shell'],
    githubUrl: '#',
    liveUrl: '#',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800'
  }
];

function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const savedProjects = localStorage.getItem('cpbyte_projects_v5');
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    } else {
      setProjects(INITIAL_PROJECTS);
      localStorage.setItem('cpbyte_projects_v5', JSON.stringify(INITIAL_PROJECTS));
    }
  }, []);

  useEffect(() => {
    if (projects.length > 0) {
      localStorage.setItem('cpbyte_projects_v5', JSON.stringify(projects));
    }
  }, [projects]);

  const handleAddProject = (newProject) => {
    setProjects([newProject, ...projects]);
  };

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === 'ALL' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#020202] text-zinc-300 pt-24 pb-24 relative overflow-hidden font-sans selection:bg-white/20 selection:text-white">
      
      {/* Premium Ambient Lighting */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_70%)] pointer-events-none"></div>
      <div className="absolute top-[20%] right-[-10%] w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(50,150,255,0.03),transparent_60%)] pointer-events-none rounded-full blur-3xl"></div>

      <div className="relative z-10 px-6 md:px-12 max-w-[1400px] mx-auto flex flex-col items-center">
        
        {/* Minimal Hero Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mb-16 mt-8 relative">
          
          <div className="inline-flex items-center gap-3 px-5 py-2 mb-8 rounded-full border border-white/[0.08] bg-[#0a0a0a]/60 backdrop-blur-md">
             <span className="w-1.5 h-1.5 rounded-full bg-blue-400/80 animate-pulse shadow-[0_0_8px_rgba(96,165,250,0.8)]"></span>
             <span className="text-[10px] font-medium tracking-[0.25em] text-zinc-300 uppercase">
               The Architecture of Excellence
             </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-600 mb-6 pb-2">
            Innovation Hub
          </h1>
          
          <p className="text-sm md:text-base leading-relaxed text-zinc-400 font-light max-w-xl">
            A curated showcase of technical prototypes and deployed solutions engineered by our members. Pushing the boundaries of digital possibility.
          </p>
        </div>

        {/* Elegant Master Controls */}
        <div className="w-full max-w-4xl flex flex-col md:flex-row justify-between items-center gap-6 mb-20">
          
          {/* Glass Search Bar */}
          <div className="w-full md:w-[320px] relative group">
             <input
               type="text"
               placeholder="Search registry..."
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
               className="w-full bg-white/[0.03] hover:bg-white/[0.05] border border-white/[0.08] rounded-full pl-12 pr-6 py-3.5 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-white/[0.2] transition-colors shadow-[0_4px_24px_rgba(0,0,0,0.2)] backdrop-blur-md"
             />
             <Search size={16} strokeWidth={1.5} className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500 transition-colors group-focus-within:text-zinc-300" />
          </div>

          {/* Minimal Text Filters */}
          <div className="flex items-center gap-1 overflow-x-auto hide-scrollbar-on-mobile w-full md:w-auto px-2">
             {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-[11px] uppercase tracking-[0.15em] font-medium transition-all duration-300 relative rounded-full ${
                     selectedCategory === cat
                       ? 'text-white bg-white/[0.1] shadow-sm'
                       : 'text-zinc-500 hover:text-zinc-300 hover:bg-white/[0.03]'
                   }`}
                >
                   {cat}
                </button>
             ))}
          </div>

          {/* Call to Action Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full md:w-auto shrink-0 flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-black hover:bg-zinc-200 hover:scale-[1.02] shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all duration-300 text-[10px] font-bold uppercase tracking-[0.15em]"
          >
            New Project <Plus size={14} />
          </button>
        </div>

        {/* Dynamic Masonry-ish Grid */}
        <div className="w-full">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center py-32 text-center rounded-3xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-md">
               <h3 className="text-xl font-medium tracking-tight text-zinc-300 mb-3">No matching results</h3>
               <p className="text-zinc-500 text-sm font-light max-w-sm mb-8">
                 We couldn't find any projects within those specific parameters.
               </p>
               <button 
                 onClick={() => { setSelectedCategory('ALL'); setSearchQuery(''); }}
                 className="text-[11px] text-black bg-zinc-100 hover:bg-white px-6 py-2.5 rounded-full uppercase tracking-widest font-medium transition-colors"
               >
                 Clear Search
               </button>
            </div>
          )}
        </div>

        {/* Premium Global Footer */}
        <footer className="w-full mt-32 pt-10 border-t border-white/[0.05] flex flex-col md:flex-row items-center justify-between gap-6 px-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-white tracking-widest uppercase text-xs">CPBYTE</span>
            <span className="text-zinc-600 text-xs">|</span>
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-medium">
               © 2025 KINETIC MONOLITH.
             </span>
          </div>
          
          <div className="flex items-center gap-6 text-[10px] uppercase tracking-[0.15em] text-zinc-500 font-medium">
             {['Github', 'Discord', 'LinkedIn'].map(platform => (
               <a key={platform} href="#" className="hover:text-zinc-300 transition-colors">
                 {platform}
               </a>
             ))}
          </div>
        </footer>

      </div>

      <AddProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddProject={handleAddProject}
      />
    </div>
  );
}

export default ProjectsPage;
