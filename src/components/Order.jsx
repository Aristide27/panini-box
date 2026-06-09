import React from 'react'

const VINTED_URL = import.meta.env.VITE_VINTED_URL || 'https://www.vinted.fr'
const LBC_URL = import.meta.env.VITE_LBC_URL || 'https://www.leboncoin.fr'

export default function Order() {
  return (
    <section id="commander" style={{ background: 'var(--black-mid)' }}>
      <div className="container">

        <div className="section-label">Commander</div>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 900,
          fontSize: 'clamp(36px, 5vw, 60px)',
          textTransform: 'uppercase',
          lineHeight: 1,
          marginBottom: '16px',
        }}>
          Commandez<br />
          <span style={{ color: 'var(--gold)' }}>en toute sécurité.</span>
        </h2>

        <p style={{
          fontSize: '16px',
          color: 'rgba(245,242,236,0.55)',
          maxWidth: '520px',
          lineHeight: 1.75,
          marginBottom: '56px',
        }}>
          Pas de boutique en ligne compliquée. Retrouvez notre annonce directement sur Vinted ou Leboncoin — des plateformes sécurisées que vous connaissez déjà.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          maxWidth: '700px',
        }}>

          {/* Vinted */}
          <a
            href={VINTED_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              background: 'var(--black)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 'var(--radius-lg)',
              padding: '28px 32px',
              transition: 'border-color 0.2s, transform 0.2s',
              cursor: 'pointer',
              textDecoration: 'none',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#09B1BA'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <VintedLogo />
            <div>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '18px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: '#09B1BA',
                marginBottom: '4px',
              }}>Vinted</div>
              <div style={{ fontSize: '13px', color: 'var(--grey)' }}>Voir l'annonce</div>
            </div>
            <ArrowIcon style={{ marginLeft: 'auto', color: 'var(--grey-light)' }} />
          </a>

          {/* Leboncoin */}
          <a
            href={LBC_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              background: 'var(--black)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 'var(--radius-lg)',
              padding: '28px 32px',
              transition: 'border-color 0.2s, transform 0.2s',
              cursor: 'pointer',
              textDecoration: 'none',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#F56B2A'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <LbcLogo />
            <div>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '18px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: '#F56B2A',
                marginBottom: '4px',
              }}>Leboncoin</div>
              <div style={{ fontSize: '13px', color: 'var(--grey)' }}>Voir l'annonce</div>
            </div>
            <ArrowIcon style={{ marginLeft: 'auto', color: 'var(--grey-light)' }} />
          </a>

        </div>

        <p style={{
          marginTop: '28px',
          fontSize: '13px',
          color: 'var(--grey-light)',
          letterSpacing: '0.03em',
        }}>
          Une question avant de commander ? Contactez-nous via le formulaire ou WhatsApp ci-dessous.
        </p>

      </div>
    </section>
  )
}

function VintedLogo() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="36" height="36" rx="8" fill="#09B1BA" opacity="0.15"/>
      <text x="18" y="24" textAnchor="middle" fontFamily="serif" fontWeight="bold" fontSize="18" fill="#09B1BA">V</text>
    </svg>
  )
}

function LbcLogo() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="36" height="36" rx="8" fill="#F56B2A" opacity="0.15"/>
      <circle cx="18" cy="18" r="7" fill="none" stroke="#F56B2A" strokeWidth="2.5"/>
      <circle cx="18" cy="18" r="3" fill="#F56B2A"/>
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
    </svg>
  )
}
