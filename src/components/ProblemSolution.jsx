import React from 'react'

const problems = [
  {
    title: 'Les bords s\'abîment',
    text: 'Dans une poche ou un sac, les coins des stickers se froissent, se plient, se déchirent. Un double abîmé, c\'est un échange raté.',
  },
  {
    title: 'Difficile à gérer',
    text: 'Tenir 30 doubles en vrac dans la main pendant un échange, c\'est le chaos. On perd des cartes, on en corne d\'autres.',
  },
]

const solutions = [
  {
    title: 'Protection totale',
    text: 'La boîte enveloppe tes doubles dans une coque rigide imprimée en 3D. Fini les coups, les plis et les griffures.',
  },
  {
    title: 'Format poche',
    text: 'Fine, légère, discrète. Elle glisse dans une poche de jean sans la faire bomber. Tu l\'as toujours sur toi.',
  },
  {
    title: 'Look collector',
    text: 'Avec son logo inspiré de la Coupe du Monde 2026, elle donne une image sérieuse et passionnée de ton collection.',
  },
]

export default function ProblemSolution() {
  return (
    <section id="concept" style={{ background: 'var(--black-mid)', padding: '48px 0' }}>
      <div className="container">

        {/* Problem block */}
        <div style={{ marginBottom: '0px' }}>
          <div className="section-label">Le problème</div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 900,
            fontSize: 'clamp(36px, 5vw, 60px)',
            textTransform: 'uppercase',
            lineHeight: 1,
            marginBottom: '48px',
          }}>
            Tes doubles méritent<br />
            <span style={{ color: 'var(--grey)' }}>mieux que ta poche.</span>
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 400px',
            gap: '48px',
            alignItems: 'start',
          }}>

            {/* Colonne gauche : les 2 cartes */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '24px',
            }}>
              {problems.map(({ title, text }) => (
                <div key={title} style={{
                  background: 'var(--black)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '28px',
                }}>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '18px',
                    textTransform: 'uppercase',
                    marginBottom: '10px',
                    letterSpacing: '0.03em',
                  }}>{title}</h3>
                  <p style={{ color: 'rgba(245,242,236,0.55)', fontSize: '15px', lineHeight: 1.65 }}>{text}</p>
                </div>
              ))}
            </div>

            {/* Colonne droite : image */}
            <img
              src="/canvas boite.png"
              alt="PaniniBox"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                borderRadius: 'var(--radius-lg)',
                marginTop: '-150px',
              }}
            />

          </div>
        </div>

        {/* Arrow transition */}
        <div style={{
          textAlign: 'center',
          marginBottom: '32px',
          color: 'var(--gold)',
          fontSize: '32px',
          opacity: 0.5,
        }}>↓</div>

        {/* Solution block */}
        <div>
          <div className="section-label">La solution</div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 900,
            fontSize: 'clamp(36px, 5vw, 60px)',
            textTransform: 'uppercase',
            lineHeight: 1,
            marginBottom: '48px',
          }}>
            La PaniniBox.<br />
            <span style={{ color: 'var(--gold)' }}>Simple. Efficace. Élégante.</span>
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
          }}>
            {solutions.map(({ title, text }) => (
              <div key={title} style={{
                background: 'var(--black)',
                border: '1px solid rgba(201,168,76,0.15)',
                borderRadius: 'var(--radius-lg)',
                padding: '28px',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0, right: 0,
                  width: '40px', height: '40px',
                  background: 'var(--gold)',
                  opacity: 0.08,
                  clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
                }} />
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '18px',
                  textTransform: 'uppercase',
                  marginBottom: '10px',
                  letterSpacing: '0.03em',
                  color: 'var(--gold-light)',
                }}>{title}</h3>
                <p style={{ color: 'rgba(245,242,236,0.6)', fontSize: '15px', lineHeight: 1.65 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
