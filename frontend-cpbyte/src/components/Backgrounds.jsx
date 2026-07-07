export function GridBackground() {
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

export function ScanlineOverlay() {
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

export function MovingHighlights() {
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
