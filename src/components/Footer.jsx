import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{
      background: 'var(--black-mid)',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '40px 0',
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
        }}>
          {/* Brand */}
          <div style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 900,
            fontSize: '16px',
            letterSpacing: '0.04em',
          }}>
            PANINI<span style={{ color: 'var(--gold)' }}>BOX</span>
            <span style={{ color: 'var(--grey)', fontWeight: 300, fontSize: '12px', marginLeft: '12px' }}>
              Coupe du Monde 2026
            </span>
          </div>

          {/* Nav */}
          <nav style={{ display: 'flex', gap: '24px' }}>
            {[
              { label: 'Concept', href: '#concept' },
              { label: 'Produit', href: '#produit' },
              { label: 'Contact', href: '#contact' },
            ].map(({ label, href }) => (
              <a key={label} href={href} style={{
                fontFamily: 'var(--font-display)',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--grey)',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--gold)'}
              onMouseLeave={e => e.target.style.color = 'var(--grey)'}
              >{label}</a>
            ))}
          </nav>

          {/* Copyright */}
          <div style={{ fontSize: '12px', color: 'var(--grey-light)', letterSpacing: '0.05em' }}>
            © {year} PaniniBox — Projet collector indépendant
          </div>
        </div>

        <div style={{
          marginTop: '24px',
          paddingTop: '24px',
          borderTop: '1px solid rgba(255,255,255,0.04)',
          fontSize: '11px',
          color: 'rgba(136,136,128,0.5)',
          textAlign: 'center',
        }}>
          Ce site ne propose aucune vente en ligne. Aucune transaction ne sera effectuée via ce site. 
          Produit artisanal non affilié à FIFA, Panini ou toute organisation officielle.
        </div>
      </div>
    </footer>
  )
}
