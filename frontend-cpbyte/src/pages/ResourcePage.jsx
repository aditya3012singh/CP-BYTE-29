export default function KnowledgeRepo() {
  return (
    <div className="
      min-h-screen text-slate-200
      bg-slate-950
      bg-[radial-gradient(circle,rgba(226,232,240,0.6)_1px,transparent_0)]
      bg-[length:38px_38px]
      bg-[position:0_0]
      overflow-x-hidden
    ">
      <main className="max-w-[1200px] mx-auto pb-20 pt-20">
        {/* HERO */}
        <section className="px-10 pt-[100px] pb-[120px] pl-[90px]">
          <h1 className="text-[80px] leading-[1.05] text-cyan-300 uppercase tracking-[0.08em]">
            KNOWLEDGE <br />
            REPOSITORY
          </h1>
          <p className="mt-[18px] ml-[75px] max-w-[420px] text-[18px] text-slate-400">
            ACCESS THE BLUEPRINTS OF THE DIGITAL FRONTIER.
          </p>
          <div className="mt-[26px] flex flex-wrap gap-2">{/* hero-meta empty */}</div>
        </section>

        {/* LEARNING PATHWAYS */}
        <section className="px-10 py-8">
          <div className="flex flex-col gap-1 mb-[18px]">
            <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
              STRUCTURED MASTERY
            </div>
            <h2 className="text-[20px] uppercase tracking-[0.08em]">
              Learning Pathways
            </h2>
          </div>

          <div className="grid gap-[18px] mt-[6px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {/* CARD TEMPLATE */}
            {/* Web Architecture */}
            <article className="bg-slate-950 rounded-[15%] border border-cyan-500/90 px-[18px] pt-[18px] pb-4 shadow-[0_0_0_1px_rgba(15,23,42,0.9),0_18px_40px_rgba(15,23,42,0.9)] leading-5 transition-transform hover:scale-110">
              <div className="flex items-center justify-between mb-[10px]">
                <span className="rounded-full border border-blue-600/70 bg-slate-900 px-[10px] py-[2px] text-[10px] uppercase tracking-[0.14em] text-blue-400">
                  CORE-01
                </span>
                <span className="text-[24px] opacity-80">🌐</span>
              </div>
              <h3 className="text-[16px] mb-1 uppercase tracking-[0.08em]">
                Web Architecture
              </h3>
              <p className="min-h-[34px] text-[12px] text-slate-400">
                HIGH‑PERFORMANCE FULLSTACK SYSTEMS AND EDGE COMPUTING.
              </p>
              <div className="mt-2 flex gap-[6px]">
                <span className="rounded-full border border-indigo-400/50 px-2 py-[2px] text-[10px] text-indigo-300">
                  12 modules
                </span>
                <span className="rounded-full border border-indigo-400/50 px-2 py-[2px] text-[10px] text-indigo-300">
                  EST 18h
                </span>
              </div>
              <div className="mt-[14px] h-[4px] overflow-hidden rounded-full border border-indigo-800 bg-slate-950">
                <div className="h-full bg-gradient-to-r from-cyan-400 to-sky-400" style={{ width: "85%" }} />
              </div>
              <div className="mt-[6px] flex justify-between text-[10px] text-slate-500">
                <span>Progress</span>
                <span>85%</span>
              </div>
              <button className="mt-3 rounded-full border border-cyan-400 bg-transparent px-[14px] py-[7px] text-[11px] uppercase tracking-[0.12em] text-sky-100 cursor-pointer">
                Start Path
              </button>
            </article>

            {/* AI / ML */}
            <article className="bg-slate-950 rounded-[15%] border border-cyan-500/90 px-[18px] pt-[18px] pb-4 shadow-[0_0_0_1px_rgba(15,23,42,0.9),0_18px_40px_rgba(15,23,42,0.9)] leading-5 transition-transform hover:scale-110">
              <div className="flex items-center justify-between mb-[10px]">
                <span className="rounded-full border border-blue-600/70 bg-slate-900 px-[10px] py-[2px] text-[10px] uppercase tracking-[0.14em] text-blue-400">
                  AI-02
                </span>
                <span className="text-[24px] opacity-80">🤖</span>
              </div>
              <h3 className="text-[16px] mb-1 uppercase tracking-[0.08em]">
                AI / Machine Learning
              </h3>
              <p className="min-h-[34px] text-[12px] text-slate-400">
                NEURAL NETWORKS, LLM ORCHESTRATION, AND DATA MODELING.
              </p>
              <div className="mt-2 flex gap-[6px]">
                <span className="rounded-full border border-indigo-400/50 px-2 py-[2px] text-[10px] text-indigo-300">
                  9 modules
                </span>
                <span className="rounded-full border border-indigo-400/50 px-2 py-[2px] text-[10px] text-indigo-300">
                  EST 22h
                </span>
              </div>
              <div className="mt-[14px] h-[4px] overflow-hidden rounded-full border border-indigo-800 bg-slate-950">
                <div className="h-full bg-gradient-to-r from-cyan-400 to-sky-400" style={{ width: "30%" }} />
              </div>
              <div className="mt-[6px] flex justify-between text-[10px] text-slate-500">
                <span>Progress</span>
                <span>30%</span>
              </div>
              <button className="mt-3 rounded-full border border-cyan-400 bg-transparent px-[14px] py-[7px] text-[11px] uppercase tracking-[0.12em] text-sky-100 cursor-pointer">
                Start Path
              </button>
            </article>

            {/* Cloud Infrastructure */}
            <article className="bg-slate-950 rounded-[15%] border border-cyan-500/90 px-[18px] pt-[18px] pb-4 shadow-[0_0_0_1px_rgba(15,23,42,0.9),0_18px_40px_rgba(15,23,42,0.9)] leading-5 transition-transform hover:scale-110">
              <div className="flex items-center justify-between mb-[10px]">
                <span className="rounded-full border border-blue-600/70 bg-slate-900 px-[10px] py-[2px] text-[10px] uppercase tracking-[0.14em] text-blue-400">
                  OPS-05
                </span>
                <span className="text-[24px] opacity-80">☁</span>
              </div>
              <h3 className="text-[16px] mb-1 uppercase tracking-[0.08em]">
                Cloud Infrastructure
              </h3>
              <p className="min-h-[34px] text-[12px] text-slate-400">
                SCALABLE SYSTEMS, KUBERNETES, AND SERVERLESS LOGIC.
              </p>
              <div className="mt-2 flex gap-[6px]">
                <span className="rounded-full border border-indigo-400/50 px-2 py-[2px] text-[10px] text-indigo-300">
                  7 modules
                </span>
                <span className="rounded-full border border-indigo-400/50 px-2 py-[2px] text-[10px] text-indigo-300">
                  EST 14h
                </span>
              </div>
              <div className="mt-[14px] h-[4px] overflow-hidden rounded-full border border-indigo-800 bg-slate-950">
                <div className="h-full bg-gradient-to-r from-cyan-400 to-sky-400" style={{ width: "15%" }} />
              </div>
              <div className="mt-[6px] flex justify-between text-[10px] text-slate-500">
                <span>Progress</span>
                <span>15%</span>
              </div>
              <button className="mt-3 rounded-full border border-cyan-400 bg-transparent px-[14px] py-[7px] text-[11px] uppercase tracking-[0.12em] text-sky-100 cursor-pointer">
                Start Path
              </button>
            </article>

            {/* Cyber Security */}
            <article className="bg-slate-950 rounded-[15%] border border-cyan-500/90 px-[18px] pt-[18px] pb-4 shadow-[0_0_0_1px_rgba(15,23,42,0.9),0_18px_40px_rgba(15,23,42,0.9)] leading-5 transition-transform hover:scale-110">
              <div className="flex items-center justify-between mb-[10px]">
                <span className="rounded-full border border-blue-600/70 bg-slate-900 px-[10px] py-[2px] text-[10px] uppercase tracking-[0.14em] text-blue-400">
                  SEC-04
                </span>
                <span className="text-[24px] opacity-80">🛡</span>
              </div>
              <h3 className="text-[16px] mb-1 uppercase tracking-[0.08em]">
                Cyber Security
              </h3>
              <p className="min-h-[34px] text-[12px] text-slate-400">
                ETHICAL HACKING, CRYPTOGRAPHY, AND NETWORK DEFENSE.
              </p>
              <div className="mt-2 flex gap-[6px]">
                <span className="rounded-full border border-indigo-400/50 px-2 py-[2px] text-[10px] text-indigo-300">
                  10 modules
                </span>
                <span className="rounded-full border border-indigo-400/50 px-2 py-[2px] text-[10px] text-indigo-300">
                  EST 20h
                </span>
              </div>
              <div className="mt-[14px] h-[4px] overflow-hidden rounded-full border border-indigo-800 bg-slate-950">
                <div className="h-full bg-gradient-to-r from-cyan-400 to-sky-400" style={{ width: "45%" }} />
              </div>
              <div className="mt-[6px] flex justify-between text-[10px] text-slate-500">
                <span>Progress</span>
                <span>45%</span>
              </div>
              <button className="mt-3 rounded-full border border-cyan-400 bg-transparent px-[14px] py-[7px] text-[11px] uppercase tracking-[0.12em] text-sky-100 cursor-pointer">
                Start Path
              </button>
            </article>
          </div>
        </section>

        {/* THE VAULT */}
        <section className="px-10 py-8">
          <div className="mb-[18px] flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                THE VAULT
              </div>
              <h2 className="text-[20px] uppercase tracking-[0.08em]">
                The Vault
              </h2>
            </div>
            <span className="rounded-full border border-emerald-500 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-emerald-400">
              Live syncing
            </span>
          </div>

          <div className="mt-4 grid gap-4 grid-cols-[2fr_1.1fr] grid-rows-[auto_auto] max-[900px]:grid-cols-1">
            {/* big featured card */}
            <article className="row-span-2 flex flex-col justify-between rounded-[16px] border border-indigo-800/90 bg-[radial-gradient(circle_at_top_left,#0f172a_0,#020617_70%)] px-[22px] pt-[22px] pb-5 shadow-[0_18px_40px_rgba(15,23,42,0.9)]">
              <div>
                <div className="mb-[10px] flex gap-2">
                  <span className="rounded-full border border-blue-600/70 bg-slate-900 px-[10px] py-[2px] text-[10px] uppercase tracking-[0.14em] text-blue-400">
                    PDF
                  </span>
                  <span className="rounded-full border border-indigo-400/70 bg-slate-900 px-[10px] py-[2px] text-[10px] uppercase tracking-[0.14em] text-indigo-200">
                    Featured
                  </span>
                </div>
                <h3 className="mb-[6px] text-[17px] uppercase tracking-[0.08em]">
                  Mastering Distributed Systems V2.4
                </h3>
                <p className="mb-4 text-[13px] text-indigo-100/90">
                  THE DEFINITIVE MANUAL FOR SCALING LOW‑LATENCY INFRASTRUCTURE ACROSS
                  GLOBAL DATA CENTERS, 450 PAGES OF PURE TECHNICAL DEPTH.
                </p>
              </div>
              <div>
                <div className="mb-4 flex flex-wrap gap-[10px] text-[11px] text-slate-500">
                  <span>Last updated: 02.18.2026</span>
                  <span>File size: 28 MB</span>
                </div>
                <div className="mt-4 flex gap-[10px]">
                  <button className="rounded-full bg-cyan-400 px-[18px] py-2 text-[11px] uppercase tracking-[0.12em] text-slate-950 cursor-pointer">
                    Download Archive
                  </button>
                  <button className="rounded-full border border-slate-400/60 bg-transparent px-4 py-2 text-[11px] uppercase tracking-[0.12em] text-slate-200 cursor-pointer">
                    Save
                  </button>
                </div>
              </div>
            </article>

            {/* Top-right small card */}
            <article className="rounded-[14px] border border-indigo-800/85 bg-slate-950 px-[18px] pt-4 pb-3 shadow-[0_12px_32px_rgba(15,23,42,0.9)]">
              <div className="mb-2 flex items-center justify-between">
                <span className="rounded-full border border-blue-600/70 bg-slate-900 px-[10px] py-[2px] text-[10px] uppercase tracking-[0.14em] text-blue-400">
                  CLI
                </span>
                <span className="text-[14px] opacity-80">&gt;_</span>
              </div>
              <h3 className="mb-1 text-[14px] uppercase tracking-[0.08em]">
                CLI Productivity Pack
              </h3>
              <p className="mb-[10px] text-[12px] text-slate-400">
                CUSTOM ZSH CONFIGURATIONS AND SHELL ALIASES FOR MAX SPEED.
              </p>
              <div className="mb-[10px] text-[11px] text-slate-500">
                <span>Repo stars: 1.2k</span>
              </div>
              <button className="mt-1 rounded-full border border-cyan-400 bg-transparent px-[10px] py-[5px] text-[10px] uppercase tracking-[0.12em] text-sky-100 cursor-pointer">
                View Repo
              </button>
            </article>

            {/* Bottom-left small card */}
            <article className="rounded-[14px] border border-indigo-800/85 bg-slate-950 px-[18px] pt-4 pb-3 shadow-[0_12px_32px_rgba(15,23,42,0.9)]">
              <div className="mb-2 flex items-center justify-between">
                <span className="rounded-full border border-blue-600/70 bg-slate-900 px-[10px] py-[2px] text-[10px] uppercase tracking-[0.14em] text-blue-400">
                  VID
                </span>
                <span className="text-[14px] opacity-80">▶</span>
              </div>
              <h3 className="mb-1 text-[14px] uppercase tracking-[0.08em]">
                Kernel Internals 101
              </h3>
              <p className="mb-[10px] text-[12px] text-slate-400">
                ADVANCED VIDEO LECTURE SERIES ON MEMORY MANAGEMENT.
              </p>
              <div className="mb-[10px] text-[11px] text-slate-500">
                <span>6‑part playlist</span>
              </div>
              <button className="mt-1 rounded-full border border-cyan-400 bg-transparent px-[10px] py-[5px] text-[10px] uppercase tracking-[0.12em] text-sky-100 cursor-pointer">
                Watch Playlist
              </button>
            </article>

            {/* Wide card */}
            <article className="col-span-2 max-[900px]:col-span-1 rounded-[14px] border border-indigo-800/85 bg-slate-950 px-[18px] pt-4 pb-3 shadow-[0_12px_32px_rgba(15,23,42,0.9)]">
              <div className="mb-2 flex items-center justify-between">
                <span className="rounded-full border border-blue-600/70 bg-slate-900 px-[10px] py-[2px] text-[10px] uppercase tracking-[0.14em] text-blue-400">
                  CERT
                </span>
                <span className="text-[14px] opacity-80">🏅</span>
              </div>
              <h3 className="mb-1 text-[14px] uppercase tracking-[0.08em]">
                Prestige Cert Prep
              </h3>
              <p className="mb-[10px] text-[12px] text-slate-400">
                OSCP / AWS SOLUTIONS ARCHITECT / CKA RESOURCES CURATED INTO A FOCUSED TRACK.
              </p>
              <div className="mb-[10px] text-[11px] text-slate-500">
                <span>34 resources</span>
              </div>
              <button className="mt-1 rounded-full border border-cyan-400 bg-transparent px-[10px] py-[5px] text-[10px] uppercase tracking-[0.12em] text-sky-100 cursor-pointer">
                Browse Collection
              </button>
            </article>
          </div>
        </section>

        {/* CTA */}
        <section className="px-10 pt-10 pb-0">
          <div className="mx-auto mt-[10px] max-w-[900px] rounded-[20px] border border-indigo-800/90 bg-[radial-gradient(circle_at_top,#0f172a_0,#020617_70%)] px-8 pt-[50px] pb-8 text-center shadow-[0_18px_50px_rgba(15,23,42,0.9)]">
            <div className="mb-[18px] grid grid-cols-2 justify-center gap-[6px]">
              <span className="dot w-2 h-2 rounded-full bg-cyan-400" />
              <span className="dot w-2 h-2 rounded-full bg-cyan-400" />
              <span className="dot w-2 h-2 rounded-full bg-cyan-400" />
              <span className="dot w-2 h-2 rounded-full bg-cyan-400" />
            </div>
            <h2 className="mb-2 text-[20px] uppercase tracking-[0.08em]">
              Contribute to the Repo
            </h2>
            <p className="mx-auto max-w-[480px] text-[13px] text-slate-400">
              FOUND A RESOURCE THAT COULD CHANGE SOMEONE&apos;S CAREER? HELP US EXPAND THE
              COLLECTIVE INTELLIGENCE OF CPBYTE.
            </p>
            <div className="mt-5 flex justify-center gap-3">
              <button className="rounded-full bg-cyan-400 px-[18px] py-2 text-[11px] uppercase tracking-[0.12em] text-slate-950 cursor-pointer">
                Submit Resource
              </button>
              <button className="rounded-full border border-slate-400/60 bg-transparent px-4 py-2 text-[11px] uppercase tracking-[0.12em] text-slate-200 cursor-pointer">
                Read Protocols
              </button>
            </div>
            <div className="mt-[18px] flex justify-center gap-[18px] text-[11px] text-slate-500">
              <span>Verified links</span>
              <span>No malware</span>
              <span>Always updated</span>
            </div>
          </div>
        </section>
      </main>
      {/* FOOTER */}
<footer className="flex items-center justify-between border-t border-slate-900 bg-slate-950/95 px-10 pt-4 pb-7 text-[11px] text-slate-500">
  <div className="flex flex-col gap-1">
    <span className="font-extrabold text-[26px] tracking-[0.22em] bg-gradient-to-r from-white via-white to-sky-400 bg-clip-text text-transparent">
      CPBYTE
    </span>
    <span className="text-[10px]">
      © 2024 CPBYTE Kinetic Engine. All systems operational.
    </span>
  </div>
  <div className="flex gap-[14px]">
    <a
      href="#"
      className="text-[10px] uppercase tracking-[0.16em] text-slate-400 no-underline"
    >
      Privacy Protocol
    </a>
    <a
      href="#"
      className="text-[10px] uppercase tracking-[0.16em] text-slate-400 no-underline"
    >
      Internal Wiki
    </a>
    <a
      href="#"
      className="text-[10px] uppercase tracking-[0.16em] text-slate-400 no-underline"
    >
      GitHub
    </a>
    <a
      href="#"
      className="text-[10px] uppercase tracking-[0.16em] text-slate-400 no-underline"
    >
      Discord
    </a>
  </div>
</footer>
  </div>
  );
}