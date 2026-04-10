import { useState } from 'react'

const NAV_LINKS = ['EVENTS', 'RESOURCES', 'ROADMAPS', 'GALLERY']

function Navbar() {
  const [active, setActive] = useState('EVENTS')
  const [search, setSearch] = useState('')

  return (
    <header style={{
      background: 'rgba(4,8,15,0.97)',
      borderBottom: '1px solid rgba(30,41,59,0.8)',
      backdropFilter: 'blur(12px)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 40px',
        display: 'flex',
        alignItems: 'center',
        gap: '32px',
        height: '56px',
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0', flexShrink: 0 }}>
          <span style={{ fontSize: '18px', fontWeight: 900, letterSpacing: '0.05em', color: '#f1f5f9' }}>CP</span>
          <span style={{ fontSize: '18px', fontWeight: 900, letterSpacing: '0.05em', color: '#3b82f6' }}>BYTE</span>
        </div>

        {/* Nav links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => setActive(link)}
              style={{
                background: active === link ? '#3b82f6' : 'transparent',
                color: active === link ? '#fff' : '#64748b',
                border: 'none',
                padding: '6px 14px',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.12em',
                borderRadius: '3px',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { if (active !== link) e.target.style.color = '#94a3b8' }}
              onMouseLeave={e => { if (active !== link) e.target.style.color = '#64748b' }}
            >
              {link}
            </button>
          ))}
        </nav>

        {/* Spacer */}
        <div style={{ flex: 1 }} />

        {/* Search */}
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <span style={{ position: 'absolute', left: '10px', color: '#475569', fontSize: '12px' }}>⌕</span>
          <input
            type="text"
            placeholder="SEARCH INTEL..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              background: 'rgba(15,23,42,0.8)',
              border: '1px solid rgba(51,65,85,0.8)',
              borderRadius: '4px',
              padding: '7px 12px 7px 28px',
              fontSize: '10px',
              letterSpacing: '0.1em',
              color: '#94a3b8',
              outline: 'none',
              width: '160px',
              transition: 'border-color 0.2s',
            }}
            onFocus={e => e.target.style.borderColor = '#3b82f6'}
            onBlur={e => e.target.style.borderColor = 'rgba(51,65,85,0.8)'}
          />
        </div>

        {/* Bell */}
        <button style={{
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          color: '#64748b',
          fontSize: '16px',
          position: 'relative',
          padding: '4px',
          lineHeight: 1,
        }}>
          🔔
          <span style={{
            position: 'absolute',
            top: '-2px',
            right: '-2px',
            width: '8px',
            height: '8px',
            background: '#3b82f6',
            borderRadius: '50%',
            fontSize: '8px',
          }} />
        </button>

        {/* Contact */}
        <button style={{
          background: 'transparent',
          color: '#3b82f6',
          border: '1px solid #3b82f6',
          padding: '7px 18px',
          fontSize: '11px',
          fontWeight: 700,
          letterSpacing: '0.12em',
          borderRadius: '4px',
          cursor: 'pointer',
          transition: 'all 0.2s',
          textTransform: 'uppercase',
          flexShrink: 0,
        }}
          onMouseEnter={e => { e.target.style.background = '#3b82f6'; e.target.style.color = '#fff' }}
          onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = '#3b82f6' }}
        >
          CONTACT
        </button>
      </div>
    </header>
  )
}

export default Navbar
