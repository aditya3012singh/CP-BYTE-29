import { useState } from 'react'
import { useAnimatedCounter, useCountdown, useReveal } from '../hooks/useCyberpunkHooks.js'
import { CornerDeco, TagBadge, StatusChip } from './Shared.jsx'

export function StatCards() {
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
        <div className="stat-card" style={cardStyle(0)}>
          <CornerDeco position="tl" size={12} />
          <CornerDeco position="br" size={12} />
          <div style={{ fontSize: '9px', letterSpacing: '0.22em', color: '#475569', marginBottom: '10px', textTransform: 'uppercase', fontFamily: "'Share Tech Mono', monospace" }}>Active Ops</div>
          <div style={{ fontSize: '38px', fontWeight: 900, color: '#3b82f6', fontFamily: "'Share Tech Mono', monospace", lineHeight: 1, transition: 'all 0.05s' }}>
            {String(activeOps).padStart(2, '0')}
          </div>
          <div style={{ position: 'absolute', bottom: 0, left: 0, width: visible ? '100%' : '0%', height: '2px', background: 'linear-gradient(90deg, #3b82f6, transparent)', transition: 'width 1.2s ease 0.5s' }} />
        </div>
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
      <div className="stat-card" style={cardStyle(240)}>
        <CornerDeco position="tl" size={12} />
        <CornerDeco position="br" size={12} />
        <div style={{ fontSize: '9px', letterSpacing: '0.22em', color: '#475569', marginBottom: '10px', textTransform: 'uppercase', fontFamily: "'Share Tech Mono', monospace" }}>Completed</div>
        <div style={{ fontSize: '38px', fontWeight: 900, color: '#f1f5f9', fontFamily: "'Share Tech Mono', monospace", lineHeight: 1 }}>{completed}</div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: visible ? '100%' : '0%', height: '2px', background: 'linear-gradient(90deg, #1e3a8a, transparent)', transition: 'width 1.6s ease 0.9s' }} />
      </div>
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

export function FeaturedEvent({ event }) {
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

      <div style={{ position: 'relative', width: '52%', flexShrink: 0 }}>
        <img src={event.image} alt={event.title} style={{
          width: '100%', height: '100%', objectFit: 'cover', display: 'block',
          transition: 'transform 0.6s ease',
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent 55%, #060d18 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(6,13,24,0.6) 0%, transparent 50%)' }} />

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

        <div style={{
          position: 'absolute', top: '14px', right: '14px',
          fontSize: '11px', fontFamily: "'Share Tech Mono', monospace", color: '#94a3b8',
          background: 'rgba(0,0,0,0.65)', padding: '4px 10px', borderRadius: '3px',
          backdropFilter: 'blur(6px)',
        }}>⏱ {cd}</div>
      </div>

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

export function EventCard({ event, delay = 0 }) {
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

export function ArchiveCard({ item, delay = 0 }) {
  const [ref, visible] = useReveal()
  return (
    <div ref={ref} className="archive-card" style={{
      borderRadius: '6px', overflow: 'hidden', position: 'relative',
      height: '200px', cursor: 'pointer',
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(24px)',
      transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
    }}>
      {item.image ? (
        <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      ) : (
        <div style={{ width: '100%', height: '100%', background: item.gradient }} />
      )}
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

export function SectionHeader({ label, count, accent, icon, sublabel }) {
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

export function DetailPanel({ event, onClose }) {
  const isCompleted = event?.eventStatus === 'completed'
  const isLive = event?.eventStatus === 'live'
  const accent = isLive ? '#22c55e' : isCompleted ? '#475569' : '#3b82f6'
  return (
    <>
      <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)', zIndex: 200, transition: 'opacity 0.3s' }} />
      <div style={{
        position: 'fixed', top: 0, right: 0, bottom: 0, width: '460px', maxWidth: '95vw',
        background: '#080f1c', borderLeft: `1px solid ${accent}40`,
        zIndex: 201, overflowY: 'auto', display: 'flex', flexDirection: 'column',
        animation: 'slideLeft 0.35s cubic-bezier(0.34,1.56,0.64,1)',
      }}>
        <div style={{ position: 'relative', height: '220px', flexShrink: 0 }}>
          <img src={event.image} alt={event.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, #080f1c 0%, rgba(8,15,28,0.4) 60%, transparent 100%)` }} />
          <div style={{ position: 'absolute', inset: 0, borderLeft: `3px solid ${accent}` }} />
          <button onClick={onClose} style={{ position: 'absolute', top: '14px', right: '14px', background: 'rgba(0,0,0,0.7)', border: '1px solid rgba(255,255,255,0.1)', color: '#94a3b8', width: '32px', height: '32px', borderRadius: '4px', cursor: 'pointer', fontSize: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✕</button>
          <div style={{ position: 'absolute', bottom: '16px', left: '20px' }}>
            <StatusChip status={event.eventStatus} />
          </div>
        </div>
        <div style={{ padding: '24px 28px', flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '10px' }}>
              {event.tags.map((t, i) => <TagBadge key={t} label={t} color={event.tagColors[i]} />)}
            </div>
            <h2 style={{ fontSize: '22px', fontWeight: 900, letterSpacing: '0.06em', color: '#f1f5f9', marginBottom: '10px' }}>{event.title}</h2>
            <p style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.8 }}>{event.description}</p>
          </div>
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

export function EventRow({ event, onSelect, delay = 0 }) {
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
