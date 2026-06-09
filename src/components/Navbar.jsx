import React from 'react'

export default function Navbar() {
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: '80px',
        background: 'rgba(8,8,8,1)',
        borderBottom: '1px solid rgba(201,168,76,0.15)',
      }}
    >
      {/* Logo + titre centrés */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          fontFamily: 'var(--font-display)',
          fontWeight: 900,
          fontSize: '26px',
          letterSpacing: '0.04em',
        }}
      >
        <img
          src="/logo_black_no_bg.png"
          alt="logo"
          style={{
            height: '36px',
            width: 'auto',
            objectFit: 'contain',
          }}
        />

        <span>
          PANINI<span style={{ color: 'var(--gold)' }}>BOX</span>
        </span>
      </div>

      {/* Bouton à droite */}
      <div
        style={{
          position: 'absolute',
          right: '32px',
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      >
        <a
          href="#commander"
          className="btn btn-primary"
          style={{
            padding: '10px 24px',
            fontSize: '14px',
          }}
        >
          Commander
        </a>
      </div>
    </nav>
  )
}