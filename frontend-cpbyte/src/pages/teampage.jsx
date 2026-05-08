const stars = Array.from({ length: 350 }, (_, i) => ({
  id: i,
  size: Math.random() * 3 + 0.8,
  top: Math.random() * 100,
  left: Math.random() * 100,
  opacity: Math.random() * 0.6 + 0.2,
}));

/* 👥 Data (important for reuse) */
const founders = [
  {
    name: "Alex Chen",
    role: "Lead Architect & Founder",
    desc: "Pioneering the vision of CPBYTE with scalable systems.",
  },
  {
    name: "Sarah Jenkins",
    role: "Operations & Creative Direction",
    desc: "Bridging technical complexity with human-centric design.",
  },
];

const leads = [
  {
    name: "Marcus Wu",
    role: "Security Analyst",
    image: "https://via.placeholder.com/300x200",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Elena R.",
    role: "UX Architect",
    image: "https://via.placeholder.com/300x200",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "David Thorne",
    role: "Backend Specialist",
    image: "https://via.placeholder.com/300x200",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Jamie Lan",
    role: "DevOps / Infrastructure",
    image: "https://via.placeholder.com/300x200",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Palak Singh",
    role: "Security Analyst",
    image: "https://via.placeholder.com/300x200",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
  },
];
const contributors = [
  "Riley V.",
  "Kenji M.",
  "Samantha L.",
  "Tomas S.",
  "Ana B.",
  "Jaxon D.",
];

export default function TeamPage() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-200 overflow-x-hidden">
      
      {/* ⭐ BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-[-10%] animate-starfieldRotate">
          {stars.map((star) => (
            <span
              key={star.id}
              className="absolute bg-cyan-300 rounded-full"
              style={{
                width: star.size,
                height: star.size,
                top: `${star.top}%`,
                left: `${star.left}%`,
                opacity: star.opacity,
                boxShadow: "0 0 6px rgba(40,231,231,0.4)",
              }}
            />
          ))}
        </div>
      </div>

      <main className="max-w-[1200px] mx-auto px-6 pt-20 pb-20">

        {/* 🚀 HERO */}
        <section className="pt-20 pb-16">
          <h1 className="text-[70px] leading-[1.05] uppercase tracking-[0.08em]">
            ENGINEERING <br />
            <span className="text-cyan-400">THE FUTURE</span> <br />
            COLLECTIVELY.
          </h1>

          <p className="mt-6 max-w-[500px] text-slate-400 text-[15px]">
            Meet the architects behind the monolith. A multi-disciplinary
            collective pushing boundaries of the digital canvas.
          </p>
        </section>

        {/* 👑 FOUNDERS */}
        <section className="mt-10">
          <h2 className="text-[12px] tracking-[0.2em] text-yellow-400 mb-6 uppercase">
            Project Founders
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {founders.map((f, i) => (
              <div
                key={i}
                className="border border-indigo-800 p-5 rounded-xl bg-slate-950 shadow-lg hover:scale-105 transition"
              >
                <div className="flex gap-4">
                  <div className="w-[80px] h-[80px] bg-slate-700 rounded-md" />
                  <div>
                    <h3 className="text-lg uppercase">{f.name}</h3>
                    <p className="text-[11px] text-cyan-400 uppercase">
                      {f.role}
                    </p>
                    <p className="text-[12px] text-slate-400 mt-2">
                      {f.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 🧠 LEADS */}
        {/* 🧠 LEADS */}
<section className="mt-14">
  <h2 className="text-[12px] tracking-[0.2em] text-cyan-400 mb-6 uppercase">
    Core Engineering Leads
  </h2>

  <div className="flex gap-6 overflow-x-auto pb-4 scroll-smooth w-full">
    {leads.map((l, i) => (
      <div
        key={i}
        className="min-w-[300px] flex-shrink-0 p-4 border border-indigo-800 rounded-lg bg-slate-950 hover:scale-105 transition"
      >
        <img
          src={l.image}
          alt={l.name}
          className="w-full h-[170px] object-cover bg-slate-700 mb-3 rounded"
        />

        <h3 className="text-sm uppercase">{l.name}</h3>
        <p className="text-[11px] text-cyan-400">{l.role}</p>

        <div className="flex gap-3 mt-4">
          <a
            href={l.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] border border-slate-700 px-3 py-2 rounded-md hover:text-cyan-400"
          >
            GitHub
          </a>

          <a
            href={l.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] border border-slate-700 px-3 py-2 rounded-md hover:text-cyan-400"
          >
            LinkedIn
          </a>
        </div>
      </div>
    ))}
  </div>
</section>

        {/* 🌐 CONTRIBUTORS */}
        <section className="mt-14">
          <h2 className="text-[12px] tracking-[0.2em] text-slate-400 mb-4 uppercase">
            Network Contributors
          </h2>

          <div className="flex flex-wrap gap-3">
            {contributors.map((c, i) => (
              <span
                key={i}
                className="px-4 py-2 text-[11px] border border-slate-700 rounded-md"
              >
                {c}
              </span>
            ))}
          </div>
        </section>

        {/* 📩 CONTACT + SIDE PANEL */}
        <section className="mt-20 grid lg:grid-cols-2 gap-10">

          {/* LEFT FORM */}
          <div>
            <h2 className="text-xl uppercase mb-4">Initiate Connection</h2>
            <p className="text-slate-400 text-sm mb-6">
              Send a proposal or encrypted transmission to core leads.
            </p>

            <div className="flex flex-col gap-5">
              <input
                placeholder="Identity Name"
                className="bg-transparent border-b border-slate-700 p-2 outline-none"
              />
              <input
                placeholder="Email"
                className="bg-transparent border-b border-slate-700 p-2 outline-none"
              />
              <textarea
                placeholder="Message"
                className="bg-transparent border-b border-slate-700 p-2 outline-none"
              />

              <button className="mt-4 bg-cyan-400 text-black px-6 py-3 uppercase text-xs tracking-wider">
                Send Message →
              </button>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="flex flex-col gap-6">
            
            {/* LOCATION */}
            <div className="border border-indigo-800 p-4 rounded-lg">
              <h3 className="text-sm uppercase mb-2 text-cyan-400">
                Cyber Lab 01
              </h3>
              <p className="text-xs text-slate-400">
                Palo Alto, CA
              </p>
              <div className="h-[120px] bg-slate-800 mt-3 rounded" />
            </div>

            {/* SOCIAL */}
            <div className="flex flex-col gap-3">
              {["Instagram", "Discord", "LinkedIn", "GitHub"].map((s, i) => (
                <div
                  key={i}
                  className="border border-slate-800 p-3 rounded-md text-sm"
                >
                  {s}
                </div>
              ))}
            </div>

          </div>
        </section>

      </main>

      {/* 🦶 FOOTER */}
      <footer className="border-t border-slate-900 px-10 py-6 text-[11px] flex justify-between text-slate-500">
        <span>CPBYTE © 2024</span>
        <div className="flex gap-4">
          <span>GitHub</span>
          <span>Discord</span>
          <span>LinkedIn</span>
        </div>
      </footer>
    </div>
  );
}