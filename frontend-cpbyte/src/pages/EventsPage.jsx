import { useState } from 'react'
import { FILTERS, EVENTS, ARCHIVES } from '../constants/mockData.js'
import { useTypewriter, useReveal } from '../hooks/useCyberpunkHooks.js'
import { GridBackground, ScanlineOverlay, MovingHighlights } from '../components/Backgrounds.jsx'
import { GlitchWord, CornerDeco } from '../components/Shared.jsx'
import {
  StatCards, EventCard, ArchiveCard, SectionHeader, EventRow, DetailPanel
} from '../components/EventComponents.jsx'

function EventsSection({ activeFilter }) {
  const [selectedEvent, setSelectedEvent] = useState(null)

  const filtered = EVENTS.filter(e =>
    activeFilter === 'ALL OPS' || e.tags.some(t => t === activeFilter)
  )
  const live = filtered.filter(e => e.eventStatus === 'live')
  const upcoming = filtered.filter(e => e.eventStatus === 'upcoming')
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

export default function EventsPage() {
  const [activeFilter, setActiveFilter] = useState('ALL OPS')
  const typeStatus = useTypewriter('SYSTEM STATUS · LIVE', 55, 800)
  const [heroRef, heroVisible] = useReveal()
  const [archiveRef, archiveVisible] = useReveal()
  const [ctaRef, ctaVisible] = useReveal()

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', paddingBottom: '40px', position: 'relative', overflow: 'hidden' }}>
      <GridBackground />
      <ScanlineOverlay />
      <MovingHighlights />

      {/* ── HERO ── */}
      <section ref={heroRef} style={{ padding: '160px 40px 60px', maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '60px', flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
        <div style={{ flex: 1, minWidth: '280px' }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '28px',
            opacity: heroVisible ? 1 : 0, transform: heroVisible ? 'translateX(0)' : 'translateX(-24px)',
            transition: 'opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s',
          }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', display: 'inline-block', animation: 'dotPulse 2s ease-in-out infinite' }} />
            <span style={{ fontSize: '10px', letterSpacing: '0.28em', color: '#475569', textTransform: 'uppercase', fontWeight: 600, fontFamily: "'Share Tech Mono', monospace" }}>
              {typeStatus}<span style={{ animation: 'blink 1s infinite', marginLeft: '2px' }}>_</span>
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(44px, 6vw, 72px)', fontWeight: 900, textTransform: 'uppercase',
            marginBottom: '22px', opacity: heroVisible ? 1 : 0,
            transform: heroVisible ? 'translateX(0)' : 'translateX(-32px)',
            transition: 'opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s',
          }}>
            <GlitchWord text="MISSION" />
            <GlitchWord text="LOGS &" />
            <GlitchWord text="UPCOMING" color="#3b82f6" />
            <GlitchWord text="OPERATIONS" />
          </h1>

          <p style={{
            fontSize: '13px', color: '#475569', lineHeight: 1.85, maxWidth: '380px', marginBottom: '36px',
            opacity: heroVisible ? 1 : 0, transform: heroVisible ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s',
          }}>
            Access real-time intelligence on <span style={{ color: '#3b82f6' }}>local</span> and <span style={{ color: '#f1f5f9' }}>global technological</span> <span style={{ color: '#3b82f6' }}>convergences</span>. Sync your neural links to the upcoming protocol deployments.
          </p>

          <div style={{
            display: 'flex', gap: '14px', flexWrap: 'wrap',
            opacity: heroVisible ? 1 : 0, transform: heroVisible ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.7s ease 0.55s, transform 0.7s ease 0.55s',
          }}>
            <button className="btn-primary" style={{
              background: '#3b82f6', color: '#fff', border: '2px solid #3b82f6', padding: '12px 30px',
              fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', borderRadius: '4px', cursor: 'pointer',
            }}>BROWSE PROTOCOLS</button>
            <button style={{
              background: 'transparent', color: '#f1f5f9', border: '2px solid rgba(100,116,139,0.4)', padding: '12px 30px',
              fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', borderRadius: '4px', cursor: 'pointer',
              transition: 'border-color 0.2s, color 0.2s',
            }}
              onMouseEnter={e => { e.target.style.borderColor = '#64748b' }}
              onMouseLeave={e => { e.target.style.borderColor = 'rgba(100,116,139,0.4)' }}
            >VIEW ARCHIVE</button>
          </div>
        </div>

        <div style={{ flex: '0 0 auto' }} className="floating">
          <StatCards />
        </div>
      </section>

      {/* ── FILTER BAR ── */}
      <div style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(4,8,15,0.97)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(30,41,59,0.7)', borderTop: '1px solid rgba(30,41,59,0.3)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex' }}>
            {FILTERS.map((f) => (
              <button key={f} onClick={() => setActiveFilter(f)} className={`filter-btn ${activeFilter === f ? 'active' : ''}`}
                style={{
                  background: 'none', border: 'none', padding: '16px 20px', fontSize: '10px', fontWeight: 700,
                  letterSpacing: '0.2em', textTransform: 'uppercase', cursor: 'pointer',
                  color: activeFilter === f ? '#f1f5f9' : '#3d4f6b', marginBottom: '-1px', transition: 'color 0.2s ease',
                }}
                onMouseEnter={e => { if (activeFilter !== f) e.target.style.color = '#64748b' }}
                onMouseLeave={e => { if (activeFilter !== f) e.target.style.color = '#3d4f6b' }}
              >{f}</button>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ef4444', animation: 'dotPulse 2s ease-in-out infinite' }} />
            <span style={{ fontSize: '10px', letterSpacing: '0.15em', color: '#ef4444', textTransform: 'uppercase', fontWeight: 600, fontFamily: "'Share Tech Mono', monospace" }}>3 Reporting Pending</span>
          </div>
        </div>
      </div>

      <EventsSection activeFilter={activeFilter} />

      {/* ── ARCHIVED SUCCESS ── */}
      <section ref={archiveRef} style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px 80px', position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '8px', opacity: archiveVisible ? 1 : 0, transform: archiveVisible ? 'translateY(0)' : 'translateY(20px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}>
          <div>
            <h2 className="shimmer-text" style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 900, letterSpacing: '0.06em', textTransform: 'uppercase' }}>ARCHIVED SUCCESS</h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '6px' }}>
              <div style={{ height: '1px', background: 'linear-gradient(90deg, #3b82f6, transparent)', width: archiveVisible ? '60px' : '0px', transition: 'width 0.8s ease 0.4s' }} />
              <p style={{ fontSize: '10px', letterSpacing: '0.25em', color: '#3b82f6', textTransform: 'uppercase', fontFamily: "'Share Tech Mono', monospace" }}>Post Operation Analytics & Records</p>
            </div>
          </div>
          <button style={{
            background: 'transparent', border: 'none', color: '#334155', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', cursor: 'pointer', fontWeight: 600, transition: 'color 0.2s', fontFamily: "'Share Tech Mono', monospace",
          }} onMouseEnter={e => e.target.style.color = '#64748b'} onMouseLeave={e => e.target.style.color = '#334155'}>VIEW ALL RECORDS →</button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginTop: '28px' }}>
          {ARCHIVES.map((item, i) => <ArchiveCard key={item.id} item={item} delay={i * 120} />)}
        </div>
      </section>

      {/* ── CTA ── */}
      <section ref={ctaRef} style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 2 }}>
        <div style={{
          position: 'relative', background: 'rgba(8,16,36,0.85)', border: '1px solid rgba(59,130,246,0.25)', borderRadius: '8px',
          padding: '52px 64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '48px', flexWrap: 'wrap', overflow: 'hidden',
          opacity: ctaVisible ? 1 : 0, transform: ctaVisible ? 'translateY(0)' : 'translateY(28px)', transition: 'opacity 0.8s ease, transform 0.8s cubic-bezier(0.34,1.56,0.64,1)',
        }}>
          <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <CornerDeco position="tl" size={20} />
          <CornerDeco position="tr" size={20} />
          <CornerDeco position="bl" size={20} />
          <CornerDeco position="br" size={20} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '10px', letterSpacing: '0.28em', color: '#3b82f6', textTransform: 'uppercase', marginBottom: '18px', fontFamily: "'Share Tech Mono', monospace" }}>// Open Transmission</div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1.1, marginBottom: '16px' }}>
              <span style={{ color: '#f1f5f9', display: 'block' }}>INITIATE NEW</span><span className="neon-blue" style={{ color: '#3b82f6', display: 'block' }}>CONVERGENCE</span>
            </h2>
            <p style={{ fontSize: '13px', color: '#475569', lineHeight: 1.85, maxWidth: '420px' }}>Have a protocol concept? A new technical roadmap? Propose an event and lead the CPBYTE community into the next era of development.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', alignItems: 'flex-start' }}>
            <button className="btn-primary" style={{ background: 'transparent', color: '#3b82f6', border: '2px solid #3b82f6', padding: '14px 34px', fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', borderRadius: '4px', cursor: 'pointer', whiteSpace: 'nowrap' }}
              onMouseEnter={e => { e.target.style.background = '#3b82f6'; e.target.style.color = '#fff' }} onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = '#3b82f6' }}>PROPOSE AN EVENT</button>
            <button style={{ background: 'none', border: 'none', fontSize: '11px', letterSpacing: '0.15em', color: '#334155', cursor: 'pointer', textTransform: 'uppercase', fontWeight: 600, transition: 'color 0.2s', fontFamily: "'Share Tech Mono', monospace" }}
              onMouseEnter={e => e.target.style.color = '#64748b'} onMouseLeave={e => e.target.style.color = '#334155'}>LEARN ABOUT CPBYTE →</button>
          </div>
        </div>
      </section>
    </div>
  )
}
