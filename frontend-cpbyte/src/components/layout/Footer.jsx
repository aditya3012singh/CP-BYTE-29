function Footer() {
  return (
    <footer style={{
      background: '#04080f',
      borderTop: '1px solid rgba(30,41,59,0.8)',
      padding: '32px 40px',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '24px',
      }}>
        {/* Brand */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
            <span style={{ fontSize: '16px', fontWeight: 900, color: '#f1f5f9' }}>CP</span>
            <span style={{ fontSize: '16px', fontWeight: 900, color: '#3b82f6' }}>BYTE</span>
            <span style={{ fontSize: '16px', fontWeight: 900, color: '#64748b', letterSpacing: '0.1em', marginLeft: '4px' }}>KINETIC</span>
          </div>
          <p style={{ fontSize: '10px', color: '#334155', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            © 2026 CPBYTE KINETIC ARMOR. ALL SYSTEMS OPERATIONAL.
          </p>
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '28px' }}>
          {['PRIVACY PROTOCOL', 'INTERNAL WIKI', 'GITHUB', 'DISCLOSE'].map((link) => (
            <button
              key={link}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '10px',
                letterSpacing: '0.15em',
                color: '#475569',
                cursor: 'pointer',
                textTransform: 'uppercase',
                fontWeight: 600,
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = '#94a3b8'}
              onMouseLeave={e => e.target.style.color = '#475569'}
            >
              {link}
            </button>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
