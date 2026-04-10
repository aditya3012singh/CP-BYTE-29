import { useState, useEffect, useRef, useCallback } from 'react'
import nullVectorImg from '../assets/event_null_vector.png'
import kineticEngineImg from '../assets/event_kinetic_engine.png'
import sigmaBreachImg from '../assets/event_sigma_breach.png'

// ─── INJECT KEYFRAMES ────────────────────────────────────────────────────────
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Share+Tech+Mono&display=swap');

  :root {
    --blue: #3b82f6;
    --blue-dim: rgba(59,130,246,0.15);
    --blue-glow: 0 0 20px rgba(59,130,246,0.4);
    --green: #22c55e;
    --red: #ef4444;
    --bg: #060a10;
  }

  @keyframes glitch-1 { 
    0%,100% { clip-path: inset(0 0 100% 0); transform: translate(0); }
    10% { clip-path: inset(10% 0 60% 0); transform: translate(-4px, 2px); }
    20% { clip-path: inset(80% 0 2% 0);  transform: translate(4px, -2px); }
    30% { clip-path: inset(40% 0 40% 0); transform: translate(-2px, 4px); }
    40% { clip-path: inset(60% 0 10% 0); transform: translate(2px, -4px); }
    50% { clip-path: inset(20% 0 70% 0); transform: translate(-3px, 1px); }
    60% { clip-path: inset(0 0 100% 0); }
  }
  @keyframes glitch-2 {
    0%,100% { clip-path: inset(0 0 100% 0); transform: translate(0); }
    15% { clip-path: inset(70% 0 5% 0);  transform: translate(4px, -1px); }
    25% { clip-path: inset(5% 0 80% 0);  transform: translate(-4px, 2px); }
    35% { clip-path: inset(50% 0 20% 0); transform: translate(3px, -3px); }
    45% { clip-path: inset(15% 0 55% 0); transform: translate(-2px, 3px); }
    55% { clip-path: inset(85% 0 0% 0);  transform: translate(2px, -1px); }
    65% { clip-path: inset(0 0 100% 0); }
  }
  @keyframes scanline {
    0%   { transform: translateY(-100%); }
    100% { transform: translateY(100vh); }
  }
  @keyframes borderPulse {
    0%,100% { border-color: rgba(59,130,246,0.3); box-shadow: 0 0 10px rgba(59,130,246,0.1); }
    50%      { border-color: rgba(59,130,246,0.7); box-shadow: 0 0 25px rgba(59,130,246,0.35); }
  }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(32px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes slideRight {
    from { opacity: 0; transform: translateX(-40px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes slideLeft {
    from { opacity: 0; transform: translateX(40px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes blink {
    0%,100% { opacity: 1; } 50% { opacity: 0; }
  }
  @keyframes dotPulse {
    0%,100% { box-shadow: 0 0 4px #22c55e; opacity:1; }
    50%      { box-shadow: 0 0 12px #22c55e, 0 0 24px #22c55e; opacity:0.7; }
  }
  @keyframes neonFlicker {
    0%,19%,21%,23%,25%,54%,56%,100% { text-shadow: 0 0 10px #3b82f6, 0 0 20px #3b82f6, 0 0 40px #3b82f6; }
    20%,24%,55% { text-shadow: none; opacity: 0.8; }
  }
  @keyframes gridShift {
    0%   { background-position: 0 0; }
    100% { background-position: 60px 60px; }
  }
  @keyframes statReveal {
    from { opacity:0; transform: scale(0.9) translateY(10px); }
    to   { opacity:1; transform: scale(1) translateY(0); }
  }
  @keyframes progressSweep {
    from { width: 0%; }
    to   { width: 100%; }
  }
  @keyframes cardHover {
    from { box-shadow: 0 0 0 transparent; }
    to   { box-shadow: 0 16px 48px rgba(59,130,246,0.2), 0 0 0 1px rgba(59,130,246,0.3); }
  }
  @keyframes rotateBorder {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  @keyframes typewriter {
    from { width: 0; }
    to   { width: 100%; }
  }
  @keyframes shimmer {
    0%   { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
  @keyframes floatY {
    0%,100% { transform: translateY(0px); }
    50%      { transform: translateY(-8px); }
  }
  @keyframes radarSpin {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  @keyframes expandWidth {
    from { width: 0; opacity: 0; }
    to   { width: 60px; opacity: 1; }
  }
  @keyframes highlightSlide1 {
    0%   { left: -300px; opacity: 0; }
    5%   { opacity: 1; }
    95%  { opacity: 1; }
    100% { left: 100vw; opacity: 0; }
  }
  @keyframes highlightSlide2 {
    0%   { left: -300px; opacity: 0; }
    5%   { opacity: 1; }
    95%  { opacity: 1; }
    100% { left: 100vw; opacity: 0; }
  }
  @keyframes highlightSlide3 {
    0%   { left: -300px; opacity: 0; }
    5%   { opacity: 1; }
    95%  { opacity: 1; }
    100% { left: 100vw; opacity: 0; }
  }
  @keyframes highlightGlow {
    0%, 100% { box-shadow: 0 0 20px rgba(59,130,246,0.4), 0 0 40px rgba(59,130,246,0.2); }
    50% { box-shadow: 0 0 40px rgba(59,130,246,0.7), 0 0 80px rgba(59,130,246,0.4); }
  }
  @keyframes scrollHighlights {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  .hero-word {
    display: block;
    line-height: 1.05;
  }

  .stat-card {
    animation: borderPulse 3s ease-in-out infinite;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
    cursor: default;
  }
  .stat-card:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 12px 36px rgba(59,130,246,0.25) !important;
    animation: none;
  }

  .event-card-wrap {
    transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease;
  }
  .event-card-wrap:hover {
    transform: translateY(-6px) scale(1.01);
    box-shadow: 0 20px 56px rgba(59,130,246,0.2), 0 0 0 1px rgba(59,130,246,0.35) !important;
  }
  .event-card-wrap:hover img {
    transform: scale(1.07) !important;
  }

  .archive-card {
    transition: transform 0.3s ease, filter 0.3s ease;
    cursor: pointer;
  }
  .archive-card:hover {
    transform: translateY(-6px) scale(1.02);
    filter: brightness(1.15);
  }

  .btn-primary {
    position: relative;
    overflow: hidden;
    transition: all 0.25s ease;
  }
  .btn-primary::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
    transform: translateX(-100%);
    transition: transform 0.4s ease;
  }
  .btn-primary:hover::after { transform: translateX(100%); }
  .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(59,130,246,0.4); }
  .btn-primary:active { transform: translateY(0); }

  .filter-btn {
    position: relative;
    overflow: hidden;
    transition: color 0.2s ease;
  }
  .filter-btn::before {
    content: '';
    position: absolute;
    bottom: 0; left: 50%; right: 50%;
    height: 2px;
    background: #3b82f6;
    transition: left 0.3s ease, right 0.3s ease;
  }
  .filter-btn.active::before { left: 0; right: 0; }

  .nav-link {
    transition: color 0.2s ease, background 0.2s ease;
    position: relative;
  }
  .nav-link::after {
    content:'';
    position: absolute;
    bottom: -2px; left: 50%; right: 50%;
    height: 1px;
    background: #3b82f6;
    transition: left 0.2s, right 0.2s;
  }
  .nav-link:hover::after { left: 10%; right: 10%; }

  .reveal {
    opacity: 0;
    transform: translateY(28px);
    transition: opacity 0.7s ease, transform 0.7s ease;
  }
  .reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }
  .reveal-left {
    opacity: 0;
    transform: translateX(-28px);
    transition: opacity 0.7s ease, transform 0.7s ease;
  }
  .reveal-left.visible { opacity: 1; transform: translateX(0); }
  .reveal-right {
    opacity: 0;
    transform: translateX(28px);
    transition: opacity 0.7s ease, transform 0.7s ease;
  }
  .reveal-right.visible { opacity: 1; transform: translateX(0); }

  .shimmer-text {
    background: linear-gradient(90deg, #f1f5f9 0%, #3b82f6 40%, #f1f5f9 60%, #f1f5f9 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: shimmer 3s linear infinite;
  }

  .featured-card {
    transition: box-shadow 0.4s ease;
  }
  .featured-card:hover {
    box-shadow: 0 0 0 1px rgba(59,130,246,0.5), 0 24px 64px rgba(59,130,246,0.2) !important;
  }

  .floating {
    animation: floatY 4s ease-in-out infinite;
  }

  .neon-blue {
    animation: neonFlicker 8s infinite;
  }

  .tag-badge {
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  .tag-badge:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  }
`

// ─── DATA ────────────────────────────────────────────────────────────────────
const FILTERS = ['ALL OPS', 'THREAT ACTION', 'INNOVATION', 'RECON']

const EVENTS = [
  {
    id: 1,
    eventStatus: 'live',
    title: 'NULL_VECTOR_01',
    tags: ['THREAT ACTION', 'RECON'],
    tagColors: ['red', 'blue'],
    image: nullVectorImg,
    description: 'A 48-hour offensive security sprint. Exploit vulnerabilities in the synthetic network environment and earn top-tier clearance. Teams of 1–4 operatives. All skill levels welcome.',
    entryFee: '130 CM',
    date: 'Nov 21, 2025',
    venue: 'SYN-LAB BLOCK 7',
    slotsLeft: '12 / 58',
    duration: '48 hours',
    difficulty: 'Advanced',
  },
  {
    id: 2,
    eventStatus: 'live',
    title: 'PHANTOM GRID',
    tags: ['THREAT ACTION'],
    tagColors: ['red'],
    image: kineticEngineImg,
    description: 'Intercept and decode encrypted transmissions across a live phantom network. Solo operatives or pairs. Race against the clock.',
    entryFee: '80 CM',
    date: 'Nov 22, 2025',
    venue: 'REMOTE NODE-4',
    slotsLeft: '5 / 20',
    duration: '24 hours',
    difficulty: 'Intermediate',
  },
  {
    id: 3,
    eventStatus: 'upcoming',
    title: 'KINETIC ENGINE V2',
    tags: ['INNOVATION', 'BLUEPRINT'],
    tagColors: ['purple', 'gold'],
    image: kineticEngineImg,
    description: 'Master the core mechanics of our proprietary image engine. Advanced coordinate layouts and interactive lighting protocols.',
    entryFee: 'Free',
    date: 'Dec 15, 2025',
    venue: 'Discord · Online',
    slotsLeft: '38 / 100',
    duration: '3 days',
    difficulty: 'Beginner',
    leadOp: 'Naut Kumar',
    daysLeft: 85,
  },
  {
    id: 4,
    eventStatus: 'upcoming',
    title: 'SIGMA BREACH',
    tags: ['RECON', 'MULTI-NODE'],
    tagColors: ['blue', 'orange'],
    image: sigmaBreachImg,
    description: 'Global multi-team reconnaissance exercise. Coordinate across distributed nodes to achieve simultaneous network penetration.',
    entryFee: '200 CM',
    date: 'Jan 5, 2026',
    venue: 'SYN-LAB BLOCK 12',
    slotsLeft: 'TBD',
    duration: '72 hours',
    difficulty: 'Expert',
    daysLeft: 12,
  },
  {
    id: 5,
    eventStatus: 'upcoming',
    title: 'DARK MESH PROTOCOL',
    tags: ['INNOVATION'],
    tagColors: ['purple'],
    image: nullVectorImg,
    description: 'Build a self-healing mesh network under adversarial conditions. Collaborative event for teams of 3–6.',
    entryFee: '150 CM',
    date: 'Jan 18, 2026',
    venue: 'HUB ALPHA · SECTOR 9',
    slotsLeft: '24 / 40',
    duration: '36 hours',
    difficulty: 'Advanced',
    daysLeft: 25,
  },
  {
    id: 6,
    eventStatus: 'completed',
    title: 'CYBER NIGHT 2023',
    tags: ['THREAT ACTION'],
    tagColors: ['red'],
    image: nullVectorImg,
    description: 'A landmark overnight capture-the-flag event that drew 200+ operatives globally. Hosted across 3 timezones simultaneously.',
    entryFee: '100 CM',
    date: 'Nov 26, 2023',
    venue: 'DARK MATRIX · ONLINE',
    slotsLeft: '200 / 200',
    duration: '12 hours',
    difficulty: 'All Levels',
    result: '1st: Team Phantom · 2nd: NullByte · 3rd: RedCell',
  },
  {
    id: 7,
    eventStatus: 'completed',
    title: 'GLOBAL UPLINK',
    tags: ['RECON'],
    tagColors: ['blue'],
    image: sigmaBreachImg,
    description: 'Worldwide recon drills testing open-source intelligence gathering across 40 countries.',
    entryFee: 'Free',
    date: 'Feb 4, 2024',
    venue: 'DISTRIBUTED · GLOBAL',
    slotsLeft: '180 / 180',
    duration: '48 hours',
    difficulty: 'Intermediate',
    result: 'Winner: NightRunner_X',
  },
  {
    id: 8,
    eventStatus: 'completed',
    title: 'PROTOCOL OMEGA',
    tags: ['INNOVATION', 'MULTI-NODE'],
    tagColors: ['purple', 'orange'],
    image: kineticEngineImg,
    description: 'Strategic multi-team development sprint. Produced 12 open-source tools now used by the CPBYTE community.',
    entryFee: '50 CM',
    date: 'Dec 10, 2025',
    venue: 'SYN-LAB HQ',
    slotsLeft: '60 / 60',
    duration: '5 days',
    difficulty: 'Advanced',
    result: 'Winner: CodeCell Alpha',
  },
]

const ARCHIVES = [
  { id: 1, title: 'CYBER NIGHT 2023', meta: 'ADV · DARK MATRIX · 26 NOV 2023', gradient: 'linear-gradient(135deg, #0a0a1a 0%, #0d2060 50%, #1a0a2e 100%)' },
  { id: 2, title: 'GLOBAL UPLINK',   meta: 'BY NIGHTRUNNER · 4 FEB, 2024',    gradient: 'linear-gradient(135deg, #001a1a 0%, #004444 50%, #001a33 100%)' },
  { id: 3, title: 'PROTOCOL OMEGA',  meta: 'MULT STRATEGY · DEC 2025',         gradient: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a3e 50%, #0a0a1a 100%)' },
]

// ─── HOOKS ───────────────────────────────────────────────────────────────────
function useCountdown(initialSeconds) {
  const [seconds, setSeconds] = useState(initialSeconds)
  useEffect(() => {
    const id = setInterval(() => setSeconds(s => (s > 0 ? s - 1 : 0)), 1000)
    return () => clearInterval(id)
  }, [])
  const h = String(Math.floor(seconds / 3600)).padStart(2, '0')
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0')
  const s = String(seconds % 60).padStart(2, '0')
  return `${h}:${m}:${s}`
}

function useAnimatedCounter(target, duration = 1400, delay = 0) {
  const [val, setVal] = useState(0)
  const [started, setStarted] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => {
      setStarted(true)
      let start = 0
      const step = target / (duration / 16)
      const id = setInterval(() => {
        start += step
        if (start >= target) { setVal(target); clearInterval(id) }
        else setVal(Math.floor(start))
      }, 16)
      return () => clearInterval(id)
    }, delay)
    return () => clearTimeout(t)
  }, [target, duration, delay])
  return val
}

function useReveal() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); obs.disconnect() }
    }, { threshold: 0.12 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return [ref, visible]
}

function useTypewriter(text, speed = 60, delay = 500) {
  const [displayed, setDisplayed] = useState('')
  useEffect(() => {
    let i = 0
    const t = setTimeout(() => {
      const id = setInterval(() => {
        if (i >= text.length) { clearInterval(id); return }
        setDisplayed(text.slice(0, i + 1))
        i++
      }, speed)
      return () => clearInterval(id)
    }, delay)
    return () => clearTimeout(t)
  }, [text, speed, delay])
  return displayed
}

// ─── TAG BADGE ───────────────────────────────────────────────────────────────
function TagBadge({ label, color }) {
  const colorMap = {
    red:    { bg: 'rgba(220,38,38,0.12)',  border: '#dc2626', text: '#f87171' },
    blue:   { bg: 'rgba(59,130,246,0.12)', border: '#3b82f6', text: '#60a5fa' },
    gray:   { bg: 'rgba(100,116,139,0.12)',border: '#64748b', text: '#94a3b8' },
    purple: { bg: 'rgba(139,92,246,0.12)', border: '#8b5cf6', text: '#a78bfa' },
    gold:   { bg: 'rgba(245,158,11,0.12)', border: '#f59e0b', text: '#fbbf24' },
    orange: { bg: 'rgba(234,88,12,0.12)',  border: '#ea580c', text: '#fb923c' },
  }
  const c = colorMap[color] || colorMap.gray
  return (
    <span className="tag-badge" style={{
      background: c.bg, border: `1px solid ${c.border}`, color: c.text,
      padding: '2px 8px', fontSize: '9px', fontWeight: 700,
      letterSpacing: '0.12em', borderRadius: '2px', textTransform: 'uppercase',
      display: 'inline-block',
    }}>{label}</span>
  )
}

// ─── ANIMATED GRID BACKGROUND ────────────────────────────────────────────────
function GridBackground() {
  return (
    <div style={{
      position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0,
      backgroundImage: `
        linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px)
      `,
      backgroundSize: '60px 60px',
      animation: 'gridShift 20s linear infinite',
    }} />
  )
}

// ─── SCANLINE OVERLAY ────────────────────────────────────────────────────────
function ScanlineOverlay() {
  return (
    <>
      {/* subtle scanline sweep */}
      <div style={{
        position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 1,
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', left: 0, right: 0, height: '2px',
          background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.15), rgba(59,130,246,0.3), rgba(59,130,246,0.15), transparent)',
          animation: 'scanline 8s linear infinite',
          animationDelay: '2s',
        }} />
      </div>
      {/* CRT scanlines */}
      <div style={{
        position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 1,
        background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.04) 2px, rgba(0,0,0,0.04) 4px)',
      }} />
    </>
  )
}

// ─── MOVING HIGHLIGHTS ────────────────────────────────────────────────────────
function MovingHighlights() {
  const achievements = [
    { id: 1, text: 'HackNova 2025 Champions', subtitle: 'Team ByteForce', icon: '🏆', color: '#fbbf24', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=200&fit=crop' },
    { id: 2, text: 'Google Code Jam', subtitle: 'Top 10 Global', icon: '🥇', color: '#f87171', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=200&h=200&fit=crop' },
    { id: 3, text: '4 PPO Offers', subtitle: 'Q1 2026', icon: '💼', color: '#34d399', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=200&fit=crop' },
    { id: 4, text: 'Meta Internship', subtitle: '15 Selected', icon: '🎯', color: '#60a5fa', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=200&fit=crop' },
    { id: 5, text: 'ACM ICPC Regionals', subtitle: '2nd Position', icon: '🏅', color: '#c084fc', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=200&h=200&fit=crop' },
    { id: 6, text: 'Early Internship Batch', subtitle: '8 Members', icon: '📜', color: '#fbbf24', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=200&fit=crop' },
    { id: 7, text: 'AWS ML Challenge', subtitle: 'Winner', icon: '🚀', color: '#34d399', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=200&h=200&fit=crop' },
    { id: 8, text: 'Startup Incubation', subtitle: '3 Founded', icon: '💡', color: '#60a5fa', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=200&fit=crop' },
  ]

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0,
      height: '130px', pointerEvents: 'auto', zIndex: 100,
      background: 'linear-gradient(180deg, rgba(6,10,16,0.98) 0%, rgba(15,23,42,0.9) 100%)',
      overflow: 'hidden',
      borderBottom: '2px solid rgba(59,130,246,0.3)',
      display: 'flex', alignItems: 'center', paddingLeft: '20px',
      boxShadow: '0 8px 32px rgba(59,130,246,0.2)',
    }}>
      {/* Scrolling achievements track */}
      <div style={{
        display: 'flex', gap: '30px',
        animation: 'scrollHighlights 80s linear infinite',
      }}>
        {/* Show achievements twice for seamless loop */}
        {[...achievements, ...achievements].map((a, idx) => (
          <div
            key={idx}
            style={{
              display: 'flex', alignItems: 'center', gap: '12px',
              whiteSpace: 'nowrap', flexShrink: 0,
              padding: '10px 14px', borderRadius: '6px',
              background: `linear-gradient(135deg, rgba(59,130,246,0.12), rgba(139,92,246,0.12))`,
              border: `1.5px solid ${a.color}`,
              color: '#f1f5f9', fontSize: '10px', fontWeight: 700,
              letterSpacing: '0.05em', transition: 'all 0.3s ease',
              boxShadow: `0 0 15px ${a.color}44`,
              cursor: 'pointer',
              pointerEvents: 'auto',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `0 0 30px ${a.color}88, 0 0 60px ${a.color}55`;
              e.currentTarget.style.transform = 'scale(1.08) translateY(-2px)';
              e.currentTarget.style.background = `linear-gradient(135deg, rgba(59,130,246,0.25), rgba(139,92,246,0.25))`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = `0 0 15px ${a.color}44`;
              e.currentTarget.style.transform = 'scale(1) translateY(0)';
              e.currentTarget.style.background = `linear-gradient(135deg, rgba(59,130,246,0.12), rgba(139,92,246,0.12))`;
            }}
          >
            {/* Achievement Image */}
            <img 
              src={a.image} 
              alt={a.text}
              style={{
                width: '60px', height: '60px', borderRadius: '4px',
                objectFit: 'cover', border: `2px solid ${a.color}`,
                boxShadow: `0 0 10px ${a.color}66`,
              }}
            />
            
            {/* Achievement Text */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <span style={{ color: a.color, fontWeight: 900, fontSize: '9px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                {a.icon} {a.text}
              </span>
              <span style={{ color: '#94a3b8', fontSize: '8px', letterSpacing: '0.05em' }}>
                {a.subtitle}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── CORNER DECORATION ───────────────────────────────────────────────────────
function CornerDeco({ position = 'tl', size = 16 }) {
  const isTop = position.startsWith('t')
  const isLeft = position.endsWith('l')
  return (
    <div style={{
      position: 'absolute',
      top: isTop ? 0 : undefined, bottom: !isTop ? 0 : undefined,
      left: isLeft ? 0 : undefined, right: !isLeft ? 0 : undefined,
      width: size, height: size,
      borderTop: isTop ? '1.5px solid rgba(59,130,246,0.6)' : 'none',
      borderBottom: !isTop ? '1.5px solid rgba(59,130,246,0.6)' : 'none',
      borderLeft: isLeft ? '1.5px solid rgba(59,130,246,0.6)' : 'none',
      borderRight: !isLeft ? '1.5px solid rgba(59,130,246,0.6)' : 'none',
      pointerEvents: 'none',
    }} />
  )
}

// ─── STAT CARDS ──────────────────────────────────────────────────────────────
function StatCards() {
  const activeOps = useAnimatedCounter(3, 1200, 300)
  const operatives = useAnimatedCounter(1200, 1600, 500)
  const completed = useAnimatedCounter(48, 1400, 700)
  const countdown = useCountdown(47 * 3600 + 39 * 60 + 41)
  const [ref, visible] = useReveal()

  const cardStyle = (delay) => ({
    background: 'rgba(8,14,26,0.9)',
    border: '1px solid rgba(59,130,246,0.25)',
    borderRadius: '6px', padding: '20px 24px',
    position: 'relative', overflow: 'hidden',
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.96)',
    transition: `opacity 0.6s ease ${delay}ms, transform 0.6s cubic-bezier(0.34,1.56,0.64,1) ${delay}ms`,
  })

  return (
    <div ref={ref} style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%', maxWidth: '360px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
        {/* Active Ops */}
        <div className="stat-card" style={cardStyle(0)}>
          <CornerDeco position="tl" size={12} />
          <CornerDeco position="br" size={12} />
          <div style={{ fontSize: '9px', letterSpacing: '0.22em', color: '#475569', marginBottom: '10px', textTransform: 'uppercase', fontFamily: "'Share Tech Mono', monospace" }}>Active Ops</div>
          <div style={{ fontSize: '38px', fontWeight: 900, color: '#3b82f6', fontFamily: "'Share Tech Mono', monospace", lineHeight: 1, transition: 'all 0.05s' }}>
            {String(activeOps).padStart(2, '0')}
          </div>
          <div style={{ position: 'absolute', bottom: 0, left: 0, width: visible ? '100%' : '0%', height: '2px', background: 'linear-gradient(90deg, #3b82f6, transparent)', transition: 'width 1.2s ease 0.5s' }} />
        </div>
        {/* Operatives */}
        <div className="stat-card" style={cardStyle(120)}>
          <CornerDeco position="tl" size={12} />
          <CornerDeco position="br" size={12} />
          <div style={{ fontSize: '9px', letterSpacing: '0.22em', color: '#475569', marginBottom: '10px', textTransform: 'uppercase', fontFamily: "'Share Tech Mono', monospace" }}>Operatives</div>
          <div style={{ fontSize: '38px', fontWeight: 900, color: '#f1f5f9', fontFamily: "'Share Tech Mono', monospace", lineHeight: 1 }}>
            {operatives >= 1000 ? `${(operatives / 1000).toFixed(1)}K` : operatives}
          </div>
          <div style={{ position: 'absolute', bottom: 0, left: 0, width: visible ? '100%' : '0%', height: '2px', background: 'linear-gradient(90deg, #1e3a8a, transparent)', transition: 'width 1.4s ease 0.7s' }} />
        </div>
      </div>
      {/* Completed */}
      <div className="stat-card" style={cardStyle(240)}>
        <CornerDeco position="tl" size={12} />
        <CornerDeco position="br" size={12} />
        <div style={{ fontSize: '9px', letterSpacing: '0.22em', color: '#475569', marginBottom: '10px', textTransform: 'uppercase', fontFamily: "'Share Tech Mono', monospace" }}>Completed</div>
        <div style={{ fontSize: '38px', fontWeight: 900, color: '#f1f5f9', fontFamily: "'Share Tech Mono', monospace", lineHeight: 1 }}>{completed}</div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: visible ? '100%' : '0%', height: '2px', background: 'linear-gradient(90deg, #1e3a8a, transparent)', transition: 'width 1.6s ease 0.9s' }} />
      </div>
      {/* Next Deployment */}
      <div className="stat-card" style={cardStyle(360)}>
        <CornerDeco position="tl" size={12} />
        <CornerDeco position="br" size={12} />
        <div style={{ fontSize: '9px', letterSpacing: '0.22em', color: '#475569', marginBottom: '10px', textTransform: 'uppercase', fontFamily: "'Share Tech Mono', monospace" }}>Next Deployment</div>
        <div style={{ fontSize: '30px', fontWeight: 900, color: '#3b82f6', fontFamily: "'Share Tech Mono', monospace", lineHeight: 1, letterSpacing: '0.08em' }}>{countdown}</div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: visible ? '100%' : '0%', height: '2px', background: 'linear-gradient(90deg, #3b82f6, transparent)', transition: 'width 1.8s ease 1.1s' }} />
      </div>
    </div>
  )
}

// ─── FEATURED EVENT ───────────────────────────────────────────────────────────
function FeaturedEvent({ event }) {
  const cd = useCountdown(47 * 3600 + 39 * 60 + 11)
  const [ref, visible] = useReveal()

  return (
    <div ref={ref} className="featured-card" style={{
      position: 'relative', borderRadius: '8px', overflow: 'hidden',
      border: '1px solid rgba(59,130,246,0.3)',
      display: 'flex', flexDirection: 'row', minHeight: '260px',
      background: '#060d18',
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(24px)',
      transition: 'opacity 0.8s ease, transform 0.8s cubic-bezier(0.34,1.56,0.64,1)',
    }}>
      <CornerDeco position="tl" size={20} />
      <CornerDeco position="tr" size={20} />
      <CornerDeco position="bl" size={20} />
      <CornerDeco position="br" size={20} />

      {/* Image */}
      <div style={{ position: 'relative', width: '52%', flexShrink: 0 }}>
        <img src={event.image} alt={event.title} style={{
          width: '100%', height: '100%', objectFit: 'cover', display: 'block',
          transition: 'transform 0.6s ease',
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent 55%, #060d18 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(6,13,24,0.6) 0%, transparent 50%)' }} />

        {/* LIVE badge */}
        <div style={{
          position: 'absolute', top: '14px', left: '14px',
          display: 'flex', alignItems: 'center', gap: '6px',
          background: 'rgba(0,0,0,0.75)', padding: '4px 12px',
          borderRadius: '3px', border: '1px solid rgba(255,255,255,0.08)',
          backdropFilter: 'blur(6px)',
        }}>
          <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#22c55e', display: 'inline-block', animation: 'dotPulse 2s ease-in-out infinite' }} />
          <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.18em', color: '#f1f5f9', fontFamily: "'Share Tech Mono', monospace" }}>LIVE</span>
        </div>

        {/* Countdown */}
        <div style={{
          position: 'absolute', top: '14px', right: '14px',
          fontSize: '11px', fontFamily: "'Share Tech Mono', monospace", color: '#94a3b8',
          background: 'rgba(0,0,0,0.65)', padding: '4px 10px', borderRadius: '3px',
          backdropFilter: 'blur(6px)',
        }}>⏱ {cd}</div>
      </div>

      {/* Content */}
      <div style={{ flex: 1, padding: '28px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '16px' }}>
            {event.tags.map((t, i) => <TagBadge key={t} label={t} color={event.tagColors[i]} />)}
          </div>
          <h2 style={{
            fontSize: '28px', fontWeight: 900, letterSpacing: '0.06em', color: '#f1f5f9',
            marginBottom: '12px', lineHeight: 1.1,
            fontFamily: "'Inter', sans-serif",
          }}>{event.title}</h2>
          <p style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.8, marginBottom: '24px', maxWidth: '420px' }}>
            {event.description}
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px' }}>
          <div style={{ display: 'flex', gap: '28px', flexWrap: 'wrap' }}>
            {[
              { label: 'Entry Fee', val: event.entryFee },
              { label: 'Venue',     val: event.venue },
              { label: 'Slots Left',val: event.slotsLeft },
            ].map(({ label, val }) => (
              <div key={label}>
                <div style={{ fontSize: '9px', letterSpacing: '0.2em', color: '#334155', textTransform: 'uppercase', marginBottom: '4px', fontFamily: "'Share Tech Mono', monospace" }}>{label}</div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#f1f5f9', fontFamily: "'Share Tech Mono', monospace" }}>{val}</div>
              </div>
            ))}
          </div>
          <button className="btn-primary" style={{
            background: '#3b82f6', color: '#fff', border: 'none',
            padding: '11px 22px', fontSize: '11px', fontWeight: 700,
            letterSpacing: '0.14em', textTransform: 'uppercase', borderRadius: '4px', cursor: 'pointer',
            whiteSpace: 'nowrap',
          }}>REGISTER NOW →</button>
        </div>
      </div>
    </div>
  )
}

// ─── EVENT CARD ───────────────────────────────────────────────────────────────
function EventCard({ event, delay = 0 }) {
  const [ref, visible] = useReveal()

  return (
    <div ref={ref} className="event-card-wrap" style={{
      background: 'rgba(8,14,26,0.9)',
      border: '1px solid rgba(30,41,59,0.7)',
      borderRadius: '6px', overflow: 'hidden',
      position: 'relative',
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(28px)',
      transition: `opacity 0.7s ease ${delay}ms, transform 0.7s cubic-bezier(0.34,1.56,0.64,1) ${delay}ms`,
    }}>
      <CornerDeco position="tl" size={12} />
      <CornerDeco position="br" size={12} />

      {/* Image */}
      <div style={{ position: 'relative', height: '188px', overflow: 'hidden' }}>
        <img src={event.image} alt={event.title} style={{
          width: '100%', height: '100%', objectFit: 'cover',
          transition: 'transform 0.5s ease', display: 'block',
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,14,26,1) 0%, rgba(8,14,26,0.4) 60%, transparent 100%)' }} />
        {event.daysLeft && (
          <div style={{
            position: 'absolute', top: '12px', right: '12px',
            background: 'rgba(0,0,0,0.75)', border: '1px solid rgba(245,158,11,0.5)',
            color: '#fbbf24', fontSize: '11px', fontWeight: 700,
            padding: '3px 8px', borderRadius: '3px',
            fontFamily: "'Share Tech Mono', monospace",
          }}>{event.daysLeft}d</div>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: '20px 22px' }}>
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '12px' }}>
          {event.tags.map((t, i) => <TagBadge key={t} label={t} color={event.tagColors[i]} />)}
        </div>
        <h3 style={{ fontSize: '19px', fontWeight: 800, letterSpacing: '0.05em', color: '#f1f5f9', marginBottom: '8px' }}>{event.title}</h3>
        <p style={{ fontSize: '12px', color: '#475569', lineHeight: 1.75, marginBottom: '18px' }}>{event.description}</p>

        {event.canRegister && (
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div>
              <div style={{ fontSize: '9px', letterSpacing: '0.2em', color: '#334155', textTransform: 'uppercase', marginBottom: '4px', fontFamily: "'Share Tech Mono', monospace" }}>Lead Op</div>
              <div style={{ fontSize: '12px', color: '#64748b', fontFamily: "'Share Tech Mono', monospace" }}>{event.leadOp} · {event.leadPlatform}</div>
            </div>
            <button className="btn-primary" style={{
              background: 'transparent', color: '#3b82f6', border: '1px solid #3b82f6',
              padding: '8px 18px', fontSize: '10px', fontWeight: 700,
              letterSpacing: '0.12em', textTransform: 'uppercase', borderRadius: '3px', cursor: 'pointer',
            }}>REGISTER</button>
          </div>
        )}

        {event.locked && (
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div>
              <div style={{ fontSize: '9px', letterSpacing: '0.2em', color: '#334155', textTransform: 'uppercase', marginBottom: '4px', fontFamily: "'Share Tech Mono', monospace" }}>Status</div>
              <div style={{ fontSize: '12px', color: '#f59e0b', fontFamily: "'Share Tech Mono', monospace", fontWeight: 700 }}>{event.regStatus}</div>
            </div>
            <span style={{ fontSize: '10px', color: '#334155', letterSpacing: '0.18em', textTransform: 'uppercase', fontFamily: "'Share Tech Mono', monospace" }}>LOCKED</span>
          </div>
        )}
      </div>
    </div>
  )
}

// ─── ARCHIVE CARD ─────────────────────────────────────────────────────────────
function ArchiveCard({ item, delay = 0 }) {
  const [ref, visible] = useReveal()
  return (
    <div ref={ref} className="archive-card" style={{
      borderRadius: '6px', overflow: 'hidden', position: 'relative',
      height: '200px', cursor: 'pointer',
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(24px)',
      transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
    }}>
      <div style={{ width: '100%', height: '100%', background: item.gradient }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, transparent 60%)' }} />
      <div style={{ position: 'absolute', top: '14px', left: '14px', fontSize: '14px', color: '#fbbf24' }}>★</div>
      <div style={{ position: 'absolute', bottom: '16px', left: '16px', right: '16px' }}>
        <div style={{ fontSize: '14px', fontWeight: 800, letterSpacing: '0.08em', color: '#f1f5f9', textTransform: 'uppercase', marginBottom: '4px' }}>{item.title}</div>
        <div style={{ fontSize: '10px', color: '#64748b', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: "'Share Tech Mono', monospace" }}>{item.meta}</div>
      </div>
      <CornerDeco position="tl" size={10} />
      <CornerDeco position="br" size={10} />
    </div>
  )
}

// ─── HERO TITLE WORD ─────────────────────────────────────────────────────────
function GlitchWord({ text, color = '#f1f5f9', fontSize }) {
  return (
    <span className="hero-word" style={{
      color,
      fontSize: fontSize || 'inherit',
    }}>
      {text}
    </span>
  )
}

// ─── STATUS SECTION HEADER ───────────────────────────────────────────────────
function SectionHeader({ label, count, accent, icon, sublabel }) {
  const [ref, visible] = useReveal()
  return (
    <div ref={ref} style={{
      display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px',
      opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(-20px)',
      transition: 'opacity 0.5s ease, transform 0.5s ease',
    }}>
      <div style={{ width: '4px', height: '48px', background: accent, borderRadius: '2px', flexShrink: 0, boxShadow: `0 0 12px ${accent}` }} />
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '11px', letterSpacing: '0.05em' }}>{icon}</span>
          <span style={{ fontSize: '18px', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#f1f5f9' }}>{label}</span>
          <span style={{ background: accent, color: '#000', fontSize: '10px', fontWeight: 800, padding: '2px 8px', borderRadius: '2px', letterSpacing: '0.08em' }}>{count}</span>
        </div>
        <div style={{ fontSize: '10px', color: '#334155', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: "'Share Tech Mono', monospace", marginTop: '2px' }}>{sublabel}</div>
      </div>
      <div style={{ flex: 1, height: '1px', background: `linear-gradient(90deg, ${accent}40, transparent)` }} />
    </div>
  )
}

// ─── STATUS CHIP ─────────────────────────────────────────────────────────────
function StatusChip({ status }) {
  const cfg = {
    live:      { label: 'LIVE',      bg: 'rgba(34,197,94,0.12)',  border: '#22c55e', color: '#22c55e', dot: true },
    upcoming:  { label: 'UPCOMING', bg: 'rgba(59,130,246,0.12)', border: '#3b82f6', color: '#3b82f6', dot: false },
    completed: { label: 'COMPLETED',bg: 'rgba(100,116,139,0.12)',border: '#475569', color: '#64748b', dot: false },
  }[status]
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', background: cfg.bg, border: `1px solid ${cfg.border}`, color: cfg.color, padding: '3px 9px', borderRadius: '2px', fontSize: '9px', fontWeight: 700, letterSpacing: '0.12em' }}>
      {cfg.dot && <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#22c55e', animation: 'dotPulse 2s infinite' }} />}
      {cfg.label}
    </span>
  )
}

// ─── DETAIL PANEL ────────────────────────────────────────────────────────────
function DetailPanel({ event, onClose }) {
  const isCompleted = event?.eventStatus === 'completed'
  const isLive = event?.eventStatus === 'live'
  const accent = isLive ? '#22c55e' : isCompleted ? '#475569' : '#3b82f6'
  return (
    <>
      {/* Backdrop */}
      <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)', zIndex: 200, transition: 'opacity 0.3s' }} />
      {/* Panel */}
      <div style={{
        position: 'fixed', top: 0, right: 0, bottom: 0, width: '460px', maxWidth: '95vw',
        background: '#080f1c', borderLeft: `1px solid ${accent}40`,
        zIndex: 201, overflowY: 'auto', display: 'flex', flexDirection: 'column',
        animation: 'slideLeft 0.35s cubic-bezier(0.34,1.56,0.64,1)',
      }}>
        {/* Image header */}
        <div style={{ position: 'relative', height: '220px', flexShrink: 0 }}>
          <img src={event.image} alt={event.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, #080f1c 0%, rgba(8,15,28,0.4) 60%, transparent 100%)` }} />
          <div style={{ position: 'absolute', inset: 0, borderLeft: `3px solid ${accent}` }} />
          <button onClick={onClose} style={{ position: 'absolute', top: '14px', right: '14px', background: 'rgba(0,0,0,0.7)', border: '1px solid rgba(255,255,255,0.1)', color: '#94a3b8', width: '32px', height: '32px', borderRadius: '4px', cursor: 'pointer', fontSize: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✕</button>
          <div style={{ position: 'absolute', bottom: '16px', left: '20px' }}>
            <StatusChip status={event.eventStatus} />
          </div>
        </div>
        {/* Content */}
        <div style={{ padding: '24px 28px', flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '10px' }}>
              {event.tags.map((t, i) => <TagBadge key={t} label={t} color={event.tagColors[i]} />)}
            </div>
            <h2 style={{ fontSize: '22px', fontWeight: 900, letterSpacing: '0.06em', color: '#f1f5f9', marginBottom: '10px' }}>{event.title}</h2>
            <p style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.8 }}>{event.description}</p>
          </div>
          {/* Meta grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            {[
              { label: 'Date',       val: event.date },
              { label: 'Venue',      val: event.venue },
              { label: 'Entry Fee',  val: event.entryFee },
              { label: 'Duration',   val: event.duration },
              { label: 'Slots',      val: event.slotsLeft },
              { label: 'Difficulty', val: event.difficulty },
            ].map(({ label, val }) => (
              <div key={label} style={{ background: 'rgba(15,23,42,0.7)', border: '1px solid rgba(30,41,59,0.8)', borderRadius: '4px', padding: '12px 14px' }}>
                <div style={{ fontSize: '9px', letterSpacing: '0.2em', color: '#334155', textTransform: 'uppercase', fontFamily: "'Share Tech Mono',monospace", marginBottom: '4px' }}>{label}</div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#f1f5f9', fontFamily: "'Share Tech Mono',monospace" }}>{val || '—'}</div>
              </div>
            ))}
          </div>
          {event.leadOp && (
            <div style={{ background: 'rgba(15,23,42,0.7)', border: '1px solid rgba(30,41,59,0.8)', borderRadius: '4px', padding: '12px 14px' }}>
              <div style={{ fontSize: '9px', letterSpacing: '0.2em', color: '#334155', textTransform: 'uppercase', fontFamily: "'Share Tech Mono',monospace", marginBottom: '4px' }}>Lead Operative</div>
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#f1f5f9' }}>{event.leadOp}</div>
            </div>
          )}
          {event.result && (
            <div style={{ background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: '4px', padding: '12px 14px' }}>
              <div style={{ fontSize: '9px', letterSpacing: '0.2em', color: '#14532d', textTransform: 'uppercase', fontFamily: "'Share Tech Mono',monospace", marginBottom: '4px' }}>Results</div>
              <div style={{ fontSize: '12px', color: '#22c55e', fontFamily: "'Share Tech Mono',monospace" }}>{event.result}</div>
            </div>
          )}
          {/* Action */}
          <div style={{ marginTop: 'auto', paddingTop: '8px' }}>
            {!isCompleted ? (
              <button className="btn-primary" style={{ width: '100%', background: accent, color: isLive ? '#000' : '#fff', border: 'none', padding: '14px', fontSize: '11px', fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase', borderRadius: '4px', cursor: 'pointer' }}>
                {isLive ? '⚡ JOIN NOW' : 'REGISTER FOR THIS EVENT'}
              </button>
            ) : (
              <button style={{ width: '100%', background: 'transparent', color: '#475569', border: '1px solid rgba(71,85,105,0.4)', padding: '14px', fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', borderRadius: '4px', cursor: 'default' }}>
                OPERATION CONCLUDED
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

// ─── COMPACT EVENT ROW (for Completed section) ────────────────────────────────
function EventRow({ event, onSelect, delay = 0 }) {
  const [ref, visible] = useReveal()
  const [hov, setHov] = useState(false)
  return (
    <div ref={ref} onClick={() => onSelect(event)}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        display: 'flex', alignItems: 'center', gap: '16px',
        background: hov ? 'rgba(15,23,42,0.7)' : 'rgba(8,14,26,0.5)',
        border: hov ? '1px solid rgba(71,85,105,0.5)' : '1px solid rgba(30,41,59,0.4)',
        borderRadius: '6px', padding: '14px 18px', cursor: 'pointer',
        transition: 'all 0.2s ease',
        opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(14px)',
        transitionDelay: `${delay}ms`,
        filter: 'grayscale(30%)',
      }}>
      <img src={event.image} alt={event.title} style={{ width: '56px', height: '56px', objectFit: 'cover', borderRadius: '4px', opacity: 0.7, flexShrink: 0 }} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', gap: '6px', marginBottom: '4px', flexWrap: 'wrap' }}>
          {event.tags.map((t, i) => <TagBadge key={t} label={t} color={event.tagColors[i]} />)}
        </div>
        <div style={{ fontSize: '14px', fontWeight: 700, color: hov ? '#94a3b8' : '#64748b', letterSpacing: '0.04em', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{event.title}</div>
      </div>
      <div style={{ textAlign: 'right', flexShrink: 0 }}>
        <div style={{ fontSize: '11px', color: '#334155', fontFamily: "'Share Tech Mono',monospace" }}>{event.date}</div>
        {event.result && <div style={{ fontSize: '10px', color: '#22c55e', marginTop: '2px', fontFamily: "'Share Tech Mono',monospace", opacity: 0.8 }}>✓ Concluded</div>}
      </div>
      <span style={{ color: '#334155', fontSize: '14px', transform: hov ? 'translateX(3px)' : 'translateX(0)', transition: 'transform 0.2s' }}>›</span>
    </div>
  )
}

// ─── EVENTS SECTION (categorized) ────────────────────────────────────────────
function EventsSection({ activeFilter }) {
  const [selectedEvent, setSelectedEvent] = useState(null)

  const filtered = EVENTS.filter(e =>
    activeFilter === 'ALL OPS' || e.tags.some(t => t === activeFilter)
  )
  const live      = filtered.filter(e => e.eventStatus === 'live')
  const upcoming  = filtered.filter(e => e.eventStatus === 'upcoming')
  const completed = filtered.filter(e => e.eventStatus === 'completed')

  return (
    <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '36px 40px 64px', position: 'relative', zIndex: 2 }}>
      {selectedEvent && <DetailPanel event={selectedEvent} onClose={() => setSelectedEvent(null)} />}

      {/* ── LIVE ── */}
      {live.length > 0 && (
        <div style={{ marginBottom: '48px' }}>
          <SectionHeader label="Live Operations" count={live.length} accent="#22c55e" icon="🟢" sublabel="Currently active — join now" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '20px' }}>
            {live.map((e, i) => (
              <div key={e.id} onClick={() => setSelectedEvent(e)} style={{ cursor: 'pointer' }}>
                <EventCard event={e} delay={i * 100} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── UPCOMING ── */}
      {upcoming.length > 0 && (
        <div style={{ marginBottom: '48px' }}>
          <SectionHeader label="Upcoming Operations" count={upcoming.length} accent="#3b82f6" icon="📡" sublabel="Scheduled deployments — register early" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '20px' }}>
            {upcoming.map((e, i) => (
              <div key={e.id} onClick={() => setSelectedEvent(e)} style={{ cursor: 'pointer' }}>
                <EventCard event={e} delay={i * 100} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── COMPLETED ── */}
      {completed.length > 0 && (
        <div style={{ marginBottom: '16px' }}>
          <SectionHeader label="Completed Missions" count={completed.length} accent="#475569" icon="✓" sublabel="Archived operations — view logs" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {completed.map((e, i) => <EventRow key={e.id} event={e} onSelect={setSelectedEvent} delay={i * 80} />)}
          </div>
        </div>
      )}

      {filtered.length === 0 && (
        <div style={{ textAlign: 'center', padding: '80px 0', color: '#334155' }}>
          <div style={{ fontSize: '40px', marginBottom: '16px', opacity: 0.4 }}>⬡</div>
          <div style={{ fontSize: '12px', letterSpacing: '0.25em', textTransform: 'uppercase', fontFamily: "'Share Tech Mono', monospace" }}>No operations found</div>
        </div>
      )}
    </section>
  )
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────
export default function EventsPage() {
  const [activeFilter, setActiveFilter] = useState('ALL OPS')
  const typeStatus = useTypewriter('SYSTEM STATUS · LIVE', 55, 800)
  const [heroRef, heroVisible] = useReveal()
  const [archiveRef, archiveVisible] = useReveal()
  const [ctaRef, ctaVisible] = useReveal()

  const filteredEvents = EVENTS.filter(e =>
    activeFilter === 'ALL OPS' || e.tags.some(t => t === activeFilter)
  )
  const featuredEvent = filteredEvents.find(e => e.featured)
  const gridEvents = filteredEvents.filter(e => !e.featured)

  return (
    <>
      {/* Inject CSS */}
      <style>{STYLES}</style>

      <div style={{ background: 'var(--bg)', minHeight: '100vh', fontFamily: "'Inter', sans-serif", color: '#f1f5f9', position: 'relative', overflow: 'hidden' }}>
        <GridBackground />
        <ScanlineOverlay />
        <MovingHighlights />

        {/* ── HERO ──────────────────────────────────────────── */}
        <section ref={heroRef} style={{ padding: '160px 40px 60px', maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '60px', flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>

          {/* Left */}
          <div style={{ flex: 1, minWidth: '280px' }}>
            {/* System Status - typewriter */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '28px',
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateX(0)' : 'translateX(-24px)',
              transition: 'opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s',
            }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', display: 'inline-block', animation: 'dotPulse 2s ease-in-out infinite' }} />
              <span style={{
                fontSize: '10px', letterSpacing: '0.28em', color: '#475569',
                textTransform: 'uppercase', fontWeight: 600,
                fontFamily: "'Share Tech Mono', monospace",
              }}>
                {typeStatus}
                <span style={{ animation: 'blink 1s infinite', marginLeft: '2px' }}>_</span>
              </span>
            </div>

            {/* Glitch Hero Title */}
            <h1 style={{
              fontSize: 'clamp(44px, 6vw, 72px)', fontWeight: 900,
              textTransform: 'uppercase', marginBottom: '22px',
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateX(0)' : 'translateX(-32px)',
              transition: 'opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s',
            }}>
              <GlitchWord text="MISSION" />
              <GlitchWord text="LOGS &" />
              <GlitchWord text="UPCOMING" color="#3b82f6" />
              <GlitchWord text="OPERATIONS" />
            </h1>

            <p style={{
              fontSize: '13px', color: '#475569', lineHeight: 1.85,
              maxWidth: '380px', marginBottom: '36px',
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s',
            }}>
              Access real-time intelligence on{' '}
              <span style={{ color: '#3b82f6' }}>local</span> and{' '}
              <span style={{ color: '#f1f5f9' }}>global technological</span>{' '}
              <span style={{ color: '#3b82f6' }}>convergences</span>. Sync your neural links to the upcoming protocol deployments.
            </p>

            {/* CTA Buttons */}
            <div style={{
              display: 'flex', gap: '14px', flexWrap: 'wrap',
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.7s ease 0.55s, transform 0.7s ease 0.55s',
            }}>
              <button className="btn-primary" style={{
                background: '#3b82f6', color: '#fff',
                border: '2px solid #3b82f6', padding: '12px 30px',
                fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em',
                textTransform: 'uppercase', borderRadius: '4px', cursor: 'pointer',
              }}>BROWSE PROTOCOLS</button>
              <button style={{
                background: 'transparent', color: '#f1f5f9',
                border: '2px solid rgba(100,116,139,0.4)', padding: '12px 30px',
                fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em',
                textTransform: 'uppercase', borderRadius: '4px', cursor: 'pointer',
                transition: 'border-color 0.2s, color 0.2s',
              }}
                onMouseEnter={e => { e.target.style.borderColor = '#64748b' }}
                onMouseLeave={e => { e.target.style.borderColor = 'rgba(100,116,139,0.4)' }}
              >VIEW ARCHIVE</button>
            </div>
          </div>

          {/* Right — Stat Cards */}
          <div style={{ flex: '0 0 auto' }} className="floating">
            <StatCards />
          </div>
        </section>

        {/* ── FILTER BAR ────────────────────────────────────── */}
        <div style={{
          position: 'sticky', top: 0, zIndex: 50,
          background: 'rgba(4,8,15,0.97)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(30,41,59,0.7)',
          borderTop: '1px solid rgba(30,41,59,0.3)',
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex' }}>
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`filter-btn ${activeFilter === f ? 'active' : ''}`}
                  style={{
                    background: 'none', border: 'none',
                    padding: '16px 20px', fontSize: '10px', fontWeight: 700,
                    letterSpacing: '0.2em', textTransform: 'uppercase', cursor: 'pointer',
                    color: activeFilter === f ? '#f1f5f9' : '#3d4f6b',
                    fontFamily: "'Inter', sans-serif",
                    marginBottom: '-1px',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={e => { if (activeFilter !== f) e.target.style.color = '#64748b' }}
                  onMouseLeave={e => { if (activeFilter !== f) e.target.style.color = '#3d4f6b' }}
                >
                  {f}
                </button>
              ))}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ef4444', animation: 'dotPulse 2s ease-in-out infinite' }} />
              <span style={{ fontSize: '10px', letterSpacing: '0.15em', color: '#ef4444', textTransform: 'uppercase', fontWeight: 600, fontFamily: "'Share Tech Mono', monospace" }}>
                3 Reporting Pending
              </span>
            </div>
          </div>
        </div>

        {/* ── EVENTS CONTENT ────────────────────────────────── */}
        <EventsSection activeFilter={activeFilter} />

        {/* ── ARCHIVED SUCCESS ──────────────────────────────── */}
        <section ref={archiveRef} style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px 80px', position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
            marginBottom: '8px',
            opacity: archiveVisible ? 1 : 0,
            transform: archiveVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}>
            <div>
              <h2 className="shimmer-text" style={{
                fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 900,
                letterSpacing: '0.06em', textTransform: 'uppercase',
              }}>
                ARCHIVED SUCCESS
              </h2>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '6px' }}>
                <div style={{
                  height: '1px',
                  background: 'linear-gradient(90deg, #3b82f6, transparent)',
                  width: archiveVisible ? '60px' : '0px',
                  transition: 'width 0.8s ease 0.4s',
                }} />
                <p style={{ fontSize: '10px', letterSpacing: '0.25em', color: '#3b82f6', textTransform: 'uppercase', fontFamily: "'Share Tech Mono', monospace" }}>
                  Post Operation Analytics &amp; Records
                </p>
              </div>
            </div>
            <button style={{
              background: 'transparent', border: 'none',
              color: '#334155', fontSize: '11px', letterSpacing: '0.15em',
              textTransform: 'uppercase', cursor: 'pointer', fontWeight: 600,
              transition: 'color 0.2s',
              fontFamily: "'Share Tech Mono', monospace",
            }}
              onMouseEnter={e => e.target.style.color = '#64748b'}
              onMouseLeave={e => e.target.style.color = '#334155'}
            >VIEW ALL RECORDS →</button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginTop: '28px' }}>
            {ARCHIVES.map((item, i) => <ArchiveCard key={item.id} item={item} delay={i * 120} />)}
          </div>
        </section>

        {/* ── OPEN TRANSMISSION CTA ─────────────────────────── */}
        <section ref={ctaRef} style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px 80px', position: 'relative', zIndex: 2 }}>
          <div style={{
            position: 'relative',
            background: 'rgba(8,16,36,0.85)',
            border: '1px solid rgba(59,130,246,0.25)',
            borderRadius: '8px', padding: '52px 64px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '48px', flexWrap: 'wrap',
            overflow: 'hidden',
            opacity: ctaVisible ? 1 : 0,
            transform: ctaVisible ? 'translateY(0)' : 'translateY(28px)',
            transition: 'opacity 0.8s ease, transform 0.8s cubic-bezier(0.34,1.56,0.64,1)',
          }}>
            {/* BG glow accent */}
            <div style={{
              position: 'absolute', top: '-60px', right: '-60px',
              width: '300px', height: '300px',
              background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />
            <CornerDeco position="tl" size={20} />
            <CornerDeco position="tr" size={20} />
            <CornerDeco position="bl" size={20} />
            <CornerDeco position="br" size={20} />

            <div style={{ flex: 1 }}>
              <div style={{
                fontSize: '10px', letterSpacing: '0.28em', color: '#3b82f6',
                textTransform: 'uppercase', marginBottom: '18px',
                fontFamily: "'Share Tech Mono', monospace",
              }}>// Open Transmission</div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1.1, marginBottom: '16px' }}>
                <span style={{ color: '#f1f5f9', display: 'block' }}>INITIATE NEW</span>
                <span className="neon-blue" style={{ color: '#3b82f6', display: 'block' }}>CONVERGENCE</span>
              </h2>
              <p style={{ fontSize: '13px', color: '#475569', lineHeight: 1.85, maxWidth: '420px' }}>
                Have a protocol concept? A new technical roadmap? Propose an event and lead the CPBYTE community into the next era of development.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', alignItems: 'flex-start' }}>
              <button className="btn-primary" style={{
                background: 'transparent', color: '#3b82f6',
                border: '2px solid #3b82f6', padding: '14px 34px',
                fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em',
                textTransform: 'uppercase', borderRadius: '4px', cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
                onMouseEnter={e => { e.target.style.background = '#3b82f6'; e.target.style.color = '#fff' }}
                onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = '#3b82f6' }}
              >PROPOSE AN EVENT</button>
              <button style={{
                background: 'none', border: 'none', fontSize: '11px',
                letterSpacing: '0.15em', color: '#334155', cursor: 'pointer',
                textTransform: 'uppercase', fontWeight: 600, transition: 'color 0.2s',
                fontFamily: "'Share Tech Mono', monospace",
              }}
                onMouseEnter={e => e.target.style.color = '#64748b'}
                onMouseLeave={e => e.target.style.color = '#334155'}
              >LEARN ABOUT CPBYTE →</button>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}
