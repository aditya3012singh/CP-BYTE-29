export function TagBadge({ label, color }) {
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

export function CornerDeco({ position = 'tl', size = 16 }) {
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

export function GlitchWord({ text, color = '#f1f5f9', fontSize }) {
  return (
    <span className="hero-word" style={{
      color,
      fontSize: fontSize || 'inherit',
    }}>
      {text}
    </span>
  )
}

export function StatusChip({ status }) {
  const cfg = {
    live:      { label: 'LIVE',      bg: 'rgba(34,197,94,0.12)',  border: '#22c55e', color: '#22c55e', dot: true },
    upcoming:  { label: 'UPCOMING', bg: 'rgba(59,130,246,0.12)', border: '#3b82f6', color: '#3b82f6', dot: false },
    completed: { label: 'COMPLETED',bg: 'rgba(100,116,139,0.12)',border: '#475569', color: '#64748b', dot: false },
  }[status] || { label: 'UNKNOWN', bg: 'rgba(100,116,139,0.12)', border: '#475569', color: '#64748b', dot: false }
  
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', background: cfg.bg, border: `1px solid ${cfg.border}`, color: cfg.color, padding: '3px 9px', borderRadius: '2px', fontSize: '9px', fontWeight: 700, letterSpacing: '0.12em' }}>
      {cfg.dot && <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#22c55e', animation: 'dotPulse 2s infinite' }} />}
      {cfg.label}
    </span>
  )
}
