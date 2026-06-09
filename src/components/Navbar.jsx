import React, { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 100,
      padding: '0 24px',
      height: '64px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: scrolled ? 'rgba(8,8,8,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(201,168,76,0.15)' : '1px solid transparent',
      transition: 'all 0.3s ease',
    }}>
      {/* Logo */}
      <div style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        fontSize: '18px',
        letterSpacing: '0.04em',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}>
        <BoxIcon />
        <span>PANINI<span style={{ color: 'var(--gold)' }}>BOX</span></span>
      </div>

      {/* CTA */}
      <a
        href="#contact"
        className="btn btn-primary"
        style={{ padding: '10px 20px', fontSize: '13px' }}
      >
        Nous contacter
      </a>
    </nav>
  )
}

function BoxIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="8" width="18" height="12" rx="1.5" stroke="#C9A84C" strokeWidth="1.5"/>
      <rect x="5" y="5" width="12" height="4" rx="1" stroke="#C9A84C" strokeWidth="1.5"/>
      <line x1="2" y1="14" x2="20" y2="14" stroke="#C9A84C" strokeWidth="1" strokeOpacity="0.4"/>
    </svg>
  )
}
