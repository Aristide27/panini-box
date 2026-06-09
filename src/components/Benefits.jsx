import React from 'react'

const benefits = [
  {
    title: 'Protection maximale',
    text: 'Coque rigide 3D. Tes stickers restent parfaits, même au fond d\'un sac.',
  },
  {
    title: 'Format poche',
    text: 'Aussi fine qu\'un portefeuille. Elle va partout avec toi.',
  },
  {
    title: 'Look collector',
    text: 'Logo gravé en relief. L\'objet dit autant que ta collection.',
  },
  {
    title: 'Échanges sereins',
    text: 'Présente tes doubles proprement. Les autres collectionneurs remarquent la différence.',
  },
]

export default function Benefits() {
  return (
    <section style={{ background: 'var(--black-mid)', paddingTop: '0', paddingBottom: '0' }}>
      <div style={{
        borderTop: '1px solid rgba(201,168,76,0.12)',
        borderBottom: '1px solid rgba(201,168,76,0.12)',
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          }}>
            {benefits.map(({ title, text }, i) => (
              <div key={title} style={{
                padding: '48px 24px',
                borderRight: i < benefits.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}>
                <div style={{
                  width: '24px',
                  height: '2px',
                  background: 'var(--gold)',
                  opacity: 0.6,
                }} />
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '17px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                }}>{title}</h3>
                <p style={{ fontSize: '14px', color: 'rgba(245,242,236,0.5)', lineHeight: 1.65 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
