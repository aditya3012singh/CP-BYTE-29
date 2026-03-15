import { SITE_CONFIG } from '../../constants/site'

function Navbar() {
  return (
    <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <h1 className="text-lg font-bold tracking-wide text-cyan-300">
          {SITE_CONFIG.name}
        </h1>
        <span className="text-xs uppercase tracking-[0.2em] text-slate-400">
          React + Tailwind
        </span>
      </div>
    </header>
  )
}

export default Navbar
