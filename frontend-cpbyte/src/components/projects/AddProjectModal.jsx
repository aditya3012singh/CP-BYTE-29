import { useState } from 'react';
import { X, Send } from 'lucide-react';

const CATEGORIES = ['AI/ML', 'WEB3', 'CLOUD', 'OPEN SOURCE', 'OTHER'];

const AddProjectModal = ({ isOpen, onClose, onAddProject }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'AI/ML',
    techStack: '',
    githubUrl: '',
    liveUrl: '',
    imageUrl: '',
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProject({
      ...formData,
      id: crypto.randomUUID(),
      techStack: formData.techStack.split(',').map((tech) => tech.trim()),
      version: '1.0', 
      createdAt: new Date().toISOString(),
    });
    setFormData({
      title: '', description: '', category: 'AI/ML',
      techStack: '', githubUrl: '', liveUrl: '', imageUrl: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-4 font-sans selection:bg-white/20">

      <div className="relative z-10 w-full max-w-xl bg-[#0a0a0a] border border-white/[0.08] shadow-[0_30px_100px_rgba(0,0,0,0.8)] rounded-[2rem] flex flex-col overflow-hidden">
        
        {/* Subtle top glow */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

        {/* Elegant Header */}
        <div className="flex items-center justify-between px-8 pt-8 pb-4">
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-medium tracking-tight text-white">
              Launch Project
            </h2>
            <p className="text-[11px] text-zinc-500 font-light tracking-wide uppercase">
              Submit your architecture to the Hub
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.05] text-zinc-400 hover:text-white transition-all focus:outline-none"
            title="Close"
          >
            <X size={14} />
          </button>
        </div>

        {/* Smooth Form Body */}
        <div className="max-h-[65vh] overflow-y-auto px-8 pb-8 custom-scrollbar">
          <form id="add-project-form" onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="space-y-2">
                <label className="text-[11px] font-medium tracking-wide text-zinc-400 uppercase" htmlFor="title">
                  Project Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  required
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.05] rounded-xl px-4 py-3 text-sm text-zinc-200 placeholder-zinc-700 focus:border-white/[0.2] focus:outline-none transition-colors"
                  placeholder="e.g. Nexus Protocol"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-medium tracking-wide text-zinc-400 uppercase" htmlFor="techStack">
                  Tech Stack <span className="text-zinc-600 lowercase tracking-normal font-light">(comma separated)</span>
                </label>
                <input
                  type="text"
                  id="techStack"
                  name="techStack"
                  required
                  value={formData.techStack}
                  onChange={handleChange}
                  className="w-full bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.05] rounded-xl px-4 py-3 text-sm text-zinc-200 placeholder-zinc-700 focus:border-white/[0.2] focus:outline-none transition-colors"
                  placeholder="React, Tailwind, Node"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-medium tracking-wide text-zinc-400 uppercase" htmlFor="category">
                Select Domain
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.05] rounded-xl px-4 py-3 text-sm text-zinc-200 focus:border-white/[0.2] focus:outline-none transition-colors appearance-none tracking-wide"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat} className="bg-[#0a0a0a] text-zinc-300">
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-medium tracking-wide text-zinc-400 uppercase" htmlFor="description">
                Project Synopsis
              </label>
              <textarea
                id="description"
                name="description"
                required
                rows="3"
                value={formData.description}
                onChange={handleChange}
                className="w-full bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.05] rounded-xl px-4 py-3 text-sm text-zinc-200 placeholder-zinc-700 focus:border-white/[0.2] focus:outline-none transition-colors resize-none leading-relaxed"
                placeholder="Briefly describe the mechanics and goals of your deployment..."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[11px] font-medium tracking-wide text-zinc-400 uppercase" htmlFor="githubUrl">
                  Repository URL
                </label>
                <input
                  type="url"
                  id="githubUrl"
                  name="githubUrl"
                  value={formData.githubUrl}
                  onChange={handleChange}
                  className="w-full bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.05] rounded-xl px-4 py-3 text-sm text-zinc-200 placeholder-zinc-700 focus:border-white/[0.2] focus:outline-none transition-colors"
                  placeholder="https://github.com/..."
                />
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-medium tracking-wide text-zinc-400 uppercase" htmlFor="liveUrl">
                  Live Production URL
                </label>
                <input
                  type="url"
                  id="liveUrl"
                  name="liveUrl"
                  value={formData.liveUrl}
                  onChange={handleChange}
                  className="w-full bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.05] rounded-xl px-4 py-3 text-sm text-zinc-200 placeholder-zinc-700 focus:border-white/[0.2] focus:outline-none transition-colors"
                  placeholder="https://..."
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-medium tracking-wide text-zinc-400 uppercase" htmlFor="imageUrl">
                Cover Media Thumbnail <span className="text-zinc-600 lowercase tracking-normal font-light">(URL)</span>
              </label>
              <input
                type="url"
                id="imageUrl"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                className="w-full bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.05] rounded-xl px-4 py-3 text-sm text-zinc-200 placeholder-zinc-700 focus:border-white/[0.2] focus:outline-none transition-colors"
                placeholder="https://unsplash.com/..."
              />
            </div>
            
          </form>
        </div>

        {/* Minimal Footer Actions */}
        <div className="flex items-center justify-between border-t border-white/[0.03] bg-black/20 px-8 py-5">
          <button
            type="button"
            onClick={onClose}
            className="text-[11px] font-medium tracking-[0.15em] text-zinc-500 hover:text-white uppercase transition-colors"
          >
            Cancel
          </button>
          
          <button
            type="submit"
            form="add-project-form"
            className="flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.15em] hover:bg-zinc-200 hover:scale-[1.02] transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] focus:outline-none"
          >
            <span>Publish To Matrix</span>
            <Send size={12} />
          </button>
        </div>

      </div>
    </div>
  );
};

export default AddProjectModal;
